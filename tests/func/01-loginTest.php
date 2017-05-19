<?php
// Exemple en Selenium2

class monTest extends PHPUnit_Extensions_Selenium2TestCase
{
        public function setUp()
        {
                $this->setHost('localhost');
                $this->setPort(4444);
                $this->setBrowserUrl('http://stagiaire20.testing.local');
                $this->setBrowser('firefox');
        }

  public function testLoginOK()
  {
	$this->url('http://stagiaire20.testing.local/');

    $this->byId("Login")->value("Admin");
    $this->byId("Password")->value("Passwd");
    //$this->byId("formAction")->submit();
    $this->byId("Connect")->click();
    // Le bouton 'Logout' n'existe que si on est connecté !
    $this->byId("Logout")->click();
  }

  public function testLoginFormOK()
  {
	$this->url('http://stagiaire20.testing.local/');

    $this->assertEquals('require',$this->byId("Login")->getAttribute("require"));
    $this->assertEquals('32',$this->byId("Login")->getAttribute("size"));
    $this->byId("Password")->getAttribute("require");
    $this->byId("Login")->getAttribute("size");
  }
  
	/** generate screenshot if any test has failed */
    protected function tearDown()
    {
        if( $this->hasFailed() ) {
            $date = "screenshot_" . date('Y-m-d-H-i-s') . ".png" ;
            $this->webdriver->getScreenshotAndSaveToFile( $date );
        }
        //$this->close();
    }


}
?>

