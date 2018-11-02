

function checkUser(user){
    var number = user.length;

  calculate();
    if(number>3){
        document.getElementById("numIpt").style.borderColor = "red" ;
        document.getElementById("numIpt2").style.borderColor = "red" ;
        // <!-- document.getElementById("submit").disabled = true;  Disable submit button -->`enter code here`
        document.getElementById("maxReached").style.visibility = "visible";
    }else {
        document.getElementById("maxReached").style.visibility = "hidden";
        document.getElementById("numIpt").style.borderColor = "black";
        document.getElementById("numIpt2").style.borderColor = "black";
    }
}

function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
        return true;
}

function calculate() {
      //  document.getElementById("add").value;
      //  console.log("add");
   // if(document.getElementById('calc').value == "add")
    var nm1 = parseFloat(document.getElementById("numIpt").value);
    var nm12 = parseFloat(document.getElementById("numIpt2").value);
    console.log(nm1);
    console.log(nm12);
    if(document.getElementById('add').selected===true) {
        var result = document.getElementById("result");
        var calc = Number(nm1) + Number(nm12);
        result.textContent = calc;

    }else if(document.getElementById('sub').selected===true){
        var result = document.getElementById("result");
        var calc = Number(nm1) - Number(nm12);
        result.textContent = calc;
    }else if(document.getElementById('mult').selected===true){
        var result = document.getElementById("result");
        var calc = Number(nm1) * Number(nm12);
        result.textContent = calc;
    }else if(document.getElementById('div').selected===true){
        var result = document.getElementById("result");
        var calc = Number(nm1) / Number(nm12);
        result.textContent = calc;
    }else if(document.getElementById('modulo').selected===true){
        var result = document.getElementById("result");
        var calc = Number(nm1) % Number(nm12);
        result.textContent = calc;
    }else {
        console.log("!");
    }

}
