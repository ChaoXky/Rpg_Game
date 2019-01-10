#pragma strict

var enter : int = 0;

var text_message : String;
var message : GameObject;

var text : Text;
var code : Text;
var turn : Text;

function Update () {
}

function OnTriggerEnter2D(other: Collider2D){
	Debug.Log("碰撞"+other);
 	enter = 1;
}
function OnTriggerExit2D(other: Collider2D) {
	Debug.Log("碰撞"+other);
	enter = 0;
}

function search() {
	if(enter == 1){
		text.text = text_message;
		message.SetActive(true);
	}
}

function clock(){
	if(enter == 1){
		if(Item.room1_sh ==1 && Item.room1_mh == 1){
			code.text = "93";
			Item.room1_sh = 2;
			Item.room1_mh = 2;
			turn.text = (Item.turn+1).ToString();
		}
		else if(Item.room1_sh ==0 || Item.room1_mh == 0){
			text.text = text_message;
			message.SetActive(true);
		}
	}
}

function undertable(){
	if(enter == 1){
		if(Item.room1_paper1 == 0){
			code.text = "91";
			Item.room1_paper1 = 1;
			turn.text = (Item.turn+1).ToString();
		}
	}
}