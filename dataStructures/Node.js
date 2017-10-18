class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class DoublyNode extends Node {
    constructor(data) {
        super(data);
        this.previous = null;
    }
}

export {
    Node,
    DoublyNode
};