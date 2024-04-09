const BSTree = require('./binaryTree.js');

const tree = new BSTree();
tree.makeTree(4)
tree.insertLeftNode(tree.root, 2);
tree.insertRightNode(tree.root, 5);
tree.insertLeftNode(tree.root.left, 7);
tree.insertRightNode(tree.root.left, 1);
tree.insertLeftNode(tree.root.right, 2);
tree.insertRightNode(tree.root.right, 3);
tree.insertRightNode(tree.root.left.right, 6);


function sumOfNodes(node) {
    node.height = 1;
    node.sum = node.value;
    let q = [];
    q.push(node);
    let map = {};
    while (q.length) {
        let front = q.shift();
        let height = front.height;
        let sum = front.sum;

        if (front.left) {
            front.left.height = height + 1;
            front.left.sum = sum + front.left.value;
            q.push(front.left);
        }
        if (front.right) {
            front.right.height = height + 1;
            front.right.sum = sum + front.right.value
            q.push(front.right);
        }
        if(!map[height]){
            map[height] = sum;
        }else{
            if(map[height] < sum){
                map[height] = sum;
            }
        }
    }
    let maxKey = Math.max(...Object.keys(map));
    return map[maxKey];
}

console.log('bottom view of binary tree', sumOfNodes(tree.root));