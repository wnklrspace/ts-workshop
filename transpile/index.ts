const n: number = 1;

function add(a: number, b: number): number {
	return a + b;
}

console.log(add(n, 2));

function myFunc(a: number) {
	return a;
}

function myFunc2(b: string, c: number) {
	return b;
}

enum E {
	X,
	Y,
	Z,
}

function f(obj: { X: number }) {
	return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
f(E);
