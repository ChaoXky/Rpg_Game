#pragma strict
var prePos : Vector2 ;

function OnMouseDown(){
	Debug.Log("hollow");
	prePos = Input.mousePosition ;
}

function OnMouseDrag(){
	var rect : RectTransform = GetComponent.<RectTransform>();
	rect.anchoredPosition += Input.mousePosition - prePos;
	prePos = Input.mousePosition;
	/*var cam : Camera = Camera.main ;
	var newPos : Vector3 = cam.ScreenToWorldPoint(Input.mousePosition);
	transform.position = Vector3(newPos.x, newPos.y, 0);*/
}

