#pragma strict

var enter : int = 0;
var i : int = 0;

var text_message : String;
var yes_no_panel : GameObject;
var yes_no_text : Text;
var code : Text;

var npc : GameObject;
var npc_in : GameObject;
var npc_out : GameObject;
var _mirror : GameObject;
var mirror_ : GameObject;
var magictp : GameObject;

function Start () {
	
}

function Update () {
	if(int.Parse (code.text) == 44 && _mirror.active != false) {
		_mirror.SetActive(false);
	}
	if(int.Parse (code.text) == 46 && npc.active != false) {
		npc.SetActive(false);
		npc_out.SetActive(true);
	}
	if(int.Parse (code.text) == 48 && npc.active != false) {
		i=1;
	}
}

function OnTriggerEnter2D(other: Collider2D){
	Debug.Log("碰撞"+other);
 	enter = 1;
 	if(other.tag == "story3" && i ==1){
 		npc.SetActive(false);
		npc_in.SetActive(true);
		_mirror.SetActive(false);
		mirror_.SetActive(true);
		magictp.SetActive(true);
 	}
}
function OnTriggerExit2D(other: Collider2D) {
	Debug.Log("碰撞"+other);
	enter = 0;
}

function talk(){
	if(enter == 1 && Item.room2_story3_mirror ==2){
		Item.room2_story3_question = 1;
		yes_no_text.text = "你有看到我的鏡子嗎?";
		yes_no_panel.SetActive(true);
		magictp.SetActive(true);
	}
	else if(enter == 1){
		code.text = "41";
	}
}

function mirror(){
	if(enter == 1 && Item.room2_story3_mirror == 0){
		Item.room2_story3_mirror = 1;
		yes_no_text.text = text_message;
		yes_no_panel.SetActive(true);
	}		
}