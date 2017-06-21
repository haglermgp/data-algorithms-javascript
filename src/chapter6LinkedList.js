// NOTE: LINKED LISTS
//definition : Linked Lists is another type of list, thats IS A COLLECTIONS OF OBJECTS CALLED NODES
//Each node is linked to a successor node in the list using an object reference. The reference to another node is called a link

// NOTE: for more explanation see page 74 of book : Data Structure and Algorithms with Javascript O'Reilly


// NOTE: AN OBJECT-BASED LINKED LIST DESIGN

//THE NODE CLASS : have to properties>>
  //>> ELEMENT : which store's the node's data
  //>> NEXT : which stores a link to the next node in the linked list

  //for creating NODES

  function Node(element) {
    this.element = element
    this.next = null
  }

//THE LINKED LIST CLASS
  //this List Class include the functionality for a linked list : insert, find, delet, etc nodes and this is the constructor for creating new linked list.
  function LList() {
    this.head = new Node('head')
    this.find = find
    this.insert = insert
    this.remove = remove
    this.display = display
  }
