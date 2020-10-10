const Url = 'http://18.188.87.110/datos'
function insertar() {
    let parametros = {
        name: document.getElementById("nombre").value
    }
    
    $.ajax({
        url:Url,
        type: 'Post',
        data: parametros,
        success: function(result){
            console.log(result)
        },
        error: function(error){
            console.log(error)
        }
    });

}

function obtener() {
    var GUrl = 'https://api.softwareavanzado.world/index.php?webserviceClient=administrator'
    +'&webserviceVersion=1.0.0&option=contact&api=hal'
    +'&list[limit]=0&filter[search]=201603166'
    
    $.ajax({
        url:Url,
        type: 'Get',
        success: function(result){
            var ob = result.data
            console.log(result)
            
            ob.forEach(element => {
                var newRow=document.getElementById('customers').insertRow();
                newRow.innerHTML="<td>"+element.id+"</td><td>"+element.nombre+"</td>"; 
            });
            
        },
        error: function(error){
            console.log(error)
        }
    });

}
obtener()
