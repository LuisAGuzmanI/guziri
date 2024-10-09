class HashTable {
    constructor(){
        this.table = {};
    }

    set(key, value){
        this.table[key] = value;
    }

    get(key){
        return this.table[key];
    }

    remove(key){
        return delete this.table[key];
    }

    toString(){
        return JSON.stringify(this.table);
    }
}

module.exports = HashTable