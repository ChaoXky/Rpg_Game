using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;
using System;

public class Event : NetworkBehaviour {

	public GameObject message;
	public Text message_t;
	public Text event_code;
	public GameObject Room1;
	public GameObject Room2;
	public GameObject Room3;
	public GameObject Room_End;
	public static int message_sw = 0;
	public static string message_s;
	public static int code = 0;
	public int code_b = 0;

	public GameObject TP1;
	public GameObject TP2;
	public GameObject TP3;
	public GameObject TP4;
	public GameObject Floor;

	public GameObject key1;
	public GameObject key2;
	public GameObject sh;
	public GameObject mh;
	public GameObject hg;
	public GameObject paper1;
	public GameObject paper2;
	public GameObject gem1;
	public GameObject gem2;
	public GameObject gem3;
	public GameObject gem4;
	public GameObject gem5;
	public GameObject gem6;
	public GameObject gem7;
	public GameObject newitem;

	// Use this for initialization
	void Start () {

	}

	// Update is called once per frame
	void Update () {
		/*	if (message.active == false && message_sw == 2) {
			message_t.text = message_s;
			message.SetActive (true);
			code_b = Player.pcode;
			if(Player.pcode != 0)
				event_code.text = (Player.pcode+1).ToString ();			
			code = 0;
			message_sw = 0;
		}*/

		if (int.Parse (event_code.text)%2 == 1) {
			code = int.Parse (event_code.text);	
			event_code.text = (code+1).ToString ();
			message_sw = 1;
			Debug.Log ("code "+code);
		}

		if (Player.pcode == 1 && code_b != Player.pcode) {
			message_s = "得到了鑰匙";
			key1.SetActive (true);
			newitem.SetActive (true);
			_event (1);
			Ending.score += 30;
		}
		if (Player.pcode == 3 && code_b != Player.pcode) {
			message_s = "得到了聖杯";
			hg.SetActive (true);
			newitem.SetActive (true);
			_event (3);
			Ending.score += 10;
		}
		if (Player.pcode == 5 && code_b != Player.pcode) {
			message_s = "得到了秒針";
			sh.SetActive (true);
			newitem.SetActive (true);
			_event (5);
			Ending.score += 30;
		}
		if (Player.pcode == 7 && code_b != Player.pcode) {
			message_s = "得到了分針";
			mh.SetActive (true);
			newitem.SetActive (true);
			_event (7);
			Ending.score += 30;
		}
		if (Player.pcode == 9 && code_b != Player.pcode) {
			message_s = "獲得了破損的筆記(2)";
			paper2.SetActive (true);
			newitem.SetActive (true);
			_event (9);
			Ending.score += 100;
		}
		if (Player.pcode == 11 && code_b != Player.pcode) {
			_nextroom ();
		}
		if (Player.pcode == 13 && code_b != Player.pcode) {
			message_s = "門打開了!";
			_event (13);
		}
		if (Player.pcode == 15 && code_b != Player.pcode) {
			_TP (15);
		}
		if (Player.pcode == 17 && code_b != Player.pcode) {
			_TP (17);
		}
		if (Player.pcode == 23 && code_b != Player.pcode) {
			_TP (23);
		}
		if (Player.pcode == 25 && code_b != Player.pcode) {
			code_pass (25);
		}
		if (Player.pcode == 27 && code_b != Player.pcode) {
			code_pass (27);
		}
		if (Player.pcode == 29 && code_b != Player.pcode) {
			code_pass (29);
		}
		if (Player.pcode == 31 && code_b != Player.pcode) {
			code_pass (31);
		}
		if (Player.pcode == 33 && code_b != Player.pcode) {
			code_pass (33);
		}
		if (Player.pcode == 35 && code_b != Player.pcode) {
			code_pass (35);
		}
		if (Player.pcode == 37 && code_b != Player.pcode) {
			code_pass (37);
		}
		if (Player.pcode == 39 && code_b != Player.pcode) {
			code_pass (39);
		}
		if (Player.pcode == 41 && code_b != Player.pcode) {
			message_s = "那面鏡子可以實現我所有願望";
			_event (41);
		}
		if (Player.pcode == 43 && code_b != Player.pcode) {
			code_pass (43);
		}
		if (Player.pcode == 45 && code_b != Player.pcode) {
			code_pass (45);
		}
		if (Player.pcode == 47 && code_b != Player.pcode) {
			code_pass (47);
		}
		if (Player.pcode == 49 && code_b != Player.pcode) {
			message_s = "穿進了王子帶來的玻璃鞋";
			_event (49);
		}
		if (Player.pcode == 51 && code_b != Player.pcode) {
			message_s = "姊姊們割腳仍然穿不下玻璃鞋\n王子找到我並讓我試穿了玻璃鞋";
			_event (51);
		}
		if (Player.pcode == 53 && code_b != Player.pcode) {
			message_s = "將繼母和兩位姊姊抓起來了";
			_event (53);
		}
		if (Player.pcode == 55 && code_b != Player.pcode) {
			message_s = "寄邀請函給繼母和兩位姊姊了";
			_event (55);
		}
		if (Player.pcode == 57 && code_b != Player.pcode) {
			code_pass (57);
		}
		if (Player.pcode == 59 && code_b != Player.pcode) {
			_TP (59);
		}
		if (Player.pcode == 61 && code_b != Player.pcode) {
			_TP (61);
		}
		if (Player.pcode == 63 && code_b != Player.pcode) {
			_nextroom1 ();
		}
		if (Player.pcode == 65 && code_b != Player.pcode) {
			code_pass (65);
		}
		if (Player.pcode == 67 && code_b != Player.pcode) {
			code_pass (67);
		}
		if (Player.pcode == 69 && code_b != Player.pcode) {	//開水龍頭
			code_pass (69);
			Ending.score += 10;
		}
		if (Player.pcode == 71 && code_b != Player.pcode) {
			message_s = "得到了靛色寶石";
			gem2.SetActive (true);
			newitem.SetActive (true);
			_event (71);
			Ending.score += 50;
		}
		if (Player.pcode == 73 && code_b != Player.pcode) {
			message_s = "得到了鑰匙";
			key2.SetActive (true);
			newitem.SetActive (true);
			_event (73);
			Ending.score += 30;
		}
		if (Player.pcode == 75 && code_b != Player.pcode) {
			message_s = "如果需要幫忙的話\n就跟另一個世界的我說吧!";
			_event (75);
			Ending.score += 10;
		}
		if (Player.pcode == 77 && code_b != Player.pcode) {
			message_s = "得到了藍色寶石";
			gem4.SetActive (true);
			newitem.SetActive (true);
			_event (77);
			Ending.score += 50;
		}
		if (Player.pcode == 79 && code_b != Player.pcode) {
			message_s = "門打開了";
			_event (79);
		}
		if (Player.pcode == 81 && code_b != Player.pcode) {
			_nextroom2 ();
		}
		if (Player.pcode == 83 && code_b != Player.pcode) {
			message_s = "獲得了黃色寶石";
			gem5.SetActive (true);
			newitem.SetActive (true);
			_event (83);
			Ending.score += 50;
		}
		if (Player.pcode == 85 && code_b != Player.pcode) {
			message_s = "獲得了綠色寶石";
			gem3.SetActive (true);
			newitem.SetActive (true);
			_event (85);
			Ending.score += 50;
		}
		if (Player.pcode == 87 && code_b != Player.pcode) {
			message_s = "獲得了澄色寶石";
			gem7.SetActive (true);
			newitem.SetActive (true);
			_event (87);
			Ending.score += 50;
		}
		if (Player.pcode == 89 && code_b != Player.pcode) {
			message_s = "獲得了紅色寶石";
			gem6.SetActive (true);
			newitem.SetActive (true);
			_event (89);
			Ending.score += 50;
		}
		if (Player.pcode == 91 && code_b != Player.pcode) {
			message_s = "獲得了破損的筆記(1)";
			paper1.SetActive (true);
			newitem.SetActive (true);
			_event (91);
			Ending.score += 100;
		}
		if (Player.pcode == 93 && code_b != Player.pcode) {
			message_s = "獲得了紫色寶石";
			gem1.SetActive (true);
			newitem.SetActive (true);
			_event (93);
			Ending.score += 50;
		}
		if (Player.pcode == 95 && code_b != Player.pcode) {
			message_s = "被火燙到了";
			_event (95);
			Ending.score -= 10;
		}
		/*
		if (Player.pcode == 1 && code_b != Player.pcode) {	
			message_s = "得到了鑰匙";
			message_sw = 2;
		}
		if (Player.pcode == 3 && code_b != Player.pcode) {
			message_s = "得到了聖杯";
			message_sw = 2;
		}
		if (Player.pcode == 5 && code_b != Player.pcode) {
			message_s = "得到了秒針";
			message_sw = 2;
		}
		if (Player.pcode == 7 && code_b != Player.pcode) {
			message_s = "得到了分針";
			message_sw = 2;
		}
		if (Player.pcode == 9 && code_b != Player.pcode) {
			message_s = "得到了紙團";
			message_sw = 2;
		}*/
	}

