var n = 1;
function add(a, b) {
	return a + b;
}
console.log(add(n, 2));
function myFunc(a) {
	return a;
}
function myFunc2(b, c) {
	return b;
}
var E;
(function (E) {
	E[(E['X'] = 0)] = 'X';
	E[(E['Y'] = 1)] = 'Y';
	E[(E['Z'] = 2)] = 'Z';
})(E || (E = {}));
function f(obj) {
	return obj.X;
}
// Works, since 'E' has a property named 'X' which is a number.
f(E);
