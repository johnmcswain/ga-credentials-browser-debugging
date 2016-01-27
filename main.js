/********************************

Author: John McSwain
Date: 9:38 AM


 ********************************/   
    
    function setCookie(cname,cvalue){
            var defaultExpirationDate = "Thu, 01 Jan 2050 00:00:00 UTC";
            document.cookie=cname+"="+cvalue+";expires="+defaultExpirationDate;
            console.info("Cookie is set");
            document.write("<p>"+cname+" value: "+cvalue+"</p>");
        }
        //function to retrieve the cookie by name(string)
        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i=0; i<ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0)==' ')
                    c = c.substring(1);
                if (c.indexOf(name) == 0){
                    var result = c.substring(name.length,c.length);
                    customURLLauncher("ais://homescreen?"+"id="+result);
                    console.info("Cookie is present");
                    return ;
                }
            }
            customURLLauncher("ais://registration?"+"id="+result);
        }

    function customURLLauncher(path){
        location.assign(path);
    }