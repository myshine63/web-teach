function A() {

}

let a = new A()

function B() {

}

B.prototype.__proto__ = A.prototype

let b = new B()

function C() {}

C.prototype.__proto__ = B.prototype

let c = new C()
A.prototype.say = function () {
    console.log('a 的原型')
}

B.prototype.sayHello = function () {
    console.log('hello')
}

c.say();
c.sayHello();

console.log(c instanceof C)
console.log(c instanceof B)
console.log(c instanceof A)

// 对象a,我们去访问a[name],
// 我看a自身带有name,如果有直接反复
// a.__proto__[name]  B.prototype[name] //
// a.__proto__.__proto__[name] A.prototype[name]
// A.prototype.__proto__[name],  Function.prototype []
//  Function.prototype.__proto__[name]  === Object.prototype
// Object.prototype.__proto__ === null

console.log(Object.prototype)
