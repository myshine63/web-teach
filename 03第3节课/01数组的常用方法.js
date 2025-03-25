/**
 * 必须掌握的方法，https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 */
// 学习数组需要注意点，1. 哪些方法会改变元素组，哪些方法不会。 2. 哪些方法会返回新的数组。 3 遍历数组的方法



// let arr = [1, {name:'tom'}, 3, 4, 5]
// let newArr = Array.from(arr)
// console.log(newArr,111)
// arr[1].name='jerry'
// console.log(newArr[1].name,222)
let arr = [1, 2, 3, 4, 5]
// Array.isArray  Object.prototype.toString.call(arr);

// Array.from(param) 等同于[...param]，param必须可遍历。 Set,Map,字符串


// at方法，区别于arr[index]，它可以是负数。注意：arr[index],中index会被转成字符串，然后再取对应位置的值
console.log(arr[-1]); // 相当于 arr['-1'] // index都会转换成字符串
console.log(arr.at(-1)) // 获取元素末尾value console.log(arr[arr.length-1])
console.log(arr.at(-5)) // 获取元素末尾value
console.log(arr.at(-6)) // 获取元素末尾value

// concat，用来合并数组,传入的是数组将会展开
console.log(arr.concat([6, [7]])) // 只展开一层
console.log(arr.concat(8))

// flat展开元素，考虑一下自己实现
let a = [1, 2, new Set([3, 4]), [5], [6, [7, 8]]]
console.log(a.flat(), 111) // 不穿参数默认是1
console.log(a.flat(0), 222) // 相当于浅拷贝
console.log(a.flat(2), 333)

// slice(start,end) // 不包含end, 如果不传end,则从开始截取到末尾。 如果是负数，start = start + arr.length;
// toString() 相当于join()
// join 将元素拼接后返回字符串
console.log(arr.join())// 默认是","
console.log(arr.join(""))


/**
 * 查找元素的方法，find开头的都是传入函数，判断是否符合条件。
 * 后面3种都是直接判断值是否相等，注意 -0===+0, NaN===NaN
 */
// find,返回符合条件的第一个元素
// findIndex, 返回符合条件的第一个元素的位置
// findLast,,返回符合条件的最后一个元素
// findLastIndex, 返回符合条件的最后一个元素的位置

// includes,是否存在元素，返回boolean
// indexOf,是否存在元素，返回index,-1表示不存在
// lastIndexOf


/**
 *  排序方法
 */
// reverse,翻转原数组
// sort对数组进行排序, 排序方式将元素转成字符串，然后按照它们的 UTF-16 码元值升序排序。
// 如果传入参数，(a,b)=>返回值，返回值大于0交换位置，  <=0位置不变
let so = [1, 7, 4, 2, 9, 12]
console.log(so.sort()) // 1 12 2 4 7 9
console.log(so.sort((a, b) => b - a)) // 从大到小 面试常考
console.log(so.sort((a, b) => a - b)) // 从小到大 面试常考
console.log([1, 2, 3, 4, 5, 6, 7].sort(() => Math.random() - 0.5)) // 打乱原有顺序 面试常考

/**
 * 操作当前的数组的方法，增，删
 */
// pop: 删除最后一个元素并返回
// push: 在末尾添加元素，注意一下返回值，返回更新后长度
// shift: 删除第一个一个元素并返回
// unshift: 在开始插入一个元素，返回更新后长度
// splice(index,length = 1,insertValue1,insertValue2),指定位置（包括当前位置，删除指定长度大小的元素，然后插入新元素）,返回删除的元素组成的数组
console.log([1, 2, 3, 4, 5].splice(1))
let sss = []
console.log([1, 2, 3, 4, 5].splice(1))
//

/**
 * 遍历方法
 */
// foreach,遍历元素，效率没有for of,和for i 效率高
// map,返回新的元素组成的数组
// filter: 返回满足条件元素组成的数组
// reduce,将返回的结果作为下一次迭代的初始值，默认初始值为传入的第2个参数，不传则默认值是一个元素，并且从index=1开始迭代，会少一次迭代
let s = [10, 20, 30]
s.reduce((a, b) => {
    console.log('curRes', a)
    console.log('curValue', b)
    // return a + b
})

/**
 * 判断数组中的元素是否符合条件
 */
// every,判断数组中每个元素都是否满足一定条件，返回boolean
// some,判断数组中是否存在元素满足一定条件，返回boolean

// 课后作业
// 1. 哪些方法改变原数组，哪些方法不会
// 2. 哪些方法会返回新的数组
// 3. 自己实现flat方法
// 4. 判断某个元素是否存在数组，存在则删除，不存在则在末尾添加该元素
// 5. 实现数组浅拷贝有哪些方式
// 6. 实现栈和队列
// 浅拷贝，当数组中的元素，存在引用类型的时候，只拷贝地址。然后复制一份。
// 返回新的数组。新数组和旧数组，不是同一个数组。元素中的引用类型，还是同一个。

// 深拷贝:
