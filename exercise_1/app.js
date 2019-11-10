/**
 Write a function that, given a binary tree node, can find the
 mode of the node.
 In case of a tie, use the larger value.
 
 For example:
        5
      /   \
     3     3
    / \   / \
   2   13 4  10
          \
           13

... should return 13

 Feel free to validate your results using Mocha:

////  Boilerplate for using Mocha in CoderPad ////: 

var Mocha = require('mocha');
var assert = require('assert');
var mocha = new Mocha({ui: 'bdd'});

mocha.suite.emit('pre-require', this, 'solution', mocha);

describe("Test suite", function() {
  it("should work", function() {
    assert.equal(true, true);
  });
});

mocha.run(function() {});
*/


const node = {
    value: 5, 
    left: { 
        value: 3, 
        left: {
            value: 2
        }, 
        right: {
            value: 13
        }
    }, 
    right: { 
        value: 3, 
        left: {
            value: 4, 
            right: {
                value: 13
            }
        }, 
        right: {
            value: 10
        }
    }
};

const counter = {};

const findBinaryTreeMode = tree => {
    const value = tree.value;
    const left = tree.left;
    const right = tree.right;

    if (counter[value]) {
        counter[value]++;
    } else {
        counter[value] = 1;
    }
    if(left) {
        findBinaryTreeMode(left);
    }
    if (right) {
        findBinaryTreeMode(right);        
    }
    return tree;
}
const result = findBinaryTreeMode(node);

console.log('counter', counter);

let max = {value: 0, count: -Infinity};

for (let n in counter) {
    console.log(counter[n], max.count)
    if (counter[n] >= max.count) {
        console.log(n)
        console.log(max.value)
        if (parseInt(n) >= max.value) {
            max = {value: n, count: counter[n]}
            console.log(max);
        }
    }
}

console.log(max);
