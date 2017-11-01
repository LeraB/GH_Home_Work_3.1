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

    if (this.someEl > 0) {
        for (i = 0; i < ( this.length - 1 ); i++) {
            for (j = 0; j < this.length - i - 1; j++) {
                if (this[j] > this[j+1])
                {
                    temp = this[j];
                    this[j] = this[j+1];
                    this[j+1] = temp;
                }
            }
        }
        return this;
    }
    if (this.someEl < 0) {
        for (i = 0; i < ( this.length - 1 ); i++) {
            for (j = 0; j < this.length - i - 1; j++) {
                if (this[j] > this[j+1])
                {
                    temp = this[j];
                    this[j] = this[j+1];
                    this[j+1] = temp;
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

console.log(a.mySort(function (a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
}));

console.log('--------------------------');
console.log(a.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}));

console.log('--------------------------');

console.log(a.myMap(function (element, index, array) {
    return element += 1
}));
