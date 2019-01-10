#pragma strict

var enter : int = 0;

var help : int = 0;

var text_message : String;
var yes_no_panel : GameObject;
var yes_no_text : Text;
var code : Text;

var npc : GameObject;
var magictp : GameObject;

function Start () {
	
}

function Update () {
	if(int.Parse (code.text) == 26 && magictp.active == false){
		magictp.SetActive(true);
	}
	if(int.Parse (code.text) == 28 && Item.room2_story1_help ==0){
		Item.room2_story1_help = 2;
	}
}

function OnTriggerEnter2D(other: Collider2D){
	Debug.Log("碰撞"+other);
 	enter = 1;
 	if(help == 1 && Item.room2_story1_food == 3){
 		Item.room2_story1_help = 1;
 		code.text = "27";
 		help++;
		move.can = 1;
		yes_no_text.text = text_message;
		yes_no_panel.SetActive(true);
	}
}
function OnTriggerExit2D(other: Collider2D) {
	Debug.Log("碰撞"+other);
	enter = 0;
}

function event_food() {
	if(enter == 1 && Item.room2_story1_food == 0){
		Item.room2_story1_food = 1;
		code.text = "25";
		magictp.SetActive(true);
		move.can = 1;
		yes_no_text.text = text_message;
		yes_no_panel.SetActive(true);
	}
}