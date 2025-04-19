let a = () => {
    return new Promise(resolve => {
        console.log('a')
        resolve()
    })
}
let b = () => console.log('b')
let c = () => console.log('c')

async function f1() {
    console.log('f1')
    await a();
    //  m1
    await b();
    await c();
}

let d = () => console.log('d')
let e = () => console.log('e')
let f = () => console.log('f')

console.log('start')

let pro = new Promise(resolve => {
    console.log('promise')
    resolve()
}).then(d).then(e).then(f)

let pro2 = new Promise(resolve => {
    console.log('pro2')
    resolve()
})
console.log('aaaaa')
pro2.then(() => console.log('k'))
pro2.then(d => console.log('l'))
pro2.then(d => console.log('m'))
f1()

console.log('ddddd')
pro.then(v => console.log('g'))
pro.then(v => console.log('h'))
pro.then(v => console.log('i'))
// start promise aaaaa f1 a ddddd d b e c f
