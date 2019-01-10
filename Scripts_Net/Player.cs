using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;
using System;

public class Player : NetworkBehaviour
{
	GM gm;
	public Text txtMunber;
	public Text txtmyNo;
	public static int allPlayer;
	public static int myNo;
	public static int type;
	public static int player1;
	public static int player2;
	public static int player3;
	public static int player4;
	public static int p1Ready;
	public static int p2Ready;
	public static int p3Ready;
	public static int p4Ready;
	public static string p1_id;
	public static string p2_id;
	public static string p3_id;
	public static string p4_id;
	public static Vector3 p1p;
	public static Vector3 p2p;
	public static Vector3 p2p_fish;
	public static Vector3 p3p;
	public static Vector3 p4p;
	public static Vector3 p1m;
	public static Vector3 p2m;
	public static Vector3 p3m;
	public static Vector3 p4m;

	public static int turns;
	public static int pcode;
	public static string pchat = "";
	public static int chati = 0;

	public Button TypeOne;
	public Button TypeTwo;
	public Button TypeThree;
	public Button TypeFour;
	public Button Ready;

	void Start()
	{

		if (isServer)
		{
			gm = GameObject.Find("GM").GetComponent<GM>();
			gm.Login(this);
		}
		if (isLocalPlayer) {
			try{
				txtMunber = GameObject.Find("Player_num").GetComponent<Text>();
				//txtmyNo = GameObject.Find("MyNo").GetComponent<Text>();
				TypeOne = GameObject.Find("class1").GetComponent<Button>();
				TypeTwo = GameObject.Find("class2").GetComponent<Button>();
				TypeThree = GameObject.Find("class3").GetComponent<Button>();
				TypeFour = GameObject.Find("class4").GetComponent<Button>();
				Ready = GameObject.Find("ButtonReady").GetComponent<Button>();
				TypeOne.onClick.AddListener(() => CmdRoletype(1, myNo));
				TypeTwo.onClick.AddListener(() => CmdRoletype(2, myNo));
				TypeThree.onClick.AddListener(() => CmdRoletype(3, myNo));
				TypeFour.onClick.AddListener(() => CmdRoletype(4, myNo));
				Ready.onClick.AddListener(() => CmdReady(myNo));
				txtmyNo.text = myNo.ToString ();
			}catch(Exception e){

			}
		}
	}
	void Update()
	{
		if (isServer) {
			Munber = gm.Mumber;
			p1 = gm.p1;
			p2 = gm.p2;
			p3 = gm.p3;
			p4 = gm.p4;
			p1R = gm.p1R;
			p2R = gm.p2R;
			p3R = gm.p3R;
			p4R = gm.p4R;
			setp1_id = gm.p1_id;
			setp2_id = gm.p2_id;
			setp3_id = gm.p3_id;
			setp4_id = gm.p4_id;
			set1p = gm.p1p;
			set2p = gm.p2p;
			set2p_fish = gm.p2p_fish;
			set3p = gm.p3p;
			set4p = gm.p4p;
			set1pm = gm.p1m;
			set2pm = gm.p2m;
			set3pm = gm.p3m;
			set4pm = gm.p4m;
			pturn = gm.turns;

			code = gm.code;
			chat = gm.chat;
			ichat = gm.chati;
		}
		if (isLocalPlayer) {
			try{
				txtMunber.text = Munber.ToString ();
			}catch(Exception e){

			}
			allPlayer = Munber;
			player1 = p1;
			player2 = p2;
			player3 = p3;
			player4 = p4;
			p1Ready = p1R;
			p2Ready = p2R;
			p3Ready = p3R;
			p4Ready = p4R;
			p1_id = setp1_id;
			p2_id = setp2_id;
			p3_id = setp3_id;
			p4_id = setp4_id;
			p1p = set1p;
			p2p = set2p;
			p2p_fish = set2p_fish;
			p3p = set3p;
			p4p = set4p;
			p1m = set1pm;
			p2m = set2pm;
			p3m = set3pm;
			p4m = set4pm;
			turns = pturn;
			pcode = code;
			pchat = chat;
			chati = ichat;
			CmdPosition (myNo, Player_Position.pos, Player_Position.mov);
			CmdPlayerID (myNo, ChangeID.p_id);
			CmdTurn (Turns.turns);
			CmdMessage (Event.code);
			CmdChat (Chat_Room.chat, Chat_Room.i);
			CmdPosition_fish (myNo, Player_Position.pos_fish);
		}
	}

