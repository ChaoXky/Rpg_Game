using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SetAct : MonoBehaviour {
	
	public GameObject chat_room;
	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
	public void chat_open(){
		chat_room.SetActive (false);
		chat_room.SetActive (true);
	}
}
