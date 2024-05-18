export function save (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};

export function load (key) {
    try {
        const value = localStorage.getItem(key);
        return JSON.parse(value);
    } catch {
        return null;
    }
};


/**
 * Removes an item from localStorage.
 * 
 * This function takes a key as a parameter and removes the corresponding item from localStorage.
 * 
 * @param {string} key The key of the item to be removed from localStorage.
 * @returns {void} This function does not return anything.
 * @example
 * ```js
 * // Remove an item from localStorage
 * const key = "profile";
 * remove(key);
 * // The item with the key "profile" will be removed from localStorage.
 * ```
 */
export function remove (key) {
    localStorage.removeItem(key);
};