﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class gamemanager : MonoBehaviour {

	public void GameStart(string scenename)
    {
        Application.LoadLevel(scenename);
    }
}
