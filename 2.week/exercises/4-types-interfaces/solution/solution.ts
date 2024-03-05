import { vegetables, meats, cheese } from '../toppings';
import { Topping } from './toppings-solution';

interface PizzaOrder {
	name: string;
	toppings: Topping[];
	size?: 'small' | 'medium' | 'large';
}

interface Pizza {
	name: string;
	toppings: Topping[];
	size: 'small' | 'medium' | 'large';
	price: number;
}

function chooseRandomTopping(toppings: Topping[]): Topping {
	const randomIndex = Math.floor(Math.random() * toppings.length);
	return toppings[randomIndex];
}

function bakePizza({ name, toppings, size }: PizzaOrder): Pizza {
	const basePrice = 7;
	const toppingPrices = toppings.reduce(
		(acc, topping) => acc + topping.price,
		0,
	);
	const sizePriceFactor = size === 'small' ? 0.8 : size === 'medium' ? 1 : 1.5;
	const price = Math.round((basePrice + toppingPrices) * sizePriceFactor);

	return {
		name,
		toppings,
		size: size ? size : 'medium',
		price,
	};
}

/**
 * Hier werden die Pizzen gebacken:
 */

console.log(
	bakePizza({
		name: 'Deluxe',
		toppings: [
			chooseRandomTopping(vegetables),
			chooseRandomTopping(cheese),
			chooseRandomTopping(meats),
		],
		size: 'large',
	}),
);

console.log(
	bakePizza({
		name: 'Vegetarian',
		toppings: [chooseRandomTopping(vegetables), chooseRandomTopping(cheese)],
		size: 'medium',
	}),
);
