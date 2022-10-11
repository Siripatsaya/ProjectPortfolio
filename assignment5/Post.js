var topic = document.getElementById("topic");
var comment1 = document.getElementById("comment1");
var comment2 = document.getElementById("comment2");

topic = 0;
comment1 = 0;
comment2 = 0;

alert("Comment to support LUXIEM!");
function postFunction() { 
    
    var text1 = document.getElementById("text1").value
    if (topic == 0) {
        document.getElementById("topic").innerText = text1
        topic = text1
    }
    else if (comment1 == 0) {
        document.getElementById("comment1").innerText = text1
        comment1 = text1
    }
    else if (comment2 == 0) {
        document.getElementById("comment2").innerText = text1
        comment2 = text1
    }
}

function clearFunction() { 
    alert("Clear!!!");
    topic = 0;
    comment1 = 0;
    comment2 = 0;
    document.getElementById("topic").innerText = "";
    document.getElementById("comment1").innerText = "";
    document.getElementById("comment2").innerText = "";
}