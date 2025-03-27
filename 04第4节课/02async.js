/**
 * 1. async函数返回的是一个Promise对象
 * 2. async如果return了一个非Promise，相当于Promise.resolve().
 * 3. 如果async返回了一个promise,这个promise和原来的promise不是同一个
 *
 */
// async 函数返回的是一个promise,
// let pro = new Promise(resolve => {
//     setTimeout(resolve, 1000);
// })
//
// async function f1() {
//     return pro
// }
//
// let a = f1()
// console.log(pro === a, 1111)
// console.log(a instanceof Promise, 222)

/**
 * 1. await 只能在async函数中调用
 * 2. await 后面的promise如果抛出了错误，会让async函数停止执行，并且将返回的promise状态修改成reject
 */
async function f2() {
    try {
        await new Promise(function (resolve, reject) {
            throw new Error('出错了');
        }).catch((err) => {
            console.log(err)
        })
    }catch (e) {
        console.log(e.message)
    }

    console.log(11111)
}

f2().then(v => console.log(1))
    .catch(e => console.log(2))

/**
 * await 后面可以是普通函数调用，也可以是async函数调用，也可以是值
 */
// async function f3() {
//     console.log(1)
//     return 1
// }
//
// async function f4() {
//     console.log(2)
//     return Promise.resolve(3)
// }
//
// async function f5() {
//     console.log(4)
//     await f3()
//     console.log(5)
//     await f4()
//     console.log(6)
//     await f3()
//     console.log(14)
//     await f3()
//     console.log(15)
//     await f4()
//     console.log(16)
//     return 7
// }
//
// console.log(8)
// f5().then(res => {
//     console.log(res)
// })
// console.log(9)
// let a = new Promise(resolve => {
//     console.log(10)
//     resolve()
// })
// console.log(11)
// a.then(res => {
//     console.log(12)
// })
// console.log(13)


// async function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//
// async function f7(ms) {
//     let a = sleep(1000).then(() => console.log(1));
//     let b = sleep(1000).then(() => console.log(2));
//     await a
//     await b
//     await sleep(1000).then(() => console.log(1));
//     await sleep(1000).then(() => console.log(2));
// }
// f7();

// async function f3(aaa) {
//     if(aaa>10){
//         return axios.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data)
//     }
//     else {
//         return false
//     }
// }
//
// await f3()
