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

    // Print true if the passed in value is in the list and otherwise returns false.
    contains(value) {
        let currentNode = this.head;

        while (currentNode) {
            if (value === currentNode.value) {
                console.log(true);
                return;
            };

            currentNode = currentNode.nextNode;
        };

        console.log(false);
        return;
    };

    // Print the index of the node containing value, or null if not found.
    find(value) {
        let currentNode = this.head;
        let currentIndex = 0;

        while (currentNode) {
            if (value === currentNode.value) {
                console.log(currentIndex);
                return;
            };

            currentNode = currentNode.nextNode;
            currentIndex++;
        };

        console.log(null);
        return;
    };

    // Insert a new node with the provided value at the given index.
    insertAt(value, index) {
        if (index < 0) {
            console.log("Index should be positive.");
            return;
        };

        const newNode = new Node(value);

        if (index === 0) {
            // Insert the node at the beginning
            newNode.nextNode = this.head;
            this.head = newNode;
    
            if (!this.tail) {
                // If the list was empty, update the tail
                this.tail = newNode;
            };
    
            return;
        };

        let currentNode = this.head;
        let previousNode = null;
        let currentIndex = 0;

        while (currentNode && currentIndex < index) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
            currentIndex++;
        };

        if (currentIndex === index) {
            // Insert at the given index
            newNode.nextNode = currentNode;
            previousNode.nextNode = newNode;

            if (!currentNode) {
                // If it was the end of list, update the tail
                this.tail = newNode;
            };
        } else {
            console.log("There is no such index in the list.");
        };
    };

    // Remove the node at the given index.
    removeAt(index) {
        if (index < 0) {
            console.log("Index should be positive.");
            return;
        };

        if (!this.head) {
            console.log("The linked list is empty.");
            return;
        };

        if (index === 0) {
            // Remove the node at the beginning
            this.head = this.head.nextNode;
    
            if (!this.tail) {
                // If the list becomes empty, update the tail
                this.tail = null;
            };
    
            return;
        };

        let currentNode = this.head;
        let previousNode = null;
        let currentIndex = 0;

        while (currentNode && currentIndex < index) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
            currentIndex++;
        };

        if (currentIndex === index) {
            // Remove the node at the given index
            previousNode.nextNode = currentNode.nextNode;

            if (!currentNode.nextNode) {
                // If it was the end of list, update the tail
                this.tail = previousNode;
            };
        } else {
            console.log("There is no such index in the list.");
        };
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

linkedList.contains(2); // Output: true
linkedList.contains(4); // Output: false

linkedList.find(2); // Output: 1
linkedList.find(4); // Output: null

linkedList.insertAt(5, 2); // Success
linkedList.insertAt(5, -1); // Output: Index should be positive.
linkedList.insertAt(5, 8); // There is no such index in the list.
linkedList.print();

linkedList.removeAt(-1); // Output: Index should be positive.
linkedList.removeAt(8); // There is no such index in the list.
linkedList.removeAt(2); // Success
linkedList.print();