// Nombre del campo checkbox
var nombreCheckbox = "PRESENTA ANEXO I";

// Nombres de los campos botón
var nombreBotonImprimir = "IMPRIMIR";
var nombreBotonValidar = "VALIDAR";

// Obtenemos el estado del checkbox
var checkbox = this.getField(nombreCheckbox);

// Obtenemos los botones
var botonImprimir = this.getField(nombreBotonImprimir);
var botonValidar = this.getField(nombreBotonValidar);

// Comprobamos el estado del checkbox
if (checkbox.valueAsString === "Off") {
    // Si el checkbox no está activado, ocultamos el botón "IMPRIMIR" y mostramos el botón "VALIDAR"
    botonImprimir.display = display.hidden;
    botonValidar.display = display.visible;
} else {
    // Si el checkbox está activado, mostramos el botón "IMPRIMIR" y ocultamos el botón "VALIDAR"
    botonImprimir.display = display.visible;
    botonValidar.display = display.hidden;
}
