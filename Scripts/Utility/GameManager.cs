using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{

    public void GameStart(string scenename)
    {
        Application.LoadLevel(scenename);
    }
}