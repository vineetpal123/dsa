const BSTree = require('./binaryTree.js');

const tree = new BSTree();
tree.makeTree(10)
tree.insertLeftNode(tree.root, 12);
tree.insertLeftNode(tree.root, 6);
tree.insertRightNode(tree.root, 5)
tree.insertRightNode(tree.root, 15)
tree.insertRightNode(tree.root, 3)
tree.insertRightNode(tree.root, 7)
tree.insertRightNode(tree.root, 12)
tree.insertRightNode(tree.root, 25)

function calculateHeight(root){
    if(root == null) return 0;

    let height1 = calculateHeight(root.left);
    let height2 = calculateHeight(root.right);

    return Math.max(height1, height2) + 1
}

console.log('get height', calculateHeight(tree.root));