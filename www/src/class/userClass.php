<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//namespace userClass;

/**
 * Description of userClass
 *
 * @author Stagiaire
 */
class userClass  extends ldapClass {
  //put your code here
  
  public function isValid($Usr, $Pwd)
  {
    if( $Usr == "Administrateur" && $Pwd == "Passwd" )
      return true;
    return false;
  }
}
