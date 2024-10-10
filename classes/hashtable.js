class HashTable {
    constructor(){
        this.table = {};
    }

    // Sets a new key-value pair to the hashtable
    set(key, value){
        this.table[key] = value;
    }

    // returns a value based on a key present on the hashtable
    get(key){
        return this.table[key];
    }

    // Deletes a value based on a key present on the hashtable
    remove(key){
        return delete this.table[key];
    }

    // Returns the hashmap a strings using JavaScript Object Notation
    toString(){
        return JSON.stringify(this.table);
    }
}

module.exports = HashTable