const BSTree = require('./binaryTree.js');

const tree = new BSTree();
tree.makeTree(1)
tree.insertLeftNode(tree.root, 2);
tree.insertRightNode(tree.root, 5);
tree.insertLeftNode(tree.root.left, 3);
tree.insertRightNode(tree.root.left, 4);
tree.insertRightNode(tree.root.right, 6);

function flatterBinaryTree(node) {
    let current = node;

    while (current) {
        if (current.left == null) {
            console.log(current.value);
            current = current.right;
        } else {
            let pre = current.left;

            while (pre.right != null && pre.right != current) {
                pre = pre.right;
            }

            if (pre.right == null) {
                console.log(current.value);
                pre.right = current.right;
                let temp = current;
                temp.right = temp.left;
                current.left = null;
                //current.right = current.left;
                current = current.right;
            } else {
                //console.log(current.value);
                pre.right = null;
                current = current.right;
            }
        }

    }

}

console.log('flatten binary tree', flatterBinaryTree(tree.root));