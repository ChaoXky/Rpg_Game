#pragma strict

function Start () {
	
}

function Update () {
    if(Input.GetKeyDown(KeyCode.S)){
        Game.screen().FadeAndGo("02GameLoggin");
    }
}
