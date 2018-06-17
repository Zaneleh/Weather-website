//function windChill() 
{

        var t = 80;
        var s = 5;
        var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);

       document.getElementById("chill").innerHTML =f.toFixed(1);
}