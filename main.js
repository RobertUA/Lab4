let timer;
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
    }, 10000);
}
function hashchanged()
{
    switch(window.location.hash)
    {
        case "#all": 
            {
                document.getElementById("allt").style.display='flex';
                document.getElementById("Type1").style.display='none';
                document.getElementById("Type2").style.display='none';
                document.getElementById("Type3").style.display='none';
                break;
            }
        case "#type1":
            {
                document.getElementById("allt").style.display='none';
                document.getElementById("Type1").style.display='flex';
                document.getElementById("Type2").style.display='none';
                document.getElementById("Type3").style.display='none';
                break;
            }
        case "#type2":
            {
                document.getElementById("allt").style.display='none';
                document.getElementById("Type1").style.display='none';
                document.getElementById("Type2").style.display='flex';
                document.getElementById("Type3").style.display='none';
                break;
            }
        case "#type3":
            {
                document.getElementById("allt").style.display='none';
                document.getElementById("Type1").style.display='none';
                document.getElementById("Type2").style.display='none';
                document.getElementById("Type3").style.display='flex';
                break;
            }
        default:
            {
                console.log(window.location.hash);
                window.location.hash="#all";
            }
    }
}