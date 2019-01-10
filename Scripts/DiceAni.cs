using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class DiceAni : MonoBehaviour {

    public Button Text;
   // public AudioClip sound;
    public Animator ani;
    public Animator ani1;
    public Animator ani2;
    public Canvas yourcanvas;



    void Start()
    {
        Button btn = Text.GetComponent<Button>();
        ani.enabled = false;
        ani1.enabled = false;
        ani2.enabled = false;
        btn.onClick.AddListener(TaskOnClick);
        yourcanvas.enabled = true;
    }


    void TaskOnClick()
    {
       
            // AudioSource.PlayClipAtPoint(sound, transform.position);
            ani.enabled = true;
            ani1.enabled = true;
            ani2.enabled = true;
        

    }
   

}
