class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    hashMethode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value) {
        const address = this.hashMethode(key);
        if(!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key) {
        const address = this.hashMethode(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
    getAllKeys() {
        const keys = [];
        for(let i = 0; i < this.data.length; i++){
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++){
                    keys.push(this.data[i][j][0]);
                }
            }
        }
        return keys;
    }
    remove(key) {
        const address = this.hashMethode(key);
        const currentBucket = this.data[address];
        if(currentBucket){
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    const deletedValue = this.data[address][i];
                    this.data[address].splice(i, 1);
                    return deletedValue;
                    }
                }
            }
            return undefined;
            } 
}

const myHashTable = new HashTable(50);

set("Alfredo", 1989);
set("Alberto", 1990);
set("Ana", 2000);



