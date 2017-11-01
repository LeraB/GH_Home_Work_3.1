var a = [2,3,4,25,1,2,5,3,3,33];

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
};

Object.prototype.mySort = function (callBack) {
    var elem = this[0],
        someEl = callBack || function (a, b) {
            if (a > b) return -1;
            if (a < b) return 1;
            return 0;
        };

    if (someEl > 0) {

        for (var i = 0; i < this.length - 1; i++) {
            for (j = 0; j < this.length - 1 - i; j++) {
                if (this[j + 1] < this[j]) {
                    t = this[j + 1];
                    this[j + 1] = this[j];
                    this[j] = t;
                    return this;
                }
            }
        }
    }
    if (someEl < 0) {
        for (var i = 0; i < this.length - 1; i++) {
            for (var j = 0; j < this.length - 1 - i; j++) {
                if (this[j + 1] > this[j]) {
                    var t = this[j + 1];
                    this[j + 1] = this[j];
                    this[j] = t;
                }
            }
        }
    return this;
}
    else {

        return this;
    }


};


a.myforEach(function (elem, ind, a) {
        console.log('arr[', ind, ']=', elem);
    }
);

console.log('--------------------------');
console.log("Sort = ",a.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}));

console.log('--------------------------');

console.log("Mysort =",a.mySort());


console.log('--------------------------');

console.log(a.myMap(function (element, index, array) {
    return element += 1
}));
