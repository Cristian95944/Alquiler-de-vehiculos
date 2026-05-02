const URL = "http://localhost/Alquiler-de-vehiculos/";

// VEHICULOS
function guardar() {
    const data = {
        marca: document.getElementById("marca").value,
        modelo: document.getElementById("modelo").value,
        anio: document.getElementById("anio").value,
        categoria: document.getElementById("categoria").value
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
            const lista = document.getElementById("lista");
            lista.innerHTML = "";
            data.forEach(v => {
                lista.innerHTML += `<li>${v.id} - ${v.marca} ${v.modelo} (${v.estado})</li>`;
            });
        });
}

// CLIENTES
function guardarCliente() {
    const data = {
        nombre: document.getElementById("nombre").value,
        telefono: document.getElementById("telefono").value,
        licencia: document.getElementById("licencia").value
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
            const lista = document.getElementById("listaClientes");
            lista.innerHTML = "";
            data.forEach(c => {
                lista.innerHTML += `<li>${c.id} - ${c.nombre}</li>`;
            });
        });
}

// RESERVAS
function crearReserva() {
    const data = {
        vehiculo_id: document.getElementById("vehiculo_id").value,
        cliente_id: document.getElementById("cliente_id").value,
        fecha_inicio: document.getElementById("fecha_inicio").value,
        fecha_fin: document.getElementById("fecha_fin").value
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
            const lista = document.getElementById("listaReservas");
            lista.innerHTML = "";
            data.forEach(r => {
                lista.innerHTML += `<li>${r.nombre} - ${r.marca} ${r.modelo}</li>`;
            });
        });
}

// INICIAL
listar();
listarClientes();
listarReservas();