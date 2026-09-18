const ball = document.getElementById("ball")
let Size = 200;
let color = 'red';
ball.textContent = Size + "px";
ball.addEventListener("click", function(){
    
    if (Size >= 420){
        ball.style.width = 200 + "px";
        ball.style.height = 200 + "px";
        Size = 200;
    }
    else{
    Size += 10;
    ball.style.width = Size + "px";
    ball.style.height = Size + "px";
    }

    if (color == 'red'){
        color = 'green'
    }
    else if (color == 'green'){
        color = 'blue'
    }
    else{
        color = 'red'
    }

    ball.style.backgroundColor = color;
    ball.textContent = Size + "px";
})

ball.addEventListener("mouseleave", function(){
    if (Size > 200){
    Size -= 5;
    ball.style.width = Size + "px";
    ball.style.height = Size + "px";
    }
    if (color == 'blue'){
        color = 'green'
    }
    else if (color == 'red'){
        color = 'blue'
    }
    else{
        color = 'red'
    }

    ball.style.backgroundColor = color;
    ball.textContent = Size + "px";
})