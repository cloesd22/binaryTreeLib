"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tree = /** @class */ (function () {
    //tempEdgeNode:Node;
    function Tree() {
        this.treeArray = [];
        this.rootNode = null;
    }
    Tree.prototype.add = function (newNode) {
        if (this.treeArray.length == 0) {
            this.rootNode = newNode;
            this.treeArray.push(newNode);
            return;
        }
        if (this.rootNode) {
            this.findPlace(newNode.repValue, this.rootNode);
            var place = this.findPlace(newNode.repValue, this.rootNode);
            if (newNode.repValue >= place.repValue) {
                place.rightChild = newNode;
            }
            else {
                place.leftChild = newNode;
            }
            newNode.parent = place;
            this.treeArray.push(newNode);
        }
    };
    Tree.prototype.findPlace = function (seekingValue, LatestNode) {
        if (seekingValue >= LatestNode.repValue) {
            if (LatestNode.rightChild == null) {
                return LatestNode;
            }
            return this.findPlace(seekingValue, LatestNode.rightChild);
        }
        else if (seekingValue < LatestNode.repValue) {
            if (LatestNode.leftChild == null) {
                return LatestNode;
            }
            return this.findPlace(seekingValue, LatestNode.leftChild);
        }
        return LatestNode;
    };
    Tree.prototype.find = function (searchTerm) {
        if (this.rootNode) {
            var place = this.findPlace(searchTerm, this.rootNode);
            if (place.repValue == searchTerm) {
                return place;
            }
            else {
                return false;
            }
        }
        else {
            console.log("Tree is empty");
        }
    };
    return Tree;
}());
exports.Tree = Tree;
