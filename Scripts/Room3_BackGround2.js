#pragma strict

var item1 : GameObject;
var item2 : GameObject;
var item3 : GameObject;
var item4 : GameObject;
var item5 : GameObject;
var item6 : GameObject;
var item7 : GameObject;
var item8 : GameObject;
var item9 : GameObject;

function itemuseReset() {
	
	try {
		item1.SetActive(false);
		item2.SetActive(false);
		item3.SetActive(false);
		item4.SetActive(false);
		item5.SetActive(false);
		item6.SetActive(false);
		item7.SetActive(false);
		item8.SetActive(false);
		item9.SetActive(false);
	} 
	catch (err) {
		Debug.Log("lost");
	}
}

function Update () {
	
}
