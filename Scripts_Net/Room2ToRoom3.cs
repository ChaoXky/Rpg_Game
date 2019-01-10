using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;
using System;

public class Room2ToRoom3 : MonoBehaviour {
	static public int door;

	public GameObject door_before;
	public GameObject door_after;

	// Use this for initialization
	void Start () {

	}

	// Update is called once per frame
	void Update () {
		if (door == Player.allPlayer) {
			door_before.SetActive (false);
			door_after.SetActive (true);
		}
	}
}
