/**
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
 */


const BSTree = require('./binaryTree.js');

const tree = new BSTree();
// tree.makeTree(20)
// tree.insertLeftNode(tree.root, 8);
// tree.insertRightNode(tree.root, 22);
// tree.insertLeftNode(tree.root.left, 4);
// tree.insertRightNode(tree.root.left, 12);
// tree.insertLeftNode(tree.root.left.right, 10);
// tree.insertRightNode(tree.root.left.right, 14);
// tree.insertRightNode(tree.root.right, 25);

tree.makeTree(5)
tree.insertLeftNode(tree.root, 7);
tree.insertRightNode(tree.root, 3);
tree.insertLeftNode(tree.root.left, 9);
tree.insertRightNode(tree.root.left, 6);
tree.insertLeftNode(tree.root.left.right, 1);
tree.insertRightNode(tree.root.left.right, 4);


function boundaryTraversal(node) {
    let result = [];
    // print left node
    result = leftNode(node, result);

    // print leaf node
    result = leafNode(node, result);

    // print right node use stack
    let stack = [];
    stack = rightNode(node, stack);
    stack.shift()
    while(stack.length){
        let last = stack.pop();
        result.push(last);
    }
    console.log('result', result);
    return result;
}

function rightNode(node, [...ans]){
    if (node == null) return ans;

    if (node.right == null && node.right == null) {
        rightNode(node.right, ans);
    } else {
        ans.push(node.value);
        ans = rightNode(node.right, ans);
    }
    return ans;
}

function leftNode(node, [...ans]) {
    if (node == null) return ans;

    if (node.left == null && node.right == null) {
        leftNode(node.left, ans);
    } else {
        ans.push(node.value);
        ans = leftNode(node.left, ans);
    }
    return ans;
}

function leafNode(node, [...ans]) {
    if (node == null) return ans;
    ans = leafNode(node.left, ans);
    ans = leafNode(node.right, ans);
    if (node.left == null && node.right == null) {
        ans.push(node.value);
        console.log(node.value)
    }
    return ans;
}

console.log('boundary traversal', boundaryTraversal(tree.root));