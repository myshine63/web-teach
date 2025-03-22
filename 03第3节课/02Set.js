/**
 * 1. Set是集合，存储不同的元素,可以用数组去重
 * 2. set中元素的顺序是add时候元素的顺序
 * 3. set数据没有index,和length,不能通过for i 遍历
 * 4. size长度
 */

let set = new Set([1, 2, 3]);
console.log(set.get(2))
console.log(set[0])
// 可以通过for of 遍历
for (let val of set) {
    console.log(val, 'val')
}
console.log(set.size, 'set.size')

/**
 * 必须掌握的方法
 */

// add
set.add(1)
set.add(4)
console.log(set)

// delete(el), 删除指定元素el
// clear, 清空
// has, 判断元素是否存在
// difference,差集，当前集合中存在，但是目标结合中不存在
// intersection, 交集，当前集合存在，且目标集合也存在
let a = new Set([1, 2, 3]);
let b = new Set([2, 3, 4]);
// console.log(a.difference(b)) 高版本js
// console.log(a.intersection(b))

/**
 * 遍历方法：keys,values,entries,foreach,for of
 */


/**
 * Set和Array存储区别,为什么有了Array数据结构还需要Set
 * 1. Set可以去除重复元素
 * 2. 如果是稠密数组，在内存中采用连续的内存进行存在，如果数组元素增加，可能需要重新分配内存，
 * 3. 如果数组是稀疏数组，会退化采用hash表进行存储，存储效率低
 * 4. set数据类型采用的是hash表存储。因此查询，插入，删除的时间复杂度都是o(1),数组是o(n)
 * 5. 数组本质上是对象，存储的是索引到值的映射，查找时需要遍历整个数组，直到找到目标值。
 * 6. set通过hash进行存储，可以通过哈希函数计算出存储位置，而不需要遍历所有元素。
 */

