// 1. Desbloquear Campos
this.getField("NOMBRE").readonly = false;
this.getField("PRIMER APELLIDO").readonly = false;
this.getField("SEGUNDO APELLIDO").readonly = false;
this.getField("EMPLEO").readonly = false;
this.getField("NIF").readonly = false;
this.getField("CORREO ELECTRÓNICO").readonly = false;
this.getField("SELECCION DE IDIOMA").readonly = false;
this.getField("PRESENTA ANEXO I").readonly = false;
this.getField("PRESENTA CERTIFICADO DE ACREDITACION").readonly = false;
this.getField("PRESENTA FACTURAS CURSO").readonly = false;
this.getField("CIUDAD").readonly = false;
this.getField("DIA").readonly = false;
this.getField("MES").readonly = false;

// 2. Mostrar Campos
this.getField("BORRAR DATOS FORMULARIO").display = display.visible;

// 3. Ocultar Campos
this.getField("EDITAR").display = display.hidden;
this.getField("GUARDAR").display = display.hidden;
this.getField("FIRMA SOLICITANTE").display = display.hidden;
this.getField("FIRMA S1").display = display.hidden;
this.getField("NO PRECISA DE FIRMA EN ESTE DOCUMENTO").display = display.hidden;
this.getField("FIRMA MANUSCRITA SOLICITANTE").display = display.hidden;

// 4. Operaciones en Checkbox
var campo = this.getField("PRESENTA ANEXO I");
console.println("Valor de 'PRESENTA ANEXO I': " + campo.value); // imprimir el valor para depuración

if (campo.value == "Off") {
    this.getField("VALIDAR").display = display.visible;
    this.getField("IMPRIMIR").display = display.hidden;

} else {
    this.getField("IMPRIMIR").display = display.visible;
    this.getField("VALIDAR").display = display.hidden;

}
