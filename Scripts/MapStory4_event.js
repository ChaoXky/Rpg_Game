#pragma strict

var enter : int = 0;
var walk : int = 0;

var _prince : GameObject;
var prince_ : GameObject;
var mom : GameObject;
var sis1 : GameObject;
var sis2 : GameObject;
var text_message : String;
var yes_no_panel : GameObject;
var yes_no_text : Text;
var code : Text;
var magictp : GameObject;

function Start () {
	
}

function Update () {
	if(int.Parse (code.text) == 54 && magictp.active == false){
		magictp.SetActive(true);
		_prince.SetActive(false);
		prince_.SetActive(true);
	}
	if(int.Parse (code.text) == 56 && prince_.active == false){
		magictp.SetActive(true);
		_prince.SetActive(false);
		prince_.SetActive(true);
		mom.SetActive(true);
		sis1.SetActive(true);
		sis2.SetActive(true);
	}
	if(int.Parse (code.text) == 58 && prince_.active == false){
		magictp.SetActive(true);
		_prince.SetActive(false);
		prince_.SetActive(true);
		mom.SetActive(true);
		sis1.SetActive(true);
		sis2.SetActive(true);
	}
}

function OnTriggerEnter2D(other: Collider2D){
	Debug.Log("碰撞"+other);
 	enter = 1;
}
function OnTriggerExit2D(other: Collider2D) {
	Debug.Log("碰撞"+other);
	enter = 0;
}

function Guilt(){
	if(enter == 1 && Item.room2_story4_guilt == 0){
		Item.room2_story4_guilt = 1;
		yes_no_text.text = text_message;
		yes_no_panel.SetActive(true);
	}
}

function marry(){
	if(enter == 1 && Item.room2_story4_marry == 0){
		Item.room2_story4_marry = 1;
		Item.room2_story4_guilt = 3;
		yes_no_text.text = "要寄邀請函給繼母和兩位姊姊嗎?";
		yes_no_panel.SetActive(true);
	}
}