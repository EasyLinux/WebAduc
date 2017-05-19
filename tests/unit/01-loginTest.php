<?php
require_once('www/src/class/userClass.php');

// Test de la class userClass

class unitLoginTestextendsPHPUnit_Framework_TestCase
{
		public function testValidUser()
		{
			// Create a stub for the SomeClass class.
			$stub=$this->getMockBuilder('db')->setMethods(array('dbQuery','dbNumRows'))->disableOriginalConstructor()->getMock();
			// Configure the stub.
			$stub->expects($this->any())->method('dbQuery')->with($this->equalTo("SELECT * FROM Users WHERE login='user' AND passwd='".md5('password')."';"))->will($this->returnValue('TRUE'));
			$stub->expects($this->any())->method('dbNumRows')->will($this->returnValue(1));
			$user=new classUser($stub);
			$this->assertTrue($user->userIsValid("user","password"));
		}
		
		public function testNotValidUser()
		{
			// Create a stub for the SomeClass class.
			$stub=$this->getMockBuilder('db')->setMethods(array('dbQuery','dbNumRows'))->disableOriginalConstructor()->getMock();
			// Configure the stub.
			$stub->expects($this->any())->method('dbQuery')->with($this->equalTo("SELECT * FROM Users WHERE login='user' AND passwd='".md5('pwd')."';"))->will($this->returnValue('TRUE'));
			$stub->expects($this->any())->method('dbNumRows')->will($this->returnValue(0));
			$user=new classUser($stub);
			$this->assertFalse($user->userIsValid("user","pwd"));
		}
		
}