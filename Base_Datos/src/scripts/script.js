function realizarConsulta() {
    let seleccion = document.getElementById("query").value;

    if (seleccion === "") {
        alert("Por favor, selecciona una opción.");
        return;
    }

    fetch(`consulta.php?tabla=${seleccion}`)
        .then(response => response.json())
        .then(data => {
            let tabla = document.getElementById("datos");
            let encabezados =document.getElementById("encabezados")
            encabezados.innerHTML = ""; //Limpiar el encabezado
            tabla.innerHTML = ""; // Limpiar la tabla
            
            //  var encabezados = "";
            // for(var encabezado in data){
            //     var eninfo = encabezado;
            //     encabezados += "<th>" + data [eninfo]+ "</th>";
            // }
            // console.log(encabezados);
            Object.keys(data).forEach(key => {
                console.log(key);
            });

            data.forEach(row => {
                let newRow = tabla.insertRow();
                newRow.insertCell().innerText = row.ID_Doctor;
                newRow.insertCell().innerText = row.Nombre;
                newRow.insertCell().innerText = row.Especialidad;
            });
        })
        .catch(error => console.error("Error en la consulta:", error));
}
