#pragma strict

var ready1 : GameObject;
var ready2 : GameObject;
var ready3 : GameObject;
var ready4 : GameObject;
var class_panel : GameObject;

var p1r : int = 0;
var p2r : int = 0;
var p3r : int = 0;
var p4r : int = 0;
var players : int = 0;
var players_ready : int = 0;

var player : Text;
var MyNo : Text;

var countdown : GameObject;
var count_text : Text;
var timer_f : float = 0f;
var timer_i : int = 0;

function Start () {
	
}

function Update () {
	CharInfor.cha_no = int.Parse(MyNo.text);
	CharInfor.allPlayer = int.Parse(player.text);

	if(ready1.active == false) p1r = 0;
	if(ready1.active == true) p1r = 1;
	if(ready2.active == false) p2r = 0;
	if(ready2.active == true) p2r = 1;
	if(ready3.active == false) p3r = 0;
	if(ready3.active == true) p3r = 1;
	if(ready4.active == false) p4r = 0;
	if(ready4.active == true) p4r = 1;
/*
	players_ready = (p1r + p2r + p3r + p4r);
	players = int.Parse(player.text);
	if(players == players_ready && players!=0){
		countdown.SetActive(true);
		timer_f += Time.deltaTime;
		timer_i = timer_f;
		count_text.text = (3-timer_i).ToString();
		Debug.Log(timer_i);
		if(timer_f>2.9f)	Application.LoadLevel ("07GameFirstRoom");
	}
	else {
		countdown.SetActive(false);
		timer_f = 0f;
	}
	*/
}

function SetOn () {
	if(CharInfor.cha_no == 1){
		if(ready1.active == false){
			class_panel.SetActive(true);
		}
	}
	if(CharInfor.cha_no == 2){
		if(ready2.active == false){
			class_panel.SetActive(true);
		}
	}
	if(CharInfor.cha_no == 3){
		if(ready3.active == false){
			class_panel.SetActive(true);
		}
	}
	if(CharInfor.cha_no == 4){
		if(ready4.active == false){
			class_panel.SetActive(true);
		}
	}
}
