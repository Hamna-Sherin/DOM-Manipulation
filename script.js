document.getElementById("box1").onclick= function(){
    document.getElementById("box1").style.backgroundColor= 'red'
}

document.getElementById("box2").onclick= function(){
    document.getElementById("box2").style.backgroundColor= 'blue'
}

document.getElementById("box3").onclick= function(){
    document.getElementById("box3").style.backgroundColor= 'green'
}

document.getElementById("box4").onclick= function(){
    document.getElementById("box4").style.backgroundColor= 'yellow'
}


document.getElementById("greet").onclick= function(){
    var name= document.getElementById("myName").value
    document.getElementById("hello").innerHTML= "Hello " + name
}