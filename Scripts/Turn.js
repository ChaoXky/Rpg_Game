#pragma strict

public var myNo : int;
public var ore_no_turn : int;
var turn : Text;

function Start () {
	if(CharInfor.cha_no == 1){
		myNo = 0;
	}
	if(CharInfor.cha_no == 2){
		myNo = 1;
	}
	if(CharInfor.cha_no == 3){
		myNo = 2;
	}
	if(CharInfor.cha_no == 4){
		myNo = 3;
	}
	ore_no_turn = Item.turn%CharInfor.allPlayer;
	if (ore_no_turn != myNo) {
		move.can = 1;
		Debug.Log("Cant");
	}
	if (ore_no_turn == myNo) {
		move.can = 0;
		Debug.Log("Can");
	}
}

function Update () {
	if(int.Parse (turn.text) > Item.turn){
		Item.turn = int.Parse (turn.text);
		ore_no_turn = Item.turn%CharInfor.allPlayer;
		if (ore_no_turn != myNo) move.can = 1;
		if (ore_no_turn == myNo) move.can = 0;
	}
}
