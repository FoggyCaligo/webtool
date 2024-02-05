

function calc_change_btn(value){
    switch(value){
        case "퍼센트 계산기":
            changeContent("./3_living/percent.html");
            break;
            
        case "요리 계량단위 변환기":
            changeContent("./3_living/unit.html");
            break;

        case "거리 단위 변환기":
            changeContent("./3_living/dist.html");
            break;
            
        case "배당성장주 복리 계산기":
            changeContent("./4_finance/devidend.html");
            break;
        
        case "주식 수익률 계산기":
            changeContent("./4_finance/revenue.html");    
        break;

        case "대소문자 변환":
            // change2textcapital();
            changeContent("./2_text/capital.html")
            break;

        case "글자수 & 발표시간 계산기":
            //alert(value)
            // change2textnspeech();
            changeContent("./2_text/textNspeech/textNspeech.html");
            break;
    }   
}


function changeContent(content_id){
    document.getElementById("contentbox").innerHTML = '<object style="width:90vw; height:90vh;" type="text/html" data="'+content_id+'"></object>';
}
