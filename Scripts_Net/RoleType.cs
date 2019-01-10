using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RoleType : MonoBehaviour {
	
	public GameObject p1c1;
	public GameObject p1c2;
	public GameObject p1c3;
	public GameObject p1c4;

	public GameObject p2c1;
	public GameObject p2c2;
	public GameObject p2c3;
	public GameObject p2c4;

	public GameObject p3c1;
	public GameObject p3c2;
	public GameObject p3c3;
	public GameObject p3c4;

	public GameObject p4c1;
	public GameObject p4c2;
	public GameObject p4c3;
	public GameObject p4c4;

	public GameObject p1r;
	public GameObject p2r;
	public GameObject p3r;
	public GameObject p4r;


	void Update()
	{
		if (Player.player1 == 1) {
			p1c1.SetActive (true);
			p1c2.SetActive (false);
			p1c3.SetActive (false);
			p1c4.SetActive (false);
		}
		if (Player.player1 == 2) {
			p1c2.SetActive (true);
			p1c1.SetActive (false);
			p1c3.SetActive (false);
			p1c4.SetActive (false);
		}
		if (Player.player1 == 3) {
			p1c3.SetActive (true);
			p1c2.SetActive (false);
			p1c1.SetActive (false);
			p1c4.SetActive (false);
		}
		if (Player.player1 == 4) {
			p1c4.SetActive (true);
			p1c2.SetActive (false);
			p1c1.SetActive (false);
			p1c3.SetActive (false);
		}

		if (Player.player2 == 1) {
			p2c1.SetActive (true);
			p2c2.SetActive (false);
			p2c3.SetActive (false);
			p2c4.SetActive (false);
		}
		if (Player.player2 == 2) {
			p2c2.SetActive (true);
			p2c1.SetActive (false);
			p2c3.SetActive (false);
			p2c4.SetActive (false);
		}
		if (Player.player2 == 3) {
			p2c3.SetActive (true);
			p2c2.SetActive (false);
			p2c1.SetActive (false);
			p2c4.SetActive (false);
		}
		if (Player.player2 == 4) {
			p2c4.SetActive (true);
			p2c2.SetActive (false);
			p2c1.SetActive (false);
			p2c3.SetActive (false);
		}

		if (Player.player3 == 1) {
			p3c1.SetActive (true);
			p3c2.SetActive (false);
			p3c3.SetActive (false);
			p3c4.SetActive (false);
		}
		if (Player.player3 == 2) {
			p3c2.SetActive (true);
			p3c1.SetActive (false);
			p3c3.SetActive (false);
			p3c4.SetActive (false);
		}
		if (Player.player3 == 3) {
			p3c3.SetActive (true);
			p3c2.SetActive (false);
			p3c1.SetActive (false);
			p3c4.SetActive (false);
		}
		if (Player.player3 == 4) {
			p3c4.SetActive (true);
			p3c2.SetActive (false);
			p3c1.SetActive (false);
			p3c3.SetActive (false);
		}

		if (Player.player4 == 1) {
			p4c1.SetActive (true);
			p4c2.SetActive (false);
			p4c3.SetActive (false);
			p4c4.SetActive (false);
		}
		if (Player.player4 == 2) {
			p4c2.SetActive (true);
			p4c1.SetActive (false);
			p4c3.SetActive (false);
			p4c4.SetActive (false);
		}
		if (Player.player4 == 3) {
			p4c3.SetActive (true);
			p4c2.SetActive (false);
			p4c1.SetActive (false);
			p4c4.SetActive (false);
		}
		if (Player.player4 == 4) {
			p4c4.SetActive (true);
			p4c2.SetActive (false);
			p4c1.SetActive (false);
			p4c3.SetActive (false);
		}

		if (Player.p1Ready == 1) {
			p1r.SetActive (true);
		}
		if (Player.p1Ready == 0) {
			p1r.SetActive (false);
		}
		if (Player.p2Ready == 1) {
			p2r.SetActive (true);
		}
		if (Player.p2Ready == 0) {
			p2r.SetActive (false);
		}
		if (Player.p3Ready == 1) {
			p3r.SetActive (true);
		}
		if (Player.p3Ready == 0) {
			p3r.SetActive (false);
		}
		if (Player.p4Ready == 1) {
			p4r.SetActive (true);
		}
		if (Player.p4Ready == 0) {
			p4r.SetActive (false);
		}
	}
}
