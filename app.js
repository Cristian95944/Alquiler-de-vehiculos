function listar() {
    fetch(URL + "listarVehiculos.php")
        .then(res => res.json())
        .then(data => {
            lista.innerHTML = "";
            const disponibles = data.filter(v => v.estado === "DISPONIBLE");
            
            if (disponibles.length === 0) {
                lista.innerHTML = "<li>No hay vehículos disponibles</li>";
                return;
            }

            disponibles.forEach(v => {
                lista.innerHTML += `<li><strong>[ID: ${v.id}]</strong> - ${v.marca} ${v.modelo} (${v.categoria})</li>`;
            });
        })
        .catch(error => console.error("Error vehículos:", error));
}

function listarClientes() {
    fetch(URL + "listarClientes.php")
        .then(res => res.json())
        .then(data => {
            listaClientes.innerHTML = "";
            if (data.length === 0) {
                listaClientes.innerHTML = "<li>No hay clientes registrados</li>";
                return;
            }
            data.forEach(c => {
                listaClientes.innerHTML += `<li><strong>[ID: ${c.id}]</strong> - ${c.nombre} (Lic: ${c.licencia})</li>`;
            });
        })
        .catch(error => console.error("Error clientes:", error));
}

function crearReserva() {
    const data = {
        vehiculo_id: vehiculo_id.value,
        cliente_id: cliente_id.value,
        fecha_inicio: fecha_inicio.value,
        fecha_fin: fecha_fin.value
    };

    fetch(URL + "reservas.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
    .then(res => res.text())
    .then(txt => {
        if (txt.trim() === "ok") {
            listar();
            listarClientes();
            listarReservas();
            
            vehiculo_id.value = ""; 
            cliente_id.value = ""; 
            fecha_inicio.value = ""; 
            fecha_fin.value = "";
        } else {
            alert("Reserva rechazada: " + txt);
        }
    })
    .catch(error => console.error("Error reservas:", error));
}

function listarReservas() {
    fetch(URL + "listarReservas.php")
        .then(res => res.json())
        .then(data => {
            listaReservas.innerHTML = "";
            if (data.length === 0) {
                listaReservas.innerHTML = "<li>No hay reservas hechas aún</li>";
                return;
            }
            data.forEach(r => {
                listaReservas.innerHTML += `
                    <li>
                        <strong>Reserva #${r.id}</strong><br>
                         Cliente: ${r.nombre}<br>
                         Vehículo: ${r.marca} ${r.modelo}<br>
                         Período: ${r.fecha_inicio} hasta ${r.fecha_fin}
                    </li>`;
            });
        })
        .catch(error => console.error("Error reservas:", error));
}