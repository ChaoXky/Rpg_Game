using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class GM : MonoBehaviour
{
	public List<Player> allPlayer = new List<Player>();
	public int p1 = 0;
	public int p2 = 0;
	public int p3 = 0;
	public int p4 = 0;
	public int p1R = 0;
	public int p2R = 0;
	public int p3R = 0;
	public int p4R = 0;
	public int Mumber = 0;

	public Vector3 p1p;
	public Vector3 p2p;
	public Vector3 p3p;
	public Vector3 p4p;
	public Vector3 p2p_fish;
	public Vector3 p1m;
	public Vector3 p2m;
	public Vector3 p3m;
	public Vector3 p4m;

	public string p1_id;
	public string p2_id;
	public string p3_id;
	public string p4_id;

	public int turns = 0;
	public int code;
	public string chat = "";
	public int chati;

	public void Login(Player player)
	{
		allPlayer.Add(player);
		Debug.Log ("allPlayer:"+allPlayer.Count);
		Mumber = allPlayer.Count;
		player.RpcSetPlayer(Mumber);
	}

	public void addRole(int type, int id){
		if (id == 1)
			p1 = type;
		if (id == 2)
			p2 = type;
		if (id == 3)
			p3 = type;
		if (id == 4)
			p4 = type;
	}

	public void Ready(int id){
		if (id == 1) {
			if (p1R == 0)
				p1R = 1;
			else
				p1R = 0;
		}
		if (id == 2) {
			if (p2R == 0)
				p2R = 1;
			else
				p2R = 0;
		}
		if (id == 3) {
			if (p3R == 0)
				p3R = 1;
			else
				p3R = 0;
		}
		if (id == 4) {
			if (p4R == 0)
				p4R = 1;
			else
				p4R = 0;
		}
	}
	public void SetPosition(int id, Vector3 pos, Vector3 mov){
		if (id == 1) {
			p1p = pos;
			p1m = mov;
		}
		if (id == 2) {
			p2p = pos;
			p2m = mov;
		}
		if (id == 3) {
			p3p = pos;
			p3m = mov;
		}
		if (id == 4) {
			p4p = pos;
			p4m = mov;
		}
	}

	public void SetPlayerID(int id, string p_id){
		if (id == 1) {
			p1_id = p_id;
		}
		if (id == 2) {
			p2_id = p_id;
		}
		if (id == 3) {
			p3_id = p_id;
		}
		if (id == 4) {
			p4_id = p_id;
		}
	}

	public void SetPosition_fish(int id, Vector3 pos){
		if (id == 2)
			p2p_fish = pos;
	}
	public void turn(int t){
		turns = t;
	}

	public void Message(int e_code){
		if(e_code != 0)
			code = e_code;
	}

	public void Chat(string C, int i){
		if (i != 0 && C != "") {
			chat = C;
			chati = i;
		}
	}

	public void ONline(){
		Debug.Log("online");
	}
}