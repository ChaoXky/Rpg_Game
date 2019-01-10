using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;
using System;


public class Player_Position : NetworkBehaviour {
	GM gm;
	public GameObject p1p;
	public GameObject p2p;
	public GameObject p3p;
	public GameObject p4p;
	public GameObject p2p_fish;
	public int id = Player.myNo;
	public int fish = 0;

	public static Vector3 pos;
	public static Vector3 pos_fish;
	public static Vector3 p1m;
	public static Vector3 p2m;
	public static Vector3 p3m;
	public static Vector3 p4m;
	public static Vector3 mov;

	public Text turn_text;
	public static int turns = 0;

	// Use this for initialization
	void Start () {
		id = Player.myNo;
		/*
		if (isServer)
		{
			gm = GameObject.Find("GM").GetComponent<GM>();
			gm.Login(this);
		}*/
		if (id == 1) {
			pos = p1p.transform.localPosition;
		}
		if (id == 2) {
			pos = p2p.transform.localPosition;
		}
		if (id == 3) {
			pos = p3p.transform.localPosition;
		}
		if (id == 4) {
			pos = p4p.transform.localPosition;
		}
	}

	// Update is called once per frame
	void Update () {
		if (id == 1) {
			pos = p1p.transform.localPosition;
			mov = PlayerWalk.moveDirection1;
			p2p.transform.localPosition = Player.p2p;
			p3p.transform.localPosition = Player.p3p;
			p4p.transform.localPosition = Player.p4p;
			p2m = Player.p2m;
			p3m = Player.p3m;
			p4m = Player.p4m;
		}
		if (id == 2) {
			pos = p2p.transform.localPosition;
			mov = PlayerWalk.moveDirection2;
			p1p.transform.localPosition = Player.p1p;
			p3p.transform.localPosition = Player.p3p;
			p4p.transform.localPosition = Player.p4p;
			p1m = Player.p1m;
			p3m = Player.p3m;
			p4m = Player.p4m;
		}
		if (id == 3) {
			pos = p3p.transform.localPosition;
			mov = PlayerWalk.moveDirection3;
			p1p.transform.localPosition = Player.p1p;
			p2p.transform.localPosition = Player.p2p;
			p4p.transform.localPosition = Player.p4p;
			p1m = Player.p1m;
			p2m = Player.p2m;
			p4m = Player.p4m;
		}
		if (id == 4) {
			pos = p4p.transform.localPosition;
			mov = PlayerWalk.moveDirection4;
			p1p.transform.localPosition = Player.p1p;
			p2p.transform.localPosition = Player.p2p;
			p3p.transform.localPosition = Player.p3p;
			p1m = Player.p1m;
			p2m = Player.p2m;
			p3m = Player.p3m;
		}
		if (fish == 1 && id == 2) {
			pos_fish = p2p_fish.transform.localPosition;
		}
		if (fish == 1 && id != 2) {
			p2p_fish.transform.localPosition = Player.p2p_fish;
		}

/*
		if (turns < int.Parse (turn_text.text)) {
			turns = int.Parse (turn_text.text);
		}
		if (Player.turns > turns) {
			turns = Player.turns;
			turn_text.text = turns.ToString ();
		}
		//Player.CmdPosition (id, pos);
*/	
	}
	/*
	[Command]
	public void CmdPosition(int id){
	//	Debug.Log("id= "+id);
		if (id == 1) {
			gm.SetPosition (id, pos);
			//SetPosition ();
		}
		if (id == 2) {
			gm.SetPosition (id, pos);
			//SetPosition ();
		}
		if (id == 3) {
			gm.SetPosition (id, pos);
			//SetPosition ();
		}
		if (id == 4) {
			gm.SetPosition (id, pos);
			//SetPosition ();
		}
	}*/
	/*
	void SetPosition(){
		if (isServer) {
			set1p = gm.p1p;
			set2p = gm.p2p;
			set3p = gm.p3p;
			set4p = gm.p4p;
			Debug.Log ("work");
		}
		if (isLocalPlayer) {
			p1p.transform.position = set1p;
			p2p.transform.position = set2p;
			p3p.transform.position = set3p;
			p4p.transform.position = set4p;
			Debug.Log ("work");
		}
	}

	[SyncVar]
	public Vector3 set1p;
	[SyncVar]
	public Vector3 set2p;
	[SyncVar]
	public Vector3 set3p;
	[SyncVar]
	public Vector3 set4p;*/
}
