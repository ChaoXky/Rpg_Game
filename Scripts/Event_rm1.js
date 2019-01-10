#pragma strict

var event: Text;

function Start () {
	
}

function Update () {
	if(event.text.Equals("2") && Item.room1_key != 1) Item.room1_key = 1;
	if(event.text.Equals("4") && Item.room1_hg != 1) Item.room1_hg = 1;
	if(event.text.Equals("6") && Item.room1_sh != 1) Item.room1_sh = 1;
	if(event.text.Equals("8") && Item.room1_mh != 1) Item.room1_mh = 1;
	if(event.text.Equals("10") && Item.room1_paper != 1) Item.room1_paper = 1;
}
