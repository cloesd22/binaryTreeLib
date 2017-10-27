var Tree = require('../jsBuilt/tree').Tree;
var Node = require('../jsBuilt/node').Node;
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

describe('Tree object functionality test', () => {

    function cow(name,age,id){
        this.name=name;
        this.age=age;
        this.ID = id;

        this.eat = ()=>{
            console.log(`${name} is eating`);
        }

    }


    it('Tree intialises with empty array', () => {
        var tree = new Tree();

        expect(tree.treeArray).to.deep.equal([]);
        expect(tree.rootNode).to.be.equal(null);
    });

    it('should be able to add a node to the tree, first node is root node', () => {

        var mooer = new cow("mook",5,33);
        var repvalue = mooer.ID;

        var mooerNode = new Node(mooer,repvalue);
        
        var tree = new Tree();

        tree.add(mooerNode);

        expect(tree.treeArray.length).to.be.equal(1);
        expect(tree.treeArray[0]).to.deep.equal(mooerNode);
        expect(tree.rootNode).to.deep.equal(mooerNode);


    });

/*     it('Should be able to find a position to put new node', () => {
        var mooer = new cow("mook",5,33);
        var repvalue = mooer.ID;

        var mooer2 = new cow("Hoofs",2,45);
        var repvalue2 = mooer.ID;

        var mooer3 = new cow("bells",6,21);
        var repvalue3 = mooer.ID;

        var mooer4 = new cow("edge",8,15);
        var repvalue4 = mooer.ID;

        var mooer5 = new cow("fencer",1,68);
        var repvalue5 = mooer.ID;

        var mooer6 = new cow("tank",0,85);
        var repvalue6 = mooer.ID;

        var mooerNode = new Node(mooer,repvalue);
        var mooerNode2 = new Node(mooer2,repvalue2);
        var mooerNode3 = new Node(mooer3,repvalue3);
        var mooerNode4 = new Node(mooer4,repvalue4);
        var mooerNode5 = new Node(mooer5,repvalue5);
        var mooerNode6 = new Node(mooer6,repvalue6);
        
        var tree = new Tree();

        tree.add()

    }); */



    it('should add new nodes relative to nodes already in the tree', () => {
        var mooer = new cow("mook",5,33);
        var repvalue = mooer.ID;

        var mooer2 = new cow("Hoofs",6,21);
        var repvalue2 = mooer2.ID;

        var mooerNode = new Node(mooer,repvalue);
        var mooerNode2 = new Node(mooer2,repvalue2);

        var tree = new Tree();
        debugger;
        tree.add(mooerNode);
        tree.add(mooerNode2);
        
        expect(tree.treeArray.length).to.be.equal(2);
        expect(tree.treeArray[0]).to.deep.equal(mooerNode);
        expect(tree.treeArray[1]).to.deep.equal(mooerNode2);
        expect(tree.treeArray[0].leftChild).to.deep.equal(mooerNode2);
        expect(tree.treeArray[1].parent).to.be.deep.equal(mooerNode)
    });

});