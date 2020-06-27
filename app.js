// aek function banaya hai or us main argument store karaya hai num ka naam sa or html main 
// jo hmara input hai usko id di result ka naam sa 

function getnumber(num){
   
var result = document.getElementById("result")

result.value += num;

// input ko maine get kara id sa or maine usko value set karwadi num num kia hai jo btn pa
// click hoka argument hmain mil rha hai 7 pa click hoga to hmain 7 mil jaega or input ka 
// andar 7 jaka save hojae ga

}

function clearresult(){

    // ye maine input ko get karlia
    var result = document.getElementById("result");

    // or jab bhi yeh function call hoga woh value empty karda ga
    result.value = "";

}

// var a ="a";
// a += b 
// ab a ki value hojaegi ab  matlab var ki a ki purai value a thi or main sec step maine
// nai value + karwai b to usna kia kara purani wali value ko remove ni kara balka 
// // concatinate kardia agr main + na lagaon to ab  a ki value hojaegi a to + lagane ka 
// faida yeh horha hai ka purani value bhi rkh rha hai or new wali bhi daal rha hai us main
// to maine clear result ka function main bhi yehi kara hai


// ab humain calculation karwani hai or input ka andar hi result dena hai

// ab hmara pas javascript ka aek function hai EVAL jo hm value da rhe hain woh usa calculate
// kar ka da da ga

function getresult(){
    var result = document.getElementById("result");
   result.value = eval (result.value)

}

