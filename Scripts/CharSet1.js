#pragma strict

public class CharSet1 extends MonoBehaviour {
	function CharCheck(){
		if(CharInfor.cha_no==0)CharInfor.cha_mode1=1;
		if(CharInfor.cha_no==1)CharInfor.cha_mode2=1;
    	Debug.Log(CharInfor.cha_mode1+""+CharInfor.cha_mode2);
    }
}