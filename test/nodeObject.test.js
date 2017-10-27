var Node = require('../jsBuilt/node').Node;
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

describe('Node Object functionality test', () => {
    function cow(name,age,id){
        this.name=name;
        this.age=age;
        this.ID = id;

        this.eat = ()=>{
            console.log(`${name} is eating`);
        }

    }

    var mooer = new cow("mook",5,33);
    var repvalue = mooer.ID;

    var mooer2 = new cow("mooks",2,35);
    var repvalue2 = mooer2.ID;

    beforeEach(() => {

    });

    it('Should should construct a node Object', () => {

        var mooerNode = new Node(mooer,repvalue);

        expect(mooerNode.body).to.be.equal(mooer);
        expect(mooerNode.repValue).to.be.equal(mooer.ID);
        expect(mooerNode.leftChild).to.be.equal(null);
        expect(mooerNode.rightChild).to.be.equal(null);
        expect(mooerNode.parent).to.be.equal(null);

    });

    it('should have be able to setparent', () => {
        var mooerNode = new Node(mooer,repvalue);
        var mooerNode2 = new Node(mooer2,repvalue2);

        mooerNode.setParent(mooerNode2);

        expect(mooerNode.parent).to.be.equal(mooerNode2);
    });

    it('should give a nonfatal failure message on bad insert', () => {
        var mooerNode = new Node(mooer,repvalue);

        mooerNode.setParent("abv");

        expect(mooerNode.parent).to.be.equal(null);
        
    });

    it('it should correctly set child', () => {
        var mooerNode = new Node(mooer,repvalue);
        var mooerNode2 = new Node(mooer2,repvalue2);

        mooerNode.setChild(mooerNode2);

        expect(mooerNode.leftChild).to.be.equal(null);
        expect(mooerNode.rightChild).to.be.equal(mooerNode2);

    });

    it('if repvalue are the same it should default right', () => {
        var mooerNode = new Node(mooer,repvalue);

        var mooer2 = new cow("Spoet",2,33);
        var repvalue2 = mooer2.ID;

        var mooerNode2 = new Node(mooer2,repvalue2);

        mooerNode.setChild(mooerNode2);

        expect(mooerNode.leftChild).to.be.equal(null);
        expect(mooerNode.rightChild).to.be.equal(mooerNode2);

    });

    it('It shouldbe able to position left children', () => {
        var mooerNode = new Node(mooer,repvalue);

        var mooer2 = new cow("Spoet",2,25);
        var repvalue2 = mooer2.ID;

        var mooerNode2 = new Node(mooer2,repvalue2);

        mooerNode.setChild(mooerNode2);

        expect(mooerNode.leftChild).to.be.equal(mooerNode2);
        expect(mooerNode.rightChild).to.be.equal(null);

    });

    it('It should not be able to be a child or parent of itself', () => {
        var mooerNode = new Node(mooer,repvalue);
        var mooerNode2 = new Node(mooer2,repvalue2);

        mooerNode.setChild(mooerNode);

        expect(mooerNode.leftChild).to.be.equal(null);
        expect(mooerNode.rightChild).to.be.equal(null);

    });





});