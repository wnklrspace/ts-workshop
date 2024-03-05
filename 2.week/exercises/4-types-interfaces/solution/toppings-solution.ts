export interface Topping {
	name: string;
	price: number;
}

const vegetables: Topping[] = [
	{
		name: 'Tomato',
		price: 0.5,
	},
	{
		name: 'Onion',
		price: 0.3,
	},
	{
		name: 'Mushroom',
		price: 0.7,
	},
];

const meats: Topping[] = [
	{
		name: 'Salami',
		price: 1.5,
	},
	{
		name: 'Ham',
		price: 1.3,
	},
	{
		name: 'Bacon',
		price: 1.7,
	},
];

const cheese: Topping[] = [
	{
		name: 'Mozzarella',
		price: 1,
	},
	{
		name: 'Cheddar',
		price: 1.2,
	},
	{
		name: 'Parmesan',
		price: 1.5,
	},
];

export { vegetables, meats, cheese };
