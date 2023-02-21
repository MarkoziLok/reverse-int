module.exports = function reverse (n) {
    // n = n + "";
    // n = +n.split("").reverse().join("");
    n = Math.abs(n) +""
    n = +n.split("").reverse().join("");
    return n
}
