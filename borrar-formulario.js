// Limpiar campos de texto
this.getField("NOMBRE").value = "";
this.getField("PRIMER APELLIDO").value = "";
this.getField("SEGUNDO APELLIDO").value = "";
this.getField("EMPLEO").value = "";
this.getField("NIF").value = "";
this.getField("CORREO ELECTRÓNICO").value = "";
this.getField("CIUDAD").value = "";

// Configurar el valor del radio button a "NO SELECCIONADO"
var radioButton = this.getField("SELECCION DE IDIOMA");
radioButton.value = "NO SELECCIONADO";

// Configurar menús desplegables
this.getField("DIA").value = " ";
this.getField("MES").value = " ";

// Configurar checkboxes
this.getField("PRESENTA ANEXO I").value = "Off"; // Establecer a verdadero
this.getField("PRESENTA CERTIFICADO DE ACREDITACION").value = "Off"; // Establecer a falso
this.getField("PRESENTA FACTURAS CURSO").value = "Off"; // Establecer a falso


this.getField("VALIDAR").display = display.visible;
this.getField("IMPRIMIR").display = display.hidden;
this.getField("EDITAR").display = display.hidden;
this.getField("GUARDAR").display = display.hidden;
this.getField("FIRMA SOLICITANTE").display = display.hidden;
this.getField("FIRMA S1").display = display.hidden;
this.getField("NO PRECISA DE FIRMA EN ESTE DOCUMENTO").display = display.hidden;
this.getField("FIRMA MANUSCRITA SOLICITANTE").display = display.hidden;
this.getField("CERTIFICADO S1 FIRMA MANUSCRITA").display = display.hidden;
this.getField("CERTIFICADO S1 ACREDITACION").display = display.hidden;
this.getField("CERTIFICADO S1 FACTURAS").display = display.hidden;