	[ClientRpc]
	public void RpcSetPlayer(int id)
	{
		Debug.Log ("Test");
		if (isLocalPlayer)
		{
			myNo = id;
			try{
				txtmyNo = GameObject.Find("MyNo").GetComponent<Text>();
			}catch(Exception e){

			}
			txtmyNo.text = myNo.ToString ();
		}
		Debug.Log ("number:"+id);
	}

	[Command]
	public void CmdRoletype(int t, int id){
		gm.addRole(t, id);
		Debug.Log ("type:"+t+" number:"+id);
	}

	[Command]
	public void CmdReady(int id){
		gm.Ready(id);
	}

	[Command]
	public void CmdPosition(int id, Vector3 pos, Vector3 mov){
		//	Debug.Log("id= "+id);
		if (id == 1) {
			gm.SetPosition (id, pos, mov);
			//SetPosition ();
		}
		if (id == 2) {
			gm.SetPosition (id, pos, mov);
			//SetPosition ();
		}
		if (id == 3) {
			gm.SetPosition (id, pos, mov);
			//SetPosition ();
		}
		if (id == 4) {
			gm.SetPosition (id, pos, mov);
			//SetPosition ();
		}
	}

	[Command]
	public void CmdPlayerID(int id, String p_id){
		//	Debug.Log("id= "+id);
		if (id == 1) {
			gm.SetPlayerID (id, p_id);
			//SetPosition ();
		}
		if (id == 2) {
			gm.SetPlayerID (id, p_id);
			//SetPosition ();
		}
		if (id == 3) {
			gm.SetPlayerID (id, p_id);
			//SetPosition ();
		}
		if (id == 4) {
			gm.SetPlayerID (id, p_id);
			//SetPosition ();
		}
	}

	[Command]
	public void CmdTurn(int turns){
		gm.turn (turns);
	}

	[Command]
	public void CmdMessage(int code){
		gm.Message (code);
		//Debug.Log ("=__"+code);
	}

	[Command]
	public void CmdChat(string c, int i){
		gm.Chat (c, i);
	}

	[Command]
	public void CmdPosition_fish(int id, Vector3 pos){
		//	Debug.Log("id= "+id);
		if (id == 2) {
			gm.SetPosition_fish (id, pos);
		}
	}

	[SyncVar]
	public int Munber;

	[SyncVar]
	public int p1;
	[SyncVar]
	public int p2;
	[SyncVar]
	public int p3;
	[SyncVar]
	public int p4;

	[SyncVar]
	public int p1R;
	[SyncVar]
	public int p2R;
	[SyncVar]
	public int p3R;
	[SyncVar]
	public int p4R;

	[SyncVar]
	public Vector3 set1p;
	[SyncVar]
	public Vector3 set2p;
	[SyncVar]
	public Vector3 set2p_fish;
	[SyncVar]
	public Vector3 set3p;
	[SyncVar]
	public Vector3 set4p;

	[SyncVar]
	public Vector3 set1pm;
	[SyncVar]
	public Vector3 set2pm;
	[SyncVar]
	public Vector3 set3pm;
	[SyncVar]
	public Vector3 set4pm;

	[SyncVar]
	public int pturn;

	[SyncVar]
	public int code;

	[SyncVar]
	public string chat;
	[SyncVar]
	public int ichat;

	[SyncVar]
	public string setp1_id;
	[SyncVar]
	public string setp2_id;
	[SyncVar]
	public string setp3_id;
	[SyncVar]
	public string setp4_id;
}