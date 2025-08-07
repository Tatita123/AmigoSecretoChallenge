// 1. Declarar el array para almacenar los nombres
let amigos = [];

// 2. Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar entrada vacía
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Limpiar campo
    input.value = "";

    // Mostrar lista actualizada
    mostrarLista();
}

// 3. Mostrar lista de amigos en el DOM
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar contenido anterior

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// 4. Sortear un amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultado anterior

    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }

    // Elegir índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const li = document.createElement("li");
    li.innerHTML = `🎉 El amigo secreto es: <strong>${nombreSorteado}</strong>`;
    resultado.appendChild(li);
}
