//
let obj = {
    _firstname: 'tom',
    _lastname: 'hello ',
    set fullname(value) {
        let arr = value.split(' ')
        this._firstname = arr [0]
        this._lastname = arr [1]
        document.getElementById('id').innerText = arr[1]
    },
    get fullname() {
        return this._lastname + this._firstname
    }
}

console.log(add(1)(2)(3)) // 6

function add(){

}
console.log(obj.fullname)
