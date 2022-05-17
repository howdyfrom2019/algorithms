class Queue {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    peek() {
        return this.queue[this.front];
    }

    enqueue(value) {
        this.queue[this.rear] = value;
        this.rear++;
    }

    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        return value;
    }

    size() {
        return this.rear - this.front;
    }
}