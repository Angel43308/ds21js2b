function Node(element) {
this.element = element;
this.next = null;
}  
function LList() {
this.head = new Node("head");
this.find = find;
this.insert = insert;
//this.remove = remove;
this.display = display;
  
}
function find(item) {
var currNode = this.head;
while (currNode.element != item) {
currNode = currNode.next;
}
return currNode;
}

function insert(newElement, item) {
var newNode = new Node(newElement);
var current = this.find(item);
newNode.next = current.next;
current.next = newNode;
}
function display() {
var currNode = this.head;
while (!(currNode.next == null)) {
console.log(currNode.next.element);
currNode = currNode.next;
}
}
var  Añadir= new LList(),v=prompt("Inserte un valor");
Añadir.insert("Conway", "head");
Añadir.insert("Russellville", "Conway");
Añadir.insert(v, "Russellville");
Añadir.display();