#pragma strict

var schbot : GameObject;
var schbot1 : GameObject;
var schbot2 : GameObject;
var schbot3 : GameObject;

var id : String;

var event : Text;
var turn : Text;

var message : GameObject;
var message_text : Text;

function Update () {
	if(Item.room1_key == 1 && id.Equals("candle")){
		schbot.SetActive(false);
		schbot1.SetActive(false);
		schbot2.SetActive(false);
		schbot3.SetActive(true);
	}
	if(Item.room1_hg == 1 && id.Equals("HolyGrail")){
		schbot.SetActive(false);
	}
	if(Item.room1_sh == 1 && id.Equals("item3")){
		schbot.SetActive(false);
	}
	if(Item.room1_mh == 1 && id.Equals("item1")){
		schbot.SetActive(false);
	}
	if(Item.room1_paper == 1 && id.Equals("item2")){
		schbot.SetActive(false);
	}
	if(event.text.Equals("14") && id.Equals("door_r")){
		schbot.SetActive(false);
		schbot1.SetActive(true);
	}
	if(id.Equals("door_r")){
		if(turn.text.Equals("8") && Item.room1_door_r == 0){
			if(message.active == false){
				Item.room1_door_r = 1;
				message_text.text = ("門發出了聲音");
				message.SetActive(true);
			}
		}
	}
}
