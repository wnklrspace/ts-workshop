enum FirstColor {
	Red = 'Red',
	Green = 'Green',
	Blue = 'Blue',
}

const Square = {
	color: Color.Red,
};

const SecondColor = {
	Red: 'Red',
	Green: 'Green',
	Blue: 'Blue',
} as const;

const Circle = {
	color: Color.Red,
};
