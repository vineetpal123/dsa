/**
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 */

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


function lca(node, n1, n2) {
    if(!node) return null;

    let leftNode = lca(node.left, n1, n2);
    if(node.value == n1) {
        return n1;
    }
    let rightNode = lca(node.right, n1, n2);
    if(node.value == n2){
        return n2;
    }
    if(leftNode && !rightNode) return leftNode;
    if(rightNode && !leftNode) return rightNode;

    if(leftNode && rightNode){
        return node.value;
    }
   
}

// time o(n), space o(n)
function lcaBruteForce(root, n1, n2){
    let path1 = [];
    let path2 = [];
    
    getPath(root, n1, path1);
    getPath(root, n2, path2);
 
    let res = path1.some(elem => path2.includes(elem) )
    return res;
   
 }
 
 function getPath(root, n , path){
 
     if(root == null) return false;
     if(root.value == n) return true;
     if(getPath(root.left, n, path)){
         path.push(root.value);
         return true;
     }
     if(getPath(root.right, n , path)){
         path.push(root.value);
         return true;
     }
     
 }

console.log('lca  of binary tree', lca(tree.root, 5, 1));