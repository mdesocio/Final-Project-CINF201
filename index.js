/* At the bottom of the page*/
function CheckPWD() {

    var pwd = document.getElementById("pwd").value;
    
    

    document.getElementById("characters").innerHTML = "Your password is "+pwd.length+" characters long.";
    document.getElementById('uppertypes').innerHTML = "You have "+pwd.match(/[A-Z]/g)+" upper characters.";
    document.getElementById('lowertypes').innerHTML = "You have "+pwd.match(/[a-z]/g)+" lowercase characters.";
    document.getElementById('numtypes').innerHTML = "You have " +pwd.match(/[0-9]/g)+ " numbers.";
    document.getElementById('spectypes').innerHTML = "You have "+pwd.match((/[!-/]/g))+" special characters.";

    if (pwd.match((/[!-/]/g)).length>0 && pwd.match((/[!-/]/g)).length<=1) {
        document.getElementById('statement').innerHTML="Good! You have 1 special character.  You should include more!! Put them in replacement of similar looking letters."
    }
    else if (pwd.match((/[!-/]/g)).length>1) {
        document.getElementById('statement').innerHTML="Great! You have "+pwd.match((/[!-/]/g)).length+" special characters. Good job! Keep adding them!"
    }
};
/*no loc.  On Page Load*/
function time() {
    const d= new Date();
    var x = d.getHours();

    if (x>=0 && x<12){
        document.getElementById('message').innerHTML="Good Morning"
    }
    else if (x>=12 && x<17){
        document.getElementById('message').innerHTML="Good Afternoon"
    }
    else {
        document.getElementById('message').innerHTML="Good Evening"
    }
}