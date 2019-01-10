#pragma strict

public class CharSet3 extends MonoBehaviour {
	function CharCheck(){
		if(CharInfor.cha_no==0)CharInfor.cha_mode1=3;
		if(CharInfor.cha_no==1)CharInfor.cha_mode2=3;
    	Debug.Log(CharInfor.cha_mode1+""+CharInfor.cha_mode2);
    }
}