#pragma strict

var text : String;
var message : GameObject;
var message_text : Text;

function Start () {
	
}

function Update () {
	
}
function event_talk() {
	message.SetActive(true);
	message_text.text = text;
}