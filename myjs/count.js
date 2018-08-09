/**
 * Created by chenpei on 2016/6/7.
 */
var countNum = 0;

function count(){
    postMessage(countNum);
    countnum ++;

    setTimeout(count,1000);

}
count();
