// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };
// class Node{
//  constructor(this){
//   //pointer
//    this.value = value;
//    this.next = tail;

//  }

// }

class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      //Code here
      //instantiate from Node class
    //  const newNode = new Node(value);
    const newNode = {
      value: value,
      next: null
    }

      
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value){
   //code here
    const newNode = {
      value:value,
      next:null
    };
    
      //created pointer
     newNode.next = this.head;
     this.head = newNode;
     this.length++
     return this;
    }
  
  printList(){
    const array = [];
    let currentNode = this.head; 
    while(currentNode !==null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index,value){
    // check param
    if(index >= this.length){

return this.append(value);

    }
    const newNode = {
    value:value,
    next:null
    };
    //make leader node so we know were we are in list
    const leader = this.traverseToIndex(index-1)
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
    
  }
  traverseToIndex(index){
    //check param

    let counter = 0;
    let currentNode = this.head;
    while (counter !== index){
      currentNode = currentNode.next;
      counter++;


    }
    return currentNode;


  }
  remove(index){

    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
     leader.next = unwantedNode.next;
    this.length--;
    return this.printList();


  }
  reverse(){
    //code here
    if(!this.head.next){

      return this.head;
    }
      let first = this.head;
      let second = first.next;
      this.tail = this.head;

      while(second){

        const temp = second.next;
        second.next = first;
        first=second;
        second = temp;
      }
        this.head.next = null;
        this.head = first;
        return this.printList();



  }
}

  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
 myLinkedList.append(16);
  myLinkedList.prepend(1);
  myLinkedList.insert(2,99);
  myLinkedList.insert(20,88);
  myLinkedList.remove(2);
  myLinkedList.remove(2);
  console.log(myLinkedList.printList());
  console.log(myLinkedList.reverse());
  
  //console.log(myLinkedList);
  
  
  
  