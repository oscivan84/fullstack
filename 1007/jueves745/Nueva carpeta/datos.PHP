<?php
$ced=$_POST['ced'];
$nom=$_POST['name'];

$file = fopen("archivo.txt","a");
fwrite($file,$ced.",".$nom.PHP_EOL);
fclose($file);
echo "Datos almacenados correctamente";
?>