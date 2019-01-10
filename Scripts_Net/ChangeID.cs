using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;
using System;

public class ChangeID : MonoBehaviour {

	public int id = Player.myNo;
	public GameObject C_ID1;
	public GameObject C_ID2;
	public GameObject C_ID3;
	public GameObject C_ID4;
	public GameObject C_ID;
	public Text p1_ID;
	public Text p2_ID;
	public Text p3_ID;
	public Text p4_ID;
	public Text input_ID;
	public static String p_id;

	// Use this for initialization
	void Start () {
		id = Player.myNo;
		if (id == 1) {
			C_ID1.SetActive (true);
		}
		if (id == 2) {
			C_ID2.SetActive (true);
		}
		if (id == 3) {
			C_ID3.SetActive (true);
		}
		if (id == 4) {
			C_ID4.SetActive (true);
		}
	}
	
	// Update is called once per frame
	void Update () {
		if (id == 0) {
			id = Player.myNo;
			if (id == 1) {
				C_ID1.SetActive (true);
			}
			if (id == 2) {
				C_ID2.SetActive (true);
			}
			if (id == 3) {
				C_ID3.SetActive (true);
			}
			if (id == 4) {
				C_ID4.SetActive (true);
			}
		}
		if (id == 1) {
			p_id = p1_ID.text;
			p2_ID.text = Player.p2_id;
			p3_ID.text = Player.p3_id;
			p4_ID.text = Player.p4_id;
		}
		if (id == 2) {
			p_id = p2_ID.text;
			p1_ID.text = Player.p1_id;
			p3_ID.text = Player.p3_id;
			p4_ID.text = Player.p4_id;
		}
		if (id == 3) {
			p_id = p3_ID.text;
			p2_ID.text = Player.p2_id;
			p1_ID.text = Player.p1_id;
			p4_ID.text = Player.p4_id;
		}
		if (id == 4) {
			p_id = p4_ID.text;
			p2_ID.text = Player.p2_id;
			p3_ID.text = Player.p3_id;
			p1_ID.text = Player.p1_id;
		}
	}

	public void Change_ID (){
		if (id == 1) {
			p1_ID.text = input_ID.text;
		}
		if (id == 2) {
			p2_ID.text = input_ID.text;
		}
		if (id == 3) {
			p3_ID.text = input_ID.text;
		}
		if (id == 4) {
			p4_ID.text = input_ID.text;
		}
	}

	public void change_OPEN(){
		C_ID.SetActive (true);
	}
	public void change_CLOSE(){
		C_ID.SetActive (false);
	}
}
