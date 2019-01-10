#pragma strict

var code : Text;

function Start () {
	
}

function Update () {
	if(Item.room2_story4_marry == 2){
		code.text = "83";
		Item.room2_story4_marry = 4;
	}
	if(Item.room2_story3_question == 3){
		code.text = "85";
		Item.room2_story3_question = 4;
	}
	if(Item.room2_story2_kill == 3){
		code.text = "87";
		Item.room2_story2_kill = 4;
	}
	if(Item.room2_story1_help == 2){
		code.text = "89";
		Item.room2_story1_help = 4;
	}
}