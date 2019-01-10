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
	if(Item.candle == 0)	item1.SetActive(false);
	if(Item.HolyGrail == 0)	item2.SetActive(false);
	if(Item.door_r == 0)	item3.SetActive(false);
	if(Item.door_l == 0)	item4.SetActive(false);
	if(Item.table == 0)		item5.SetActive(false);
	if(Item.item1 == 0)	item7.SetActive(false);
	if(Item.item2 == 0)	item8.SetActive(false);
	if(Item.item3 == 0)	item9.SetActive(false);
}
