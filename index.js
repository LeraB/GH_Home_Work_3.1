var a = [1, 4, 6, 8, 7, 5];

Object.prototype.MyforEach = function (callback) {
    for (index = 0; index < this.length; index++) {
        callback(this[index], index, this);
    }
};


Object.prototype.MyMap = function (callback) {
    var newArr;
    for (index = 0; index < this.length; index++) {
        newArr = callback(this[index], index, this);
    }
    return newArr;
}

Object.prototype.MySort = function (array) {
    var elem = this[0],
        someEl;
    for (var i = 0; i < this.length - 1; i++) {
        for (var j = 0; j < this.length - 1 - i; j++) {
            if (this[j + 1] < this[j]) {
                var t = this[j + 1];
                this[j + 1] = this[j];
                this[j] = t;
            }
        }
    }
    return array
};

a.MyMap(function (el, index) {
    console.log(el + index);
})
console.log('--------------------------')

a.MyforEach(function (elem, ind, a) {
        console.log('arr[', ind, ']=', elem);
    }
);

console.log('--------------------------')
console.log(a.MySort(a))


