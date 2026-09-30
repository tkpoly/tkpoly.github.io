
//ClassicalGuitar.htm用　選曲メニューＯＮ／ＯＦＦボタン////////////////////////////////////////////////////////////////////////////
var menuon = new Array();
var menuimg = new Array();


for (i = 0; i < 2; i++) {
    menuon[i] = 0;

    menuimg[i] = new Image();
    menuimg[i].src = "img\\menuOFF.PNG";
}

menuon[0] = 1;
menuimg[0].src = "img\\menuON.PNG";

function menuBT0() {
    if (menuon[0] == 0) {
        menuon[0] = 1;
        menuon[1] = 0;
        document.images["img0"].src = "img\\menuON.PNG";
        document.images["img1"].src = "img\\menuOFF.PNG";
    }
    aud.pause();
    aud.currentTime = 0;
    aud.src = "mp3\\Daiseidou.mp3";
    //aud.play();
}

function menuBT1() {
    if (menuon[1] == 0) {
        menuon[0] = 0;
        menuon[1] = 1;
         document.images["img0"].src = "img\\menuOFF.PNG";
        document.images["img1"].src = "img\\menuON.PNG";
    }
    aud.pause();
    aud.currentTime = 0;
    aud.src = "mp3\\Alhambura.mp3";
    //aud.play();
}



//アイテムの大きさ制御//////////////////////////////////////////
function galaxy() {
    var w;
    w = window.innerWidth;

    var ele1;
    ele1 = document.getElementById("gala1");

    if (w < 760) {
        ele1.style.position = "relative";
        ele1.style.top = "120px";
        ele1.style.width = "300px";
        ele1.style.height = "180px";
    }
    else {
        ele1.style.position = "relative";
        ele1.style.top = "0px";
        ele1.style.width = "600px";
        ele1.style.height = "360px";
    }
}


function guitar() {
    var w;
    w = window.innerWidth;

    var ele1;
    ele1 = document.getElementById("aud");

    if (w < 760) {
        ele1.style.position = "relative";
        ele1.style.top = "30px";
        ele1.style.width = "300px";
        ele1.style.height = "40px";
    }
    else {
        ele1.style.position = "relative";
        ele1.style.top = "80px";
        ele1.style.width = "460px";
        ele1.style.height = "40px";
    }
}





//textarea用　テキスト・ロード//////////////////////////////////////////////////

//testSave---------------------------------------------------
function loadText_testSave() {
    if (window.XMLHttpRequest) {
        xmlHttp1 = new XMLHttpRequest();
    } else {
        if (window.ActiveXObject) {
            xmlHttp1 = new ActiveXObject("Microsoft.XMLHTTP");
        } else {
            xmlHttp1 = null;
        }
    }
    xmlHttp1.onreadystatechange = checkStatus_testSave;
    xmlHttp1.open("GET", "proso\\testSave.txt", true);

    xmlHttp1.send(null);
}
function checkStatus_testSave() {
    if (xmlHttp1.readyState == 4 && xmlHttp1.status == 200) {
        document.ajaxForm1.result.value = xmlHttp1.responseText;
    }
    else {
        document.ajaxForm1.result.value = "";
    }
}



//testD2D1----------------------------------------------------
function loadText_testD2D1() {
    if (window.XMLHttpRequest) {
        xmlHttp2 = new XMLHttpRequest();
    } else {
        if (window.ActiveXObject) {
            xmlHttp2 = new ActiveXObject("Microsoft.XMLHTTP");
        } else {
            xmlHttp2 = null;
        }
    }
    xmlHttp2.onreadystatechange = checkStatus_testD2D1;
    xmlHttp2.open("GET", "proso\\testD2D1.txt", true);

    xmlHttp2.send(null);
}
function checkStatus_testD2D1() {
    if (xmlHttp2.readyState == 4 && xmlHttp2.status == 200) {
         document.ajaxForm2.result.value = xmlHttp2.responseText;
    }
    else {
        document.ajaxForm2.result.value = "";
    }
}


//testImage----------------------------------------------------
function loadText_testImage() {
    if (window.XMLHttpRequest) {
        xmlHttp3 = new XMLHttpRequest();
    } else {
        if (window.ActiveXObject) {
            xmlHttp3 = new ActiveXObject("Microsoft.XMLHTTP");
        } else {
            xmlHttp3 = null;
        }
    }
    xmlHttp3.onreadystatechange = checkStatus_testImage;
    xmlHttp3.open("GET", "proso\\testImage.txt", true);

    xmlHttp3.send(null);
}
function checkStatus_testImage() {
    if (xmlHttp3.readyState == 4 && xmlHttp3.status == 200) {
        document.ajaxForm3.result.value = xmlHttp3.responseText;
    }
    else {
        document.ajaxForm3.result.value = "";
    }
}



//testModeless----------------------------------------------------
function loadText_testModeless() {
    if (window.XMLHttpRequest) {
        xmlHttp4 = new XMLHttpRequest();
    } else {
        if (window.ActiveXObject) {
            xmlHttp4 = new ActiveXObject("Microsoft.XMLHTTP");
        } else {
            xmlHttp4 = null;
        }
    }
    xmlHttp4.onreadystatechange = checkStatus_testModeless;
    xmlHttp4.open("GET", "proso\\testModeless.txt", true);

    xmlHttp4.send(null);
}
function checkStatus_testModeless() {
    if (xmlHttp4.readyState == 4 && xmlHttp4.status == 200) {
        document.ajaxForm4.result.value = xmlHttp4.responseText;
    }
    else {
        document.ajaxForm4.result.value = "";
    }
}



//testText----------------------------------------------------
function loadText_testText() {
    if (window.XMLHttpRequest) {
        xmlHttp5 = new XMLHttpRequest();
    } else {
        if (window.ActiveXObject) {
            xmlHttp5 = new ActiveXObject("Microsoft.XMLHTTP");
        } else {
            xmlHttp5 = null;
        }
    }
    xmlHttp5.onreadystatechange = checkStatus_testText;
    xmlHttp5.open("GET", "proso\\testText.txt", true);

    xmlHttp5.send(null);
}
function checkStatus_testText() {
    if (xmlHttp5.readyState == 4 && xmlHttp5.status == 200) {
        document.ajaxForm5.result.value = xmlHttp5.responseText;
    }
    else {
        document.ajaxForm5.result.value = "";
    }
}




//testCImage----------------------------------------------------
function loadText_testCImage() {
    if (window.XMLHttpRequest) {
        xmlHttp6 = new XMLHttpRequest();
    } else {
        if (window.ActiveXObject) {
            xmlHttp6 = new ActiveXObject("Microsoft.XMLHTTP");
        } else {
            xmlHttp6 = null;
        }
    }
    xmlHttp6.onreadystatechange = checkStatus_testCImage;
    xmlHttp6.open("GET", "proso\\testCImage.txt", true);

    xmlHttp6.send(null);
}
function checkStatus_testCImage() {
    if (xmlHttp6.readyState == 4 && xmlHttp6.status == 200) {
        document.ajaxForm6.result.value = xmlHttp6.responseText;
    }
    else {
        document.ajaxForm6.result.value = "";
    }
}

