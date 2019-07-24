
var valid = {
    dpi:false,
    email:false,
    codigo:false
}

function guardar(data){
    if($("#dpi").hasClass('border-success') && $("#email1").hasClass('border-success') && $("#codigo").hasClass('border-success')){
        $.ajax({
            type: "POST",
            async:true,
            cache:false,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data:JSON.stringify(data),
            url: "https://5bconectate.com/backend/public/api/users",
            success: function (response) {
    
                $("#loaderModal").modal('hide');
                if(response.id){
                    url = "https://eu57.chat-api.com/instance54781/sendFile?token=jyxxunefvf2f43sz&phone="+response.telefono+"&body=https://5bconectate.com/backend/public/"+response.codigo+"_salida.png&filename="+response.codigo+".png"
                    $.ajax({
                        type: "GET",
                        url: url,
                        dataType: "json",
                        success: function (response1) {
                            if(response1.sent){
                                location.href = "./dashboard/registrado.html"
                            }
                        }
                    });
                    
                }
            },
            error:async function (error){
                if(error.status==400){
                    $("#alertModal").removeClass("d-none");
                    await verificar("email",$("#email1").val());
                    await verificar("dpi",$("#dpi").val().replace(/ /g, '').replace(/-/g, ''));
                    setTimeout(() => {
                        $("#loaderModal").modal('hide');
                        
                    }, 500);
                }
                console.log(error);
    
                $("#loaderModal").modal('hide');
                
            }
        });

    }else if(!$("#dpi").hasClass('border-success')){
        $("#alertModal").removeClass("d-none");
        setTimeout(() => {
            $("#loaderModal").modal('hide');
            
        }, 500);
        
    }else if(!$("#email1").hasClass('border-success')){
        console.log('eror email');
        $("#alertModal").removeClass("d-none");
        setTimeout(() => {
            $("#loaderModal").modal('hide');
            
        }, 500);
        
    }else if(!$("#codigo").hasClass('border-success')){
        console.log('eror codigo');
        $("#alertModal").removeClass("d-none");
        setTimeout(() => {
            $("#loaderModal").modal('hide');
            
        }, 500);
        
    }
    
}

function verificar(type,id){
    if(id!=""){
        var data = {
            id:0,
            state:id,
            filter:type
        }

        if(type=="email"){
            type="email1";
        }
            $.ajax({
                type: "GET",
                async:true,
                cache:false,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                url: "https://5bconectate.com/backend/public/api/filter/"+data.id+"/users/"+data.state+"?filter="+data.filter,
                success: function (response) {
                        console.log(response);
                        console.log("https://5bconectate.com/backend/public/api/filter/"+data.id+"/users/"+data.state+"?filter="+data.filter);
                        
                        
                    if(response.length>0){
                        $("#"+type+"Verificacion").removeClass('d-none')
                        $("#"+type).addClass('border border-danger')
                        $("#"+type).removeClass('border border-success')
                    }else{
                        $("#"+type+"Verificacion").addClass('d-none')
                        $("#"+type).removeClass('border border-danger')
                        $("#"+type).addClass('border border-success')
                    }
                    
                },
                error: function (error){
                    if(error.status==404){
                        return false;
                    }
                }
            });
        
    }else{
        return false;
    }
}



function buscaCodigo(id){
    if(id!=""){
        var data = {
            id:0,
            state:id,
            filter:"codigo"
        }

        try{
        
            $.ajax({
                type: "GET",
                async:true,
                cache:false,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                url: "https://5bconectate.com/backend/public/api/filter/"+data.id+"/codigos/"+data.state+"?filter="+data.filter,
                success: function (response) {
                    $("#codigoVerificacion").addClass('d-none')
                    if(response.length>0){
                        $.ajax({
                            type: "GET",
                            async:true,
                            cache:false,
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            url: "https://5bconectate.com/backend/public/api/filter/"+data.id+"/users/"+data.state+"?filter="+data.filter,
                            success: function (response) {
                                if(response.length>0){
                                    if(response[0]){
                                        if(response[0].email==$("#email1").val()){
                                            $("#codigoVerificacion").addClass('d-none')
                                            $("#codigoVerificacion2").addClass('d-none')
                                            $("#codigo").removeClass('border border-danger')
                                            $("#codigo").addClass('border border-success')
                                        }else{
                                            $("#codigoVerificacion").addClass('d-none')
                                            $("#codigoVerificacion2").removeClass('d-none')
                                            $("#codigo").addClass('border border-danger')
                                            $("#codigo").removeClass('border border-success')
                                        }
                                    }
                                }else{
                                    $("#codigoVerificacion").addClass('d-none')
                                    $("#codigoVerificacion2").addClass('d-none')
                                    $("#codigo").removeClass('border border-danger')
                                    $("#codigo").addClass('border border-success')
                                }
                                
                            },
                            error: function (error){
                                if(error.status==404){
                                    return false;
                                }
                            }
                        });
                        
                    }else{
                        $("#codigoVerificacion").removeClass('d-none')
                        $("#codigo").addClass('border border-danger')
                        $("#codigo").removeClass('border border-success')
                    }
                },
                error: function (error){
                    if(error.status==404){
                        return false;
                    }
                }
            });
        }
        catch(error){
            
        }
    }else{
        return false;
    }
}

$(document).ready(function () {
    $("#guardar").attr('disabled',true);
    

    $("#email1").keyup(async function (e) { 
        if ( e.which != 13 ) {
            e.preventDefault();
            $("#loaderModal").modal('hide');
        }else{
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

    $("#codigo").keyup(async function (e) { 
        if ( e.which != 13 ) {
            e.preventDefault();
            $("#loaderModal").modal('hide');
        }else{
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

    $("#guardar").click(function (e) { 
        $("#loaderModal").modal("show");
        e.preventDefault();
        var data = {
            nombres:$("#name").val().split(' ')[0],
            apellidos:$("#name").val().split(' ')[1],
            telefono:($("#area").val().substring(0,$("#area").val().length).replace(/ /g, '').replace("+", ''))+""+($("#telefono").val().substring(0,$("#telefono").val().length).replace(/ /g, '').replace(/-/g, '')),
            dpi:$("#dpi").val().replace(/ /g, '').replace(/-/g, ''),
            email:$("#email1").val(),
            password:"5Bconectados",
            username:$("#email1").val().split('@')[0],
            codigo:$("#codigo").val()
        }
        if(!buscaCodigo(data.codigo)){
            guardar(data);
        }
        
        
    });
});