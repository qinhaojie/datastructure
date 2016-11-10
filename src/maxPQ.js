// 最大优先队列

class maxPQ {

  constructor () {
    this.q = [undefined]
    this.n = 0
  }

  insert (n) {
    this.q.push(n)
    this.n++
    this.swim(this.n)
  }

  delMax () {
    this.swap(1, this.n)
    this.n--
    let ret = this.q.pop()
    this.sink(1)
    return ret
  }

  swim (k) {
    while (this.q[k] > this.q[parseInt(k / 2)] && k > 1) {
      this.swap(k, parseInt(k / 2))
      k = parseInt(k / 2)
    }
  }

  sink (k) {
    while (2 * k <= this.n) {
      let j = 2 * k
      if (this.q[j] < this.q[j + 1]) j++
      if (this.q[k] > this.q[j]) break
      this.swap(k, j)
      k = j
    }
  }

  swap (i, j) {
    let temp = this.q[i]
    this.q[i] = this.q[j]
    this.q[j] = temp
  }
}

module.exports = maxPQ
