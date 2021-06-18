// forEach
Array.prototype.forEach0 = function (callback) {
    if (typeof callback === 'function') {
        arrayLength = this.length
        for (var i = 0; i < arrayLength; i++) {
            callback(this[i], i)
        }
    }
    else console.log('day khong phai funciton hay nhap lai!')
}

//every
Array.prototype.every0 = function (callback) {
    if (typeof callback === 'function') {
        var tg = 0
        for (var i = 0; i < this.length; i++) {
            var o = callback(this[i], i)
            if (o === true) continue
            else return false
        }
        return true
    }
    else console.log('day khong phai funciton hay nhap lai!')
}

//some
Array.prototype.some0 = function (callback) {
    if (typeof callback === 'function') {
        var tg = 0
        for (var i = 0; i < this.length; i++) {
            var o = callback(this[i], i)
            if (o === false) continue
            else return true
        }
        return false
    }
    else console.log('day khong phai funciton hay nhap lai!')
}

//find
Array.prototype.find0 = function (callback) {
    if (typeof callback === 'function') {
        for (var i = 0; i < this.length; i++) {
            var o = callback(this[i], i)
            if (o === true) {
                return this[i]
            }
        }
    }
    else console.log('day khong phai funciton hay nhap lai!')
}

//filter
Array.prototype.filter0 = function (callback) {
    if (typeof callback === 'function') {
        var array = []
        for (var i = 0; i < this.length; i++) {
            var o = callback(this[i], i)
            if (o === true) array.push(this[i])
        }
        return array
    }
    else console.log('day khong phai funciton hay nhap lai!')
}

//map
Array.prototype.map0 = function (callback) {
    if (typeof callback === 'function') {
        var array = []
        for (var i = 0; i < this.length; i++) {
            var o = callback(this[i], i)
            array.push(o)
        }
        return array
    }
    else console.log('day khong phai funciton hay nhap lai!')
}

//reduce
Array.prototype.reduce0 = function (callback, accumulator) {
    if (typeof callback === 'function') {
        if (arguments.length >= 2) {
            console.log('co truyen accumulator')
            this.unshift(accumulator)
            for (i = 0; i < this.length - 1; i++) {
                if (i == 0) {
                    var currentValue = callback(accumulator, this[i + 1])
                }
                else {
                    currentValue = callback(currentValue, this[i + 1])
                }
            }
            return currentValue
        }

        else {
            console.log('khong truyen accumulator')
            for (i = 0; i < this.length - 1; i++) {
                if (i == 0) {
                    var currentValue = callback(this[i].c, this[i + 1])
                }
                else {
                    currentValue = callback(currentValue, this[i + 1])
                }
            }
            return currentValue
        }
    }
    else console.log('day khong phai funciton hay nhap lai!')
}
