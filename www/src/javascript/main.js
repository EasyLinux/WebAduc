/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Exit program (logout)
 * 
 */
function Quit()
{
  document.getElementById('Action').value='Logout';
  document.getElementById('formAction').submit();
}

$(function() {
  $('#jsTree').jstree({
    'core' : {
      'data' : {
        "url" : "src/ajax.php?jstree=1",
        "data" : function (node) {
          return { "id" : node.id };
        }
      }
    }
  });
});