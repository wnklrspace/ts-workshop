import { vegetables, cheese, meats } from './toppings';
/**
 * DER PIZZA GENERATOR
 *
 * Aufgabe 3.1
 * - Öffne die Datei toppings.ts und schaue dir die Arrays an. Diese sind aktuell mit dem Typ unknown typisiert.
 * - Weise den Arrays explizit den Typen der Zutaten zu.
 * - const vegetables: { propertyNameGoesHere: ?; propertyNameGoesHere: ? }[] = [ ... ];
 * - Die Zutaten haben alle die gleiche Form und teilen sich die gleichen Eigenschaften:
 *   - name
 *   - price
 *
 *
 * Aufgabe 3.2
 * - Schau dir die Funktion chooseRandomTopping() an. Diese sind aktuell mit dem Typ any typisiert.
 * - Definiere die Typen der Übergabeparameter und des Rückgabewerts.
 *
 *
 * Aufgabe 3.3
 * - Schau dir die Funktion bakePizza() an. Diese sind aktuell mit dem Typ any typisiert.
 * - Definiere die Typen der Übergabeparameter.
 * 	 - Erstelle die passenden Types für die Übergabeparameter mit den folgenden Eigenschaften:
 *   	 - name
 *   	 - toppings [Soll eine Liste von random gewählten Toppings sein]
 *   	 - size? [Die Property soll optional sein und entweder small, medium oder large sein dürfen]
 * - Führe das file aus und kontrolliere, ob die console.logs richtige Werte ausgeben.
 * - Hinweis: Das file kann mit dem Befehl `npx ts-node 1.week/3-literals-objects-any-unknown-never/exercise.ts` ausgeführt werden.
 *
 *
 * Aufgabe 3.4
 * - Erweitere die Funktion bakePizza() um die toppingPrices und sizePriceFactor Berechnung.
 * - Der Preis der Pizza wird wie folgt berechnet:
 * - basePrice: 7€
 * - toppingPrices: Summe der Preise aller Toppings
 * 	 Hinweis: Die Array.reduce() Funktion kann hier hilfreich sein.
 * - sizePriceFactor: Faktor, der den Preis der Pizza abhängig von der Größe anpasst.
 *   - small: 0.8
 *   - medium: 1
 *   - large: 1.5
 * - Der Endpreis soll auf volle Zahlen gerundet werden.
 *   Hinweis: Nutze Math.round() um den Preis auf volle Zahlen zu runden.
 *
 * _____________________________________________________________________________________________________________________________
 *
 * Um die Funktion zu testen und zu überprüfen, ob sie richtig funktioniert kannst du dieses File mit folgendem Befehl ausführen:
 * `npx ts-node 1.week/3-literals-objects-any-unknown-never/exercise.ts`
 *
 */

// TODO: Definiere die Typen der Übergabeparameter und des Rückgabewerts.
function chooseRandomTopping(toppings: any): any {
	const randomIndex = Math.floor(Math.random() * toppings.length);
	return toppings[randomIndex];
}

// TODO: Definiere die Typen der Übergabeparameter und des Rückgabewerts.
function bakePizza({ name, toppings, size }: any) {
	const basePrice = 7;
	// TODO: Berechne die Summe der Preise aller Toppings
	// Hinweis: Das ist eine gute Möglichkeit, die Array.reduce() Funktion zu verwenden.
	const toppingPrices = 0;

	// TODO: Berechne den Faktor für den Preis der Pizza abhängig von der Größe
	// Hinweis: small: 0.8, medium: 1, large: 1.5.
	const sizePriceFactor = 0;

	// TODO: Berechne den Preis der Pizza
	// Hinweis: Nutze Math.round() um den Preis auf volle Zahlen zu runden.
	const price = Math.round(0);

	return `Ihre Pizza "${name}" hat die Größe ${size}, kostet ${price}€ und enthält folgende Zutaten: ${toppings.map(
		(topping) => topping.name,
	)}`;
}

/**
 * __________________________________
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
