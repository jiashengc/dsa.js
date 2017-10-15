function SinglyNode(data) {
    this.data = data;
    this.next = null;
}

function DoublyNode(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
}

function SinglyList() {
    this._length = 0;
    this.head = null;
    
    /**
     * Add a value to the end of node
     * 
     * @method add
     * @param {Number} value
     * @return {SinglyNode} node - the new node created
     */
    this.add = function(value) {
        let node = new SinglyNode(value),
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
     * @return {SinglyNode} deleted Node
     */
    this.remove = function(position) {
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
            deletedNode = currentNode;
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
        deletedNode = nodeToDelete;
        nodeToDelete = null;
        this._length--;

        return deletedNode;
    }

    /**
     * Search for a node at a position
     * 
     * @param {Integer} position
     * @return {SinglyNode} node - the node at the position
     */
    this.searchNodeAt = function(position) {
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

function DoublyList() {
    this._length = 0;
    this.head = null;
    this.tail = null;

    /**
     * Add a value to the end of the list
     * 
     * @param {Number} value
     * @return {DoublyNode} node - node added
     */
    this.add = function(value) {
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
     * @param {Integer} position
     * @return {DoublyNode} deleted node
     */
    this.remove = function(position) {
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

            deletedNode = nodeToDelete;
            this.length--;
            return deletedNode;
        }

        // GUARD: Tail to be deleted
        if (position === this._length) {
            nodeToDelete = this.tail;
            this.tail = this.tail.previous;
            this.tail.next = null;

            deletedNode = nodeToDelete;
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
        deletedNode = nodeToDelete;
        
        this.length--;

        return deletedNode;
    }

    /**
     * Search for a node at position
     */
    this.searchNodeAt = function(position) {
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
