/**
 * Go ahead and write down the code for implementing a BST in javascript using classes and objects

    Deliverable :
        Implement Insert functionality
        Implement Search Functionality
        Push the code to git and upload commit ID
*/

// Node class represents each node in the tree 
class Node{
    constructor(data, left = null, right = null ){
        // all nodes have 3 properties
        this.data = data;   //data what we need to store
        this.left = left;   // pointers left and right
        this.right = right;
    }

}

// in binary search tree class
class BST{
    constructor(){
        // top of tree which is root node starts at null
        this.root = null;
    }


    // we need to add data
    insert(data){
        // have the data 
        //get reference to root node
        const node = this.root;
        //if it is the first node the node will be null.
        if(node === null){
            // so we need to set this node as root node and put the data init
            this.root = new Node(data);
            return;
        // if it is not the first node the we need to check where it will be put in the tree.
        }else{
            // to search the perfect place we need to check all the places with comparision in recursive 
            // if data is less than node under which it will be put then it goes to left
            // if not then goes right
            //---------------------------------------------------


            //we passin the node root node 
            const searchTree = function(node){
                // we put the node to the left if  
                if(data<node.data){
                    //if left side is null or blank then only we will assign to the left
                    if(node.left===null){
                        node.left = new Node(data);
                        return;
                        // if left side is not blank or null place then we check for the left side of lower node
                        // means the node we found in the left
                    }else if(node.left !== null){
                        // again we apply the recursion till we find blank left spot for our data.
                        return searchTree(node.left)
                    }
                // same we do for if the data is greater than node
                }else if(data>node.data){
                    if (node.right === null){
                        node.right = new Node(data);
                        return;
                    }else if(node.right !==null){
                        return searchTree(node.right)
                    }
                }else{
                    // if data is not small or not even greaterthen that must be equal
                    // we avoid such data to be added to the tree
                    return null;
                }
                
            };
            return searchTree(node)
        }
    }
    search(data){
        // make current as root and compare with search value
        let curr = this.root;
        // compare till we not find it
        while (curr.data !==data){
            if(data<curr.data){
                curr = curr.left;
            }else{
                curr = curr.right;
            }
            if(curr === null){
                return null;
            }
        }
        // return if found
        return curr;
    }
}

const bst = new BST();
bst.insert(4)
bst.insert(2)
bst.insert(6)
bst.insert(7)
bst.insert(3)
bst.insert(1)
bst.insert(8)
console.log(bst);
console.log('bst.search(1): ', bst.search(1));
console.log('bst.search(7): ', bst.search(7));
console.log('bst.search(3): ', bst.search(3));


/*

          4
        2   6
      1  3    7
               8


*/