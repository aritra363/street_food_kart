<?php
$conn=mysqli_connect('localhost','root','','csetuts');
$phonenumber=$_POST['numb'];
$pincode=$_POST['pinc'];
$foodcode=$_POST['food'];
$uniqueid=$_POST['id'];
$qry1="select * from `business` where `phone`='$phonenumber'";
$run=mysqli_query($conn,$qry1);
$row1=mysqli_num_rows($run);
if ($row1<1)
{
 $newid=(string)$uniqueid;	
 $qry2="select * from `business` where `unid`='$uniqueid'";
 $run2=mysqli_query($conn,$qry2);
 $row2=mysqli_num_rows($run2);	
 while ($row2>0)
 {   $zero=0;
	 if ($newid[strlen($newid)-1]==9)
	 {$newid=$newid.$zero;}
	 else
	 {$newid=$newid+1;}
  $qry3="select * from `business` where `unid`='$newid'";
 $run3=mysqli_query($conn,$qry3);
 $row2=mysqli_num_rows($run3);
 }
	echo"$phonenumber<br/>";
	echo"$pincode<br/>";
	echo"$foodcode<br/>";
	echo"$newid";
$add="INSERT INTO `business`(`phone`, `pin`, `fdtype`, `unid`) VALUES ('$phonenumber','$pincode','$foodcode','$newid')";
$insert=mysqli_query($conn,$add);
if ($insert==True)	
{
	echo "<h1>Your Registration is Succesfull.....</h1>";
	echo "<div>This is Your Final Unique Business Id:<br/><h1>$newid</h1><br/>Please Note it</div><br/>";
	?>
       <a href="uniqueid.html">Click here to go to main Page</a>
	<?php
}
else{
	echo "<h1>Your Registration was unsuccessful.....</h1><br/>";
	echo "<p>Redirecting to main page in 1 second......</p>";
	header("Refresh:10;url=uniqueid.html");	
}
}
else{
	echo("<h1>This Phone Number $phonenumber is already Registered</h1><br/>");
	echo("Redirecting to Main Page in 4seconds...........");
	header('Refresh:4;URL=uniqueid.html');	
}
?>