class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    };
};
  
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    };
  
    // Add a new node to the end of the list
    append(value) {
        const newNode = new Node(value);
  
        if (!this.head) {
            // If the list is empty, the new node becomes both the head and the tail
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Otherwise, add the new node to the end and update the tail
            this.tail.nextNode = newNode;
            this.tail = newNode;
        };
    };

    // Add a new node to the start of the list
    prepend(value) {
        const newNode = new Node(value);
  
        if (!this.head) {
            // If the list is empty, the new node becomes both the head and the tail
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Otherwise, add the new node to the start and update the tail
            newNode.nextNode = this.head;
            this.head = newNode;
        };
    };

    // Print the total number of nodes in the list
    size() {
        let currentNode = this.head;
        let totalNumberOfNodes = 0;

        while (currentNode) {
            totalNumberOfNodes += 1;
            currentNode = currentNode.nextNode;
        }

        console.log("The total number of nodes in the list: " + totalNumberOfNodes);
    };

    // Print the first node in the list
    printHead() {
        let currentNode = this.head;

        if (currentNode) {
            console.log("Value of the first node: " + currentNode.value);
        } else {
            console.log("The linked list is empty.");
        };
    };

    // Print the last node in the list
    printTail() {
        let currentNode = this.tail;

        if (currentNode) {
            console.log("Value of the last node: " + currentNode.value);
        } else {
            console.log("The linked list is empty.");
        };
    };

    // Print the node at the given index
    at(index) {
        let currentNode = this.head;
        let currentIndex = 0;

        while (currentNode && currentIndex < index) {
            currentNode = currentNode.nextNode;
            currentIndex++;
        };

        if (currentNode) {
            console.log("The node at the given index: " + currentNode.value);
        } else {
            console.log("The node at the given index not found.");
        }
    };

    // Removes the last node from the list
    pop() {
        if (!this.head) {
            console.log("The linked list is already empty.");
            return;
        }
    
        if (!this.head.nextNode) {
            // If there's only one node, set head and tail to null
            this.head = null;
            this.tail = null;
            return;
        }
    
        let currentNode = this.head;
        let previousNode = null;
    
        while (currentNode.nextNode) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }
    
        // Remove the last node by updating the tail and disconnecting it
        previousNode.nextNode = null;
        this.tail = previousNode;
    };
  
    // Print the values of all nodes in the list
    print() {
        const values = [];
        let currentNode = this.head;
    
        while (currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.nextNode;
        }
    
        console.log(values.join(' -> '));
    };
};
  
// Example usage:
const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.print(); // Output: 1 -> 2 -> 3
linkedList.size(); // Output: 3
linkedList.printHead();
linkedList.printTail();
linkedList.at(1); // Output: 2

linkedList.pop();
linkedList.print(); // Output: 1 -> 2
linkedList.append(3);
  