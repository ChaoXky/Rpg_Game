#pragma strict

function CharLog1(){
	CharInfor.cha_log = 1;
	Debug.Log("CharInfor.cha_log="+CharInfor.cha_log);
}
function CharLog2(){
	CharInfor.cha_log = 2;
	Debug.Log("CharInfor.cha_log="+CharInfor.cha_log);
}
function CharStart(){
	if (CharInfor.cha_log == 2 && CharInfor.cha_no == 2){
		CharInfor.cha_str = CharInfor.cha_str2;
		CharInfor.cha_con = CharInfor.cha_con2;
		CharInfor.cha_pow = CharInfor.cha_pow2;
		CharInfor.cha_dex = CharInfor.cha_dex2;
		CharInfor.cha_app = CharInfor.cha_app2;
		CharInfor.cha_siz = CharInfor.cha_siz2;
		CharInfor.cha_int = CharInfor.cha_int2;
		CharInfor.cha_edu = CharInfor.cha_edu2;
		CharInfor.cha_san = CharInfor.cha_san2;
		CharInfor.cha_hp = CharInfor.cha_hp2;
		CharInfor.cha_mp = CharInfor.cha_mp2;
		CharInfor.cha_db = CharInfor.cha_db2;
		CharInfor.cha_idea = CharInfor.cha_idea2;
		CharInfor.cha_luck = CharInfor.cha_luck2;
		CharInfor.cha_know = CharInfor.cha_know2;
	    CharInfor.cha_mode = CharInfor.cha_mode2;
		Application.LoadLevel ("05GameHall");
	}
	else if (CharInfor.cha_log != 2 && CharInfor.cha_no >= 1){
		CharInfor.cha_str = CharInfor.cha_str1;
		CharInfor.cha_con = CharInfor.cha_con1;
		CharInfor.cha_pow = CharInfor.cha_pow1;
		CharInfor.cha_dex = CharInfor.cha_dex1;
		CharInfor.cha_app = CharInfor.cha_app1;
		CharInfor.cha_siz = CharInfor.cha_siz1;
		CharInfor.cha_int = CharInfor.cha_int1;
		CharInfor.cha_edu = CharInfor.cha_edu1;
		CharInfor.cha_san = CharInfor.cha_san1;
		CharInfor.cha_hp = CharInfor.cha_hp1;
		CharInfor.cha_mp = CharInfor.cha_mp1;
		CharInfor.cha_db = CharInfor.cha_db1;
		CharInfor.cha_idea = CharInfor.cha_idea1;
		CharInfor.cha_luck = CharInfor.cha_luck1;
		CharInfor.cha_know = CharInfor.cha_know1;
	    CharInfor.cha_mode = CharInfor.cha_mode1;
		Application.LoadLevel ("05GameHall");
	}
}