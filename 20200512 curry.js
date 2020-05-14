// simple curry
function sub_curry (fn) {
    var args = [].slice.call(arguments, 1)
    return function () {
        return fn.apply(this, args.concat([].slice.call(arguments)))
    }
}

// generate curry
function curry (fn, length) {
    length = length || fn.length
    var slice = Array.prototype.slice
    return function () {
        var args = slice.call(arguments)
        if (args.length >= length) {
            return fn.apply(this, args)
        } else {
            return curry(sub_curry.apply([fn].concat(args)), length - args.length)
        }
    }
}
