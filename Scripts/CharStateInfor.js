#pragma strict

var MaxHp : float ;
var Hp : float ;
var HpBar : GameObject;

var MaxMp : float ;
var Mp : float ;
var MpBar : GameObject;

var MaxSan : float ;
var San : float ;
var SanBar : GameObject;

var SimpleUI : GameObject;
var UIButton : Text;

var character1 : GameObject;
var character2 : GameObject;
var character3 : GameObject;
var place : GameObject;
var childchar : GameObject;

function Start () {
	if(CharInfor.cha_mode==1){
		//Instantiate(character1, transform.position, transform.rotation);
		childchar = Instantiate(character1);
		childchar.transform.parent = place.transform;
		childchar.transform.localPosition = Vector3.zero ;
		childchar.transform.localScale = Vector3(0.769f, 0.769f, 0);
	}
	if(CharInfor.cha_mode==2){
		childchar = Instantiate(character2);
		childchar.transform.parent = place.transform;
		childchar.transform.localPosition = Vector3.zero ;
		childchar.transform.localScale = Vector3(0.769f, 0.769f, 0);
	}
	if(CharInfor.cha_mode==3){
		childchar = Instantiate(character3);
		childchar.transform.parent = place.transform;
		childchar.transform.localPosition = Vector3.zero ;
		childchar.transform.localScale = Vector3(0.769f, 0.769f, 0);
	}
	MaxHp = CharInfor.cha_hp+1;
	Hp = CharInfor.cha_hp+1;
	MaxMp = CharInfor.cha_mp+1;
	Mp = CharInfor.cha_mp+1;
	MaxSan = CharInfor.cha_san+1;
	San = CharInfor.cha_san+1;
}

function Update () {
	HpBar.transform.localPosition = new Vector3((-350 + 350*(Hp/MaxHp)), 0.0f, 0.0f);
	MpBar.transform.localPosition = new Vector3((-350 + 350*(Mp/MaxMp)), 0.0f, 0.0f);
	SanBar.transform.localPosition = new Vector3((-350 + 350*(San/MaxSan)), 0.0f, 0.0f);
	if(Hp>MaxHp)Hp=MaxHp;
	if(Hp<0)Hp=0;
	if(Mp>MaxMp)Mp=MaxMp;
	if(Mp<0)Mp=0;
	if(San>MaxSan)San=MaxSan;
	if(San<0)San=0;
}

function SimpleUIPosition () {
	if(SimpleUI.transform.localPosition.x == (-198)){
		SimpleUI.transform.localPosition = new Vector3(-698, 141, 0.0f);
		UIButton.text = ("->");
	}
	else{
		SimpleUI.transform.localPosition = new Vector3(-198, 141, 0.0f);
		UIButton.text = ("<-");
	}
}