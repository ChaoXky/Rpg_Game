#pragma strict

var enter : int = 0;

var help : int = 0;

var text_message : String;
var yes_no_panel : GameObject;
var yes_no_text : Text;
var code : Text;

var top_wall : GameObject;
var p_talk : GameObject;
var p_help : GameObject;
var p_move : GameObject;
var witch : GameObject;
var fish : GameObject;
var little_three : GameObject;
var dead_three : GameObject;
var magictp1 : GameObject;
var magictp2 : GameObject;

function Start () {
	
}

function Update () {
	if(help == 1){
		if (Input.GetKey(KeyCode.UpArrow)){
			p_move.transform.localPosition = new Vector3(fish.transform.localPosition.x, fish.transform.localPosition.y+70, 0);
		}	
		if (Input.GetKey(KeyCode.DownArrow)){
			p_move.transform.localPosition = new Vector3(fish.transform.localPosition.x, fish.transform.localPosition.y-70, 0);
		}		
		if (Input.GetKey(KeyCode.LeftArrow)){
			p_move.transform.localPosition = new Vector3(fish.transform.localPosition.x-55, fish.transform.localPosition.y, 0);
		}		
		if (Input.GetKey(KeyCode.RightArrow)){
			p_move.transform.localPosition = new Vector3(fish.transform.localPosition.x+55, fish.transform.localPosition.y, 0);
		}
	}
	if(Item.room2_story2_leg == 3) {
		magictp1.SetActive(true);
	}
	if(Item.room2_story2_leg == 2) {
		p_move.SetActive(false);
	}
	if(Item.room2_story2_kill >= 2) {
		magictp2.SetActive(true);
	}
	if(Item.room2_story2_kill == 2) {
		little_three.SetActive(false);
		dead_three.SetActive(true);
	}

	if(int.Parse (code.text) == 30 && p_move.active == false) {
		p_talk.SetActive(false);
		p_move.SetActive(true);
		p_help.SetActive(false);
	}
	if(int.Parse (code.text) == 32 && witch.active == false) {
		witch.SetActive(true);
	}
	if(int.Parse (code.text) == 34 && magictp1.active == false) {
		magictp1.SetActive(true);
	}
	if(int.Parse (code.text) == 36 && p_move.active != false) {
		p_move.SetActive(false);
	}
	if(int.Parse (code.text) == 38 && magictp2.active == false) {
		magictp2.SetActive(true);
	}
	if(int.Parse (code.text) == 40 && little_three.active != false) {
		little_three.SetActive(false);
		dead_three.SetActive(true);
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

function HelpPeople() {
	if(enter == 1){
		code.text = "29";
		p_move.SetActive(true);
		p_help.SetActive(false);
		help = 1;
	}
}

function PutDown() {
	if(help == 1) help = 0;
	else if(help == 0 && enter == 1) help = 1;
	if(p_move.transform.localPosition.y > 275) {
		witch.SetActive(true);
		code.text = "31";
		help = 2;
	}
}

function event_leg() {
	if(enter == 1 && Item.room2_story2_leg == 0){
		top_wall.transform.localPosition =new Vector3(0, 1010, 0.0f);
		Item.room2_story2_leg = 1;
		move.can = 1;
		yes_no_text.text = text_message;
		yes_no_panel.SetActive(true);
	}
}

function event_kill() {
	if(enter == 1 && Item.room2_story2_leg == 2){
		Item.room2_story2_kill = 1;
		code.text = "37";
		move.can = 1;
		yes_no_text.text = ("要幹掉小三嗎?");
		yes_no_panel.SetActive(true);
	}
}