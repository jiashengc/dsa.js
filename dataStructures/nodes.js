/** 
 * Class representing a Node  
 */
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