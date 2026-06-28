const form = document.getElementById("formRegistro");
const lista = document.getElementById("listaRegistros");
const mensaje = document.getElementById("mensaje");
const contador = document.getElementById("contador");

let totalRegistros = 0;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const categoria = document.getElementById("categoria").value.trim();

    // VALIDACIÓN
    if (nombre === "" || descripcion === "" || categoria === "") {
        mensaje.innerHTML = `
            <div class="alert alert-danger">
                Todos los campos son obligatorios
            </div>
        `;
        return;
    }

    mensaje.innerHTML = `
        <div class="alert alert-success">
            Registro agregado correctamente
        </div>
    `;

    // CREAR ELEMENTO
    const col = document.createElement("div");
    col.classList.add("col-md-4", "mb-3");

    col.innerHTML = `
        <div class="card shadow">
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">${descripcion}</p>
                <span class="badge bg-primary">${categoria}</span>
                <br><br>
                <button class="btn btn-danger btn-sm eliminar">Eliminar</button>
            </div>
        </div>
    `;

    // BOTÓN ELIMINAR
    col.querySelector(".eliminar").addEventListener("click", function () {
        col.remove();
        totalRegistros--;
        contador.textContent = totalRegistros;
    });

    lista.appendChild(col);

    totalRegistros++;
    contador.textContent = totalRegistros;

    form.reset();
});