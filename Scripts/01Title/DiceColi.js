#pragma strict


function start(){
    GetComponent.<Animator>().Play("DiceFallR",-1,0);
}


function OnMouseDown(){
    GetComponent.<Animator>().Play("DiceFall",-1,0);
    GetComponent.<Animator>().Play("DiceFall2",-1,0);
    GetComponent.<Animator>().Play("DiceFall3",-1,0);
    GetComponent.<Animator>().Play("DiceFallR",-1,0);
}