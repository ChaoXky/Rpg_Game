#pragma strict

var timer_f : float = 2;

var message : GameObject;
var text : Text;

var ore_no_turn : int;

function Start () {
	
}

function Update () {
	if(timer_f <= 3 && message.active == true){
		timer_f -= Time.deltaTime;
		if(timer_f <= 0){
			message.SetActive(false);
			timer_f = 2;
			ore_no_turn = Item.turn%CharInfor.allPlayer;
			if (ore_no_turn != CharInfor.cha_no-1) move.can = 1;
			if (ore_no_turn == CharInfor.cha_no-1) move.can = 0;
			//move.can = 0;
		}
	}
}

function timer_set () {
	timer_f = 2;
}

function message_open(mess : String){
	text.text = (mess);
	message.SetActive(true);
}