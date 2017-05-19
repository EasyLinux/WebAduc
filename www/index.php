<?php
/**		
	* This file is the entry point of phpAduc. 		
	*   	
	* Ce fichier redirige les demandes vers la page appropriée 	
	*   	
	* PHP version 5.6 	
	*   	
	* LICENSE: This source file is subject to version 3.01 of the PHP license   	
	* that is available through the world-wide-web at the following URI: 		
	* http://www.php.net/license/3_01.txt.  If you did not receive a copy of  		
	* the PHP License and are unable to obtain it through the web, please  		
	* send a note to license@php.net so we can mail you a copy immediately. 	
	*  		
	* @category  Main  		
	* @package   phpAduc  	
	* @author    Serge NOEL <serge.noel@net6a.com>  	
	* @copyright 2016-2017 NET6A  	
	* @license   http://opensource.org/licenses/gpl-license.php GNU Public License  	
	* @version   GIT: 1.0  	
	* @link      ../tests/Documentation Tests/Documentation.odt  	
	*/
// 	Charge les classes installées par Composer
require_once 'vendor/autoload.php';
// Lire la configuration du site
require_once 'src/config/config.php';
require_once 'src/class/autoload.php';
session_start();

/* Initialisation de Twig */
// Définir le dossier templates
$loader=new Twig_Loader_Filesystem('src/templates');
// Définir le dossier qui recoit les templates compilés
$twig=new Twig_Environment($loader,array('cache'=>'templates_c',));

// Lire la page demandée
$Action=filter_input(INPUT_POST,'Action',FILTER_SANITIZE_STRING);
if(!isset($_SESSION['Loggued']) && $Action=="")
{
	$Action='Login';
}
$twigVars=array();

switch($Action)
{
	case 'tryLogin':
		$Usr=new userClass();
		$sLogin=filter_input(INPUT_POST,'sLogin',FILTER_SANITIZE_STRING);
		$sPasswd=filter_input(INPUT_POST,'sPassword',FILTER_SANITIZE_STRING);
		if($Usr->isValid($sLogin,$sPasswd))
		{
			$template='main.twig';
			$component='main';
			$_SESSION['loggued']=true;
		}
		else
		{
			$template='login.twig';
			$component="";
			$twigVars=['error'=>'Compte ou mot de passe invalide !'];
		}
		break;

	case 'Logout':
		unset($_SESSION['Loggued']);

	case 'Login':
		$template='login.twig';
		$component="";
		break;

	default:
		$component=strtolower($Action);
		$template="$component.twig";
		break;
}

if($component!="")
{
	require_once("src/components/$component.php");
}

echo $twig->render($template,$twigVars);