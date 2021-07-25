

        var total_seconds = 1800;
        var c_minutes = parseInt(total_seconds / 60);
        var c_seconds = parseInt(total_seconds % 60);
        var timer;

        var question_id = 0;

        var questions = [
            {id:1, score: [0,0,0,0,0], answer:["Eiropa", "Āfrika", "Amerika", "Āzija", "Austrālija"]},
            {id:2, score: [0,0], answer:["Krikets", "Boulings"]},
            {id:3, score: [0], answer:["Filipīnas"]},
            {id:4, score: [0], answer:["6"]},
            {id:5, score: [0], answer:["Parīzē"]},
            {id:6, score: [0,0], answer:["2006.gadā", "2021.gadā"]},
            {id:7, score: [0], answer:["Latvija"]},
            {id:8, score: [0,0,0,0]},
            {id:9, score: [0], answer:["Kanāda"]},
            {id:10, score: [0], answer:["Futbola klubs Ventspils"]},
            {id:11, score: [0,0,0,0]},
            {id:12, score: [0,0,0], answer:["4","14", "10"]},
            {id:13, score: [0], answer:["Gundars Vētra"]},
            {id:14, score: [0], answer:["Patiesi"]},
            {id:15, score: [0], answer:["Kopš 1997.gada"]}
        ];
        
        var resultTable = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        var kopejaisPunktuSkaits = 0;

        function check1(){
            var inputVal1 = document.forma1.elements[0].value;
            var inputVal2 = document.forma1.elements[1].value;
            var inputVal3 = document.forma1.elements[2].value;
            var inputVal4 = document.forma1.elements[3].value;
            var inputVal5 = document.forma1.elements[4].value;
            var res=0;
            for(var i=0; i<5; i++){
                if(document.forma1.elements[i].value==questions[0].answer[i]){
                    document.forma1.elements[i].style.backgroundColor="rgba(0,200,0,0.3)";
                    document.forma1.elements[i].style.color="rgb(0,50,0)"
                    document.forma1.elements[i].disabled=true;
                    res++;
                }
                else{
                    document.forma1.elements[i].style.backgroundColor="rgba(255,0,0,0.3)";
                    document.forma1.elements[i].style.color="rgb(200,0,0)"
                    document.forma1.elements[i].disabled=true;
                }
            }
            document.getElementById("tabula1").innerHTML=res;
            if(res==5){
                document.getElementsByClassName("izvPoga")[0].style.backgroundColor="rgb(100,200,100)";
            }
            else if(res>0){
                document.getElementsByClassName("izvPoga")[0].style.backgroundColor="rgb(200,200,100)";
            }
            else{
                document.getElementsByClassName("izvPoga")[0].style.backgroundColor="rgb(200,0,0)";
            }
            kopejaisPunktuSkaits += res;
        }
        function check2(){
            var selected = new Array();
                var ele = document.getElementsByClassName('jaut2');
                var score = 0;
                for(i = 0; i < ele.length; i++) {
                    if(ele[i].type="checkbox") {
                        if (ele[i].checked) {
                            for (let ii = 0; ii < questions[1].answer.length; ii++) {
                                if(ele[i].value == questions[1].answer[ii]){
                                    score++;
                                    document.getElementById("check"+(i+1)).style.background="rgba(0,200,0,0.3)";
                                    break;
                                }
                                if(questions[1].answer.length - 1 === ii) {
                                    score--;
                                    document.getElementById("check"+(i+1)).style.background="rgba(255,0,0,0.3)";
                                }   
                            }
                        }
                    }
                }
                
                if (score <= 0) {
                    document.getElementsByClassName("izvPoga")[1].style.backgroundColor="rgb(200,0,0)";
                    document.getElementById("tabula2").innerHTML="0";
                } else {
                    kopejaisPunktuSkaits+=score;
                    document.getElementById("tabula2").innerHTML=score;
                    if(score==2){
                        document.getElementsByClassName("izvPoga")[1].style.backgroundColor="rgb(100,200,100)";
                    }
                    else{
                        document.getElementsByClassName("izvPoga")[1].style.backgroundColor="rgb(200,200,100)";
                    }
                }
        }
        function check3(){
            if(document.getElementById('jaut33').value==questions[2].answer && document.getElementById('jaut33').type=="text"){
                kopejaisPunktuSkaits++;
                document.getElementById("tabula3").innerHTML="1";
                document.getElementsByClassName("izvPoga")[2].style.backgroundColor="rgb(100,200,100)";
                document.getElementById('jaut33').style.backgroundColor="rgba(0,200,0,0.3)";
                document.getElementById('jaut33').style.color="rgb(0,50,0)"
                document.getElementById('jaut33').disabled=true;
            } else {
                document.getElementById("tabula3").innerHTML="0";
                document.getElementsByClassName("izvPoga")[2].style.backgroundColor="rgb(200,0,0)";
                document.getElementById('jaut33').style.backgroundColor="rgba(255,0,0,0.3)";
                document.getElementById('jaut33').style.color="rgb(200,0,0)"
                document.getElementById('jaut33').disabled=true;
            }
        }
        function check4(){
            var ele4 = document.getElementsByClassName("jaut4atb");
                for(i = 0; i < ele4.length; i++) {
                    if(ele4[i].type=="radio") {
                        if(ele4[i].checked){
                            if(ele4[i].value == questions[3].answer){
                                document.getElementById("tabula4").innerHTML="1";
                                document.getElementsByClassName("izvPoga")[3].style.backgroundColor="rgb(100,200,100)";
                                kopejaisPunktuSkaits++;
                                document.getElementById("radio3").style.background="rgba(0,200,0,0.3)";
                                break;
                            } else {
                                document.getElementById("tabula4").innerHTML="0";
                                document.getElementsByClassName("izvPoga")[3].style.backgroundColor="rgb(200,0,0)";
                                document.getElementById("radio"+(i+1)).style.background="rgba(255,0,0,0.3)";
                                break;
                            }
                        }
                    }
                    if(ele4.length - 1 === i) {
                        document.getElementById("tabula4").innerHTML="0";
                        document.getElementsByClassName("izvPoga")[3].style.backgroundColor="rgb(200,0,0)";
                    }
                }
        }
        function check5(){
            var ele5 = document.getElementsByClassName("jaut5atb");
                for(i = 0; i < ele5.length; i++) {
                    if(ele5[i].type="radio") {
                        if(ele5[i].checked){
                            if(ele5[i].value == questions[4].answer){
                                document.getElementById("tabula5").innerHTML="1";
                                document.getElementsByClassName("izvPoga")[4].style.backgroundColor="rgb(100,200,100)";
                                kopejaisPunktuSkaits++;
                                document.getElementById("radio51").style.background="rgba(0,200,0,0.3)";
                                break;
                            } else {
                                document.getElementById("tabula5").innerHTML="0";
                                document.getElementsByClassName("izvPoga")[4].style.backgroundColor="rgb(200,0,0)";
                                document.getElementById("radio5"+(i+1)).style.background="rgba(255,0,0,0.3)";
                                break;
                            }
                        }
                    }
                    if(ele5.length - 1 === i) {
                        document.getElementById("tabula5").innerHTML="0";
                        document.getElementsByClassName("izvPoga")[4].style.backgroundColor="rgb(200,0,0)";
                    }
                }
        }
        function check6(){
            var selected = new Array();
                var ele6 = document.getElementsByClassName('jaut6');
                var score = 0;
                for(i = 0; i < ele6.length; i++) {
                    if(ele6[i].type="checkbox") {
                        if (ele6[i].checked) {
                            for (let ii = 0; ii < questions[5].answer.length; ii++) {
                                if(ele6[i].value == questions[5].answer[ii]){
                                    score++;
                                    document.getElementById("check6"+(i+1)).style.background="rgba(0,200,0,0.3)";
                                    break;
                                }
                                if(questions[5].answer.length - 1 === ii) {
                                    score--;
                                    document.getElementById("check6"+(i+1)).style.background="rgba(255,0,0,0.3)";
                                }   
                            }
                        }
                        
                    }
                }
                
                if (score <= 0) {
                    document.getElementsByClassName("izvPoga")[5].style.backgroundColor="rgb(200,0,0)";
                    document.getElementById("tabula6").innerHTML="0";
                } else {
                    kopejaisPunktuSkaits+=score;
                    document.getElementById("tabula6").innerHTML=score;
                    if(score==2){
                        document.getElementsByClassName("izvPoga")[5].style.backgroundColor="rgb(100,200,100)";
                        document.getElementById("tabula6").innerHTML=score;
                    }
                    else{
                        document.getElementsByClassName("izvPoga")[5].style.backgroundColor="rgb(200,200,100)";
                        document.getElementById("tabula6").innerHTML=score;
                    }
                }
        }
        function check7(){
            if(document.getElementById('jaut7').value==questions[6].answer && document.getElementById('jaut7').type=="text"){
                kopejaisPunktuSkaits++;
                document.getElementById("tabula7").innerHTML="1";
                document.getElementsByClassName("izvPoga")[6].style.backgroundColor="rgb(100,200,100)";
                document.getElementById('jaut7').style.backgroundColor="rgba(0,200,0,0.3)";
                document.getElementById('jaut7').style.color="rgb(0,50,0)"
                document.getElementById('jaut7').disabled=true;
            } else {
                document.getElementById("tabula7").innerHTML="0";
                document.getElementsByClassName("izvPoga")[6].style.backgroundColor="rgb(200,0,0)";
                document.getElementById('jaut7').style.backgroundColor="rgba(255,0,0,0.3)";
                document.getElementById('jaut7').style.color="rgb(200,0,0)"
                document.getElementById('jaut7').disabled=true;
            }
        }

        function check8(){
            result = 0;
            for (var i = 0; i < 4; i++) {
                if (document.getElementById("SatbDrop"+i).hasChildNodes() && document.getElementById("SatbDrop"+i).children[0].id == "Satb"+i) {
                    result++;
                    document.getElementById("SatbDrop"+i).style.backgroundColor="rgba(0,200,0,0.3)";
                    document.getElementById("SatbDrop"+i).disabled=true;
                }
                else{
                    document.getElementById("SatbDrop"+i).style.backgroundColor="rgba(255,0,0,0.3)";
                    document.getElementById("SatbDrop"+i).disabled=true;
                }
            }
            document.getElementById("tabula8").innerHTML=result;
            if(result==4){
                document.getElementsByClassName("izvPoga")[7].style.backgroundColor="rgb(100,200,100)";
            }
            else if(result>0){
                document.getElementsByClassName("izvPoga")[7].style.backgroundColor="rgb(200,200,100)";
            }
            else{
                document.getElementsByClassName("izvPoga")[7].style.backgroundColor="rgb(200,0,0)";
            }
            kopejaisPunktuSkaits += result;
        }

        function check9(){
            var ele9 = document.getElementsByClassName("jaut9atb");
                for(i = 0; i < ele9.length; i++) {
                    if(ele9[i].type="radio") {
                        if(ele9[i].checked){
                            if(ele9[i].value == questions[8].answer){
                                document.getElementById("tabula9").innerHTML="1";
                                document.getElementsByClassName("izvPoga")[8].style.backgroundColor="rgb(100,200,100)";
                                kopejaisPunktuSkaits++;
                                document.getElementById("radio91").style.background="rgba(0,200,0,0.3)";
                                break;
                            } else {
                                document.getElementById("tabula9").innerHTML="0";
                                document.getElementsByClassName("izvPoga")[8].style.backgroundColor="rgb(200,0,0)";
                                document.getElementById("radio9"+(i+1)).style.background="rgba(255,0,0,0.3)";
                                break;
                            }
                        }
                    }
                    if(ele9.length - 1 === i) {
                        document.getElementById("tabula9").innerHTML="0";
                        document.getElementsByClassName("izvPoga")[8].style.backgroundColor="rgb(200,0,0)"
                    }
                }
        }
        function check10(){
            if(document.getElementById('jaut10atb').value==questions[9].answer && document.getElementById('jaut10atb').type=="text"){
                kopejaisPunktuSkaits++;
                document.getElementById("tabula10").innerHTML="1";
                document.getElementsByClassName("izvPoga")[9].style.backgroundColor="rgb(100,200,100)";
                document.getElementById('jaut10atb').style.backgroundColor="rgba(0,200,0,0.3)";
                document.getElementById('jaut10atb').style.color="rgb(0,50,0)"
                document.getElementById('jaut10atb').disabled=true;
            } else {
                document.getElementById("tabula10").innerHTML="0";
                document.getElementsByClassName("izvPoga")[9].style.backgroundColor="rgb(200,0,0)";
                document.getElementById('jaut10atb').style.backgroundColor="rgba(255,0,0,0.3)";
                document.getElementById('jaut10atb').style.color="rgb(200,0,0)"
                document.getElementById('jaut10atb').disabled=true;
            }
        }
        function check11(){
            result = 0;
            for (var i = 0; i < 4; i++) {
                if (document.getElementById("drop"+i).hasChildNodes() &&document.getElementById("drop"+i).children[0].id == "drag"+i) {
                    result++;
                    document.getElementById("drop"+i).style.backgroundColor="rgba(0,200,0,0.3)";
                    document.getElementById("drop"+i).disabled=true;
                }else{
                    document.getElementById("drop"+i).style.backgroundColor="rgba(255,0,0,0.3)";
                    document.getElementById("drop"+i).disabled=true;
                }
            }
            document.getElementById("tabula11").innerHTML=result;
            if(result==4){
                document.getElementsByClassName("izvPoga")[10].style.backgroundColor="rgb(100,200,100)";
            }
            else if(result>0){
                document.getElementsByClassName("izvPoga")[10].style.backgroundColor="rgb(200,200,100)";
            }
            else{
                document.getElementsByClassName("izvPoga")[10].style.backgroundColor="rgb(200,0,0)";
            }
            kopejaisPunktuSkaits+=result;
            
        }
        function check12(){
            result = 0;
            var inputs = document.forms.forma.elements;
            if(document.getElementById('jaut12atb1').value==questions[11].answer[0] && document.getElementById('jaut12atb1').type=="text"){
                result++;
                inputs[0].style.backgroundColor="rgba(0,200,0,0.3)";
                inputs[0].style.color="rgb(0,50,0)"
                inputs[0].disabled=true;
            } else {
                inputs[0].style.backgroundColor="rgba(255,0,0,0.3)";
                inputs[0].style.color="rgb(200,0,0)"
                inputs[0].disabled=true;
            }
            if(document.getElementById('jaut12atb2').value==questions[11].answer[1] && document.getElementById('jaut12atb2').type=="text"){
                result++;
                inputs[1].style.backgroundColor="rgba(0,200,0,0.3)";
                inputs[1].style.color="rgb(0,50,0)"
                inputs[1].disabled=true;
            } else {
                inputs[1].style.backgroundColor="rgba(255,0,0,0.3)";
                inputs[1].style.color="rgb(200,0,0)"
                inputs[1].disabled=true;
            }
            if(document.getElementById('jaut12atb3').value==questions[11].answer[2] && document.getElementById('jaut12atb3').type=="text"){
                result++;
                inputs[2].style.backgroundColor="rgba(0,200,0,0.3)";
                inputs[2].style.color="rgb(0,50,0)"
                inputs[2].disabled=true;
            } else {
                inputs[2].style.backgroundColor="rgba(255,0,0,0.3)";
                inputs[2].style.color="rgb(200,0,0)"
                inputs[2].disabled=true;
            }
            
            if(result==3){
                document.getElementsByClassName("izvPoga")[11].style.backgroundColor="rgb(100,200,100)";
                document.getElementById("tabula12").innerHTML="3";
            }
            else if(result>0){
                document.getElementsByClassName("izvPoga")[11].style.backgroundColor="rgb(200,200,100)";
                document.getElementById("tabula12").innerHTML=result;
            }
            else{
                document.getElementsByClassName("izvPoga")[11].style.backgroundColor="rgb(200,0,0)";
                document.getElementById("tabula12").innerHTML="0";
            }
            kopejaisPunktuSkaits+=result;
            kopejaisPunktuSkaits+=result;
        }
        function check13(){
            var inputs = document.getElementById('jaut13atb');
            if(document.getElementById('jaut13atb').value==questions[12].answer && document.getElementById('jaut13atb').type=="text"){
                document.getElementsByClassName("izvPoga")[12].style.backgroundColor="rgb(100,200,100)";
                document.getElementById("tabula13").innerHTML="1";
                kopejaisPunktuSkaits++;
                inputs.style.backgroundColor="rgba(0,200,0,0.3)";
                inputs.style.color="rgb(0,50,0)"
                inputs.disabled=true;
            } else {
                document.getElementsByClassName("izvPoga")[12].style.backgroundColor="rgb(200,0,0)";
                document.getElementById("tabula13").innerHTML="0";
                inputs.style.backgroundColor="rgba(255,0,0,0.3)";
                inputs.style.color="rgb(200,0,0)"
                inputs.disabled=true;
            }
        }
        function check14(){
            var ele14 = document.getElementsByClassName("jaut14atb");
                for(i = 0; i < ele14.length; i++) {
                    if(ele14[i].type="radio") {
                        if(ele14[i].checked){
                            if(ele14[i].value == questions[13].answer){
                                kopejaisPunktuSkaits++;
                                document.getElementsByClassName("izvPoga")[13].style.backgroundColor="rgb(100,200,100)";
                                document.getElementById("tabula14").innerHTML="1";
                                document.getElementById("radio141").style.background="rgba(0,200,0,0.3)";
                                break;
                            } else {
                                document.getElementsByClassName("izvPoga")[13].style.backgroundColor="rgb(200,0,0)";
                                document.getElementById("tabula14").innerHTML="0";
                                document.getElementById("radio14"+(i+1)).style.background="rgba(255,0,0,0.3)";
                                break;
                            }
                        }
                    }
                    if(ele14.length - 1 === i) {
                        document.getElementsByClassName("izvPoga")[13].style.backgroundColor="rgb(200,0,0)";
                        document.getElementById("tabula14").innerHTML="0";
                    }
                }
        }
        function check15(){
            var inputs = document.getElementById('jaut15atb');
            if(document.getElementById('jaut15atb').value==questions[14].answer && document.getElementById('jaut15atb').type=="text"){
                document.getElementsByClassName("izvPoga")[14].style.backgroundColor="rgb(100,200,100)";
                document.getElementById("tabula15").innerHTML="1";
                kopejaisPunktuSkaits++;
                inputs.style.backgroundColor="rgba(0,200,0,0.3)";
                inputs.style.color="rgb(0,50,0)"
                inputs.disabled=true;
            } else {
                document.getElementsByClassName("izvPoga")[14].style.backgroundColor="rgb(200,0,0)";
                document.getElementById("tabula15").innerHTML="0";
                inputs.style.backgroundColor="rgba(255,0,0,0.3)";
                inputs.style.color="rgb(200,0,0)"
                inputs.disabled=true;
            }
        }
        function startTimer() {
            if(c_seconds<10){
                c_seconds="0"+c_seconds;
            }
            document.getElementById("timer_minutes").innerHTML = 'Atlikušais laiks - ' + c_minutes + ':' + c_seconds;
            if (total_seconds <= 0) {
                pabeigtTestu();
            } else {
                total_seconds = total_seconds - 1;
                c_minutes = parseInt(total_seconds / 60);
                c_seconds = parseInt(total_seconds % 60);
                timer = setTimeout(startTimer, 1000);
            }
        }

        function Question(x){
            if(x!=16){
                document.getElementById("jaut16").style.display="none";
            }
            var str = "jaut" + question_id;
            var newStr = "jaut" + x;

            document.getElementById(str).style.display="none";
            document.getElementById(newStr).style.display="block";
            question_id = x;
        }

        function nextQuestion(x){
            document.getElementById(x).style.display="none";
            var str = x.substring(4,x.length);
            str++;
            var newStr = "jaut" + str;

            question_id = str;
            document.getElementById(newStr).style.display="block";
        }

        function prevQuestion(x){
            document.getElementById(x).style.display="none";
            var str = x.substring(4,x.length);
            str--;
            var newStr = "jaut" + str;

            question_id = str;
            document.getElementById(newStr).style.display="block";
        }
        function saktTestu(){
            question_id = 1;
            document.getElementById("sakums").style.display="none";
            document.getElementById("jaut1").style.display="block";
            document.getElementById("navigacija").style.display="block";
            startTimer();
        }

        function allowDrop(ev) {
            ev.preventDefault();

        }

        function drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
        }

        function drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("text");
            if ( event.target.nodeName !== "IMG" ) {
                ev.target.appendChild(document.getElementById(data));
            }
        }
        function pabeigtTestu(){
            check1();
            check2();
            check3();
            check4();
            check5();
            check6();
            check7();
            check8();
            check9();
            check10();
            check11();
            check12();
            check13();
            check14();
            check15();
            clearInterval(timer);
            for(var i=1; i<=15; i++){
                var strstr="jaut"+i;
                document.getElementById(strstr).style.display="none";
            }
            document.getElementById("jaut16").style.display="block";
            document.getElementById("beiguPoga").style.display="none";
            document.getElementById("rezultaats_teksts").innerHTML="Jūs ieguvāt "+ kopejaisPunktuSkaits + " punktus no 29 punktiem jeb " +
                Math.round(kopejaisPunktuSkaits*100/29*100)/100 + "%";

        }

        function input_check(){
            for(var i=0; i < questions[i].answer.length; i++){

            }
        }
            