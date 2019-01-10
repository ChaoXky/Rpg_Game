#pragma strict

var dice_num : Text;
var success : Text;
var success_g : GameObject;
var dice_but : GameObject;
var dice_cd : int = 1;
var dice_open : GameObject;
var timer_f : float = 0f;
var cheating : int = 0;

function dice100 () {
	if(dice_cd>=1){
		if(cheating == 0){
			CharInfor.dice_num = Random.Range(1, 101);
			Debug.Log(CharInfor.dice_num);
			dice_num.text = (CharInfor.dice_num.ToString()+"/100");
			if(CharInfor.dice_num>=95) success.text = ("大成功");
			else if(CharInfor.dice_num>=50) success.text = ("成功");
			else if(CharInfor.dice_num>=5) success.text = ("失敗");
			else success.text = ("大失敗");
			success_g.SetActive(true);
			timer_f = 2;
			dice_cd --;
		}
		else{
			CharInfor.dice_num = cheating;
			Debug.Log(CharInfor.dice_num);
			dice_num.text = (CharInfor.dice_num.ToString()+"/100");
			success.text = ("大成功");
			success_g.SetActive(true);
			timer_f = 2;
			dice_cd --;
		}
	}
}

function dice6 () {
	
}

function Update () {
	if(timer_f <= 3 && timer_f > 0){
		timer_f -= Time.deltaTime;
		if(timer_f <= 0){
			dice_but.SetActive(false);
			success_g.SetActive(false);
		}
	}
}

function dice100_on (){
		move.can = 1;
		dice_cd = 1;
		CharInfor.dice_num = 0;
		dice_open.SetActive(true);
		dice_num.text = ("請擲骰子");	
}

function seton(on : GameObject) {
	on.SetActive(true);
}

function setoff(off : GameObject) {
	off.SetActive(false);
}