let passwordMain = document.getElementById("passwordMain")
let passwordRe = document.getElementById("passwordRe")


window.onload = pageLoad;
function pageLoad(){
    

    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;	
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    let passwordMain = document.getElementById("passwordMain").value;
    let passwordRe = document.getElementById("passwordRe").value;

    if(passwordMain == passwordRe){
        alert("Welcome!, you successfully registered.");
        return true;
    }
    else{
        var errormsg = document.getElementById("errormsg")
        // errormsg.value = ("Please enter your password again");
        // console.log(errormsg.innerHTML);
        errormsg.textContent = ("Please enter your password again");
        
        return false;
    }
}