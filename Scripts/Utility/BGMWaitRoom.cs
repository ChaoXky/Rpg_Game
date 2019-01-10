using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BGMWaitRoom : MonoBehaviour
{
    //儲存背景音樂的AudioSource Component
    private AudioSource RoomBGM;


    void OnEnable()
    {


        RoomBGM = GameObject.FindGameObjectWithTag("RoomBGM").GetComponent<AudioSource>();
        RoomBGM.Pause();
    }

}