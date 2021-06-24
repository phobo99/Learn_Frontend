// forEach
Array.prototype.forEach0 = function (callback) {
    if (typeof callback === 'function') {
        for (const index in this) {
            if (this.this.hasOwnProperty(index)) {
                callback(this[index], index, this)
            }

        }
    }
    else console.log('day khong phai funciton hay nhap lai!')
}

//every
Array.prototype.every0 = function (callback) {
    if (typeof callback === 'function') {
        for (const i = 0; i < this.length; i++) {
            const o = callback(this[i], i)
            if (o === true) continue
            else return false
        }
        return true
    }
    else {
        return undefined
        //console.log('day khong phai funciton hay nhap lai!')
    }
}

//some
Array.prototype.some0 = function (callback) {
    if (typeof callback === 'function') {
        for (const i = 0; i < this.length; i++) {
            const o = callback(this[i], i)
            if (o === false) continue
            else return true
        }
        return false
    }
    else {
        return undefined
        //console.log('day khong phai funciton hay nhap lai!')
    }
}

//find
Array.prototype.find0 = function (callback) {
    if (typeof callback === 'function') {
        for (const i = 0; i < this.length; i++) {
            const o = callback(this[i], i)
            if (o === true) {
                return this[i]
            }
        }
    }
    else {
        return undefined
        //console.log('day khong phai funciton hay nhap lai!')
    }
}

//filter
Array.prototype.filter0 = function (callback) {
    if (typeof callback === 'function') {
        const array = [];
        for (const index in this) {
            if (this.hasOwnProperty(index)) {
                const result = callback(this[index], index, this);
                if (result) {
                    array.push(this[index]);
                }
            }
            return array;
        }
    }
    else {
        return undefined;
        //console.log('day khong phai funciton hay nhap lai!')
    }
}

//map
Array.prototype.map0 = function (callback) {
    if (typeof callback === 'function') {
        const array = []
        arrayLength = this.length
        for (const i = 0; i < arrayLength; i++) {
            const o = callback(this[i], i)
            array.push(o)
        }
        return array
    }
    else {
        return undefined
        //console.log('day khong phai funciton hay nhap lai!')
    }
}

//reduce
Array.prototype.reduce0 = function (callback, accumulator) {
    if (typeof callback === 'function') {
        if (arguments.length >= 2) {
            console.log('co truyen accumulator')
            this.unshift(accumulator)
            for (const i = 0; i < this.length - 1; i++) {
                if (i == 0) {
                    const currentValue = callback(accumulator, this[i + 1])
                }
                else {
                    currentValue = callback(currentValue, this[i + 1])
                }
            }
            return currentValue
        }

        else {
            console.log('khong truyen accumulator')
            for (const i = 0; i < this.length - 1; i++) {
                if (i == 0) {
                    const currentValue = callback(this[i].c, this[i + 1])
                }
                else {
                    currentValue = callback(currentValue, this[i + 1])
                }
            }
            return currentValue
        }
    }
    else {
        return undefined
        //console.log('day khong phai funciton hay nhap lai!')
    }

}
