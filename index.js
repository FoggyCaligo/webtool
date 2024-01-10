

function calc_change_btn(value){
    switch(value){
        case "퍼센트 계산기":
            change2livpercent();
            break;
            
        case "요리 계량단위 변환기":
            break;

        case "거리 단위 변환기":
            break;
        
        case "퍼센트 계산기":
            break;
            
        case "배당성장주 복리 계산기":
            break;
        
        case "주식 수익 계산기":
            break;

        case "대소문자 변환":
            change2textcapital();
            break;

        case "글자수 & 발표시간 계산기":
            //alert(value)
            change2textnspeech();
            break;
    }   
}







function change2textnspeech(){
    document.getElementById("contentbox").innerHTML = '<object style="width:90vw; height:70vh;" type="text/html" data="./2_text/textNspeech/textNspeech.html"></object>';
}


function change2textcapital(){
    document.getElementById("contentbox").innerHTML = '<object style="width:90vw; height:70vh;" type="text/html" data="./2_text/capital.html"></object>';
}

function change2livpercent(){
    document.getElementById("contentbox").innerHTML = '<object style="width:90vw; height:70vh;" type="text/html" data="./3_living/percent.html"></object>';
}