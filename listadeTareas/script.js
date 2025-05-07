console.log("script conectado")
let botonCategoriaTrabajo = document.getElementById("cat1")
let botonCategoriaEstudio = document.getElementById("cat2")
let botonCategoriaHogar = document.getElementById("cat3")
let botonCategoriaOtros = document.getElementById("cat4")
let arrayTareas = []
function guardarTarea() {
    console.log("--------------------guardarTarea--------------------")
    let nombre = document.getElementById("inputNombreTarea").value
    let categoria = document.getElementById("inputCategoriaTarea").value
    let prioridad = parseInt(document.getElementById("inputPrioridadTarea").value)
    let newTarea = {nombre, categoria, prioridad}
    arrayTareas.push(newTarea)
    console.log(arrayTareas)
    mostrarTareas(arrayTareas)
}

function crearTarea(categoria, prioridad, nombre, array, id) {
    console.log("--------------------crearTarea--------------------")
    switch (categoria) {
        case "categoriaTrabajo":
            categoria = "tareaCat1"
            break;
        case "categoriaEstudio":
            categoria = "tareaCat2"
            break;
        case "categoriaHogar":
            categoria = "tareaCat3"
            break;
        case "categoriaOtros":
            categoria = "tareaCat4"
            break;
    }
    switch (prioridad) {
        case 1:
            prioridad = "altaPrioridad"
            textoPrioridad = "Alta Prioridad"
            break;
        case 2:
            prioridad = "mediaPrioridad"
            textoPrioridad = "Prioridad Media"
            break;
        case 3:
            prioridad = "bajaPrioridad"
            textoPrioridad = "Prioridad Baja"
            break;
    }
    let tarea = `
    <div class="tarea" id=${id}>
        <div class="izquierda">
            <span class="${categoria}">•</span><span class="tituloTarea">${nombre}</span><span class="${prioridad}">${textoPrioridad}</span>
        </div>
        <div class="derecha">
            <img src="img/pendiente.png" class="estadoTarea">
            <img src="img/borrar.png" class="borrarTarea" onclick="borrarTarea(${id})">
        </div>
    </div>`
    console.log(contador)
    return tarea
}

let contador = 0
function mostrarTareas(arrayTareas) {
    console.log("--------------------MostrarTareas--------------------")
    let contenedor = document.getElementById("listaTareas")
    contenedor.innerHTML = ""
    arrayTareas.forEach( (tarea, index) => {  
        let nuevaTarea = crearTarea(tarea.categoria, tarea.prioridad, tarea.nombre, arrayTareas, index)
        console.log(nuevaTarea)
        contenedor.innerHTML += nuevaTarea
    });
    console.log(arrayTareas)
}

function borrarTarea(index) {
    console.log("--------------------borrarTarea--------------------")
    console.log("borrando tarea...")
    arrayTareas.splice(index, 1); 
    mostrarTareas();
    console.log("tarea borrada exitosamente.")
}