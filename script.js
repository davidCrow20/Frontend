const API = "http://localhost:3000/api/bandas";

async function cargarBandas() {
    const res = await fetc (API);
    const bandas = await res.json();

    const lista = document.getElementById("lista-bandas");
    lista.innerHTML = "";

    bandas.forEach(b => {
        const li = document.createElement("li");
        li.textContent = `${b.nombre} – ${b.genero} (${b.provincia})`;
    })
}