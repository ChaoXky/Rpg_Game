#pragma strict

var enter : int = 0;
var walk : int = 0;
var i : int = 0;

var prince : GameObject;
var text_message : String;
var yes_no_panel : GameObject;
var yes_no_text : Text;
var code : Text;

var map4First : GameObject;
var map4Second : GameObject;
var prince_First : GameObject;
var magictp : GameObject;
var wall : GameObject;

function Start () {
	
}

function Update () {
	if(walk == 0 && prince.transform.localPosition.x < 300)	prince.transform.Translate(Vector2.right * 3f);
	if(prince.transform.localPosition.x >=300 && i == 0){
		code.text = "51";
		i++;
	}

	if(int.Parse (code.text) == 52 && map4Second.active == false){
		map4First.SetActive(false);
		map4Second.SetActive(true);
		prince_First.SetActive(true);
		magictp.SetActive(true);
	}

	if(int.Parse (code.text) == 50 && map4Second.active == false){
		map4First.SetActive(false);
		map4Second.SetActive(true);
		wall.SetActive(false);
	}
}

function OnTriggerEnter2D(other: Collider2D){
	Debug.Log("碰撞"+other);
	walk = 1;
 	enter = 1;
}
function OnTriggerExit2D(other: Collider2D) {
	Debug.Log("碰撞"+other);
	walk = 0;
	enter = 0;
}

function Talk(){
	if(enter == 1){
		code.text = "49";
	}
}