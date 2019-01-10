using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;
using System;

public class LobbyPlayer : NetworkBehaviour
{
	GM gm;
	public static int myNo;

	void Start()
	{
		if (isServer)
		{
			gm = GameObject.Find("GM").GetComponent<GM>();
			//gm.Login(this);
		}
	}

	void Update()
	{
		
	}

	[ClientRpc]
	public void RpcSetPlayer(int id)
	{
		Debug.Log ("Test");
		if (isLocalPlayer)
		{
			myNo = id;
		}
		Debug.Log ("number:"+id);
	}
}