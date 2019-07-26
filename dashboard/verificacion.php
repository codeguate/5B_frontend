<?php
$codigo = $_GET['codigo'];
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <link rel="apple-touch-icon" sizes="57x57" href="./../Asset/img/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="./../Asset/img/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="./../Asset/img/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="./../Asset/img/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="./../Asset/img/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="./../Asset/img/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="./../Asset/img/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="./../Asset/img/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="./../Asset/img/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="./../Asset/img/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./../Asset/img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="./../Asset/img/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./../Asset/img/favicon/favicon-16x16.png">
    <link rel="manifest" href="./../Asset/img/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="../Asset/css/style.css">
    <title>5B | Registro Conéctate</title>
  </head>
  <body>
      
      
        <div id="alertModal" class="d-none alert alert-danger" >
          <button type="button" class="close" onClick="$('#alertModal').addClass('d-none');">&times;</button>
          <span id="ErrorMesagge">

          </span>
            </div>
    <div class="row h-100">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="d-flex h-100">
                <div class="d-block m-auto text-center">
                        <img class="w-25 responsive-margin-logo" src="../Asset/img/5B-conectate.png"> 
                        <img class="w-75 responsive-full-w" src="../Asset/img/Titulo.png">
                
                        <div class="row w-75 mx-auto text-light responsive-full-w responsive-mb-3 responsive-widht">
                                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 offset-xs-1 offset-sm-1 offset-md-1 offset-lg-1 text-right d-block responsive-text responsive-widht">
                                    <div>Miercoles 21 de agosto</div>
                                    <div>09:00 horas</div>
                                </div>
                                <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center responsive-widht">
                                    
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQZ/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+A8W4AAH7AbJ4AAAAAElFTkSuQmCC" class="img-responsive" alt="Image"
                                    style="height: 50px;width:3px;">
                                    
                                </div>
                                <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 text-left responsive-text responsive-widht">
                                        <div>Tenedor del Cerro</div>
                                        <div>Antigua Guatemala</div>
                                </div>
                        </div>
                        <div class="w-50 mx-auto text-light mt-5 responsive-none">
                            <div class="d-block w-100 text-center">
                                <span>Organizado por:</span>
                            </div>
                            <div class="d-flex">
                                    <img class="ml-auto" src="./../Asset/img/Logo-5B.png">
                                    <img  class="mr-auto" src="./../Asset/img/Logo-Atefi.png">
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 d-flex">
            <div class="m-auto w-75 h-auto fondo-form shadow">
                
                    <form autocomplete="off" class="mt-auto">
                         <div class="form-group text-center">
                             <h1 class="text-warning">Registro</h1>
                        </div>
                        <div class="form-group">
                            <input disabled type="name" class="form-control" id="name" name="name" placeholder="NOMBRE">
                        </div>
                        <div class="form-group">
                            <input disabled type="text" class="form-control" id="dpi" name="dpi" placeholder="DPI / IDENTIFICACIÓN" onkeyup="cuiIsValid(event);">
                            
                            <div id="dpiVerificacion" class="d-none alert alert-danger w-75 mx-auto">
                               Tu Identificacion ya se encuentra registrado
                            </div>
                            
                        </div>
                        <div class="form-group ">
                            <div class="row mx-auto responsive-inputs" style="width: 80%;"> 
                                    <input disabled type="text" class="form-control col-xs-4 col-sm-4 col-md-4 col-lg-4 " id="area" name="area" placeholder="PREFIJO" onkeyup="calidarArea(event);">
                                    <input disabled type="text" class="form-control col-xs-8 col-sm-8 col-md-8 col-lg-8" id="telefono" name="telefono" placeholder="TELÉFONO" onkeyup="calidarTele(event);">
                            </div>
                                    
                        </div>
                        <div class="form-group">
                            <input disabled type="email" class="form-control" id="email1" name="email1" placeholder="E-MAIL">
                            <div id="email1Verificacion" class="d-none alert alert-danger mt-2 w-75 mx-auto">
                                Tu Email ya se encuentra registrado
                             </div>
                        </div>
                        <div class="form-group">
                            <input disabled type="text" class="form-control" id="empresa" name="empresa" placeholder="EMPRESA" onkeyup="calidarTele(event);">
                        </div>
                        <div class="form-group">
                            <input disabled type="text" class="form-control" id="codigo" name="codigo" placeholder="CÓDIGO" onkeyup="buscaCodigo(this.value);">
                            <div id="codigoVerificacion" class="d-none alert alert-danger mt-2  w-75 mx-auto">
                                Este Código no Existe
                             </div>
                             <div id="codigoVerificacion2" class="d-none alert alert-danger  mt-2 w-75 mx-auto">
                                Tu Codigo ya esta registrado en otro usuario
                             </div>
                        </div>
                        <div class="form-group w-100 text-center">
                            <button type="button" style="cursor:pointer;" class="btn btn-success m-auto w-75" id="guardar">Registrado</button>
                        </div>
                        
                    </form>
                
                    <div class="d-flex">
                        <div class="d-block mt-5 mx-auto text-center mb-3 content_data_contact">
                            <div class="text-light">
                                Asistencia para registro y código:
                            </div>
                            <div class="text-warning mt-3 responsive-margin">
                                contactcenter@5b.com.gt
                            </div>

                            <div class="text-warning">
                                Tel: (+502) 2420-7220
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div class="w-50 mx-auto text-light mt-5 only-responsive">
            <div class="d-block w-100 text-center">
                <span>Organizado por:</span>
            </div>
            <div class="d-flex">
                    <img class="ml-auto" src="./../Asset/img/Logo-5B.png">
                    <img  class="mr-auto" src="./../Asset/img/Logo-Atefi.png">
            </div>
        </div>
    </div>
    
    <div class="modal" id="loaderModal">
        <div style="height: 100%;text-align: center;" >
            <div class="lds-ring" style="align-self: center;margin-top: 15%;"><div></div><div></div><div></div><div></div></div>

        </div>
      </div>

    
    
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="./../Asset/js/main.js"></script>
    <script src="./../Asset/js/events.js"></script>
    <script>
        buscarCodigo('<?php echo $codigo; ?>');
    </script>
  </body>
</html>