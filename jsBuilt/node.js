"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(body, repValue) {
        this.repValue = repValue;
        this.body = body;
        this.leftChild = null;
        this.rightChild = null;
        this.parent = null;
    }
    Node.prototype.setParent = function (parentNode) {
        if (typeof (parentNode) == typeof (this)) {
            this.parent = parentNode;
        }
        else {
            console.log("Parent must be a Node object");
        }
    };
    Node.prototype.setChild = function (childNode) {
        if (childNode == this) {
            console.log("Cannot position nodes relative to themselves");
            return;
        }
        if (typeof (childNode) == typeof (this)) {
            if (childNode.repValue >= this.repValue) {
                this.rightChild = childNode;
            }
            else {
                this.leftChild = childNode;
            }
        }
        else {
            console.log("Child must be a Node object");
        }
    };
    return Node;
}());
exports.Node = Node;
