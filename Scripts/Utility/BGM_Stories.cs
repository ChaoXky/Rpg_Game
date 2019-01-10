using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BGM_Stories : MonoBehaviour
{
    //儲存背景音樂的AudioSource Component
    private AudioSource BGMRoom;


    void OnEnable()
    {


        BGMRoom = GameObject.FindGameObjectWithTag("RoomBGM").GetComponent<AudioSource>();
        BGMRoom.Pause();
    }

}