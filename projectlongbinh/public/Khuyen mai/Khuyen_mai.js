function changeTab(evt, tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}

function nextTab() {
    var i, tabcontent, tablinks;
    var k = 0;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        if (k == 0) {
            if (tabcontent[i].style.display === "block") {
                if (i === tabcontent.length-1) {
                    tabcontent[i].style.display = "none";
                    tabcontent[0].style.display = "block";
                } else {
                    k = 1;
                    tabcontent[i].style.display = "none";
                }
            }
        } else {
            tabcontent[i].style.display = "block";
            k = 0;
        }
    }
    k = 0;
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        if (k == 0) {
            if (tablinks[i].className === "tablinks active") {k = i + 1}
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        
    }
    if (k === tablinks.length-1){
        tablinks[1].className += " active";
    } else {tablinks[k].className += " active";}
}

function prevTab() {
    var i, tabcontent, tablinks;
    var k = 0, l = "";
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        if (tabcontent[i].style.display == "block") {
            if (i === 0) {
                k = 1;
                tabcontent[i].style.display = "none";
            } else {
                tabcontent[i].style.display = "none";
                tabcontent[i-1].style.display = "block";
            }
        }
    }
    if (k === 1) {
        tabcontent[tabcontent.length-1].style.display = "block";
        // document.getElementById("demo").innerHTML = k;
    }
    
    
    k = 0;
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        if (k == 0) {
            if (tablinks[i].className === "tablinks active") {k = i}
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
    }

    // tablinks[k - 2].className += " active";
    if (k === 1){
        tablinks[tablinks.length-2].className += " active";
    } else {tablinks[k - 1].className += " active";}
}