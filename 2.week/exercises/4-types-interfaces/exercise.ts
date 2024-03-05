import { vegetables, cheese, meats } from './solution/toppings-solution';

/**
 *
 * DER PIZZA GENERATOR - REFACTOR
 *
 * Aufgabe 4.1
 * - Gehe in das toppings.ts file
 * - Definiere ein Interface "Topping" mit den passenden Eigenschaften für die Objecte in den Arrays
 * - Weise den Arrays explizit den Typen der Zutaten zu
 * - Exportiere das Interface Topping, dass es in diesem File verwendet werden kann
 * - Hinweis: const vegetables: Topping[] = [ ... ];
 *
 *
 * Aufgabe 4.2
 * - Importiere das Interface Topping in dieses File
 * - Definiere die Typen der Übergabeparameter und des Rückgabewerts der Funktion chooseRandomTopping() mit dem Interface Topping
 *
 *
 * Aufgabe 4.3
 * - Erstelle ein passendes Interface mit den input Parametern der Funktion bakePizza():
 *   - name
 *   - toppings [Soll eine Liste von random gewählten Toppings sein]
 *   - size? [Die Property soll optional sein und entweder small, medium oder large sein dürfen]
 * - Erstelle ein passendes Interface mit den korrekten output Parametern für die Funktion bakePizza():
 *   - name
 *   - toppings
 *   - size
 * 	 - price
 * - Definiere die Typen der Übergabeparameter und des Rückgabewerts der Funktion bakePizza()
 *
 */

// TODO: Implementiere die passenden Interfaces für die Übergabeparameter und des Rückgabewerts.
function chooseRandomTopping(toppings) {
	const randomIndex = Math.floor(Math.random() * toppings.length);
	return toppings[randomIndex];
}

// TODO: Implementiere die passenden Interfaces für die Übergabeparameter und des Rückgabewerts.
function bakePizza({ name, toppings, size }) {
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
