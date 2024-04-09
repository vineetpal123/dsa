const BSTree = require('./binaryTree.js');

const tree = new BSTree();
tree.makeTree(3)
tree.insertLeftNode(tree.root, 5);
tree.insertRightNode(tree.root, 1);
tree.insertLeftNode(tree.root.left, 6);
tree.insertRightNode(tree.root.left, 2);
tree.insertLeftNode(tree.root.right, 0);
tree.insertRightNode(tree.root.right, 8);
tree.insertLeftNode(tree.root.left.right, 7);
tree.insertRightNode(tree.root.left.right, 4);

function lca(root, n1, n2){
   
    if(root == null) return false;

    let left = lca(root.left, n1, n2);
    if(root.value == n1) return root;

    if(root.value == n2) return root;
    let right = lca(root.right, n1, n2);

    
    if(left && !right) return left;
    if(right && !left) return right;

    if(left && right) return root;
  
}






console.log('height of tree', lca(tree.root, 5, 1));