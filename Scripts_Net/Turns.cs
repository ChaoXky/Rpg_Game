using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;
using System;
public class Turns : MonoBehaviour {

	public Text turn_text;
	public Text Player_turns;
	public static int turns = 0;

	// Use this for initialization
	void Start () {
		if (turns % Player.allPlayer == 0) {
			Player_turns.text = Player.p1_id + "的回合";
		}
		if (turns % Player.allPlayer == 1) {
			Player_turns.text = Player.p2_id + "的回合";
		}
		if (turns % Player.allPlayer == 2) {
			Player_turns.text = Player.p3_id + "的回合";
		}
		if (turns % Player.allPlayer == 3) {
			Player_turns.text = Player.p4_id + "的回合";
		}
	}
	
	// Update is called once per frame
	void Update () {
		if (turns < int.Parse (turn_text.text)) {
			turns = int.Parse (turn_text.text);
		}
		if (Player.turns > turns) {
			turns = Player.turns;
			turn_text.text = turns.ToString ();
		}
		if (turns > int.Parse (turn_text.text)) {
			turns = int.Parse (turn_text.text);
		}

		if (turns % Player.allPlayer == 0) {
			Player_turns.text = Player.p1_id + "的回合";
		}
		if (turns % Player.allPlayer == 1) {
			Player_turns.text = Player.p2_id + "的回合";
		}
		if (turns % Player.allPlayer == 2) {
			Player_turns.text = Player.p3_id + "的回合";
		}
		if (turns % Player.allPlayer == 3) {
			Player_turns.text = Player.p4_id + "的回合";
		}
	}

	void Who_Turn(){
		if (turns % Player.allPlayer == 0) {
			Player_turns.text = Player.p1_id + "的回合";
		}
		if (turns % Player.allPlayer == 1) {
			Player_turns.text = Player.p2_id + "的回合";
		}
		if (turns % Player.allPlayer == 2) {
			Player_turns.text = Player.p3_id + "的回合";
		}
		if (turns % Player.allPlayer == 3) {
			Player_turns.text = Player.p4_id + "的回合";
		}
	}
}
