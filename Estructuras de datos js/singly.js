
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    
}

class MySinglyLinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(){
        
    }

}

let myLinkedList = new MySinglyLinkedList(1);