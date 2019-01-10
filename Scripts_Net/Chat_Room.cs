using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;
using System;

public class Chat_Room : MonoBehaviour {
	
	public Button Enter;
	public GameObject close;
	public Text text;
	public Text write;
	public InputField inputc;
	public static string chat = "";
	public static int i = 0;
	int j = 1;
	// Use this for initialization
	void Start () {
		text.text = "\nWelcome!\n";
		write.text = "";
	}
	
	// Update is called once per frame
	void Update () {
		if (Player.chati == j) {
			j = Player.chati+1;
			Chat ();
		}
	}

	public void chat_out(){
		//text.text = text.text + write.text +"\n";
		chat = ChangeID.p_id + "：" +write.text;
		inputc.text = "";
		i = j;
//			inputc.text = "";
	}

	void Chat(){
		text.text = text.text + Player.pchat + "\n";
		Debug.Log (Player.pchat);
		chat = "";
		i = 0;
	}
	public void chat_close(){
		close.SetActive (false);
	}
}
