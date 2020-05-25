class Queue {
    constructor() {
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }
    enqueue(element) { // 向队列尾部添加一个或多个新的项
        this.items[this.count] = element
        this.count++
    }
    dequeue() { // 移除队列的第一项， 并返回被移除的元素
        if (this.isEmpty()) return undefined
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }
    peek() { //返回队列中第一个元素--最先被添加...
        if (this.isEmpty()) return undefined
        return this.items[this.lowestCount]
    }
    isEmpty() {
        return this.size() === 0
    }
    size() { //返回队列中包含元素个数
        return this.count - this.lowestCount
    }
    clear() {
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }
    toString() {
        if (this.isEmpty()) return ''
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
}
module.exports = Queue