var timer;
AutoSlider();

function AutoSlider()
{
    timer = setTimeout(function () 
    {
        if(document.getElementById("switch1").checked == true)
        {
            document.getElementById("switch1").checked = false;
            document.getElementById("switch2").checked = true;
        }
        else if(document.getElementById("switch2").checked == true)
        {
            document.getElementById("switch2").checked = false;
            document.getElementById("switch3").checked = true;
        }
        else if(document.getElementById("switch3").checked == true)
        {
            document.getElementById("switch3").checked = false;
            document.getElementById("switch1").checked = true;
        }
        AutoSlider();
    }, 5000);
}