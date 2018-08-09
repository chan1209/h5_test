/**
 * Created by chenpei on 2016/6/8.
 */
var ta;
var btn;
window.onload = function(){
    ta = document.getElementById("ta");
    btn = document.getElementById("btn");
    btn.onclick = function(){
        alert(ta.value);
    }
}
