const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        const node = new SinglyLinkedNode(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;
        return this.length;
        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        let head = this.head;
        if (!this.head) {
            return null;
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else if (this.length >= 2) {
            this.head = this.head.next;
        }
        this.length -= 1;
        return head.value;
        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
