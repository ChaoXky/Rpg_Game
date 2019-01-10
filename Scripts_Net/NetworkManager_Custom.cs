using System.Collections;
using UnityEngine.Networking;
using UnityEngine;
using UnityEngine.UI;

public class NetworkManager_Custom : NetworkManager {

	public void StartupHost(){
		SetPost ();
		NetworkManager.singleton.StartHost ();
	}

	public void JoinGame(){
		SetIPAddress ();
		SetPost ();
		NetworkManager.singleton.StartClient ();
	}

	void SetIPAddress(){
		string ipAddress = GameObject.Find ("InputFieldIPAddress").transform.Find ("Text").GetComponent<Text> ().text;
		NetworkManager.singleton.networkAddress = ipAddress;
	}

	void SetPost(){
		NetworkManager.singleton.networkPort = 7777;
	}

	void OnLevelWasloaded(int level){
		Debug.Log (level);
		if (level == 0) {
			SetupMenuSceneButtons ();
		} 
		else {
			SetupOtherSceneButtons ();
		}
	}

	void SetupMenuSceneButtons(){
		GameObject.Find ("ButtonStartHost").GetComponent<Button> ().onClick.RemoveAllListeners ();
		GameObject.Find ("ButtonStartHost").GetComponent<Button> ().onClick.AddListener (StartupHost);

		GameObject.Find ("ButtonJointGame").GetComponent<Button> ().onClick.RemoveAllListeners ();
		GameObject.Find ("ButtonJointGame").GetComponent<Button> ().onClick.AddListener (JoinGame);
	}

	void SetupOtherSceneButtons(){
		GameObject.Find ("ButtonDisconnect").GetComponent<Button> ().onClick.RemoveAllListeners ();
		GameObject.Find ("ButtonDisconnect").GetComponent<Button> ().onClick.AddListener (NetworkManager.singleton.StopHost);

	}
}
