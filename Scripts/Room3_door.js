#pragma strict

var y_n : GameObject;
var code : Text;

function Start () {
	
}

function Update () {
	
}

function OnTriggerEnter2D(other: Collider2D){
	Debug.Log("碰撞"+other);
 	y_n.SetActive(true);
}
function OnTriggerExit2D(other: Collider2D) {
	Debug.Log("碰撞"+other);
}

function ToTheEnd(){
	code.text = "81";
}