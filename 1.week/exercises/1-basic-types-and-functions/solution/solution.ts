/**
 * DRUCKEREI
 *
 * Aufgabe 1.1:
 * - Ergänze die fehlenden Typen für die Übergabeparameter der Funktion printMessage
 * - Erstelle im function body einen neuen String, der den entgegengenommenen String so oft enthält, wie
 *   die übergebene Zahl angibt
 * - Tipp: Hierfür kannst du z. B. die Methode `String.repeat()` verwenden
 * - Gib den fertigen String auf der Konsole aus und returne ihn
 * - Achte darauf wie sich der angezeigte Rückgabetyp, der in der IDE angezeigt wird, dabei verändert
 *
 * Aufgabe 1.2:
 * - Ergänze die fehlenden Typen für die Übergabeparameter der Funktion printArray
 * - Erstelle im function body einen neuen String, der alle im Array enthaltenen Strings enthält
 * - Gib ihn auf der Konsole aus und returne ihn anschließend
 * - Achte auch hier wieder darauf, wie die Hinweise deiner IDE immer spezifischer werden,
 *   während du mehr Code hinzufügst
 */

let myString = 'Hello';
let myNumber = 4;

function printMessage(message: string, repeat: number) {
	let printString = `${message} `.repeat(repeat);

	return printString.slice(0, printString.length - 1);
}

console.log(printMessage(myString, myNumber));

let myArr = ['WebDev', 'Workshop', 'TypeScript'];

function printArray(arr: string[]) {
	let printStr = '';
	arr.forEach((i) => {
		printStr += `${i} `;
	});

	return printStr.slice(0, printStr.length - 1);
}

console.log(printArray(myArr));

export {};
