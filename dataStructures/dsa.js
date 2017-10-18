/** Class representing a Node */
class Node {

    /**
     * Creates a Node
     * @param {Object} data 
     */
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/** 
 * Class representing a DoublyNode
 * @extends Node
 */
class DoublyNode extends Node {

    /**
     * Creates a Doubly Node
     * @param {Object} data 
     */
    constructor(data) {
        super(data);
        this.previous = null;
    }
}

/** Class representing a List */
class List {

    /**
     * Creates a List
     */
    constructor() {
        this._length = 0;
    }
}

/**
 * Class representing a Singly LinkedList
 * @extends List
 */
class SinglyList extends List {

    /**
     * Creates a SinglyList
     */
    constructor() {
        this.head = null;
    }    
    
    /**
     * Add a value to the end of node
     * 
     * @method add
     * @param {Object} value
     * @return {Node} node - the new node created
     */
    add(value) {
        let node = new Node(value),
            currentNode = this.head;
        
        // GUARD: If Empty List
        if (!currentNode) {
            this.head = node;
            this._length++; 
            return node;
        }
        
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        
        currentNode.next = node;
        
        this._length++;
        
        return node;
    }

    /**
     * Remove a node from the list 
     * 
     * @method remove
     * @param {Integer} position
     * @return {Object} deleted Node value
     */
    remove(position) {
        let currentNode = this.head,
            count = 0,
            message = {failure: 'Failure: Node not found in this list'},
            beforeNodeToDelete = null,
            nodeToDelete = null,
            deletedNode = null;

        // GUARD: Invalid position
        if (position < 1 || position > length) {
            throw new Error(message.failure);
        }

        // GUARD: Head to be deleted
        if (position === 1) {
            this.head = currentNode.next;
            deletedNode = currentNode.data;
            currentNode = null;
            this._length--;

            return deletedNode;
        }

        while (count < position) {
            beforeNodeToDelete = currentNode;
            nodeToDelete = currentNode.next;
            count++;
        }

        beforeNodeToDelete.next = nodeToDelete.next;
        deletedNode = nodeToDelete.data;
        nodeToDelete = null;
        this._length--;

        return deletedNode;
    }

    /**
     * Search for a node at a position
     * 
     * @method searchNodeAt
     * @param {Integer} position
     * @return {Node} node - the node at the position
     */
    searchNodeAt(position) {
        let currentNode = this.head,
            length = this._length;
            count = 1;
            message = {failure: 'Failure: Node not found in this list'};

        // GUARD: Invalid position
        if (position < 1 || position > length) {
            throw new Error(message.failure);
        }

        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }
}

/**
 * Class representing a Doubly LinkedList
 * @extends List
 */
class DoublyList extends List {

    /**
     * Creates a DoublyList
     */
    constructor() {
        this.head = null;
        this.tail = null;
    }  

    /**
     * Add a value to the end of the list
     * 
     * @method add
     * @param {Object} value
     * @return {DoublyNode} node - node added
     */
    add(value) {
        let node = new DoublyNode(value);

        if (this._length) {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }

        this._length++;

        return node;
    }

    /**
     * Remove node at a posititon
     * 
     * @method remove
     * @param {Integer} position
     * @return {Object} deleted Node value
     */
    remove(position) {
        let currentNode = this.head,
            length = this._length,
            count = 1,
            message = {failure: 'Failure: Node not found in this list'},
            beforeNodeToDelete = null,
            nodeToDelete = null,
            deletedNode = null;

        // GUARD: Invalid position 
        if (position < 1 || position > length) {
            throw new Error(message.failure);
        }
        
        // GUARD: Head to be deleted
        if (position === 1) {
            nodeToDelete = this.head;
            this.head = currentNode.next;

            if (!this.head) {
                this.head.previous = null;
            } else {
                this.nail = null;
            }

            deletedNode = nodeToDelete.data;
            nodeToDelete = null;
            this.length--;
            return deletedNode;
        }

        // GUARD: Tail to be deleted
        if (position === this._length) {
            nodeToDelete = this.tail;
            this.tail = this.tail.previous;
            this.tail.next = null;

            deletedNode = nodeToDelete.data;
            nodeToDelete = null;
            this.length--;
            return deletedNode;
        }

        while(count < position) {
            currentNode = currentNode.next;
            count++;
        }

        beforeNodeToDelete = currentNode.previous;
        nodeToDelete = currentNode;
        afterNodeToDelete = currentNode.next;

        beforeNodeToDelete.next = afterNodeToDelete;
        afterNodeToDelete.previous = beforeNodeToDelete;
        deletedNode = nodeToDelete.data;
        nodeToDelete = null;
        
        this.length--;

        return deletedNode;
    }

    /**
     * Search for a node at position
     * 
     * @method searchNodeAt
     * @param {Integer} position
     * @return {DoublyNode}
     */
    searchNodeAt(position) {
        let currentNode = this.head,
            length = this._length,
            count = 1;
            message = {failure: 'Failure: Node not found in this list'};

        // GUARD: Invalid position
        if (position < 1 || position > length) {
            throw new Error(message.failure);
        }

        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }
}

/** Class representing a Stack */
class Stack {

    /**
     * Creates a Stack
     */
    constructor() {
        this.top = null;
    }
    
    /**
     * Push to the top node
     * 
     * @method push
     * @param {Object} value
     * @return {Node} top node
     */
    push(value) {
        let newTop = new Node();
        newTop.data = value;
        newTop.next = this.top;
        this.top = newTop;

        return newTop;
    }

    /**
     * Pop the top node
     * 
     * @method pop
     * @return {Object} deleted node
     */
    pop() {
        let currentNode = this.top,
            deletedNode = null,
            message = {failure: 'Failure: There is nothing to pop'};

        // GUARD: Check if top is null
        if (!this.top) {
            throw new Error(message.failure);
        }

        deletedNode = currentNode.data;
        this.top = currentNode.next;
        currentNode = null;

        return deletedNode;
    }

}

/**
 * Class representing a Queue
 */
class Queue {

    /**
     * Creates a Queue
     */
    constructor() {
        this.first = null;
        this.last = null;
    }    

    /**
     * Enqueue node
     * 
     * @method enqueue
     * @param {Object} value
     */
    enqueue(value) {
        let back = null;

        if (!this.first) {
            back = new Node();
            first = back;
        } else {
            back.next = new Node(value);
            back = back.next;
        }
    }

    dequeue(value) {

    }

}

