class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
    }

    find (value) {
        let currentNode = this.head;
        while (currentNode.value !== value) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    append (newValue) {
        const newNode = new Node(newValue);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail = newNode;
            this.tail.next = newNode;
        }
    }

    insert(node, newValue) {
        const newNode = new Node(newValue);
        newNode.next = node.next;
        node.next = newNode.next;
    }

    remove(value) {
        let prevNode = this.head;
        while (prevNode.next.value !== value) {
            prevNode = prevNode.next;
        }
        if (prevNode.next !== null) {
            prevNode.next = prevNode.next.next;
        }
    }

    display() {
        let currentNode = this.head;
        let displayString= "[";
        while (currentNode !== null) {
            displayString += `${currentNode.value},`;
            currentNode = currentNode.next;
        }
        displayString = displayString.substr(0, displayString.length - 2);
        displayString += "]";
        console.log(displayString);
    }
}