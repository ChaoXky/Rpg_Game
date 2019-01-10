#pragma strict

var str_:Text ;
var con_:Text ;
var pow_:Text ;
var dex_:Text ;
var app_:Text ;
var siz_:Text ;
var int_:Text ;
var edu_:Text ;
var san_:Text ;
var hp_:Text ;
var mp_:Text ;
var db_:Text ;
var idea_:Text ;
var luck_:Text ;
var know_:Text ;
var class_:Text ;

var paper1: GameObject;
var paper2: GameObject;
var new1: GameObject;

var infor_: GameObject;
var item_: GameObject;
var skill_: GameObject;

var character1 : GameObject;
var character2 : GameObject;
var character3 : GameObject;
var place : GameObject;
var childchar : GameObject;

var player1 : GameObject;
var player2 : GameObject;
var player3 : GameObject;
var player4 : GameObject;

var Move1 : CharacterMove;
var Move2 : CharacterMove;
var Move3 : CharacterMove;
var Move4 : CharacterMove;

var itemback : GameObject;
var newitem: GameObject;

var stateupdate_cd : int = 1;

function Start(){
	if(CharInfor.allPlayer >= 1){
		player1.SetActive(true);
	}
	if(CharInfor.allPlayer >= 2){
		player2.SetActive(true);
	}	
	if(CharInfor.allPlayer >= 3){
		player3.SetActive(true);
	}
	if(CharInfor.allPlayer >= 4){
		player4.SetActive(true);
	}

	if(CharInfor.cha_no == 1){
		Move1.enabled = !Move1.enabled;
	}
	if(CharInfor.cha_no == 2){
		Move2.enabled = !Move2.enabled;
	}
	if(CharInfor.cha_no == 3){
		Move3.enabled = !Move3.enabled;
	}
	if(CharInfor.cha_no == 4){
		Move4.enabled = !Move4.enabled;
	}

	if(CharInfor.cha_mode==1){
		//Instantiate(character1, transform.position, transform.rotation);
		childchar = Instantiate(character1);
		childchar.transform.parent = place.transform;
		childchar.transform.localPosition = Vector3.zero ;
	}
	if(CharInfor.cha_mode==2){
		childchar = Instantiate(character2);
		childchar.transform.parent = place.transform;
		childchar.transform.localPosition = Vector3.zero ;
	}
	if(CharInfor.cha_mode==3){
		childchar = Instantiate(character3);
		childchar.transform.parent = place.transform;
		childchar.transform.localPosition = Vector3.zero ;
	}
	/*
	if(CharInfor.state_num != 0){
		if(CharInfor.state_num >= 95){

		}
		if(CharInfor.state_num >= 50){
			str_.text = CharInfor.cha_str.ToString();
			con_.text = CharInfor.cha_con.ToString();
			pow_.text = CharInfor.cha_pow.ToString();
			dex_.text = CharInfor.cha_dex.ToString();
	
			int_.text = CharInfor.cha_int.ToString();
			edu_.text = CharInfor.cha_edu.ToString();
	
			db_.text = CharInfor.cha_db.ToString();
			idea_.text = CharInfor.cha_idea.ToString();
			luck_.text = CharInfor.cha_luck.ToString();
			know_.text = CharInfor.cha_know.ToString();
		}
		if(CharInfor.state_num >= 5){
			san_.text = CharInfor.cha_san.ToString();
			hp_.text = CharInfor.cha_hp.ToString();
			mp_.text = CharInfor.cha_mp.ToString();
		}
		app_.text = CharInfor.cha_app.ToString();
		siz_.text = CharInfor.cha_siz.ToString();
		class_.text = CharInfor.cha_class.ToString();
	}
	*/
}

function Update(){
/*
	if (Input.GetKeyUp(KeyCode.S)){
		if(infor_.active == false) infor_.SetActive(true);
		else infor_.SetActive(false);
	}
	if (Input.GetKeyUp(KeyCode.I)){
		if(item_.active == false) item_.SetActive(true);
		else item_.SetActive(false);
	}
	if (Input.GetKeyUp(KeyCode.K)){
		if(skill_.active == false) skill_.SetActive(true);
		else skill_.SetActive(false);
	}
*/
}

function stateupdate() {
	if(stateupdate_cd>=1){
		CharInfor.state_num = CharInfor.dice_num;

		new1.SetActive(true);
		if(CharInfor.dice_num >= 50){
			paper1.SetActive(true);
		}
		else {
			paper2.SetActive(true);
		}
		stateupdate_cd --;

	}
}

function ItemBack(){
	itemback.active = !itemback.active;
	newitem.SetActive(false);
}