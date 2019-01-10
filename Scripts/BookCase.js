#pragma strict

var enter : int = 0;
var bookcase : int;

var text_message : String;
var yes_no_panel : GameObject;
var yes_no_text : Text;

var story : GameObject ;
var text : Text;
var timer_f : float = 0f;
var timer_i : int = 0;

var story_text = new List.<String>();

function Update () {
	if(enter == 1 && Item.room2_book == 2){
		timer_f += Time.deltaTime;
		timer_i = timer_f;
		if( timer_i<(story_text.Count*3) && timer_i%3==0 ){
			text.text = story_text[timer_i/3];
		}
		else if(timer_i>(story_text.Count*3)){
			story.SetActive(false);
			Item.room2_book = 0;
			move.can = 0;
		}
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

function read() {
	if(enter == 1){
		timer_f = 0;
		Item.room2_book = 1;
		move.can = 1;
		yes_no_text.text = text_message;
		yes_no_panel.SetActive(true);
	}
}