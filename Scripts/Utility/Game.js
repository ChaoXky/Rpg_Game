#pragma strict
static class Game{
    function screen() : ScreenUI{
  return UnityEngine.Object.FindObjectOfType.<ScreenUI>() ;
    }
   }
