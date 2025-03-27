// 参开阮一峰es6Iterator, mdn https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Iterator

// 迭代器不是数组，但是可以像数组一样遍历，
// arr.keys(), arr.values(), arr.entries(),
// map.keys(), map.values(), map.entries(),
// set.keys(), set.values(), set.entries(),
// 迭代器具备可变量方法： foreach,map,filter,every,some,reduce,
// 可以用for of 遍历，但是不能用for in, 因为没有length,和index

let arr = [1, 2, 3]
let values = arr.values()
console.log(values)
console.log(Object.prototype.toString.call(values)) // [object Array Iterator]
console.log(Array.isArray(values))
for (let val of values) {
    console.log(val)
}
console.log(values.length)
console.log(values[0])


console.log('set'.padEnd(50, '-'))
let set = new Set(arr);
let setValues = set.values()
console.log(setValues)
console.log(Object.prototype.toString.call(setValues)) // [object Set Iterator]
console.log(Array.isArray(setValues))


console.log('map'.padEnd(50, '-'))
let map = new Map([[0, 1], [1, 2]]);
let mapEntries = map.entries();
console.log(mapEntries)
console.log(Object.prototype.toString.call(mapEntries)) // [object Map Iterator]
console.log(Array.isArray(mapEntries))


// 区别Object.keys, Object.values, Object.entries，他们返回的是真实的数组，只能用于数组和对象。
console.log('Object-User'.padEnd(50, '-'))
let user = {name: 'tom'};
let userEntries = Object.entries(user)
console.log(userEntries)
console.log(Object.prototype.toString.call(userEntries))
console.log(Array.isArray(userEntries))


console.log('Object-arr'.padEnd(50, '-'))
let arrValues = Object.values(arr);
console.log(arrValues)
console.log(Object.prototype.toString.call(arrValues))
console.log(Array.isArray(arrValues))


// 不能够获取到正确的值
console.log('Object-set-map'.padEnd(50, '-'))
let objMapEntries = Object.entries(map); // 返回空数组
console.log(objMapEntries)
console.log(Array.isArray(objMapEntries))

let objSetValues = Object.values(set); // 返回空数组
console.log(objSetValues)
console.log(Array.isArray(objSetValues))
