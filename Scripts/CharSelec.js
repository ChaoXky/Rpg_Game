#pragma strict

var character1 : GameObject;
var character2 : GameObject;
var character3 : GameObject;
var place1 : GameObject;
var place2 : GameObject;
var childchar : GameObject;

function Start () {
	if(CharInfor.cha_no>=1) {
		if(CharInfor.cha_mode1==1){
			//Instantiate(character1, transform.position, transform.rotation);
			childchar = Instantiate(character1);
			childchar.transform.parent = place1.transform;
			childchar.transform.localPosition = Vector3.zero ;
		}
		if(CharInfor.cha_mode1==2){
			childchar = Instantiate(character2);
			childchar.transform.parent = place1.transform;
			childchar.transform.localPosition = Vector3.zero ;
		}
		if(CharInfor.cha_mode1==3){
			childchar = Instantiate(character3);
			childchar.transform.parent = place1.transform;
			childchar.transform.localPosition = Vector3.zero ;
		}
	}
	if(CharInfor.cha_no>=2) {
		if(CharInfor.cha_mode2==1){
			//Instantiate(character1, transform.position, transform.rotation);
			childchar = Instantiate(character1);
			childchar.transform.parent = place2.transform;
			childchar.transform.localPosition = Vector3.zero ;
		}
		if(CharInfor.cha_mode2==2){
			childchar = Instantiate(character2);
			childchar.transform.parent = place2.transform;
			childchar.transform.localPosition = Vector3.zero ;
		}
		if(CharInfor.cha_mode2==3){
			childchar = Instantiate(character3);
			childchar.transform.parent = place2.transform;
			childchar.transform.localPosition = Vector3.zero ;
		}
	}
	Debug.Log(CharInfor.cha_no+" "+CharInfor.cha_mode1+" "+CharInfor.cha_mode2);
}

