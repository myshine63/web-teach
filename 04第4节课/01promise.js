/**
 * 1. 创建promise时同步任务
 * 2. promise resolve或者reject后， 后续的代码依然会执行
 * 3. resolve(a),如果a是一个rejected promise. 返回的promise依然是rejected
 * 4. 抛出错误，和reject() 都可以终止promise
 * 5. then方法和catch方法，都会返回新的promise
 * 6. promise采用链式调用函数的方式，避免以往采用回调函数形成的回调嵌套，使得调用逻辑更加直观
 * 7. 3中状态，pending,fulfilled(resolve),rejected(reject,抛出错误)
 */


// (() => {
//     console.log(1)
//     let pro = new Promise((resolve, reject) => {
//         console.log(2)
//         // resolve(3)
//         // resolve(new Error('123'))
//         // resolve(Promise.reject(4444))
//         // reject(3);
//         // console.log(4)
//         // return 12123
//         throw Error('123')
//     })
//     pro.catch(err => {
//         console.log(err.message)
//     })
//     // let b = pro.then(res => console.log(111), (err) => console.log(222)).catch(err => console.log(err.message))
//     // console.log(pro === b)
//     // console.log(5)
// })();  // 这里一定要有分号

/**
 *  Promise.all([promise1,promise1,3,'string']);
 *  如果数组中的所有promise都resolve了状态才会变成fulfilled，其中一个reject,状态就会变成rejected.
 *  如果数组中的元素，可以不是promise,相当于直接Promise.resolve()
 *  如果数组中的promise,自身带有then方法或者catch方法。则根据元素最终返回的promise状态决定Promise.all的状态
 */
// (() => {
//     let a = new Promise((resolve, reject) => {
//         resolve(1)
//     }).then(res => {
//         console.log(res)
//         // throw Error('err1')
//     })
//     let b = new Promise((resolve, reject) => {
//         resolve(2)
//     }).then(res => {
//         console.log(res)
//         throw Error('err2')
//     }).catch(err => {
//         console.log(err.message)
//         return 3
//     })
//     let all = Promise.all([a, b, 1, false])
//     all.then(res => {
//         console.log(res)
//     }).catch(err => console.log(err.message))
// })();

/**
 * Promise.race([]), 返回的promise由元素中第一个变化的promise决定
 */

/**
 * Promise.allSettled([]),数组中所有promise状态改变后，状态会变成fulfilled.
 */

/**
 * Promise.any([]), 主要有一个元素fulfilled，状态就变成fulfilled,所有都失败了才会变成rejected
 */


/**
 * Promise.resolve
 *  1. 如果参数是promise,则原封不动的返回这个promise
 *  2. 如果参数是带有then方法的对象
 *  3. 其他，返回新的promise
 *
 */
// (() => {
//     let a = Promise.resolve(1);
//     let b = Promise.resolve(a)
//     console.log(a === b, 11111);
//
//
//     try {
//         let c = Promise.reject(2);
//         c.catch(() => {
//             console.log(123)
//         })
//         let d = Promise.resolve(c)
//         d.catch(() => {
//             console.log(123)
//         })
//         console.log(c === d, 22222)
//     } catch (err) {
//         // console.log(err.message)
//     }
// })();

/**
 * Promise.reject(),一定是返回一个新的promise
 */

(() => {
    let a = Promise.resolve(1);
    let b = Promise.reject(a)
    b.catch(() => {
        console.log(111)
    })
    console.log(a === b,11111)
    let c = Promise.reject(1)
    c.catch(() => {
        console.log()
    })
    let d = Promise.reject(c)
    d.catch(() => {
        console.log()
    })
    console.log(c === d)
})();


// console.log(1)
// Promise.resolve(2).then((value) => {
//     console.log(value)
// })
// let a = new Promise(resolve => {
//     console.log(3)
//     resolve(4)
// })
// a.then((value) => {
//     console.log(value)
// })
// console.log(5)

// // a,b，c,d,e,f
// a(...rest,b,c,e,f,){
//     res = 异步结果
//     b(res,c){
//         res = 异步结果
//         c(res)
//     }
// }
