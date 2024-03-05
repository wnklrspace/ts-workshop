/**
 * FROZEN YOGHURT LADEN
 *
 * Implementiere folgendes Verhalten für die createIceCream() Funktion:
 * 	- Wird toppings beim Aufruf nicht übergeben, soll: `${base} + ' ohne Toppings'` zurückgegeben werden
 * 	- Wurde für toppings etwas anderes als null übergeben, füge jede enthaltene Zutat zusammen mit der base zu
 * 	  einem neuen String hinzu, so dass der finale Output z. B. folgendermaßen aussieht:
 * 	  "Joghurt Eis mit folgenden Toppings: Oreos, Kit Kat, Mango, Erdbeeren"
 * 	- Beachte die unterschiedliche Handhabung für Objects und Arrays um den selben Output zu erzielen
 * 	      => Für das Array kann z. B. toppings.forEach() und beim Object - Object.values(toppings).flat() verwendet werden
 * 	- Gib den String zurück und kontrolliere den Output auf der Konsole anhand der bereits implementieren Beispielaufrufe
 */

// Beispieldaten
const iceCreamArray = ['Oreos', 'Kit Kat', 'Mango', 'Erdbeeren'];
const iceCreamObject: {
	[key: string]: string[];
} = {
	candy: ['Gummibären', 'Snickers'],
	fruit: ['Kirschen', 'Physalis'],
};

const iceCreamBase = 'Joghurt Eis';

function createIceCream(base: string, toppings?: string[] | object) {
	let iceCream = base;

	if (!toppings) {
		// toppings null | undefined
		return iceCream + ' ohne Toppings';
	}

	// falls toppings vorhanden
	iceCream += ' mit folgenden Toppings: ';

	if (Array.isArray(toppings)) {
		// Array
		toppings.forEach((topping) => {
			iceCream += `${topping}, `;
		});
	} else {
		// Object
		const items = Object.values(toppings).flat();
		items.map((item: any, index: number) => {
			iceCream += `${item}, `;
		});
	}

	return iceCream.slice(0, iceCream.length - 2);
}

// Beispielaufrufe
console.log(createIceCream(iceCreamBase));
console.log(createIceCream(iceCreamBase, iceCreamArray));
console.log(createIceCream(iceCreamBase, iceCreamObject));

export {};
