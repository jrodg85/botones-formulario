// Variable global
var booleanComprobarCheckBoxPresentaFacturasCurso = false;
var booleanComprobarNombre = false;
var booleanComprobarPrimerApellido = false;
var booleanComprobarSegundoApellido = false;
var booleanComprobarEmpleo = false;
var booleanComprobarNIF = false;
var booleanComprobarCorreoElectronico = false;
var booleanComprobarSeleccionIdioma = false;
var booleanComprobarCiudad = false;
var booleanComprobarDia = false;
var booleanComprobarMes = false;


//funcion de comprobacion
function comprobarCheckBoxPresentaFacturasCurso() {
    var checkboxState = this.getField("PRESENTA FACTURAS CURSO").isBoxChecked(0); // Verificar el estado del checkbox
    if (checkboxState) { // Si el checkbox está marcado
        booleanComprobarCheckBoxPresentaFacturasCurso = true;
    } else { // Si el checkbox no está marcado
        app.alert("Para la evaluación de la ayuda, es obligatorio la presentacion de facturas, por tanto, marque la casilla de FACTURAS DE CURSO, CLASES Y/O TASAS DE EXAMEN JUNTO CON JUSTIFICANTES DE PAGO.");
    }
   
}

function comprobarNombre() {
    // Accedemos al valor del "NOMBRE"
    var nombre = this.getField("NOMBRE").valueAsString;

    // Verificamos si el campo está vacío
    if (nombre === "") {
        app.alert("Rellene el campo NOMBRE.", 0);
        return;
    }

   // Verificamos si el campo comienza o termina con un espacio usando charAt
    if (nombre.charAt(0) === " " || nombre.charAt(nombre.length - 1) === " ") {
        app.alert("No se admiten espacios al principio y/o al final del texto, elimine los espacios en el campo NOMBRE al principio y al final del campo.", 0);
        return;
    }

    booleanComprobarNombre = true;
}


function comprobarPrimerApellido() {
    // Accedemos al valor del "PRIMER APELLIDO"
    var nombre = this.getField("PRIMER APELLIDO").valueAsString;

    // Verificamos si el campo está vacío
    if (nombre === "") {
        app.alert("Rellene el campo PRIMER APELLIDO.", 0);
        return;
    }

   // Verificamos si el campo comienza o termina con un espacio usando charAt
    if (nombre.charAt(0) === " " || nombre.charAt(nombre.length - 1) === " ") {
        app.alert("No se admiten espacios al principio y/o al final del texto, elimine los espacios en el campo PRIMER APELLIDO al principio y al final del campo.", 0);
        return;
    }

    booleanComprobarPrimerApellido = true;
}


function comprobarSegundoApellido() {
    // Accedemos al valor del "SEGUNDO APELLIDO"
    var nombre = this.getField("SEGUNDO APELLIDO").valueAsString;

    // Verificamos si el campo está vacío
    if (nombre === "") {
        app.alert("Rellene el campo SEGUNDO APELLIDO.", 0);
        return;
    }

   // Verificamos si el campo comienza o termina con un espacio usando charAt
    if (nombre.charAt(0) === " " || nombre.charAt(nombre.length - 1) === " ") {
        app.alert("No se admiten espacios al principio y/o al final del texto, elimine los espacios en el campo SEGUNDO APELLIDO al principio y al final del campo.", 0);
        return;
    }

    booleanComprobarSegundoApellido = true;
}


function comprobarEmpleo() {
    // Accedemos al valor del "EMPLEO"
    var nombre = this.getField("EMPLEO").valueAsString;

    // Verificamos si el campo está vacío
    if (nombre === "") {
        app.alert("Rellene el campo EMPLEO.", 0);
        return;
    }

   // Verificamos si el campo comienza o termina con un espacio usando charAt
    if (nombre.charAt(0) === " " || nombre.charAt(nombre.length - 1) === " ") {
        app.alert("No se admiten espacios al principio y/o al final del texto, elimine los espacios en el campo EMPLEO al principio y al final del campo.", 0);
        return;
    }

    booleanComprobarEmpleo = true;
}


