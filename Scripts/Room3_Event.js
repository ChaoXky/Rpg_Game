#pragma strict

var w_sink : GameObject;
var b_sink : GameObject;
var w_doll : GameObject;
var b_doll : GameObject;
var w_bookcase : GameObject;
var b_bookcase : GameObject;
var w_capter : GameObject;
var b_capter : GameObject;

var w_sink_before : GameObject;
var b_sink_before : GameObject;
var w_sink_after : GameObject;
var b_sink_after : GameObject;

var door_u : GameObject;
var door_u_open : GameObject;

var sink_y_n : GameObject;

var power_switch : int = 0;

var code : Text;
var turn : Text;

function Start () {
	
}

function Update () {
	if(int.Parse (code.text) == 66 && b_sink.active == false){
		w_sink.SetActive(false);
		b_sink.SetActive(true);
		w_doll.SetActive(false);
		b_doll.SetActive(true);
		w_bookcase.SetActive(false);
		b_bookcase.SetActive(true);
		w_capter.SetActive(false);
		b_capter.SetActive(true);
	}
	if(int.Parse (code.text) == 68 && w_sink.active == false){
		w_sink.SetActive(true);
		b_sink.SetActive(false);
		w_doll.SetActive(true);
		b_doll.SetActive(false);
		w_bookcase.SetActive(true);
		b_bookcase.SetActive(false);
		w_capter.SetActive(true);
		b_capter.SetActive(false);
	}
	if(int.Parse (code.text) == 70 && b_sink_before.active != false){
		w_sink_before.SetActive(false);
		b_sink_before.SetActive(false);
		w_sink_after.SetActive(true);
		b_sink_after.SetActive(true);
		Item.room3_sink = 1;
	}
	if(int.Parse (code.text) == 72 && Item.room3_sink != 2){		
		Item.room3_sink = 2;
	}
	if(int.Parse (code.text) == 74 && Item.room3_hanako != 2){		
		Item.room3_hanako = 2;
	}
	if(int.Parse (code.text) == 76 && Item.room3_hanako != 1){		
		Item.room3_hanako = 1;
	}
	if(int.Parse (code.text) == 78 && Item.room3_book != 1){		
		Item.room3_book = 1;
	}
	if(int.Parse (code.text) == 80 && door_u_open != true){		
		door_u.SetActive(false);
		door_u_open.SetActive(true);
	}
}

function PowerSwitch(){
	if(power_switch == 0) {
		power_switch = 1;
		code.text = "65";
	}
	else{
		power_switch = 0;
		code.text = "67";
	}
	turn.text = (Item.turn+1).ToString();
}

function Hanako(){
	if(Item.room3_hanako == 0)
		code.text = "75";
}

function bookcase(){
	if(Item.room3_book == 0){
		code.text = "77";
		turn.text = (Item.turn+1).ToString();
	}
}

function sink_switch(){
	if(Item.room3_sink == 0){
		sink_y_n.SetActive(true);
	}
}

function sink_change(){
	code.text = "69";
	turn.text = (Item.turn+1).ToString();
}

function sink_take(){
	if(Item.room3_sink == 1){
		code.text = "71";
		turn.text = (Item.turn+1).ToString();
	}
}

function door(){
	if(Item.room3_hanako == 2)
		code.text = "79";
}