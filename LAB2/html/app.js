
    var num = 10;//universal
    let name = "BiG";
    age = 20;

    fruit = ["apple","mango","tangmo"];//args
    obj = {name:"Bunnasorn",age:20,tel:"123-456"};//oop
    
    data = {address:["19","jira","Buriram",31170],name:"John"}

    console.log(fruit[1]);
    console.log(obj.tel);
    console.log(data.address[2]);

    document.getElementById("msg").innerHTML = data.address[2];

    let longText = data.name + " : " + fruit[0];
    
    longText = `${data.name} : 
                ${fruit[1]}`;

    
    $(function(){
        $("#msg").html(longText);
    }); //jQury ready
