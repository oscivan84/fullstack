<?php

$ced=$_POST['ced'];
//$nom=$_POST['name'];

$file = fopen("archivo.txt","r");
while(!feof($file)){
	$linea=fgets($file);

	$element = explode(",", $linea);
	
if($element)
	for($i=0;$i<count($element);$i++){
		echo "Elemento encontrado <br>".$ced." Usuario: ".$element[$i+1];
		$i=count($element)+1; 

	}	
	
}







//buscar  por numero de cedula

//fwrite($file,$ced.",".$nom.PHP_EOL);
//fclose($file);
//echo "Datos almacenados correctamente";
?>