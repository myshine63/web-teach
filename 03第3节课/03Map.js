/**
 * 1. Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值（对象或者原始值）都可以作为键或值。
 * 2. 区别于object,只能使用字符串和Symbol作为key值。其他类型作为key值的时候，会调用数据类型对应的toString方法后作为key值，因此可能存在覆盖
 * 3. size: 长度
 */
console.log({}.toString());
let a = {}
let b = {}
let c = {}

function d() {
}

a[b] = 123
a[c] = 456
console.log(a)
a[d] = 789
console.log(a)
console.log(d.toString())

/**
 * 常用方法
 */
// add,新增键值对
// delete(key), 删除键值对
// clear, 清空
// has(key), 是否存在某个key
// get(key), 获取value,注意set没有这个方法。


/**
 * 遍历方法：keys,values,entries,foreach,for of
 */

