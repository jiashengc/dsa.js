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
            if (!this.first) {
                this.last = new Node(value);
                this.first = newNode;
            } else {
                this.last.next = new Node(value);
                this.last = this.last.next;
            }
        }
    
        /**
         * @method dequeue
         * @param {Object} value 
         * @return {Object} data - the deleted data
         */
        dequeue(value) {
            if (!this.first) {
                return null;
            }
            let data = this.first.data;
            this.first = first.next;
            return data;
        }
    
        /**
         * @method peek
         * @return {Node} the first node
         */
        peek() {
            return this.first;
        }
    
    }