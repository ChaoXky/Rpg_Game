#pragma strict

var player : GameObject;

static class move{
	var can : int = 0;
}

function Start () {
	
}

function Update () {
	player.transform.rotation.z = 0f;
	if(move.can == 0){
		if (Input.GetKey(KeyCode.UpArrow)){
			player.transform.Translate(Vector2.up * 3f);
		}	
		if (Input.GetKey(KeyCode.DownArrow)){
			player.transform.Translate(Vector2.down * 3f);
		}		
		if (Input.GetKey(KeyCode.LeftArrow)){
			player.transform.Translate(Vector2.left * 3f);
		}		
		if (Input.GetKey(KeyCode.RightArrow)){
			player.transform.Translate(Vector2.right * 3f);
		}
	}
}

function OnCollisionEnter2D(coll: Collision2D) {	
}
function OnCollisionExit2D(coll: Collision2D) {
}
function OnCollisionStay2D(coll: Collision2D) {
}
function OnTriggerEnter2D(other: Collider2D){
 	if(other.tag == "candle"){
 		Debug.Log("碰撞"+other);
 		Item.candle = 1;
 	}
 	if(other.tag == "HolyGrail"){
 		Debug.Log("碰撞"+other);
 		Item.HolyGrail = 1;
 	}
 	if(other.tag == "door_r"){
 		Debug.Log("碰撞"+other);
 		Item.door_r = 1;
 	}
 	if(other.tag == "door_l"){
 		Debug.Log("碰撞"+other);
 		Item.door_l = 1;
 	}
 	if(other.tag == "table"){
 		Debug.Log("碰撞"+other);
 		Item.table = 1;
 	}
 	if(other.tag == "under_table"){
 		Debug.Log("碰撞"+other);
 		Item.under_table = 1;
 	}
 	if(other.tag == "item1"){
 		Debug.Log("碰撞"+other);
 		Item.item1 = 1;
 	}
 	if(other.tag == "item2"){
 		Debug.Log("碰撞"+other);
 		Item.item2 = 1;
 	}
 	if(other.tag == "item3"){
 		Debug.Log("碰撞"+other);
 		Item.item3 = 1;
 	}
 	if(other.tag == "door_r_open"){
 		Debug.Log("碰撞"+other);
 		yes_or_no.door_r = 1;
 	}
 	if(other.tag == "door_l_open"){
 		Debug.Log("碰撞"+other);
 		yes_or_no.door_l = 1;
 	}
}
function OnTriggerExit2D(other: Collider2D) {
	 if(other.tag == "candle"){
 		Debug.Log("碰撞"+other);
 		Item.candle = 0;
 	}
 	 if(other.tag == "HolyGrail"){
 		Debug.Log("碰撞"+other);
 		Item.HolyGrail = 0;
 	}
 	if(other.tag == "door_r"){
 		Debug.Log("碰撞"+other);
 		Item.door_r = 0;
 	}
 	if(other.tag == "door_l"){
 		Debug.Log("碰撞"+other);
 		Item.door_l = 0;
 	}
 	if(other.tag == "table"){
 		Debug.Log("碰撞"+other);
 		Item.table = 0;
 	}
 	if(other.tag == "under_table"){
 		Debug.Log("碰撞"+other);
 		Item.under_table = 0;
 	}
 	if(other.tag == "item1"){
 		Debug.Log("碰撞"+other);
 		Item.item1 = 0;
 	}
 	if(other.tag == "item2"){
 		Debug.Log("碰撞"+other);
 		Item.item2 = 0;
 	}
 	if(other.tag == "item3"){
 		Debug.Log("碰撞"+other);
 		Item.item3 = 0;
 	}
}