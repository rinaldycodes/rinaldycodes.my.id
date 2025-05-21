class MyFunctions {
    generateUUID() {
        // Generate a pseudo-random UUID-like string (not fully UUID standard, but sufficiently unique)
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0; // Random number between 0-15
            const v = c === 'x' ? r : (r & 0x3 | 0x8); // Ensures the 'y' position is between 8-11
            return v.toString(16);
        });
    }
}

export default new MyFunctions();