var FirstColor;
(function (FirstColor) {
	FirstColor['Red'] = 'Red';
	FirstColor['Green'] = 'Green';
	FirstColor['Blue'] = 'Blue';
})(FirstColor || (FirstColor = {}));
var Square = {
	color: FirstColor.Red,
};
var SecondColor = {
	Red: 'Red',
	Green: 'Green',
	Blue: 'Blue',
};
var Circle = {
	color: SecondColor.Red,
};

console.log('Enum Color = ', FirstColor);

console.log(
	'Object Color = ',
	SecondColor,
	FirstColor == SecondColor,
	FirstColor === SecondColor,
);
