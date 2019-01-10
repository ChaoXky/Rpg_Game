#pragma strict
import UnityEngine.SceneManagement ;

var black : UI.Image ;
private var speed : float = -0.05 ;

function Awake () {
    FadeIn() ;
}

function Update () {
    black.color.a +=speed;
    black.color.a = Mathf.Clamp01(black.color.a);
}

function FadeIn(){
    black.color.a =1 ;
    speed = -Mathf.Abs(speed) ;
}

function FadeOut(){
    black.color.a =0 ;
    speed = Mathf.Abs(speed) ;
}

function FadeAndGo(map:String){
    FadeOut() ;
    yield WaitForSeconds(1.2) ;
    SceneManager.LoadScene(map);
}
 
    function FadeAndGo(map:int){
     FadeOut() ;
     yield WaitForSeconds(1.2);
     SceneManager.LoadScene(map);
}