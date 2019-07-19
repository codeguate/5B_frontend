
function verificaCodigo(text){
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: "http://backend.devcodegt.com/p2p_encuestas/public/api/users",
        success: function (response) {
            console.log(response);
            
        }
    });
}