
#pragma strict

public class CharMade extends MonoBehaviour {
	function CharAdd(){
    	if(CharInfor.cha_mode1!=0 && CharInfor.cha_no==0 && CharInfor.cha_siz1 !=0){
    		CharInfor.cha_no=1;
    		Application.LoadLevel ("03LogingCharacter");
    	}
    	else if(CharInfor.cha_mode2!=0 && CharInfor.cha_no==1 && CharInfor.cha_siz2 !=0){
    		CharInfor.cha_no=2;
    		Application.LoadLevel ("03LogingCharacter");
    	}
    }
}