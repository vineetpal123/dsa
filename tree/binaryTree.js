// Node class
class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter((node) => {
            return node.data !== data;
        });
    }
}

// Tree class
class BTree {
    constructor() {
        this.root = null;
    }

    makeTree(val) {
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (root.value > newNode.value) {
            if (root.left == null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right == null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }
    insertLeftNode(root, val) {
        let newNode = new Node(val);
        if (root.left == null) {
            root.left = newNode;
        } else {
            this.insertLeftNode(root.left, val);
        }
    }
    insertRightNode(root, val) {
        let newNode = new Node(val);
        if (root.right == null) {
            root.right = newNode;
        } else {
            this.insertRightNode(root.right, val);
        }
    }
    // also known as bfs : breadth first search
    levelOrderTraversal(root) {
        let queue = [];
        queue.push(root);
        while (queue.length) {
            let current = queue.shift();
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
            console.warn(current.value);
        }
    }
    // lnr
    inOrderTraversal(root) {
        if (root == null) return;

        inOrderTraversal(root.left);
        console.log(root.value);
        inOrderTraversal(root.right);
    }

    // nlr
    preOrderTraversal(root) {
        if (root == null) return;
        console.log(root.value);
        preOrderTraversal(root.left);
        preOrderTraversal(root.right);
    }

    // lrn
    postOrderTraversal(root) {
        if (root == null) return;
        postOrderTraversal(root.left);
        postOrderTraversal(root.right);
        console.log(root.value);
    }
}





function countLeadNode(root, cnt) {
    if (root == null) {
        return;
    }

    countLeadNode(root.left, cnt);

    countLeadNode(root.right, cnt);
    // leaf node
    if (root.left == null && root.right == null) {
        cnt.cnt++;
    }
    return cnt.cnt;
}
/*
const tree = new BSTree();
tree.makeTree(10)
tree.makeTree(5)
tree.makeTree(15)
tree.makeTree(3)
tree.makeTree(7)
tree.makeTree(12)
tree.makeTree(25)

console.log('in order', inOrderTraversal(tree.root));
console.log('pre order', preOrderTraversal(tree.root));
console.log('post order', postOrderTraversal(tree.root));
console.log('count leaf node', countLeadNode(tree.root, {cnt:0}));
*/

module.exports = BTree;