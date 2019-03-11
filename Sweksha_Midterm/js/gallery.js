//This is the array of the images to be displayed on the browser
var images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpg",
    "22.jpg",
    "23.jpg",
    "24.jpg",
    "25.jpg",
    "26.jpg",
    "27.jpg",
    "28.jpg",
    "29.jpg",
    "30.jpg"];


    var imgSwitch =0;    //eveytime i click on the image, switch the value

//Document object model- when i load the function, do something
document.addEventListener("DOMContentLoaded", function(){
    console.log("JS connected");

    loadImages();
});     

//here I'm going to LOAD MY FUNCTION
function loadImages(){

    var putInNum = 0;

    var columns = document.getElementsByClassName("column");
    var columnNum = columns.length;

    console.log(columns.length);

    for(var i = 0; i<images.length; i++){
        var newImg = document.createElement("img");   //create a new element through which you load all the images in js
        newImg.className = "images";
        newImg.src = "./images/" + images[i];         //location of the image

        newImg.id = i;

        newImg.addEventListener("click", function(e){           //when i click
            popUp(e.target.id);
            imgSwitch = e.target.id;
        });            

        columns[putInNum].appendChild(newImg);
        putInNum++;

        if(putInNum > columnNum-1){
            putInNum=0;
        }
    }
}


function popUp(imgCount){      //replace ingCount with a new value
    imgSwitch = imgCount;

    var popup = document.getElementById("popup");
    var img = document.getElementById("pic");
    popup.style.zIndex = "1";                //adding/overwriting a new style in the style sheet
    popup.style.display ="block";

    img .addEventListener("click",function(){
        close();
    });

    img.src ="./images/"+ images[imgCount];
}


function close(){
    var popup = document.getElementById("popup");
    popup.style.zIndex= "-1";
    popup.style.display="none";
}

function change(direction){
    var numOfImg = images.length;
    var next =0;
    var img = document.getElementById("pic");

    if(direction == 1){
        if (imgSwitch > numOfImg-2){
            next=0;
        }else{
            imgSwitch++;
            next = imgSwitch;
        }
    }else if(direction == -1){
        if(imgSwitch-1 < 0){
            next = numOfImg-1;
        }else{
            next = imgSwitch-1;
        }
    }

    img.src ="./images/"+ images[next];
    imgSwitch = next;
}














