// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const node = new SinglyLinkedNode(val)
        if(this.head){
            node.next = this.head;
            this.head = node;
        } else {
            this.head = node;
        }
        this.length++;
        return this;
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;

            this.length++;
            return this;

        } else {

            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
            this.length++;

            return this;
        }

        // Write your hypothesis on the time complexity of this method here
        // addToHead: O(1)
        // addToTail: O(n)

    }

    removeFromHead() {
    let head = this.head;
        if(this.head){
            this.head = this.head.next;
            this.length--;
        } else {
            return undefined;
        }
        return head;
    }

    removeFromTail() {

        if(this.length === 1){
            let node = this.head;
            this.head = null;
            this.length--;
            return node;
        }
        if (!this.head) {
            return undefined;

        } else {

            let curr = this.head;
            while (curr.next.next) {
                curr = curr.next;
            }
            let node = curr.next;
            curr.next = null;
            this.length--;

            return node;
        }
    }

    peekAtHead() {
        if(this.head){
            return this.head.value;
        }
        return undefined;
    }

    print() {
        if(this.head){
            let curr = this.head;
            while(curr.next){
                console.log(curr.value);
                curr = curr.next
            }
            console.log(curr.value);
        }
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
