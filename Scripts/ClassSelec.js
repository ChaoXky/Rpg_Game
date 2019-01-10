#pragma strict

var class_panel : GameObject;
var ready : GameObject;

function cha_class1 () {
	CharInfor.cha_class = 1;
	class_panel.SetActive(false);
	Debug.Log("CharInfor.cha_class="+CharInfor.cha_class);
}

function cha_class2 () {
	CharInfor.cha_class = 2;
	class_panel.SetActive(false);
	Debug.Log("CharInfor.cha_class="+CharInfor.cha_class);
}

function cha_class3 () {
	CharInfor.cha_class = 3;
	class_panel.SetActive(false);
	Debug.Log("CharInfor.cha_class="+CharInfor.cha_class);
}

function cha_class4 () {
	CharInfor.cha_class = 4;
	class_panel.SetActive(false);
	Debug.Log("CharInfor.cha_class="+CharInfor.cha_class);
}

function SetOn () {
	if(ready.active == false){
		class_panel.SetActive(true);
	}
}