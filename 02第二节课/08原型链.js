function A() {

}

let a = new A()

function B() {

}

B.prototype.__proto__ = A.prototype

let b = new B()

function C() {
}

C.prototype.__proto__ = B.prototype

let c = new C()

console.log(c instanceof C)
console.log(c instanceof B)
console.log(c instanceof A)


