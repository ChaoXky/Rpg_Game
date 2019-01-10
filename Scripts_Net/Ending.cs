using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.UI;
using System;

public class Ending : MonoBehaviour {
	
	public static int score =0;
	public GameObject trueCG;
	public GameObject badCG;
	public Text endload;
	public Text scoreText;
    private AudioSource bgMusicAudioSource;
    // Use this for initialization
    void Start () {
		if (score > 550) {
			trueCG.SetActive (true);
			endload.text = "True End";
		} else {
			badCG.SetActive (true);
			endload.text = "Bad End";
		}
		scoreText.text = score.ToString();
	}
	
	// Update is called once per frame
	void Update () {
		
	}

	public void BackToTitle(){
		Application.LoadLevel (1);
        bgMusicAudioSource = GameObject.FindGameObjectWithTag("BackGroundMusic").GetComponent<AudioSource>();
        bgMusicAudioSource.UnPause();
    }
}
