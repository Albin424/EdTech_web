function playHint0() {
    document.getElementById("demo0").style.display = "block";
}

function playHint1() {
    document.getElementById("demo1").style.display = "block";
}

function playHint2() {
    document.getElementById("demo2").style.display = "block";
}

function playHint3() {
    document.getElementById("demo3").style.display = "block";
}

function playHint4() {
    document.getElementById("demo4").style.display = "block";
}

function playHint5() {
    document.getElementById("demo5").style.display = "block";
}

function playHint6() {
    document.getElementById("demo6").style.display = "block";
}

function playHint7() {
    document.getElementById("demo7").style.display = "block";
}

function playHint8() {
    document.getElementById("demo8").style.display = "block";
}

function playHint9() {
    document.getElementById("demo9").style.display = "block";
}

function checkAns() {
    var c = 0;
    var q1 = document.myForm0.question1.value;
    var q2 = document.myForm1.question2.value;
    var q3 = document.myForm2.question3.value;
    var q4 = document.myForm3.question4.value;
    var q5 = document.myForm4.question5.value;
    var q6 = document.myForm5.question6.value;
    var q7 = document.myForm6.question7.value;
    var q8 = document.myForm7.question8.value;
    var q9 = document.myForm8.question9.value;
    var q10 = document.myForm9.question10.value;

    if(q1 == "Karnataka") {c++;}
    if(q2 == "Dimitri Mendeleev") {c++;}
    if(q3 == "COVID-19") {c++;}
    if(q4 == "Mission Sakthi") {c++;}
    if(q5 == "IRCTC-Indian Railway catering and Tourism Corporation") {c++;}
    if(q6 == "HJB") {c++;}
    if(q7 == "AB") {c++;}
    if(q8 == "BigB") {c++;}
    if(q9 == "SpaceX") {c++;}
    if(q10 == "Russia") {c++;}
    if(c > 6) {
        alert('"Congratulations!", You got'+' ' + c +' '+ 'Marks.');
    }else{
        alert('"good joob, Try again" You got'+' ' + c + '' + 'Marks' );
    }
}