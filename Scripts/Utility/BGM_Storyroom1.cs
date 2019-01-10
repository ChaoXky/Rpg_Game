using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BGM_Storyroom1 : MonoBehaviour
{
    //儲存背景音樂的AudioSource Component
    private AudioSource bgMusicAudioSource;
    private AudioSource RoomBGM;
    private AudioSource Story1BGM;

    

    void OnEnable()
    {
        //在所有Game Object中找尋Background Music
        bgMusicAudioSource = GameObject.FindGameObjectWithTag("BackGroundMusic").GetComponent<AudioSource>();

        //暫停音樂
        bgMusicAudioSource.Pause();

        
        RoomBGM = GameObject.FindGameObjectWithTag("RoomBGM").GetComponent<AudioSource>();
        RoomBGM.UnPause();

    }

}