
//textarea用　テキスト・ロード-----------------------------------

//testSave
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


//スマホ用左寄せ-----------------------------------
function moveLeft() {
    var w;
    w = window.innerWidth;

    var ele1;
    ele1 = document.getElementById("left1");
    var ele2;
    ele2 = document.getElementById("left2");
    var ele3;
    ele3 = document.getElementById("left3");

    if (w < 760) {
        ele1.style.position = "relative";
        ele1.style.top = "0px";
        ele1.style.marginLeft = "20px";
        ele1.style.marginRight = "auto";

        ele2.style.position = "relative";
        ele2.style.top = "0px";
        ele2.style.marginLeft = "20px";
        ele2.style.marginRight = "auto";

        ele3.style.position = "relative";
        ele3.style.top = "0px";
        ele3.style.marginLeft = "0px";
        ele3.style.marginRight = "auto";
        ele3.style.width = "300px";
        ele3.style.height = "auto";
   }
    else {
        ele1.style.position = "relative";
        ele1.style.top = "0px";
        ele1.style.marginLeft = "200px";
        ele1.style.marginRight = "auto";

        ele2.style.position = "relative";
        ele2.style.top = "0px";
        ele2.style.marginLeft = "200px";
        ele2.style.marginRight = "auto";

        ele3.style.position = "relative";
        ele3.style.top = "0px";
        ele3.style.marginLeft = "0px";
        ele3.style.marginRight = "auto";
        ele3.style.width = "500px";
        ele3.style.height = "auto";
   }
}


