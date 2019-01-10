#pragma strict

var story : GameObject ;
var text : Text;
var timer_f : float = 0f;
var timer_i : int = 0;

var story_text = new List.<String>();

var dice_open : GameObject;

function Start () {
	move.can = 1;
	story_text.Add("永無止境的黑暗來臨\n意識慢慢地清醒");
	story_text.Add("身旁燃起的燈火不僅沒降低我的不安感\n反而更讓我慌張");
	story_text.Add("隨著8盞燈火的燃起\n所有人清晰映照在我的目光裡");
	story_text.Add("我忽然意識到\n我們跟獵奇漫畫裡的角色一樣……");
	story_text.Add("我們被關在密室裡了");
	story.SetActive(true);
	Debug.Log(story_text.Count);
}

function Update () {
	if(story.active != false){
		timer_f += Time.deltaTime;
		timer_i = timer_f;
		if( timer_i<(story_text.Count*3) && timer_i%3==0 ){
			text.text = story_text[timer_i/3];
		}
		else if(timer_i>(story_text.Count*3)){
			story.SetActive(false);
			dice_open.SetActive(true);
		}
	}
}

function skip () {
	story.SetActive(false);
	dice_open.SetActive(true);
}