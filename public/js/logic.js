var result_array = [];
function get_res(number, maxValue, result) {
    if (number == 0) {
        result_array.push("(" + result + ")");
    } else {
        if (maxValue > 1) {
            get_res(number, maxValue-1, result);
        }
        if (maxValue <= number) {
            get_res(number-maxValue, maxValue, maxValue + " " + result);
        }
    }
}

function goal() {
    var a = document.getElementById("comment1").value;
    var players = a.split("\n");
    console.log("Players of team 1: ", )
    players.forEach(element => {
        console.log (element);
    });
    
    var b = document.getElementById("comment2").value;
    players = b.split("\n");
    console.log("Players of team 2: ", )
    players.forEach(element => {
        console.log (element);
    });
    result_array = [];
    a = parseInt(document.getElementById("goal-one").value);
    b = parseInt(document.getElementById("goal-two").value);
    get_res(a,a,"");
    
    var temp = "The score list of team 1: ";
    result_array.forEach(element => {
        temp += element;
    });
    document.getElementById("team-one").innerHTML = temp;
    result_array = [];
    get_res(b,b,"");
    temp = "The score list of team 2: ";
    result_array.forEach(element => {
        temp += element;
    });
    document.getElementById("team-two").innerHTML = temp;
    temp = "Team 1 won";
    if(a<b)
        temp = "Team 2 won";
    else if(a==b)
        temp = "Draw";
    document.getElementById("winner").innerHTML = temp;
}



