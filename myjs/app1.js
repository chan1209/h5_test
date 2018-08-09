/**
 * Created by chenpei on 2016/6/7.
 */
var box1Div,msgDiv,img;
window.onload = function(){
    box1Div = document.getElementById("box1");

    box1Div.ondragenter =function(e){

    msgDiv = document.getElementById("msg");
    img = document.getElementById("image");
    //    showobj(e);
    //}
        box1Div.ondragover = function(e){
            e.preventDefault();
        }
        img.ondragstart = function(e){
            e.dataTransfer.setData("imgID","image");


        }
        box1Div.ondrop = function(e){
            showobj(e.dataTransfer);
            e.preventDefault();
            var img1 = document.getElementById(e.dataTransfer.getData("imgID"));
            box1Div.appendChild(img1);
        }
    }
}

function showobj(obj){
    var s = "";
    for(var k in obj){
        s+= k+":"+obj[k]+"<br/>"
    }
    msgDiv.innerHTML = s;
}