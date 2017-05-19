<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
header('Content-Type: application/json; charset=utf-8');
if( $_GET['id'] == '#')
  echo '[{"id":1,"text":"RootDN","children":[{"id":2,"text":"Serveurs","children":true},{"id":3,"text":"Child node 2"}]}]';