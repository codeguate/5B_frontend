
  var enviarData=false
  var DPI = ""
  var numeroTelefono= ""

function calidarTele(event){
    numeroTelefono = $("#telefono").val();
    enviarData=false;
    let tel
    if((event.keyCode)==8)        //"Enter" Key (13)
      {
        tel=numeroTelefono.substring(0,numeroTelefono.length).replace(/ /g, '').replace(/-/g, '')
        event.stopPropagation();
        numeroTelefono = formatearTel(tel);
        $("#telefono").val(numeroTelefono)
        return false;
      }
    if(numeroTelefono.length>11){
      tel=numeroTelefono.substring(0,10).replace(/ /g, '').replace(/-/g, '')
      numeroTelefono = formatearTel(tel);
        $("#telefono").val(numeroTelefono)

    }else{
      tel=numeroTelefono.replace(/ /g, '').replace(/-/g, '')
      numeroTelefono = formatearTel(tel);
        $("#telefono").val(numeroTelefono)
    }
    if((event.keyCode)==8)        //"Enter" Key (13)
      {
        tel=tel.substring(0,tel.length);
        event.stopPropagation();
        $("#telefono").val(tel)
          return false;
      }
    numeroTelefono = formatearTel(tel);
    $("#telefono").val(numeroTelefono)
}

