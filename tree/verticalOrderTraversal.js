/**
 * Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
 */


const BSTree = require('./binaryTree.js');

const tree = new BSTree();
tree.makeTree(1)
tree.insertLeftNode(tree.root, 2);
tree.insertRightNode(tree.root, 3);
tree.insertLeftNode(tree.root.left, 4);
tree.insertRightNode(tree.root.left, 6);
tree.insertLeftNode(tree.root.right, 5);
tree.insertRightNode(tree.root.right, 7);


function verticalTraversal(node){
    let map = {};
    let q = [];
    let posArr = new Set();
    
    node.x = 0; // horizontal 
    node.y = 0; // vertical
    q.push(node);
    while(q.length){
        let front = q.shift();
        let xpos = front.x;
        let ypos = front.y;
        if(front.left){
            front.left.x = xpos - 1;
            front.left.y = ypos + 1;
            q.push(front.left);
        }
        if(front.right){
            front.right.x = xpos + 1;
            front.right.y = ypos + 1;
            q.push(front.right);
        }
        if (!map[front.x]){
            map[front.x] = [];
        }
        if (!map[front.x][front.y]){
            map[front.x][front.y] = [];
        }
        if(front.value !== null){
            map[front.x][front.y].push(front.value);
        }
        posArr.add(front.x);
    }

    console.log('map', JSON.stringify(map));
    
    let result = [];
    posArr = Array.from(posArr);
    let sortedKeys = posArr.sort((a,b) => a);
    sortedKeys.forEach(key => {
        result.push(map[key])
    })
    console.log('result', JSON.stringify(result));
    return result;
}


console.log('boundary traversal', verticalTraversal(tree.root));

