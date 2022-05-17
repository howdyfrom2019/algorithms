class Node {
    constructor(value = "") {
        this.value = value;
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let currentNode = this.root;

        for (let letter of word) {
            if (!currentNode.children.has(letter)) {
                currentNode.children.set(letter, new Node(currentNode.value + letter));
            }
            currentNode = currentNode.children.get(letter);
        }
    }

    has(word) {
        let currentNode = this.root;

        for (let letter of word) {
            if (!currentNode.children.has(letter)) {
                return false;
            }
            currentNode = currentNode.children.get(letter);
        }
        return true;
    }
}