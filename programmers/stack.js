class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.volume = 0;
    }

    push(value) {
        const node = new Node(value);
        node.next = this.top;
        this.top = node;
        this.volume += 1;
    }

    pop() {
        const value = this.top.value;
        this.top = this.top.next;
        this.volume -= 1;
        return value;
    }

    size() {
        return this.volume;
    }
}