	void _event (int i){
		message_t.text = message_s;
		message.SetActive (true);
		event_code.text = (i + 1).ToString ();
		code_b = i;
		code = 0;
	}

	void _nextroom (){
		Room1.SetActive (false);
		Room2.SetActive (true);
	}

	void _nextroom1 (){
		Room2.SetActive (false);
		Room3.SetActive (true);
	}

	void _nextroom2 (){
		Room3.SetActive (false);
		Room_End.SetActive (true);
	}

	void code_pass (int i){
		event_code.text = (i + 1).ToString ();
		code_b = i;
		code = 0;
	}

	void _TP(int i){
		if (i == 15) {
			Floor.SetActive (false);
			TP1.SetActive (true);
			Debug.Log ("TP is on");
		}
		if (i == 17) {
			Floor.SetActive (false);
			TP2.SetActive (true);
			Debug.Log ("TP is on");
		}
		if (i == 23) {
			Floor.SetActive (true);
			TP1.SetActive (false);
			TP2.SetActive (false);
			TP3.SetActive (false);
			TP4.SetActive (false);
			Debug.Log ("TP is on");
			Room2ToRoom3.door += 1;
		}
		if (i == 59) {
			Floor.SetActive (false);
			TP3.SetActive (true);
			Debug.Log ("TP is on");
		}
		if (i == 61) {
			Floor.SetActive (false);
			TP4.SetActive (true);
			Debug.Log ("TP is on");
		}
		event_code.text = (i + 1).ToString ();
		code_b = i;
		code = 0;
	}
}
