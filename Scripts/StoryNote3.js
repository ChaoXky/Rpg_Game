#pragma strict

var story : GameObject ;
var text : Text;
var timer_f : float = 0f;
var timer_i : int = 0;

var story_text = new List.<String>();

function Start () {
	move.can = 1;
	story_text.Add("明亮的燈光讓人感到刺眼\n不過房間卻有一般不協調感");
	story_text.Add("碰！我們走過的門莫名被關起來\n我們試著將門打開，才發現被反鎖住了");
	story_text.Add("當其他人在尋找方法的時候\n突然發現一股不協調感\n房間僅僅只有白色而已！");
	story.SetActive(true);
	Debug.Log(story_text.Count);
}

function Update () {
	if(story.active != false && timer_i <=9){
		timer_f += Time.deltaTime;
		timer_i = timer_f;
		if( timer_i<(story_text.Count*3) && timer_i%3==0 ){
			text.text = story_text[timer_i/3];
		}
		else if(timer_i>(story_text.Count*3)){
			story.SetActive(false);
		}
	}
}

function skip_3 () {
	timer_i = 10;
	story.SetActive(false);
}