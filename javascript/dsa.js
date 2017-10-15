function SinglyNode(data) {
    this.data = data;
    this.next = null;
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
     * @return {SinglyNode} node - the node removed
     */
    this.remove = function(position) {
        let currentNode = this.head,
            count = 0,
            message = {failure: 'Failure: Node not found in this list'},
            beforeNodeToDelete = null,
            nodeToDelete = null,
            deletedNode = null;

        // GUARD: Invalid position
        if (length === 0 || position < 1 || position > length) {
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
        if (length === 0 || position < 1 || position > length) {
            throw new Error(message.failure);
        }

        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;
    }
}
