function Node(data, left, right) {
this.data = data;
this.left = left;
this.right = right;
this.show = show;
}
function show() {
return this.data;
}
function BST() {
this.root = null;
this.insert = insert;
this.postOrder = postOrder;
}
function insert(data) {
var n = new Node(data, null, null);
if (this.root == null) {
this.root = n;
}
else {
var current = this.root;
var parent;
while (true) {
parent = current;
if (data < current.data) {
current = current.left;
if (current == null) {
parent.left = n;
break;
}
}
else {
current = current.right;
if (current == null) {
parent.right = n;
break;
}
}
}
}
}
function postOrder(node) {
if (!(node == null)) {
postOrder(node.left);
postOrder(node.right);
console.log(node.show() + " ");
}
}
var tree_i = new BST();
tree_i.insert(23);
tree_i.insert(45);
tree_i.insert(16);
tree_i.insert(37);
tree_i.insert(3);
tree_i.insert(99);
let n=prompt("Ingresa un número: ");  
tree_i.insert(n);
console.log("Postorder traversal: ");
postOrder(tree_i.root);