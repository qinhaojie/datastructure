let chai = require('chai')
let maxPQ = require('../src/maxPQ')
let expect = chai.expect
let _ = require('lodash')
describe('maxPQ', () => {
  let q
  let n = 100000
  let arr = _.range(n)
  arr = _.shuffle(arr)
  
  beforeEach(() => {
    q = new maxPQ()
    arr.forEach(n => {
      q.insert(n)
    })
  })
  it(`${n}个元素的最大堆`, () => {
    while (n--) {
      expect(q.delMax()).to.be.equal(n)
    }
  })
})
