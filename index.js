var a = [1, 4, 6, 8, 7, 5];

Object.prototype.myforEach = function (callback) {
    for (index = 0; index < this.length; index++) {
        callback(this[index], index, this);
    }
};


Object.prototype.myMap = function (callback) {
    var newArr = [];
    for (index = 0; index < this.length; index++) {
        newArr[index] = callback(this[index], index, this);
    }
    return newArr;
}

Object.prototype.mySort = function (callBack) {
    var elem = this[0],
        someEl;
    if ( callBack = 1) {

        for (var i = 0; i < this.length - 1; i++) {
        for (var j = 0; j < this.length - 1 - i; j++) {
            if (this[j + 1] < this[j]) {
                var t = this[j + 1];
                this[j + 1] = this[j];
                this[j] = t;
            }
        }
    }
    return callBack
};


a.myforEach(function (elem, ind, a) {
        console.log('arr[', ind, ']=', elem);
    }
);

console.log('--------------------------')
console.log(a.mySort(a))

console.log('--------------------------')

console.log(a.mySort(function(a,b){
    if(a > b) return -1
if(a < b) return 1
return 0
}))
var array = [1, 4, 6, 8, 7, 5]

console.log('--------------------------')

console.log(array.myMap(function(element, index, array) {
    return element += 1
}))
