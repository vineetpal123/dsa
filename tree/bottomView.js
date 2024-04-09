const BSTree = require('./binaryTree.js');

const tree = new BSTree();
tree.makeTree(20)
tree.insertLeftNode(tree.root, 8);
tree.insertRightNode(tree.root, 22);
tree.insertLeftNode(tree.root.left, 5);
tree.insertRightNode(tree.root.left, 3);
tree.insertLeftNode(tree.root.left.right, 10);
tree.insertRightNode(tree.root.left.right, 14);
tree.insertRightNode(tree.root.right, 25);


function bottomView(node) {
    let result = [];
    node.x = 0;
    let q = [];
    q.push(node);
    let map = {};
    let posArr = new Set();
    while (q.length) {
        let front = q.shift();
        let xpos = front.x;
        if (front.left) {
            front.left.x = xpos - 1;
            q.push(front.left);
        }
        if (front.right) {
            front.right.x = xpos + 1;
            q.push(front.right);
        }
        map[xpos] = front.value;
        posArr.add(front.x);
    }

    posArr = Array.from(posArr);
    let sortedKeys = posArr.sort((a, b) => a);
    sortedKeys.forEach(key => {
        result.push(map[key])
    })
    return result;
}

console.log('bottom view of binary tree', bottomView(tree.root));