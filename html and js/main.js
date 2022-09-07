$(document).ready(function(){
    $(".greenDiv").click(function(){
        $(".demo").after('<span style="color: white">Click added some text!</span>')
        
    });

    $('.hoverDiv').mouseenter(function(){
        $('.hoverDiv').css({
            'background-color': 'blue',
            'color': 'darkkhaki'
        })
    })

    
    $('.hoverDiv').mouseleave(function(){
        $('.hoverDiv').css({
            'background-color': 'red',
            'color': 'white'
            
        })
    })
})


var a= [123 , 30 , 'maktab' , 'sharif' , ["hamed" , "ahmad"] , true];
console.log(a);
var stringCounter=0;
var numberCounter=0;
var arrayCounter=0;
var booleanCounter=0;
for (var i=0; i<a.length ;i++){
    if (typeof a[i]=="string"){
        stringCounter=stringCounter+1;
    }else if (typeof a[i]=="number"){
        numberCounter=numberCounter+1;
    }else if (typeof a[i]=="boolean"){
        booleanCounter=booleanCounter+1;
    }else if (Array.isArray(a[i])){
        arrayCounter=arrayCounter+1;
    }
}

document.getElementById("stringCounter").innerHTML="String: "+stringCounter;
document.getElementById("numberCounter").innerHTML="Number: "+numberCounter;
document.getElementById("arrayCounter").innerHTML="Array: "+arrayCounter;
document.getElementById("booleanCounter").innerHTML="Boolean: "+booleanCounter;

