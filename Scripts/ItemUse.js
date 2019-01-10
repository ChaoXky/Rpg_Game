#pragma strict

var message : GameObject;
var yes_no_panel : GameObject;
var yes_no_text : Text;
var story : GameObject ;
var turn : Text;
var code : Text;

var myNo : int;
var ore_no_turn : int;

function useitem (use : GameObject) {
	if(use.tag == "candle"){
		if(Item.candle == 1) use.SetActive(true);
	}
	if(use.tag == "HolyGrail"){
		if(Item.HolyGrail == 1) use.SetActive(true);
	}
	if(use.tag == "door_r"){
		if(Item.door_r == 1) use.SetActive(true);
	}
	if(use.tag == "door_l"){
		if(Item.door_l == 1) use.SetActive(true);
	}
	if(use.tag == "table"){
		if(Item.table == 1) use.SetActive(true);
	}
	if(use.tag == "under_table"){
		if(Item.under_table == 1) use.SetActive(true);
	}
	if(use.tag == "item1"){
		if(Item.item1 == 1) use.SetActive(true);
	}
	if(use.tag == "item2"){
		if(Item.item2 == 1) use.SetActive(true);
	}
	if(use.tag == "item3"){
		if(Item.item3 == 1) use.SetActive(true);
	}
}

function Start () {
	turn.text = Item.turn.ToString();
	if(CharInfor.cha_no == 1){
		myNo = 0;
	}
	if(CharInfor.cha_no == 2){
		myNo = 1;
	}
	if(CharInfor.cha_no == 3){
		myNo = 2;
	}
	if(CharInfor.cha_no == 4){
		myNo = 3;
	}
	ore_no_turn = Item.turn%CharInfor.allPlayer;
	if (ore_no_turn != myNo) move.can = 1;
	if (ore_no_turn == myNo) move.can = 0;
}

function Update () {
	
	if(yes_or_no.door_r == 1){
 		move.can = 1;
		yes_no_text.text = ("要進入下個房間嗎?");
		yes_no_panel.SetActive(true);
		yes_or_no.door_r = 2;
	}
	if(yes_or_no.door_l == 1){
 		move.can = 1;
		yes_no_text.text = ("要進入下個房間嗎?");
		yes_no_panel.SetActive(true);
		yes_or_no.door_l = 2;
	}
	if(yes_or_no.item2 == 1 && message.active == false){
 		move.can = 1;
		yes_no_text.text = ("要拿走木板下的東西嗎?");
		yes_no_panel.SetActive(true);
		yes_or_no.item2 = 2;
	}
	if(yes_or_no.item3 == 1 && message.active == false){
 		move.can = 1;
		yes_no_text.text = ("要拿走秒針嗎?");
		yes_no_panel.SetActive(true);
		yes_or_no.item3 = 2;
	}
	if(yes_or_no.item1 == 1 && message.active == false){
 		move.can = 1;
		yes_no_text.text = ("要拿走分針嗎?");
		yes_no_panel.SetActive(true);
		yes_or_no.item1 = 2;
	}
	if(yes_or_no.HolyGrail == 1 && message.active == false){
 		move.can = 1;
		yes_no_text.text = ("要拿走聖杯嗎?");
		yes_no_panel.SetActive(true);
		yes_or_no.HolyGrail = 2;
	}
	if(yes_or_no.candle == 1 && message.active == false){
 		move.can = 1;
		yes_no_text.text = ("要拿走鑰匙嗎?");
		yes_no_panel.SetActive(true);
		yes_or_no.candle = 2;
	}
}

function yes_no_event () {
	if(yes_or_no.door_r == 2) {
		yes_or_no.door_r = 0;
		code.text = "11";
		//Application.LoadLevel ("07GameSecondRoom");
	}
	if(yes_or_no.door_l == 2) {
		yes_or_no.door_l = 0;
		code.text = "63";
		//Application.LoadLevel ("07GameSecondRoom");
	}
	if(yes_or_no.candle == 2) {
		Item.room1_key = 1;
		code.text = "1";
		yes_or_no.candle = 0;
	}
	if(yes_or_no.item3 == 2) {
		Item.room1_sh = 1;
		code.text = "5";
		yes_or_no.item3 = 0;
	}
	if(yes_or_no.item1 == 2) {
		Item.room1_mh = 1;
		code.text = "7";
		yes_or_no.item1 = 0;
	}
	if(yes_or_no.HolyGrail == 2) {
		Item.room1_hg = 1;
		code.text = "3";
		yes_or_no.HolyGrail = 0;
	}
	if(yes_or_no.item2 == 2) {
		Item.room1_paper = 1;
		code.text = "9";
		yes_or_no.item2 = 0;
	}
	if(Item.room2_book == 1) {
		Item.room2_book = 2;
		story.SetActive(true);
	}
	if(Item.room2_story1_food == 1) {
		Item.room2_story1_food = 2;
	}
	if(Item.room2_story1_help == 1) {
		Item.room2_story1_help = 2;
	}
	if(Item.room2_story2_leg == 1) {
		Item.room2_story2_leg = 2;
		code.text = "35";
	}
	if(Item.room2_story2_kill == 1) {
		Item.room2_story2_kill = 2;
		code.text = "39";
	}
	if(Item.room2_story3_mirror == 1) {
		Item.room2_story3_mirror = 2;
		code.text = "43";
	}
	if(Item.room2_story3_question == 1) {
		Item.room2_story3_question = 2;
		code.text = "45";
	}
	if(Item.room2_story4_guilt == 1) {
		Item.room2_story4_guilt = 2;
		Item.room2_story4_marry = 3;
		code.text = "53";
	}
	if(Item.room2_story4_marry == 1) {
		Item.room2_story4_marry = 2;
		code.text = "55";
	}
	yes_no_panel.SetActive(false);
	move.can = 0;
}

function no_tomove() {
	move.can = 0;
	yes_or_no.item1 = 0;
	yes_or_no.item2 = 0;
	yes_or_no.item3 = 0;
	yes_or_no.HolyGrail = 0;
	yes_or_no.candle = 0;
	Item.room2_book = 0;
	if(Item.room2_story1_food == 1)	Item.room2_story1_food = 3;
	if(Item.room2_story1_help == 1) Item.room2_story1_help = 3;
	if(Item.room2_story2_leg == 1)	{
		Item.room2_story2_leg = 3;
		code.text = "33";
	}
	if(Item.room2_story2_kill == 1)	Item.room2_story2_kill = 3;
	if(Item.room2_story3_mirror == 1)	{
		Item.room2_story3_mirror = 3;
		code.text = "47";
	}
	if(Item.room2_story3_question == 1)	Item.room2_story3_question = 3;
	if(Item.room2_story4_guilt == 1)	Item.room2_story4_guilt = 3;
	if(Item.room2_story4_marry == 1){	
		Item.room2_story4_marry = 3;
		code.text = "57";
	}
}

function turns() {
	Item.turn +=1;
	turn.text = Item.turn.ToString();
	ore_no_turn = Item.turn%CharInfor.allPlayer;
	if (ore_no_turn != myNo) move.can = 1;
	if (ore_no_turn == myNo) move.can = 0;
	Debug.Log("%= "+Item.turn%CharInfor.allPlayer);
}

function walk() {
	if (ore_no_turn != myNo) move.can = 1;
	if (ore_no_turn == myNo) move.can = 0;
	Debug.Log("%= "+Item.turn%CharInfor.allPlayer);
}