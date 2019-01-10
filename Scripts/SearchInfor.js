#pragma strict

var item_id : String; 
var dice_num : int = 0;
var set_cd : int = 0;
var code : Text;
var turn : Text;
var search_text : Text;
var message_text : Text;

var message : GameObject;
var item_before : GameObject;
var item_after : GameObject;

function Start () {
	
}

function Update () {
	if(set_cd == 1 && CharInfor.dice_num !=0){
		dice_num = CharInfor.dice_num;
		set_cd --;
	}
	if(dice_num != 0 && item_id.Equals("door_r") && set_cd == 0){		
		
		if(dice_num >= 95)	{
			item_before.SetActive(false);
			item_after.SetActive(true);
			code.text = "13";
		}
		else {
			message_text.text = ("好像被鎖上了");
			message.SetActive(true);
		}
		set_cd --;
		Item.turn +=1;
		turn.text = Item.turn.ToString();
	}
	if(dice_num != 0 && item_id.Equals("doll") && set_cd == 0){		
		
		if(dice_num >= 95)	{
			code.text = "73";
		}
		else if(dice_num >= 50) {
			message_text.text = ("看起來有點詭異的玩偶");
			message.SetActive(true);
		}
		else {
			message_text.text = ("感覺這玩偶一直看著我\n真令人不施舒服");
			message.SetActive(true);
		}
		set_cd --;
		Item.turn +=1;
		turn.text = Item.turn.ToString();
	}
	if(dice_num != 0 && item_id.Equals("table") && set_cd == 0){
		message.SetActive(true);
		if(dice_num >= 95)	message_text.text = ("用血寫著快逃\n桌下好像還有著什麼");
		else if(dice_num >= 50) message_text.text = ("用血寫著快逃");
		else message_text.text = ("好像沒什麼特別的");
		set_cd --;
		Item.turn +=1;
		turn.text = Item.turn.ToString();
	}
	if(dice_num != 0 && item_id.Equals("item2") && set_cd == 0){
		message.SetActive(true);
		if(dice_num >= 95)	{
			message_text.text = ("木板下好像放著什麼");
			yes_or_no.item2 = 1;
		}
		else if(dice_num >= 50){
			message_text.text = ("木板下好像放著什麼\n但是木板打不開");
			Item.turn +=1;
			turn.text = Item.turn.ToString();
		}
		else {
			message_text.text = ("好像沒什麼特別的");
			Item.turn +=1;
			turn.text = Item.turn.ToString();
		}
		set_cd --;
	}
	if(dice_num != 0 && item_id.Equals("item3") && set_cd == 0){
		message.SetActive(true);
		if(dice_num >= 50) {
			message_text.text = ("這裡放著秒針");
			yes_or_no.item3 = 1;
		}
		else {
			message_text.text = ("好像沒什麼特別的");
			Item.turn +=1;
			turn.text = Item.turn.ToString();
		}
		set_cd --;
	}
	if(dice_num != 0 && item_id.Equals("item1") && set_cd == 0){
		message.SetActive(true);
		if(dice_num >= 50) {
			message_text.text = ("這裡放著分針");
			yes_or_no.item1 = 1;
		}
		else {
			message_text.text = ("好像沒什麼特別的");
			Item.turn +=1;
			turn.text = Item.turn.ToString();
		}
		set_cd --;
	}
	if(dice_num != 0 && item_id.Equals("HolyGrail") && set_cd == 0){
		message.SetActive(true);
		if(dice_num >= 50) {
			message_text.text = ("這個聖杯好像可以拿走");
			yes_or_no.HolyGrail = 1;
		}
		else {
			message_text.text = ("好像只是個裝飾品");
			Item.turn +=1;
			turn.text = Item.turn.ToString();
		}
		set_cd --;
	}
	if(dice_num != 0 && item_id.Equals("candle") && set_cd == 0){

		if(dice_num >= 50) {
			message.SetActive(true);
			message_text.text = ("蠟燭的旁邊放著一把鑰匙");
			yes_or_no.candle = 1;
		}
		else {
			code.text = "95";
			Item.turn +=1;
			turn.text = Item.turn.ToString();
		}
		set_cd --;
	}

}

function CdSet () {
	set_cd =1 ;
}


function search_event () {
	if(item_id.Equals("door_r") ){	
		move.can = 0;
		message.SetActive(true);
		if(Item.room1_key == 1){
			message_text.text = ("用鑰匙把門打開了");
			item_before.SetActive(false);
			item_after.SetActive(true);
		}
		else if(Item.room1_door_r == 1)	{
			item_before.SetActive(false);
			item_after.SetActive(true);
			message_text.text = ("門自己打開了");
		}
		else message_text.text = ("好像被鎖上了");
	}
	if(item_id.Equals("doll") ){	
		move.can = 0;
		message.SetActive(true);
		if(Item.room3_hanako == 1){
			code.text = "73";
			turn.text = (Item.turn+1).ToString();
		}	
		else message_text.text = ("看起來有點詭異的玩偶");
	}
	if(dice_num != 0 && item_id.Equals("table") ){
		move.can = 0;
		message.SetActive(true);
		if(dice_num >= 95)	message_text.text = ("用血寫著快逃\n桌下好像還有著什麼");
		else if (dice_num >= 50) message_text.text = ("用血寫著快逃");
		else message_text.text = ("好像沒什麼特別的");

	}
	if(dice_num != 0 && item_id.Equals("item2") ){
		move.can = 0;
		message.SetActive(true);
		if(dice_num >= 95)	{
			message_text.text = ("木板下好像放著什麼");
			yes_or_no.item2 = 1;
		}
		else if(dice_num >= 50) message_text.text = ("木板下好像放著什麼\n但是木板打不開");
		else message_text.text = ("好像沒什麼特別的");
	}
	if(dice_num != 0 && item_id.Equals("item3") ){
		move.can = 0;
		message.SetActive(true);
		if (dice_num >= 50)	{
			message_text.text = ("這裡放著秒針");
			yes_or_no.item3 = 1;
		}
		else message_text.text = ("好像沒什麼特別的");
	}
	if(dice_num != 0 && item_id.Equals("item1") ){
		move.can = 0;
		message.SetActive(true);
		if (dice_num >= 50)	{
			message_text.text = ("這裡放著分針");
			yes_or_no.item1 = 1;
		}
		else message_text.text = ("好像沒什麼特別的");
	}
	if(dice_num != 0 && item_id.Equals("HolyGrail") ){
		move.can = 0;
		message.SetActive(true);
		if (dice_num >= 50)	{
			message_text.text = ("這個聖杯好像可以拿走");
			yes_or_no.HolyGrail = 1;
		}
		else message_text.text = ("好像只是個裝飾品");
	}
	if(dice_num != 0 && item_id.Equals("candle") ){
		move.can = 0;
		message.SetActive(true);
		if (dice_num >= 50)	{
			message_text.text = ("蠟燭的旁邊放著一把鑰匙");
			yes_or_no.candle = 1;
		}
		else message_text.text = ("火還是燒得很旺");
	}
}