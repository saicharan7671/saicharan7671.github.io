function valid ()
{
    var aimg=document.getElementById("aimg");
    if(aimg.src.match("off.jpg"))
    {
        aimg.src="pics/on.jpg";
        document.getElementById("btn").innerHTML="off";
    }

    else{
        aimg.src="pics/off.jpg";
        document.getElementById("btn").innerHTML="on";
    }
}