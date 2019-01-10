using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BGMStart : MonoBehaviour
{
    //儲存背景音樂的AudioSource Component
    private AudioSource bgMusicAudioSource;

    void OnEnable()
    {
        //在所有Game Object中找尋Background Music
        bgMusicAudioSource = GameObject.FindGameObjectWithTag("BackGroundMusic").GetComponent<AudioSource>();

        //開始音樂
        bgMusicAudioSource.UnPause();

        DontDestroyOnLoad(bgMusicAudioSource);
    }

    
}