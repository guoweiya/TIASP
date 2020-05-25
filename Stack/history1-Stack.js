/**
 * peek     查看栈顶元素
 * isEmpty  查看栈中是否为空
 * 
 */

// const _items = Symbol('stackItems')

class Stack {
    constructor() {
        this.items = []
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        return this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    clear() {
        this.items = []
    }
    isEmpty() {
        return this.items.length === 0
    }
    size() {
        return this.items.length
    }
}