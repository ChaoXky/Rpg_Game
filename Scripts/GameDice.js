import UnityEngine.UI;
import System.Collections.Generic;

#pragma strict
public class GameDice extends MonoBehaviour {
	function gamedice() {
		// Message with a link to an object.
		//Debug.Log(Random.Range(1, 7));
		var sixnum:Text = GameObject.Find("Canvas/ability/derive/sixdice/sixdicenum").GetComponent("Text") as Text;
		var fivenum:Text = GameObject.Find("Canvas/ability/derive/fivedice/fivedicenum").GetComponent("Text") as Text;
		var fournum:Text = GameObject.Find("Canvas/ability/derive/fourdice/fourdicenum").GetComponent("Text") as Text;
		var threenum:Text = GameObject.Find("Canvas/ability/derive/threedice/threedicenum").GetComponent("Text") as Text;
		var twonum:Text = GameObject.Find("Canvas/ability/derive/twodice/twodicenum").GetComponent("Text") as Text;
		var onenum:Text = GameObject.Find("Canvas/ability/derive/onedice/onedicenum").GetComponent("Text") as Text;

		var str_:Text = GameObject.Find("Canvas/ability/basis/str/STR_NU/Text").GetComponent("Text") as Text;
		var con_:Text = GameObject.Find("Canvas/ability/basis/con/CON_NU/Text").GetComponent("Text") as Text;
		var pow_:Text = GameObject.Find("Canvas/ability/basis/pow/POW_NU/Text").GetComponent("Text") as Text;
		var dex_:Text = GameObject.Find("Canvas/ability/basis/dex/DEX_NU/Text").GetComponent("Text") as Text;
		var app_:Text = GameObject.Find("Canvas/ability/basis/app/APP_NU/Text").GetComponent("Text") as Text;
		var siz_:Text = GameObject.Find("Canvas/ability/basis/siz/SIZ_NU/Text").GetComponent("Text") as Text;
		var int_:Text = GameObject.Find("Canvas/ability/basis/int/INT_NU/Text").GetComponent("Text") as Text;
		var edu_:Text = GameObject.Find("Canvas/ability/basis/edu/EDU_NU/Text").GetComponent("Text") as Text;
		var san_:Text = GameObject.Find("Canvas/ability/basis/san/SAN_NU/Text").GetComponent("Text") as Text;
		var hp_:Text = GameObject.Find("Canvas/ability/basis/hp/HP_NU/Text").GetComponent("Text") as Text;
		var mp_:Text = GameObject.Find("Canvas/ability/basis/mp/MP_NU/Text").GetComponent("Text") as Text;
		var db_:Text = GameObject.Find("Canvas/ability/basis/db/DB_NU/Text").GetComponent("Text") as Text;
		var idea_:Text = GameObject.Find("Canvas/ability/basis/idea/Idea_NU/Text").GetComponent("Text") as Text;
		var luck_:Text = GameObject.Find("Canvas/ability/basis/luck/Luck_NU/Text").GetComponent("Text") as Text;
		var know_:Text = GameObject.Find("Canvas/ability/basis/know/Know_NU/Text").GetComponent("Text") as Text;

		var arrdice = new List.<int>();
		var six : int =0;
		var five : int =0;
		var four : int =0;
		var three : int =0;
		var two : int =0;
		var one : int =0;

		for(var i=0; i<22; i++){
			arrdice.Add(Random.Range(1, 7));
			if(arrdice[i]==6)six++;
			if(arrdice[i]==5)five++;
			if(arrdice[i]==4)four++;
			if(arrdice[i]==3)three++;
			if(arrdice[i]==2)two++;
			if(arrdice[i]==1)one++;
		}
		if(CharInfor.cha_no==0){
			CharInfor.cha_str1 = arrdice[0]+arrdice[1]+arrdice[2];
			CharInfor.cha_con1 = arrdice[3]+arrdice[4]+arrdice[5];
			CharInfor.cha_pow1 = arrdice[6]+arrdice[7]+arrdice[8];
			CharInfor.cha_dex1 = arrdice[9]+arrdice[10]+arrdice[11];
			CharInfor.cha_app1 = arrdice[12]+arrdice[13]+arrdice[14];
			CharInfor.cha_siz1 = arrdice[15]+arrdice[16]+6;
			CharInfor.cha_int1 = arrdice[17]+arrdice[18]+6;
			CharInfor.cha_edu1 = arrdice[19]+arrdice[20]+arrdice[21]+3;
			CharInfor.cha_san1 = (arrdice[6]+arrdice[7]+arrdice[8])*5;
			CharInfor.cha_hp1 = (arrdice[3]+arrdice[4]+arrdice[5]+arrdice[15]+arrdice[16]+6)/2;
			CharInfor.cha_mp1 = arrdice[6]+arrdice[7]+arrdice[8];
			CharInfor.cha_db1 = arrdice[0]+arrdice[1]+arrdice[2]+arrdice[15]+arrdice[16]+6;
			CharInfor.cha_idea1 = (arrdice[17]+arrdice[18]+6)*5;
			CharInfor.cha_luck1 = (arrdice[6]+arrdice[7]+arrdice[8])*5;
			CharInfor.cha_know1 = (arrdice[19]+arrdice[20]+arrdice[21]+3)*5;
		}
		else if(CharInfor.cha_no==1){
			CharInfor.cha_str2 = arrdice[0]+arrdice[1]+arrdice[2];
			CharInfor.cha_con2 = arrdice[3]+arrdice[4]+arrdice[5];
			CharInfor.cha_pow2 = arrdice[6]+arrdice[7]+arrdice[8];
			CharInfor.cha_dex2 = arrdice[9]+arrdice[10]+arrdice[11];
			CharInfor.cha_app2 = arrdice[12]+arrdice[13]+arrdice[14];
			CharInfor.cha_siz2 = arrdice[15]+arrdice[16]+6;
			CharInfor.cha_int2 = arrdice[17]+arrdice[18]+6;
			CharInfor.cha_edu2 = arrdice[19]+arrdice[20]+arrdice[21]+3;
			CharInfor.cha_san2 = (arrdice[6]+arrdice[7]+arrdice[8])*5;
			CharInfor.cha_hp2 = (arrdice[3]+arrdice[4]+arrdice[5]+arrdice[15]+arrdice[16]+6)/2;
			CharInfor.cha_mp2 = arrdice[6]+arrdice[7]+arrdice[8];
			CharInfor.cha_db2 = arrdice[0]+arrdice[1]+arrdice[2]+arrdice[15]+arrdice[16]+6;
			CharInfor.cha_idea2 = (arrdice[17]+arrdice[18]+6)*5;
			CharInfor.cha_luck2 = (arrdice[6]+arrdice[7]+arrdice[8])*5;
			CharInfor.cha_know2 = (arrdice[19]+arrdice[20]+arrdice[21]+3)*5;
		}

		str_.text = (arrdice[0]+arrdice[1]+arrdice[2]).ToString();
		con_.text = (arrdice[3]+arrdice[4]+arrdice[5]).ToString();
		pow_.text = (arrdice[6]+arrdice[7]+arrdice[8]).ToString();
		dex_.text = (arrdice[9]+arrdice[10]+arrdice[11]).ToString();
		app_.text = (arrdice[12]+arrdice[13]+arrdice[14]).ToString();
		siz_.text = (arrdice[15]+arrdice[16]+6).ToString();
		int_.text = (arrdice[17]+arrdice[18]+6).ToString();
		edu_.text = (arrdice[19]+arrdice[20]+arrdice[21]+3).ToString();
		san_.text = ((arrdice[6]+arrdice[7]+arrdice[8])*5).ToString();
		hp_.text = ((arrdice[3]+arrdice[4]+arrdice[5]+arrdice[15]+arrdice[16]+6)/2).ToString();
		mp_.text = (arrdice[6]+arrdice[7]+arrdice[8]).ToString();
		db_.text = (arrdice[0]+arrdice[1]+arrdice[2]+arrdice[15]+arrdice[16]+6).ToString();
		idea_.text = ((arrdice[17]+arrdice[18]+6)*5).ToString();
		luck_.text = ((arrdice[6]+arrdice[7]+arrdice[8])*5).ToString();
		know_.text = ((arrdice[19]+arrdice[20]+arrdice[21]+3)*5).ToString();



		sixnum.text = six.ToString();
		fivenum.text = five.ToString();
		fournum.text = four.ToString();
		threenum.text = three.ToString();
		twonum.text = two.ToString();
		onenum.text = one.ToString();
		//Debug.Log(CharInfor.cha_str+" "+CharInfor.cha_con);
		// Message using rich text.
	}
}