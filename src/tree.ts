import {Node} from './node';

export class Tree{

    treeArray:Node[];
    rootNode:Node|null;
    //tempEdgeNode:Node;

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
            this.findPlace(newNode.repValue,this.rootNode);

            var place = this.findPlace(newNode.repValue,this.rootNode);

            if(newNode.repValue >= place.repValue){
                place.rightChild = newNode;
            }else{
                place.leftChild = newNode;
            }
            newNode.parent = place;
            this.treeArray.push(newNode);
        }
        
    }

    findPlace(seekingValue:number|string,LatestNode:Node):Node{
        
        if(seekingValue >= LatestNode.repValue){
            if (LatestNode.rightChild==null){
   
                return LatestNode;
            }
            return this.findPlace(seekingValue,LatestNode.rightChild)
        }else if (seekingValue < LatestNode.repValue){
            if (LatestNode.leftChild==null){

                return LatestNode;
            }
            return this.findPlace(seekingValue,LatestNode.leftChild)
        }
        return LatestNode;
    }

    find(searchTerm:number|string){
        if (this.rootNode){
            var place = this.findPlace(searchTerm,this.rootNode);
            if(place.repValue==searchTerm){
                return place;
            }else{
                return false;
            }
        }else{
            console.log("Tree is empty");
        }
        
    }

}