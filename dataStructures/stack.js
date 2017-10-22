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