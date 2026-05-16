const URL = "http://localhost/Alquiler-de-vehiculos/";

// REFERENCIAS DOM (🔥 ESTO ES LO QUE TE FALTABA)
const marca = document.getElementById("marca");
const modelo = document.getElementById("modelo");
const anio = document.getElementById("anio");
const categoria = document.getElementById("categoria");
const lista = document.getElementById("lista");

const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const licencia = document.getElementById("licencia");
const listaClientes = document.getElementById("listaClientes");

const vehiculo_id = document.getElementById("vehiculo_id");
const cliente_id = document.getElementById("cliente_id");
const fecha_inicio = document.getElementById("fecha_inicio");
const fecha_fin = document.getElementById("fecha_fin");
const listaReservas = document.getElementById("listaReservas");


// VEHICULOS
function guardar() {
    const data = {
        marca: marca.value,
        modelo: modelo.value,
        anio: anio.value,
        categoria: categoria.value
    };

    fetch(URL + "vehiculos.php", {
        method: "POST",
        body: JSON.stringify(data)
    }).then(() => listar());
}

function listar() {
    fetch(URL + "listarVehiculos.php")
        .then(res => res.json())
        .then(data => {
            lista.innerHTML = "";
            data.forEach(v => {
                lista.innerHTML += `<li>${v.id} - ${v.marca} ${v.modelo} (${v.estado})</li>`;
            });
        })
        .catch(error => console.error("Error vehiculos:", error));
}


// CLIENTES
function guardarCliente() {
    const data = {
        nombre: nombre.value,
        telefono: telefono.value,
        licencia: licencia.value
    };

    fetch(URL + "clientes.php", {
        method: "POST",
        body: JSON.stringify(data)
    }).then(() => listarClientes());
}

function listarClientes() {
    fetch(URL + "listarClientes.php")
        .then(res => res.json())
        .then(data => {
            listaClientes.innerHTML = "";
            data.forEach(c => {
                listaClientes.innerHTML += `<li>${c.id} - ${c.nombre}</li>`;
            });
        })
        .catch(error => console.error("Error clientes:", error));
}


// RESERVAS
function crearReserva() {
    const data = {
        vehiculo_id: vehiculo_id.value,
        cliente_id: cliente_id.value,
        fecha_inicio: fecha_inicio.value,
        fecha_fin: fecha_fin.value
    };

    fetch(URL + "reservas.php", {
        method: "POST",
        body: JSON.stringify(data)
    }).then(() => listarReservas());
}

function listarReservas() {
    fetch(URL + "listarReservas.php")
        .then(res => res.json())
        .then(data => {
            listaReservas.innerHTML = "";
            data.forEach(r => {
                listaReservas.innerHTML += `<li>${r.nombre} - ${r.marca} ${r.modelo}</li>`;
            });
        })
        .catch(error => console.error("Error reservas:", error));
}


// INICIAL
listar();
listarClientes();
listarReservas();