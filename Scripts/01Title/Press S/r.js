﻿#pragma strict

function Start () {
	InvokeRepeating("ShowText",0.1,1.5);
}

function ShowText () {
	var t:UI.Text =GetComponent.<UI.Text>();
	if(t.text == ""){
	  t.text = "r" ;
	}else{
	 t.text ="";
	}
}
