using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

public class changeScene : MonoBehaviour {

	public GameObject waitroom;
	public GameObject storyroom1;

	int i = 0;
	void Update () {
		if (Player.allPlayer == (Player.p1Ready + Player.p2Ready + Player.p3Ready + Player.p4Ready) && Player.allPlayer!=0 && i == 0) {
			waitroom.SetActive (false);
			storyroom1.SetActive (true);
			i++;
		}
	}
}
