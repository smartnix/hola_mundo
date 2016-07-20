
var data = [];

function loadList(e) {

    if(e.keyCode == 13){
        //var lista = document.getElementById("lista");
        //var campo = document.getElementById("campo");
        
        let lista = document.getElementById("lista");
        let campo = document.getElementById("campo");

        var array = campo.value.split(",");
        if(array.length >= 2){
            
            data = data.concat(array);
            /*for(a in array){
                addLi(lista, array[a]);
                console.log(array[a]);
            }
            */
            console.log(data[0]);
        }
        else{
            data.push(campo.value);

           // addLi(lista, campo.value);
        }

        campo.value = "";
        data.sort();
        lista.innerHTML = "";

        /*
        data.forEach(function(item) {
           addLi(lista,item); 
        });
        */
        /*ultima version de html */
        data.forEach((item)=>addLi(lista, item));
    }
}

function addLi(list, value) {
    list.innerHTML += "<li onClick='clickItem(\""+value+"\")'>"+value+"</li>";
}

function clickItem(txt) {
    alert(txt);
}