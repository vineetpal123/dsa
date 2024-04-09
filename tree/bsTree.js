/**
 * create binary search tree
 */

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
class BSTree {
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

    inOrderTraversal(root) { // LNR
        if (root == null) return null;

        if (root.left) {
            this.inOrderTraversal(root.left);
        }
        console.log(root.value);
        if (root.right) {
            this.inOrderTraversal(root.right);
        }
    }

    search(root, target) {
        if (root == null) return false
        if (root.value == target) return true;

        if (root.value < target) {
            return this.search(root.right, target)
        } else {
            return this.search(root.left, target)
        }
    }

    // return deleted node
    deleteNode(root, target) {
        if (root == null) return root;

        if (root.value == target) {
            //case 1 if node is at leaf or no child present
            if (root.left == null && root.right == null) {
                root = null;
                return null;
            }

            // case 2 if one child node is present
            if (root.left && root.right == null) {
                let temp = root.left;
                root.left = null;
                return temp;
            }
            if (root.left == null && root.right) {
                let temp = root.right;
                root.right = null;
                return temp;
            }

            // case 3 if both child present
            if (root.left && root.right) {
                // find predeccor
                let curr = root;
                let predeccor = root.left;
                
                while (predeccor != null && predeccor.right != null) {
                    curr = predeccor;
                    predeccor = predeccor.right;
                }
                
                root.value = predeccor.value;
                curr.right = null;
                return root;
            }

        } else if (root.value > target) {
            root.left = this.deleteNode(root.left, target);
            return root;
        } else {
            root.right = this.deleteNode(root.right, target);
            return root;
        }
    }
}


const tree = new BSTree();
tree.makeTree(50)
tree.makeTree(30)
tree.makeTree(70)
tree.makeTree(20)
tree.makeTree(40)
tree.makeTree(60)
tree.makeTree(80)
tree.makeTree(85)

console.log('in order tranversal before', tree.inOrderTraversal(tree.root));
//console.log('search', tree.search(tree.root, 50));
console.log('delete node', tree.deleteNode(tree.root, 50));
console.log('in order tranversal after', tree.inOrderTraversal(tree.root));
module.exports = BSTree;