let imported = document.createElement('script');
imported.src = 'dataStructures/nodes.js';
document.head.appendChild(imported);

/** 
 * Class representing a List 
 */
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