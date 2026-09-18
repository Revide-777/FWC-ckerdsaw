const num1 = document.getElementById("box1")
const num2 = document.getElementById("box2")
const ops = document.getElementById("ops")
const btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    let num11 = Number(num1.value) 
    let num22 = Number(num2.value)
    let num33 = 0
    let opss = ops.value

    if (num11 < 0 || num22 < 0){
        alert("Error :(");
        return;
    }
    if ((opss == ('/') || ('%')) && (num22 == 0)){
        alert("It's over 9000!")
        console.log("It's over 9000!")
        return;
    }
    if (opss == ('plus')){
        num33 = num11 + num22
    }
    else if (opss == ('minus')){
        num33 = num11 - num22
    }
    else if (opss == ('multiply')){
        num33 = num11 * num22
    }
    else if (opss == ('division')){
        num33 = num11 / num22
    }
    else if (opss == ('modulo')){
        num33 = num11 % num22
    }
    else{
        console.log("choose something bro")
        alert("come on")
        return
    }
    alert(num33)
    console.log(num33)
})

// window.addEventListener("error", function(event) {
//     console.error("Yo Chat your web suck:", event.message);
// });

setInterval(function(){
    alert("Please use me bro.")
}, 30000);
