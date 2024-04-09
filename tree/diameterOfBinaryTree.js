const BSTree = require('./binaryTree.js');

const tree = new BSTree();
tree.makeTree(1)
tree.insertLeftNode(tree.root, 2);
tree.insertRightNode(tree.root, 3);
tree.insertLeftNode(tree.root.left, 4);
tree.insertLeftNode(tree.root.left.left, 8);
tree.insertRightNode(tree.root.left, 5);
tree.insertRightNode(tree.root.left.right, 6);
tree.insertRightNode(tree.root.left.right.right, 7);


function diameter(root){
    
    let ans = 0

    const height = function height(root){

        if(root == null) return 0
    
        let lH = height(root.left);
        let rH = height(root.right);
        ans = Math.max(ans, 1+ lH + rH);
        return 1 + Math.max(lH, rH);
    }
    
    height(root.left);
    height(root.right);

    return ans;
}

function diameterUsingMorrisTraversal(root){
    let current = root;
    let ans = 0;
    while(current != null){
        if(!current.left){
            current = current.right;
        } else{
            let pre = current.left;

            // find predecessor
            while(pre.right != null && pre.right != current){
                pre = pre.right;    
            }

            if(pre.right == null){
                pre.right = current;
                current = current.left; 
            }else{
                pre.right = null;

                let leftHeight = 0, rightHeight = 0;
                let temp = current.left;
                while (temp != null) {
                    leftHeight++;
                    temp = temp.right;
                }
                temp = current.right;
                while (temp != null) {
                    rightHeight++;
                    temp = temp.left;
                }
                ans = Math.max(ans, leftHeight + rightHeight + 1);
                current = current.right;
            }
        }
    }
    return ans;
}

console.log('get diameter', diameter(tree.root));