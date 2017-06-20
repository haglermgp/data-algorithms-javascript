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
