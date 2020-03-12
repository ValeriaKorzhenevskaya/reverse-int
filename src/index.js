module.exports = function reverse(n) {
    let mod = Math.abs(n);
    let arr = mod
        .toString()
        .split("")
        .reverse();
    let result = +arr.join("");
    return result;
};