function comprobarNIF() {
    // Accedemos al valor del campo donde se introduce el DNI o NIE
    var dni = this.getField("NIF").valueAsString;

    // Comprobamos que la longitud es correcta
    if (dni.length !== 9) {
        app.alert("El formato del DNI/NIE es incorrecto. \nDebe de ser del tipo 12345678A, A1234567B en caso de ser NIE. \nLas letras válidas son solo las MAYUSCULAS.", 0);
        return;
    }

    // Extraemos la parte numérica y la letra
    var letraFinal = dni.charAt(8).toUpperCase(); // Convertimos a mayúscula por si acaso
    var parteNumerica;
    
    // Comprobamos si es un DNI (8 números + letra)
    var esDNI = /^\d{8}[A-Z]$/.test(dni);
    
    // Comprobamos si es un NIE (X,Y,Z + 7 números + letra)
    var esNIE = /^[XYZ]\d{7}[A-Z]$/.test(dni);

    // Verificamos que sea DNI o NIE
    if (!esDNI && !esNIE) {
        app.alert("El formato del DNI/NIE es incorrecto.\nDebe de ser del tipo 12345678A, A1234567B en caso de ser NIE. \nLas letras válidas son solo las MAYUSCULAS.", 0);
        return;
    }

    if (esDNI) {
        parteNumerica = dni.substr(0, 8);
    } else { // es NIE
        var letraInicial = dni.charAt(0);
        var conversion = {X: 0, Y: 1, Z: 2};
        parteNumerica = conversion[letraInicial] + dni.substr(1, 7);
    }

    // Calculamos la letra correspondiente a la parte numérica
    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    var letraCalculada = letras.charAt(parteNumerica % 23);

    // Comprobamos que la letra es correcta
    if (letraFinal !== letraCalculada) {
        app.alert("La letra del DNI/NIE no es válida. Verifique la letra", 3);
        return;
    }

    // Si todo es correcto, mostramos un mensaje de confirmación
    booleanComprobarNIF =true;
}

function comprobarCorreoElectronico() {
    // Accedemos al valor del campo donde se introduce el correo electrónico
    var correo = this.getField("CORREO ELECTRÓNICO").valueAsString;
    
    // Definimos la expresión regular para validar un correo electrónico
    var regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Comprobamos si el correo cumple con el formato
    if (regexCorreo.test(correo)) {
        // Si el formato es correcto, mostramos un mensaje de confirmación
        booleanComprobarCorreoElectronico = true;
    } else {
        // Si el formato no es correcto, mostramos un mensaje de error
        app.alert("El formato del correo electrónico es incorrecto.", 3);
    }
}


function comprobarSeleccionDeIdioma() {
    // Nombre del conjunto de Radio Buttons
    var nombreConjunto = "SELECCION DE IDIOMA";

    // Intentamos obtener el valor seleccionado en el conjunto de Radio Buttons
    var field = this.getField(nombreConjunto);
    if (!field) {
        app.alert("Error: No se encuentra el conjunto de Radio Buttons con nombre '" + nombreConjunto + "'.", 3);
        return;
    }
    
    var idiomaSeleccionado = field.value;
    if (!idiomaSeleccionado || idiomaSeleccionado === "NO SELECCIONADO") {
        app.alert("Por favor, seleccione el idioma por el cual solicita la ayuda.", 3);
        return;
    }

    // Lista de idiomas válidos
    var idiomasValidos = ["INGLÉS", "FRANCÉS", "ÁRABE", "RUSO", "ALEMÁN", "ITALIANO", "PORTUGUÉS"];

    // Comprobamos si el idioma seleccionado está en la lista de idiomas válidos usando indexOf
    if (idiomasValidos.indexOf(idiomaSeleccionado) !== -1) {
        // Si el idioma seleccionado es válido, mostramos un mensaje de confirmación
        booleanComprobarSeleccionIdioma = true;
    } else {
        // Si no se ha seleccionado un idioma válido, mostramos un mensaje de error
        app.alert("Por favor, seleccione el idioma por el cual solicita la ayuda.", 3);
    }
}


function comprobarCiudad() {
    // Accedemos al valor del "CIUDAD"
    var nombre = this.getField("CIUDAD").valueAsString;

    // Verificamos si el campo está vacío
    if (nombre === "") {
        app.alert("Rellene el campo CIUDAD.", 0);
        return;
    }

   // Verificamos si el campo comienza o termina con un espacio usando charAt
    if (nombre.charAt(0) === " " || nombre.charAt(nombre.length - 1) === " ") {
        app.alert("No se admiten espacios al principio y/o al final del texto, elimine los espacios en el campo CIUDAD.", 0);
        return;
    }

    booleanComprobarCiudad= true;
}


function comprobarDia() {
    // Nombre del campo del menú desplegable
    var nombreCampo = "DIA";

    // Intentamos obtener el valor seleccionado en el menú desplegable
    var field = this.getField(nombreCampo);
    if (!field) {
        app.alert("Error: No se encuentra el campo con nombre '" + nombreCampo + "'.", 3);
        return;
    }

    var diaSeleccionado = field.valueAsString;

    // Verificamos si el valor seleccionado está en blanco (un espacio en blanco en este caso)
    if (diaSeleccionado === " ") {
        app.alert("Por favor, rellene el Campo del DIA de la antefirma del SOLICITANTE.", 3);
        return;
    }

    // Convertimos el valor seleccionado a número y comprobamos si está en el rango de 1 a 31
    var diaNumerico = parseInt(diaSeleccionado, 10);
    if (isNaN(diaNumerico)) {
        app.alert("Error: El valor seleccionado no es un número.", 3);
        return;
    }

    if (diaNumerico >= 1 && diaNumerico <= 31) {
        // Si el día es válido, mostramos un mensaje de confirmación
        booleanComprobarDia = true;
    } else {
        // Si el día no es válido, mostramos un mensaje de error
        app.alert("Por favor, seleccione un día válido entre 1 y 31.", 3);
    }
}


