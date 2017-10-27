"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tree = /** @class */ (function () {
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
            var place = this.findPlace(newNode, this.rootNode);
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
    Tree.prototype.findPlace = function (seekingNode, LatestNode) {
        if (seekingNode.repValue >= LatestNode.repValue) {
            if (LatestNode.rightChild == null) {
                return LatestNode;
            }
            this.findPlace(seekingNode, LatestNode.rightChild);
        }
        else if (seekingNode.repValue < LatestNode.repValue) {
            if (LatestNode.leftChild == null) {
                return LatestNode;
            }
            this.findPlace(seekingNode, LatestNode.leftChild);
        }
        return this.rootNode;
    };
    return Tree;
}());
exports.Tree = Tree;
