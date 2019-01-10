#pragma strict

var story : GameObject ;
var text : Text;
var timer_f : float = 0f;
var timer_i : int = 0;

var story_text = new List.<String>();

function Start () {
	move.can = 1;
	story_text.Add("很難想像\n擺滿童話故事書的地方會在這裡出現");
	story_text.Add("有別於其他的房間\n這裡更接近我們在生活中會遇到的地方");
	story_text.Add("不過我們很清楚\n我們不能也不會停留在這裡一分一秒");
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

function skip () {
	timer_i = 10;
	story.SetActive(false);
}