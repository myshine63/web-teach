// 1. 边界条件，我也成为出口
// 2. 逻辑


function flat(arr, deep = 1) {// 默认只展开一层
    if (deep === 0) {
        return [...arr];
    }
    let result = []
    // 遍历传入数组
    for (let item of arr) {
        // 1，如果元素是数组，并且deep大于0，则递归调用flat方法
        if (Array.isArray(item) && deep > 0) {
            result = result.concat(flat(item, deep - 1))
        } else {
            // 2.如果是普通元素，则直接添加到结果数组中
            result.push(item)
        }
    }
    return result
}

console.log(flat([1, [2], [3, [4]], [5, [6, [7]]]], 0))
// form(),slice(),concat(), ... ,flat(0)
