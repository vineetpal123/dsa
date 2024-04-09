const BSTree = require('./binaryTree.js');

const tree = new BSTree();
tree.makeTree(1)
tree.insertLeftNode(tree.root, 2);
tree.insertRightNode(tree.root, 3);
tree.insertLeftNode(tree.root.left, 4);
tree.insertRightNode(tree.root.left, 5);
tree.insertLeftNode(tree.root.right, 6);
tree.insertRightNode(tree.root.right, 7);


function topView(node){
    let result = [];
    node.x = 0;
    let q = [];
    q.push(node); 
    let map = {};
    let posArr = new Set();
    while(q.length){
        let front = q.shift();
        let xpos = front.x;
        if(front.left){
            front.left.x = xpos -1;
            q.push(front.left);
        }
        if(front.right){
            front.right.x = xpos + 1;
            q.push(front.right);
        }
        if(!map[xpos]){
            map[xpos] = front.value;
            posArr.add(front.x);
           
        }
    }
   
    posArr = Array.from(posArr);
    let sortedKeys = posArr.sort((a,b) => a);
    sortedKeys.forEach(key => {
        result.push(map[key])
    })
    return result;
}

console.log('top view of binary tree', topView(tree.root));