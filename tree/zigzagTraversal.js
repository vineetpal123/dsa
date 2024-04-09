/**
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
 */


const BSTree = require('./binaryTree.js');

const tree = new BSTree();
tree.makeTree(3)
tree.insertLeftNode(tree.root, 9);
tree.insertRightNode(tree.root, 20);
tree.insertLeftNode(tree.root.left, null);
tree.insertRightNode(tree.root.left, null);
tree.insertLeftNode(tree.root.right, 15);
tree.insertRightNode(tree.root.right, 7);

function zigzagTraversal(node) {
    let queue = [];
    let number = [];
    node.depth = 0;
    let depth = 0;
    queue.push(node);

    while (queue.length) {
        let temp = queue.shift();

        if (temp.left || temp.right) {
            depth = temp.depth + 1;
        }
        if (temp.right) {
            temp.right.depth = depth;
            queue.push(temp.right)
        }
        if (temp.left) {
            temp.left.depth = depth;
            queue.push(temp.left)
        }

        if (!number[temp.depth]) {
            number[temp.depth] = [];
        }
        if (temp.value != null) {
            if (temp.depth % 2 == 0) {
                number[temp.depth].unshift(temp.value)
            } else {
                number[temp.depth].push(temp.value)
            }
        }
    }
    console.log(JSON.stringify(number));
    return number;
}

console.log('zizgag traversal', zigzagTraversal(tree.root));