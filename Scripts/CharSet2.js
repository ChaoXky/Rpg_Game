#pragma strict

public class CharSet2 extends MonoBehaviour {
	function CharCheck(){
		if(CharInfor.cha_no==0)CharInfor.cha_mode1=2;
		if(CharInfor.cha_no==1)CharInfor.cha_mode2=2;
    	Debug.Log(CharInfor.cha_mode1+""+CharInfor.cha_mode2);
    }
}