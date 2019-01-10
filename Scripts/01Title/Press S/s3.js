#pragma strict

function Start () {
	InvokeRepeating("ShowText",0.5,1.5);
}

function ShowText () {
	var t:UI.Text =GetComponent.<UI.Text>();
	if(t.text == ""){
	  t.text = "S" ;
	}else{
	 t.text ="";
	}
}
