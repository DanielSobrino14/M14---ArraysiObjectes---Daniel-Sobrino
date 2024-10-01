// Exercici 1 //
const estudiant = {
    nom: 'Joan',
    edat: 20,
    notes: {
        matematiques: 8,
        programacio: 9,
        fisica: 7
    }
};

function desestructuracio() {
    const nombre = estudiant.nom;
    const edad = estudiant.edat;
    const nota = estudiant.notes.matematiques;

    mostrarResultado(`${nombre} té ${edad} anys i ha tret un ${nota} en matemàtiques`);
}

// Exercici 2 //
const coordenades = [12, 5, 8];

function coordenadas() {
    const x = coordenades[0];
    const y = coordenades[1];
    const z = coordenades[2];

    mostrarResultado(`Les coordenades son: x=${x}, y=${y}, z=${z}`);
}

// Exercici 3 // 
const preus = [100, 200, 300, 400];

function incrementar() {
    const preciosActualizados = preus.map(precio => precio * 1.1);
    mostrarResultado(`Preus actualitzats: ${preciosActualizados}`);
}

// Exercici 4 //
const edats = [16, 21, 18, 24, 12, 30];

function majors18() {
    const mayores = edats.filter((edad) => edad >= 18);
    mostrarResultado(`Edat majors de 18: ${mayores}`);
}

// Exercici 5 //
const notes = [7, 9, 5, 10, 8];

function media() {
    const suma = notes.reduce((acumulador, nota) => acumulador + nota, 0);
    const mitjana = suma / notes.length;
    mostrarResultado(`La mitjana de les notes és: ${mitjana}`);
}

// Exercici 6 //
function crearProducte(nom, preu, quantitat) {
    const preuDescomptat = preu * 0.95;
    return {
        nom: nom,
        preu: preuDescomptat,
        quantitat: quantitat
    };
}

function crearYMostrarProducte() {
    const producte = crearProducte("Portàtil", 1000, 3);
    mostrarResultado(`Producte creat: ${JSON.stringify(producte)}`);
}

// Exercici 7 //
const cotxe = {
    marca: 'Tesla',
    model: 'Model S',
    preu: 80000
};

function afegirAnyCotxe() {
    cotxe.any = 2023;
    mostrarResultado(`Cotxe actualitzat: ${JSON.stringify(cotxe)}`);
}


function mostrarResultado(texto) {
    const mostrar = document.getElementById('resultados1');
    mostrar.textContent = texto;
}
