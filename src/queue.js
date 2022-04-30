const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}



class Queue {

  constructor(){
    this.head=null;
    this.length=0
  }

  getUnderlyingList() {
    let list= this.head;
    let p=list;
    let q =null;
    while(p.next!==null){
      q=p.next;
      p.next=q.next;
      q.next=list;
      list=q
    }
    return list
  }

  enqueue( value ) {
    if(this.length===0){
      this.head=new Node(value);
    }else{
      let node=new Node(value);
      node.next=this.head;
      this.head=node
      
    }
    this.length++
  }

  dequeue() {
    
      let current=this.head;
      let prev=null;
      while(current.next!=null){
        prev=current;
        current=current.next
      }
      
      prev.next=null;
      this.length--;
      return current.value
      
    
    
  
  }
}

module.exports = {
  Queue
};
