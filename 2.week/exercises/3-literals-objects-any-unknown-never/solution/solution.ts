import { vegetables, cheese, meats } from './toppings-solution';

function chooseRandomTopping(
	toppings: {
		name: string;
		price: number;
	}[],
): { name: string; price: number } {
	const randomIndex = Math.floor(Math.random() * toppings.length);
	return toppings[randomIndex];
}

function bakePizza({
	name,
	toppings,
	size,
}: {
	name: string;
	toppings: {
		name: string;
		price: number;
	}[];
	size?: 'small' | 'medium' | 'large';
}): string {
	const basePrice = 7;
	const toppingPrices = toppings.reduce(
		(acc, topping) => acc + topping.price,
		0,
	);
	const sizePriceFactor = size === 'small' ? 0.8 : size === 'medium' ? 1 : 1.5;
	const price = Math.round((basePrice + toppingPrices) * sizePriceFactor);

	return `Ihre Pizza "${name}" kostet ${price}€ und enthält folgende Zutaten: ${toppings
		.map((topping) => topping.name)
		.join(', ')}`;
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
