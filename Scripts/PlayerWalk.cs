using UnityEngine;
using System.Collections;

public class PlayerWalk : MonoBehaviour
{
	public float walkSpeed;
	public Animator animator;
	Vector3 prevMoveDirection;
	public static Vector3 moveDirection;
	public static Vector3 moveDirection1 = Vector3.zero;
	public static Vector3 moveDirection2 = Vector3.zero;
	public static Vector3 moveDirection3 = Vector3.zero;
	public static Vector3 moveDirection4 = Vector3.zero;
	public int myno;

	// Use this for initialization
	void Start()
	{
		animator = GetComponent<Animator>();

	}

	// Update is called once per frame
	void Update()
	{
		if(myno == 1){
			moveDirection1 = Vector3.zero;
			if (Input.GetKey(KeyCode.LeftArrow))
				moveDirection1.x = -1f;
			if (Input.GetKey(KeyCode.RightArrow))
				moveDirection1.x = 1f;
			if (Input.GetKey(KeyCode.UpArrow))
				moveDirection1.y = 1f;
			if (Input.GetKey(KeyCode.DownArrow))
				moveDirection1.y = -1f;
			moveDirection = moveDirection1;
		}
		if(myno == 2){
			moveDirection2 = Vector3.zero;
			if (Input.GetKey(KeyCode.LeftArrow))
				moveDirection2.x = -1f;
			if (Input.GetKey(KeyCode.RightArrow))
				moveDirection2.x = 1f;
			if (Input.GetKey(KeyCode.UpArrow))
				moveDirection2.y = 1f;
			if (Input.GetKey(KeyCode.DownArrow))
				moveDirection2.y = -1f;
			moveDirection = moveDirection2;
		}
		if(myno == 3){
			moveDirection3 = Vector3.zero;
			if (Input.GetKey(KeyCode.LeftArrow))
				moveDirection3.x = -1f;
			if (Input.GetKey(KeyCode.RightArrow))
				moveDirection3.x = 1f;
			if (Input.GetKey(KeyCode.UpArrow))
				moveDirection3.y = 1f;
			if (Input.GetKey(KeyCode.DownArrow))
				moveDirection3.y = -1f;
			moveDirection = moveDirection3;
		}
		if(myno == 4){
			moveDirection4 = Vector3.zero;
			if (Input.GetKey(KeyCode.LeftArrow))
				moveDirection4.x = -1f;
			if (Input.GetKey(KeyCode.RightArrow))
				moveDirection4.x = 1f;
			if (Input.GetKey(KeyCode.UpArrow))
				moveDirection4.y = 1f;
			if (Input.GetKey(KeyCode.DownArrow))
				moveDirection4.y = -1f;
			moveDirection = moveDirection4;
		}
		if (myno != Player.myNo && myno == 1)
			moveDirection = Player_Position.p1m;
		if (myno != Player.myNo && myno == 2)
			moveDirection = Player_Position.p2m;
		if (myno != Player.myNo && myno == 3)
			moveDirection = Player_Position.p3m;
		if (myno != Player.myNo && myno == 4)
			moveDirection = Player_Position.p4m;
		//transform.position += moveDirection * walkSpeed * Time.deltaTime;

		if (moveDirection.sqrMagnitude > 0)
		{
			animator.SetBool("walk", true);
			prevMoveDirection = moveDirection;
		}
		else
		{
			animator.SetBool("walk", false);
			moveDirection = prevMoveDirection;
		}
		animator.SetFloat("MoveX", moveDirection.x);
		animator.SetFloat("MoveY", moveDirection.y);
	}

}
