$(function(){
    $("#btn").on("click", function(){
        let num11 = Number($("#box1").val());
        let num22 = Number($("#box2").val());
        let num33 = 0;
        let opss = $("#ops").val();

        if (num11 < 0 || num22 < 0){
            alert("Error :(");
            return;
        }

        // FIXED: compare against the real option values, one by one
        if ((opss == "division" || opss == "modulo") && num22 == 0){
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        if (opss == "plus"){
            num33 = num11 + num22;
        }
        else if (opss == "minus"){
            num33 = num11 - num22;
        }
        else if (opss == "multiply"){
            num33 = num11 * num22;
        }
        else if (opss == "division"){
            num33 = num11 / num22;
        }
        else if (opss == "modulo"){
            num33 = num11 % num22;
        }
        else{
            console.log("choose something bro");
            alert("come on");
            return;
        }

        alert(num33);
        console.log(num33);
    });

    setInterval(function(){
        alert("Please use me bro.");
    }, 30000);
});