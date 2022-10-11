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
        alert("Please enter your password again.");
        return false;
    }
}