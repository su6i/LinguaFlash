const DB_NAME = 'linguaDB';
const DB_VERSION = 1;
const STORE_NAME = 'vocabulary';

export function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                const store = db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
                store.createIndex('level', 'level', { unique: false });
                store.createIndex('word_id', 'word_id', { unique: false });
                store.createIndex('is_valid', 'is_valid', { unique: false });
            }
        };

        request.onsuccess = (event) => resolve(event.target.result);
        request.onerror = (event) => reject(event.target.error);
    });
}

export async function populateDB(data) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readwrite');
        const store = transaction.objectStore(STORE_NAME);

        // Clear existing data to avoid duplicates on re-migration
        store.clear();

        data.forEach(item => {
            store.add(item);
        });

        transaction.oncomplete = () => resolve();
        transaction.onerror = (event) => reject(event.target.error);
    });
}

export async function getRandomWord(level, targetLang) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const index = store.index('level');

        const request = index.getAll(level);

        request.onsuccess = () => {
            const allItems = request.result;
            // Filter by language and validity
            // Note: Favorites (logic to be refined)
            const filtered = allItems.filter(item =>
                item.lang === targetLang &&
                (level === 'Favorites' || item.is_valid === 1)
            );

            if (filtered.length === 0) {
                resolve(null);
                return;
            }

            const randomItem = filtered[Math.floor(Math.random() * filtered.length)];
            resolve(randomItem);
        };

        request.onerror = (event) => reject(event.target.error);
    });
}

export async function getTranslation(word_id, lang) {
    const db = await initDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(STORE_NAME, 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const index = store.index('word_id');

        const request = index.getAll(word_id);

        request.onsuccess = () => {
            const allItems = request.result;
            const item = allItems.find(i => i.lang === lang);
            resolve(item || null);
        };

        request.onerror = (event) => reject(event.target.error);
    });
}

export async function isDBEmpty() {
    const db = await initDB();
    return new Promise((resolve) => {
        const transaction = db.transaction(STORE_NAME, 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const countRequest = store.count();
        countRequest.onsuccess = () => resolve(countRequest.result === 0);
    });
}
