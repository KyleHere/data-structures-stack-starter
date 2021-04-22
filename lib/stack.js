// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below using a NODE implementation
// (your Stack should not contain any built-in JavaScript Arrays)
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.length = 0;
  }

  push(value){
    const newNode = new Node(value);
    if(!this.top){
    this.top = newNode;
    }
    else{
      this.top = newNode;
    }
    // this.tail = newNode;

    this.length += 1;
    return this.length
  }

  pop(){

  }

  size(){}
}

exports.Node = Node;
exports.Stack = Stack;
