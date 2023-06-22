function main()
{
    var x = document.getElementById("p1");
    if(document.getElementById("radio1").checked)
    {
    x.style.fontSize="30px";
    }
    else if(document.getElementById("radio2").checked)
    {
    x.style.fontSize="60px";
    }
    else if(document.getElementById("radio3").checked)
    {
    x.style.fontSize="90px";
    }
}