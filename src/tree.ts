import {Node} from './node';

export class Tree{

    treeArray:Node[];
    rootNode:Node|null;

    constructor(){
        this.treeArray = [];
        this.rootNode = null;
    }

    add(newNode:Node){
        if (this.treeArray.length==0){
            this.rootNode = newNode;
            this.treeArray.push(newNode);
            return;
        }
    
        if (this.rootNode){
            var place = this.findPlace(newNode,this.rootNode);

            if(newNode.repValue >= place.repValue){
                place.rightChild = newNode;
            }else{
                place.leftChild = newNode;
            }
            newNode.parent = place;
            this.treeArray.push(newNode);
        }
        
        
    }

    findPlace(seekingNode:Node,LatestNode:Node){

        if(seekingNode.repValue >= LatestNode.repValue){
            if (LatestNode.rightChild==null){
                return LatestNode;
            }
            this.findPlace(seekingNode,LatestNode.rightChild)
        }else if (seekingNode.repValue < LatestNode.repValue){
            if (LatestNode.leftChild==null){
                return LatestNode;
            }
            this.findPlace(seekingNode,LatestNode.leftChild)
        }

        return this.rootNode;
    }

}