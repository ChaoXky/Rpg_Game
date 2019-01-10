#pragma strict

var enter : int = 0;
var tp_range : int = 0;
var tp_count : int = 0;

var text_message : String;
var yes_no_panel : GameObject;
var yes_no_text : Text;
var code : Text;
var turn : Text;

var main_room : GameObject;
var story1 : GameObject;
var story2 : GameObject;
var story3 : GameObject;
var story4 : GameObject;

function Start () {
	
}

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

function gate_open() {
	if(enter == 1){
		yes_no_text.text = text_message;
		yes_no_panel.SetActive(true);
	}
}

function TP() {
	move.can = 0;
	if(CharInfor.cha_no == 1 && tp_count ==0) {
		code.text = "15";
	}
	if(CharInfor.cha_no == 2 && tp_count ==0) {
		code.text = "17";
	}
	if(CharInfor.cha_no == 3 && tp_count ==0) {
		code.text = "59";
	}
	if(CharInfor.cha_no == 4 && tp_count ==0) {
		code.text = "61";
	}
}

function TP_Back() {
	tp_count +=1;
	turn.text = (Item.turn+1).ToString();
	code.text = "23";
}

function letmove() {
	move.can = 0;
}