class DoublyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        prev: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null,
        prev: null
      }
      console.log(newNode)
       // [2,4,6,8,10] 12 , tail = 10
      newNode.prev = this.tail  // 10 <== 12 
      this.tail.next = newNode; // 10 ==> 12
      this.tail = newNode;   // tail = 12
      this.length++;
      return this; // [2,4,6,8,10,--12--]
    }

    prepend(value) {
      const newNode = {
        value: value,
        next: null,
        prev: null
      }   
      // [2,4,6,8,10] 12 , head = 2
      newNode.next = this.head; // 12 ==> 2
      this.head.prev = newNode  // 12 <== 2
      this.head = newNode; // head  = 12
      this.length++;
      return this;       //[--12--,2,4,6,8,10]
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
      }
      return array;
    }
    insert(index, value){
      //Check for proper parameters;
      if(index >= this.length) {
        return this.append(value);
      }
      
      const newNode = {
        value: value,
        next: null,
        prev: null
      }
      // [2,4,6,8,10] 12
      const leader = this.traverseToIndex(index-1); // leader = 6
      const follower = leader.next; //  follower = 8
      leader.next = newNode; // 6 ==> 12 
      newNode.prev = leader; // 6 <== 12
      newNode.next = follower; // 12 ==> 8 
      follower.prev = newNode; // 12 <== 8 
      this.length++;
      console.log(this)
      return this.printList();  //[2,4,6,--12--,8,10]
    }
    traverseToIndex(index) {
      //Check parameters
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
  }
  
  let myLinkedList = new DoublyLinkedList(10);
