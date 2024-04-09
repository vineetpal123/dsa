/**
 * steps : 
 * save mapping of each node with parent
 * get target node
 * take one array which will save visited array
 * use dfs i.e queue
 */
const BSTree = require('./binaryTree.js');

const tree = new BSTree();
/*
tree.makeTree(1)
tree.insertLeftNode(tree.root, 2);
tree.insertRightNode(tree.root, 3);
tree.insertLeftNode(tree.root.left, 4);
tree.insertRightNode(tree.root.left, 5);
tree.insertLeftNode(tree.root.left.right, 7);
tree.insertRightNode(tree.root.left.right, 8);
tree.insertRightNode(tree.root.right, 6);
tree.insertRightNode(tree.root.right.right, 9);
tree.insertRightNode(tree.root.right.right.right, 10);
*/

tree.makeTree(1)
tree.insertLeftNode(tree.root, 2);
tree.insertRightNode(tree.root, 3);
tree.insertLeftNode(tree.root.left, 4);
tree.insertRightNode(tree.root.left, 5);
tree.insertRightNode(tree.root.right, 7);
tree.insertLeftNode(tree.root.left.left, 8);
tree.insertLeftNode(tree.root.left.right, 10);


function burnTree(node, target) {
    node.parent = null;
    let parentToNodeMapping = addParentToEachNode(node);
    let targetNode = findTarget(node, target);

    let burnTime = getBurnTime(node, targetNode, parentToNodeMapping);
    //console.log('target node found', Object.keys(burnTreeObj).length);
    //return Object.keys(burnTreeObj).length;
}

function getBurnTime(node, targetNode, parentToNodeMapping) {

    let q = [targetNode];
    let step = 1;
    let visitedNode = {
        [targetNode.value] : true
    };
    while (q.length) {
        let size = q.length;
        let front = q.shift();
        let insertedInQueue = false;
        // burn left tree 
        if (front.left) {
            if (!visitedNode[front.left.value]) {
                visitedNode[front.left.value] = true;
                q.push(front.left);
                insertedInQueue = true;
            }
        }
        if(front.left && front.right && parentToNodeMapping[front.value].value && visitedNode[front.left.value] && visitedNode[front.right.value] && visitedNode[parentToNodeMapping[front.value].value] ){
            front = q.shift();
        }
        // burn right tree
        if (front.right) {
            if (!visitedNode[front.right.value]) {
                visitedNode[front.right.value] = true;
                q.push(front.right);
                insertedInQueue = true;
            }
        }
        if(front.left && front.right && parentToNodeMapping[front.value].value && visitedNode[front.left.value] && visitedNode[front.right.value] && visitedNode[parentToNodeMapping[front.value].value] ){
            front = q.shift();
        }
        // burn parent tree
        if (parentToNodeMapping[front.value]) {
            if (!visitedNode[parentToNodeMapping[front.value].value]) {
                let parentNode = parentToNodeMapping[front.value];
                visitedNode[parentNode.value] = true;
                q.push(parentNode);
                insertedInQueue = true;
            }
        }

        if(insertedInQueue){
            step++;
        }
    }
    console.log('step', step);
    return step
    /*
    // burn left tree 
    if (targetNode.left) {
        if (!visitedNode.includes(targetNode.left.value)) {
            visitedNode.push(targetNode.left.value);
            if (!change[targetNode.value]) {
                change[targetNode.value] = [targetNode.left.value]
            }else{
                change[targetNode.value].push(targetNode.left.value)
            }
            

            burn(targetNode.left, visitedNode, change);
            targetNode.left = null;
        }

    }
    // burn right tree 
    if (targetNode.right) {
        if (!visitedNode.includes(targetNode.right.value)) {
            visitedNode.push(targetNode.right.value);

            if (!change[targetNode.value]) {
                change[targetNode.value] = [targetNode.right.value]
            }else{
                change[targetNode.value].push(targetNode.right.value)
            }
            

            burn(targetNode.right, visitedNode, change);
            targetNode.right = null;
        }
    }
    // burn parent tree 
    if (targetNode.parent) {
        if (!visitedNode.includes(targetNode.parent.value)) {
            visitedNode.push(targetNode.parent.value);
            if (!change[targetNode.value]) {
                change[targetNode.value] = [targetNode.parent.value]
            }else{
                change[targetNode.value].push(targetNode.parent.value)
            }
            
            burn(targetNode.parent, visitedNode, change);
            targetNode.parent = null;
        }
    }
    */
    console.log('end for traget', targetNode.value);
}

function addParentToEachNode(node) {
    let map = {};
    node.parent = null;
    let q = [node];
    while (q.length) {
        let front = q.shift();
        map[front.value] = front.parent;
        if (front.left) {
            front.left.parent = front;
            q.push(front.left);
        }
        if (front.right) {
            front.right.parent = front;
            q.push(front.right);
        }
    }
    return map;
}

function findTarget(node, target) {
    if (node == null) return null;
    if (node.value == target) return node;

    let res = findTarget(node.left, target);
    if (!res) {
        res = findTarget(node.right, target);
    }
    return res;
}

console.log('burn Treee', burnTree(tree.root, 10))