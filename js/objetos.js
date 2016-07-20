var data = [];

function saveUsr(){
    var nombre = document.getElementById("nombre");
    var cedula = document.getElementById("cedula");
    var celular = document.getElementById("celular");

    var usr = {nombre:nombre.value,
               cedula:cedula.value,
               celular:celular.value};

               data.push(usr);
               /*comparar entre parejas si a>b retorna1 0 iguales -1 menor */
               data.sort(function (a,b) {
                   return a.cedula - b.cedula;
               });
               nombre.value = "";
               cedula.value = "";
               celular.value = "";
               loadList();
        
    }

function loadList(){
    var list = document.getElementById("lista");
    list.innerHTML = "";
    for(i=0;i<data.length;i++){
        var usr = data[i];
        list.innerHTML += "<h1>"+usr.nombre+"</h1>"+
        "<p><b>Cedula:</br>"+usr.cedula +"</p>"+
        "<p><b>Celular:</br>"+usr.celular +"</p>"+
        "<button onClick='deletee(\""+i+"\")'>Eliminar</button>"+"<hr>";
        console.log(i);
    }
}

function testObj(){
    let test = document.getElementById("test");
    var obj = {};
    obj.nombre = "Juan";
    obj.cedula = 23343;
    obj.pastuso = true;
    obj.fechaNacimiento = new Date();
    obj.carros = [{placa:"eon 54b", marca:"honda"},
                    {placa:"erj 87b",marca:"mazda"}];

    delete obj.cedula;


    test.innerHTML = JSON.stringify(obj);
}

function deletee(i){
    data.splice(i,1);
    loadList();
}