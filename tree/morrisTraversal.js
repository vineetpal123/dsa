/**
 * traversal logic is same for preorder, inorder just one condition is different
 */
const BSTree = require('./binaryTree.js');

const tree = new BSTree();
tree.makeTree(1)
tree.insertLeftNode(tree.root, 2);
tree.insertRightNode(tree.root, 3);
tree.insertLeftNode(tree.root.left, 4);
tree.insertRightNode(tree.root.left, 5);


function morrisTraversalInOrder(root) {
	let current = root;

	while (current) {
		if (current.left == null) {
			console.log(current.value);
			current = current.right;
		} else {
			// Find predecessor  
			let pre = current.left;
			while (pre.right != null && pre.right != current) {
				pre = pre.right;
			}

			if (pre.right == null) {
				//console.log(current.value); remove for in order
				pre.right = current;
				current = current.left;
			} else {
				pre.right = null;
				console.log(current.value);// remove for pre order
				current = current.right;
			}
		}
	}
}

function morrisTraversalPreOrder(node) 
{ 
    while (node != null) 
    { 
  
        // If left child is null, print the  
        // current node data. Move to right child.  
        if (node.left == null) 
        { 
            console.log(node.value) 
            node = node.right; 
        } 
        else
        { 
  
            // Find inorder predecessor  
            var current = node.left; 
            while (current.right != null &&  
                   current.right != node) 
            { 
                current = current.right; 
            } 
  
            // If the right child of inorder predecessor  
            // already points to this node  
            if (current.right == node) 
            { 
                current.right = null; 
                node = node.right; 
            } 
  
            // If right child doesn't point to  
            // this node, then print this node  
            // and make right child point to this node  
            else
            { 
                console.log(node.value) 
                current.right = node; 
                node = node.left; 
            } 
        } 
    } 
} 
 

console.log('morris traversal in order', morrisTraversalInOrder(tree.root));
//console.log('morris traversal pre order', morrisTraversalPreOrder(tree.root));
