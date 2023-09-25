// Comprobamos el estado del checkbox
if (this.getField("PRESENTA ANEXO I").valueAsString === "Off") {
    // Si el checkbox no está activado, ocultamos el botón "IMPRIMIR" y mostramos el botón "VALIDAR"
    this.getField("IMPRIMIR").display = display.hidden;
    this.getField("VALIDAR").display = display.visible;
    this.getField("CERTIFICADO S1 FIRMA MANUSCRITA").display=display.hidden;
} else {
    // Si el checkbox está activado, mostramos el botón "IMPRIMIR" y ocultamos el botón "VALIDAR"
    this.getField("IMPRIMIR").display = display.visible;
    this.getField("VALIDAR").display = display.hidden;
    this.getField("CERTIFICADO S1 FIRMA MANUSCRITA").display=display.visible;
}