function comprobarMes() {
    // Nombre del campo del menú desplegable
    var nombreCampo = "MES";

    // Intentamos obtener el valor seleccionado en el menú desplegable
    var field = this.getField(nombreCampo);
    if (!field) {
        app.alert("Error: No se encuentra el campo con nombre '" + nombreCampo + "'.", 3);
        return;
    }
    
    var mesSeleccionado = field.valueAsString;
    
    // Verificamos si el valor seleccionado está en blanco (un espacio en blanco en este caso)
    if (mesSeleccionado === " ") {
        app.alert("Por favor, rellene el Campo del MES de la antefirma del SOLICITANTE.", 3);
        return;
    }

    // Lista de meses válidos
    var mesesValidos = [
        "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", 
        "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
    ];

    // Comprobamos si el mes seleccionado está en la lista de meses válidos usando indexOf
    if (mesesValidos.indexOf(mesSeleccionado.toUpperCase()) !== -1) {
        // Si el mes es válido, mostramos un mensaje de confirmación y asignamos true a booleanComprobarMes
        booleanComprobarMes = true;
    } else {
        // Si el mes no es válido, mostramos un mensaje de error
        app.alert("Por favor, seleccione un mes válido.", 3);
    }
}


// Llamada a la función principal
comprobarCheckBoxPresentaFacturasCurso();
comprobarNombre();
comprobarPrimerApellido();
comprobarSegundoApellido();
comprobarEmpleo();
comprobarNIF();
comprobarCorreoElectronico();
comprobarSeleccionDeIdioma();
comprobarCiudad();
comprobarDia();
comprobarMes();
app.alert("fin de comprobaciones", 3);

// Verificar el valor de booleanComprobarCheckBoxAnexoI
if (booleanComprobarCheckBoxPresentaFacturasCurso &&  booleanComprobarNombre && booleanComprobarPrimerApellido && booleanComprobarSegundoApellido && booleanComprobarEmpleo && booleanComprobarNIF &&  booleanComprobarCorreoElectronico && booleanComprobarSeleccionIdioma && booleanComprobarCiudad && booleanComprobarDia && booleanComprobarMes) {

    // Ocultar y bloquear campos según los requisitos
    this.getField("BORRAR DATOS FORMULARIO").display = display.hidden;
    this.getField("EDITAR").display = display.visible;
    this.getField("GUARDAR").display = display.visible;
    this.getField("FIRMA S1").display = display.visible;
    this.getField("VALIDAR").display = display.hidden;

    var camposABloquear = [
        "NOMBRE", "PRIMER APELLIDO", "SEGUNDO APELLIDO", "EMPLEO", "NIF", "CORREO ELECTRÓNICO", "SELECCION DE IDIOMA", "PRESENTA ANEXO I",
        "PRESENTA CERTIFICADO DE ACREDITACION", "PRESENTA FACTURAS CURSO", "CIUDAD", "DIA", "MES"
    ];
    
    for (var i = 0; i < camposABloquear.length; i++) {
        this.getField(camposABloquear[i]).readonly = true;
    }
    
    // Nombre del campo checkbox
    var nombreCheckboxPresentaAnexoI = "PRESENTA ANEXO I";

    // Obtenemos el estado del checkbox
    var nombreCheckboxPresentaAnexoI = this.getField(nombreCheckboxPresentaAnexoI);

    // Comprobamos el estado del checkbox
    if (nombreCheckboxPresentaAnexoI.valueAsString === "Off") {
        // Si el checkbox no está activado, ocultamos el botón "FIRMA MANUSCRITA SOLICITANTE" y mostramos el botón "FIRMA SOLICITANTE"
        this.getField("FIRMA MANUSCRITA SOLICITANTE").display = display.hidden;
        this.getField("FIRMA SOLICITANTE").display = display.visible;

    } else {
        // Si el checkbox está activado, mostramos el SOLO LA FIRMA DE S1 y ocultamos LA FIRMA DE SOLICITANTE
        this.getField("FIRMA SOLICITANTE").display = display.hidden;
        this.getField("FIRMA MANUSCRITA SOLICITANTE").display = display.visible;

    }
        app.alert("El Documento ha sido validado correctamente, proceda a su firma", 3);
}
