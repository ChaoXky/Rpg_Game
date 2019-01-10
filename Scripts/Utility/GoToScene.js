#pragma strict
import UnityEngine.SceneManagement ;

var sceneName : String ="";
var sceneId : int =0;


function GoToScene () {
    if(sceneName == ""){
        Game.screen().FadeAndGo(sceneId) ;
    }else{
        Game.screen().FadeAndGo(sceneName) ;
    }
}

