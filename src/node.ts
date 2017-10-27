export class Node{
    repValue:number|string;
    body:any;
    leftChild:Node|null;
    rightChild:Node|null;
    parent:Node|null;

    constructor(body:any,repValue:number|string){
        this.repValue=repValue;
        this.body = body;
        this.leftChild=null;
        this.rightChild=null;
        this.parent=null;
    }

    setParent(parentNode:Node){
        
        if (typeof(parentNode)==typeof(this)){
            this.parent = parentNode;
        }else{
            console.log("Parent must be a Node object")
        }
        
    }

    setChild(childNode:Node){

        if (childNode == this){
            console.log("Cannot position nodes relative to themselves");
            return;
        }

        if (typeof(childNode)==typeof(this)){

            if(childNode.repValue >= this.repValue){
                this.rightChild = childNode;
            }else{
                this.leftChild = childNode;
            }

        }else{
            console.log("Child must be a Node object");
        }

    }

}