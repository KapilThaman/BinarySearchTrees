class Node{
    constructor(value){
        this.value = value,
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
        constructor(){
            this.root = null;
        }

         insert(value) {
            
            const newNode = new Node(value);
            if(this.root == null){
                this.root = newNode;
                return this
            }
            let temp = this.root;
            while(true){
                if(newNode.value == temp.value){
                    return undefined;
                }
                if(newNode.value < temp.value){
                    if(temp.left == null){
                        temp.left = newNode;
                        return this;
                    }
                    temp = temp.left;
                }
                if(newNode.value > temp.value){
                    if(temp.right == null){
                        temp.right = newNode;
                        return this;
                    }
                    temp = temp.rigth;
                }
                
            }
            
         }

         contains(value) {
            if (this.root === null) return false;
            let temp = this.root;
            while (temp) {
                if (value < temp.value) {
                    temp = temp.left;
                } else if (value > temp.value) {
                    temp = temp.right;
                } else {
                    return true;
                }
            }
            return false;
        }
        
        BFS(){
            let currentNode = this.root;
            let Arr1 = [];
            let result = [];

            Arr1.push(currentNode);

            while(Arr1.length){
                currentNode = Arr1.shift();
                result.push(currentNode.value);
                if(currentNode.left) Arr1.push(currentNode.left);
                if(currentNode.right) Arr1.push(currentNode.right);

            }
        }

}

let myTree = new BinarySearchTree();

console.log(myTree);