function calidarArea(event){
  numeroArea = $("#area").val();
  enviarData=false;
  let tel
  if((event.keyCode)==8)        //"Enter" Key (13)
    {
      tel=numeroArea.substring(0,numeroArea.length).replace(/ /g, '').replace("+", '')
      event.stopPropagation();
      $("#area").val("+"+tel)
      return false;
    }
  if(numeroArea.length>5){
    tel=numeroArea.substring(0,5).replace(/ /g, '').replace("+", '')
    $("#area").val("+"+tel)

  }else{
    tel=numeroArea.replace(/ /g, '').replace("+", '')
    $("#area").val("+"+tel)
  }
  
}
  function cuiIsValid(event) {

    DPI = $("#dpi").val();
    if(DPI.length<15){

    
    console.log(DPI);
    
    enviarData=false;
    // console.log(DPI.length)
      let cui=DPI.replace(/ /g, '').replace(/-/g, '')
      if((event.keyCode)==8)        //"Enter" Key (13)
      {
        cui=cui.substring(0,cui.length);
        event.stopPropagation();
        return false;
      }
      if (!cui) {
          console.log("CUI vacío");
          DPI = formatearDPI(cui);
          $("#dpi").val(DPI)
          return true;
      }

      let cuiRegExp = /^[0-9]{4}\s?[0-9]{5}\s?[0-9]{4}$/;

      if (!cuiRegExp.test(cui)) {
          $("#dpi").addClass('border border-danger')
          // console.log("CUI con formato inválido");
          DPI = formatearDPI(cui);
          $("#dpi").val(DPI)
          return false;
      }

      cui = cui.replace(/\s/, '');
      let depto = parseInt(cui.substring(9, 11), 10);
      let muni = parseInt(cui.substring(11, 13));
      let numero = Array.from(cui.substring(0, 8));
      let verificador = parseInt(cui.substring(8, 9));

      // Se asume que la codificación de Municipios y
      // departamentos es la misma que esta publicada en
      // http://goo.gl/EsxN1a

      // Listado de municipios actualizado segun:
      // http://goo.gl/QLNglm

      // Este listado contiene la cantidad de municipios
      // existentes en cada departamento para poder
      // determinar el código máximo aceptado por cada
      // uno de los departamentos.
      let munisPorDepto = [
          /* 01 - Guatemala tiene:      */ 17 /* municipios. */,
          /* 02 - El Progreso tiene:    */  8 /* municipios. */,
          /* 03 - Sacatepéquez tiene:   */ 16 /* municipios. */,
          /* 04 - Chimaltenango tiene:  */ 16 /* municipios. */,
          /* 05 - Escuintla tiene:      */ 13 /* municipios. */,
          /* 06 - Santa Rosa tiene:     */ 14 /* municipios. */,
          /* 07 - Sololá tiene:         */ 19 /* municipios. */,
          /* 08 - Totonicapán tiene:    */  8 /* municipios. */,
          /* 09 - Quetzaltenango tiene: */ 24 /* municipios. */,
          /* 10 - Suchitepéquez tiene:  */ 21 /* municipios. */,
          /* 11 - Retalhuleu tiene:     */  9 /* municipios. */,
          /* 12 - San Marcos tiene:     */ 30 /* municipios. */,
          /* 13 - Huehuetenango tiene:  */ 32 /* municipios. */,
          /* 14 - Quiché tiene:         */ 21 /* municipios. */,
          /* 15 - Baja Verapaz tiene:   */  8 /* municipios. */,
          /* 16 - Alta Verapaz tiene:   */ 17 /* municipios. */,
          /* 17 - Petén tiene:          */ 14 /* municipios. */,
          /* 18 - Izabal tiene:         */  5 /* municipios. */,
          /* 19 - Zacapa tiene:         */ 11 /* municipios. */,
          /* 20 - Chiquimula tiene:     */ 11 /* municipios. */,
          /* 21 - Jalapa tiene:         */  7 /* municipios. */,
          /* 22 - Jutiapa tiene:        */ 17 /* municipios. */
      ];

      if (depto === 0 || muni === 0)
      {
          console.log("CUI con código de municipio o departamento inválido.");
          DPI = formatearDPI(cui);
          $("#dpi").val(DPI)
          return false;
      }

      if (depto > munisPorDepto.length)
      {
          console.log("CUI con código de departamento inválido.");
          DPI = formatearDPI(cui);
          $("#dpi").val(DPI)
          return false;
      }

      if (muni > munisPorDepto[depto -1])
      {
          console.log("CUI con código de municipio inválido.");
          DPI = formatearDPI(cui);
          $("#dpi").val(DPI)
          return false;
      }

      // Se verifica el correlativo con base
      // en el algoritmo del complemento 11.
      let total = 0;

      for (let i = 0; i < numero.length; i++)
      {
          total += numero[i] * (i + 2);
      }

      let modulo = (total % 11);
      DPI = formatearDPI(cui);
      console.log("CUI con módulo: " + modulo);
      $("#dpi").removeClass('border border-danger')
      $("#dpi").addClass('border border-success')
      enviarData=true;
      verificar("dpi",$("#dpi").val().replace(/ /g, '').replace(/-/g, ''));
      $("#dpi").val(DPI)

      return modulo === verificador;
    }
    else{
      $("#dpi").val(formatearDPI(DPI.replace(/ /g, '').replace(/-/g, '')))

    }
  }
  function formatearDPI(dpi){
    let numero = Array.from(dpi);
    let result = "";
    numero.forEach((element,i) => {
      result+=element
      if(i==3){
        result+=" - ";
      }

      if(i==8){
        result+=" - ";
      }

    });
    if(dpi.length>13){
      result = result.substring(0,result.length-1)
      enviarData=true;
      $("#dpi").removeClass('border border-danger')
      $("#dpi").addClass('border border-success')
    }else{
      enviarData=false;

      $("#dpi").addClass('border border-danger')


    }
    return result;
  }
  function formatearTel(tel){
    let numero = Array.from(tel);
    let result = "";
    numero.forEach((element,i) => {
      result+=element
      if(i==3){
        result+=" - ";
      }

    });

    if(tel.length>=8){
      result = result.substring(0,16)
      enviarData=true;
      $("#telefono").removeClass('border border-danger')
      $("#telefono").addClass('border border-success')
    }else{
      enviarData=false;

      $("#telefono").addClass('border border-danger')


    }
    return result;
  }

$(document).ready(function () {
    $("#dpi").blur(async function (e) { 
        {
            await verificar("dpi",$("#dpi").val().replace(/ /g, '').replace(/-/g, ''));
            if(valid.dpi){
                $("#dpi").css('border-color','red');
                $("#loaderModal").modal('hide');

            }else{
                $("#dpi").css('border-color','green');
                $("#loaderModal").modal('hide');
            }
        }
    });

    $("#email1").blur(async function (e) { 
        {
            await verificar("email",$("#email1").val());
            if(valid.email){
                $("#email1").css('border-color','red');
                $("#loaderModal").modal('hide');

            }else{
                $("#email1").css('border-color','green');
                $("#loaderModal").modal('hide');
            }
        }
    });

    $("#codigo").blur(async function (e) { 
        {
            await verificar("codigo",$("#codigo").val());
            await buscaCodigo($("#codigo").val());
            if(valid.codigo){
                $("#codigo").css('border-color','red');
                $("#guardar").attr('disabled',true);
                $("#loaderModal").modal('hide');
                
            }else{
                $("#codigo").css('border-color','green');
                $("#guardar").attr('disabled',false);
                $("#loaderModal").modal('hide');
            }
        }
    });
   

});