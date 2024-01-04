// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        const node = new DoublyLinkedNode(val);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.length++;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
            this.length++;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        let head = this.head;
        if (this.length === 1) {
            this.head = null;
            this.length--;
            return head.value;
        } else if (this.length >= 2) {
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return head.value;
        } else {
            return undefined;
        }
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        let tail = this.tail;
        if (this.length === 1) {
            this.tail = null;
            this.length--;
            return tail.value;
        } else if (this.length >= 2) {
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
            return tail.value;
        } else {
            return undefined;
        }

        /* let tail = this.tail;
        if (this.length === 0) {
            return undefined;
        }
        else if (this.length >= 2) {
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
        return tail.value;
        } */

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        if (this.head) {
            return this.head.value;
        } else {
            return undefined;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        if (this.length === 0) {
            return undefined;
        }
       return this.tail.value;

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
