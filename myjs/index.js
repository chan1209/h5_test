/**
 * Created by chenpei on 2016/6/7.
 */
var numDiv;
var work = null;
window.onload = function(){
    numDiv = document.getElementById("numDiv");

    document.getElementById("start").onclick = startWoker();
    document.getElementById("stop").onclick = function(){
        if(work){
            work.terminate();
            work = null;
        }
    }
}
function startWoker(){
    if(work){
        return;
    }
    work = new Worker("count.js");
    work.onmessage = function(e){
        numDiv.innerHTML = e.data;
    }
}
