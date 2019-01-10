#pragma strict

var map :GameObject;
var x_y : int;
var position : int;

function Start () {
	
}

function Update () {
	
}

function OnTriggerEnter2D(other: Collider2D){
	Debug.Log("碰撞"+other);
	if(x_y == 1)
	map.transform.localPosition = new Vector3(position, 0, 0.0f);
	if(x_y == 2)
	map.transform.localPosition = new Vector3(0, position, 0.0f);
}