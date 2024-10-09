const HashTable = require("../classes/hashtable")

describe('HashTable', () => {
    let hashtable;

    beforeEach(() => {
        hashtable = new HashTable();
    });

    test('should add new key-value pairs to hashtable', () => {
        hashtable.set("key_1", 1);
        expect(hashtable.toString()).toBe('{"key_1":1}');
        hashtable.set("key_2", 2);
        expect(hashtable.toString()).toBe('{"key_1":1,"key_2":2}');
    });

    test('should get values based on pairs', () => {
        hashtable.set("key_1", 1);
        expect(hashtable.get("key_1")).toBe(1);
    });

    test('should remove values', () => {
        hashtable.set("key_1", 1);
        hashtable.remove("key_1");
        expect(hashtable.get("key_1")).toBe(undefined);
    });
});