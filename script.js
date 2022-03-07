'use strict'

const squareBox1 = ["1","2","3","8","9"];
const squareBox2 = ["1","3","4","7"];
const squareBox3 = ["1","3","4","5","9"];
const Row1 = ["1","2","3","4","5"];
const Row2 = ["3","1","7","9"];
const Row3 = ["9","8","4","3","1"];
const Column1 = ["1","9"];
const Column2 = ["3"];
const Column3 = ["2","8"];
const Column4 = ["1"];
const Column5 = ["3","4"];
const Column6 = ["7"];
const Column7 = ["4","3"];
const Column8 = ["9"];
const Column9 = ["5","1"];
let judgeOfInputNumber = 0
let judgeOfInputBox = 0
let judge

window.onload = function () {
    document.getElementById("text-button").onclick = function () {
        //各テキストボックスの値を取得
        const textbox2 = document.getElementById("box2").value;
        const textbox4 = document.getElementById("box4").value;
        const textbox6 = document.getElementById("box6").value;
        const textbox8 = document.getElementById("box8").value;
        const textbox11 = document.getElementById("box11").value;
        const textbox13 = document.getElementById("box13").value;
        const textbox15 = document.getElementById("box15").value;
        const textbox17 = document.getElementById("box17").value;
        const textbox19 = document.getElementById("box19").value;
        const textbox22 = document.getElementById("box22").value;
        const textbox24 = document.getElementById("box24").value;
        const textbox26 = document.getElementById("box26").value;
        const textbox28 = document.getElementById("box28").value;

        //各テキストボックスの入力値をチェック
        function judgeOfInput(number){
            // if(number !== "" && number >= 1 && number <= 9){
            if(number === "1" || number === "2" || number === "3" || number === "4" || number === "5" || number === "6" || number === "7" || number === "8" || number === "9"){
                return judgeOfInputNumber;
            } else {
                return judgeOfInputNumber + 1;
            }
        }
        const resultjudgeOfInput = judgeOfInput(textbox2) + judgeOfInput(textbox4) + judgeOfInput(textbox6) + judgeOfInput(textbox8) + judgeOfInput(textbox11) +  judgeOfInput(textbox13) + judgeOfInput(textbox15) + judgeOfInput(textbox17) + judgeOfInput(textbox19) + judgeOfInput(textbox22) + judgeOfInput(textbox24) + judgeOfInput(textbox26) + judgeOfInput(textbox28)

        //各配列に入力値の重複がないかをチェック
        function judgeOfject(number,square,row,column){
            if(square.indexOf(number) === -1 && row.indexOf(number) === -1 && column.indexOf(number) === -1){
                console.log(number,square.indexOf(number))
                return judgeOfInputBox
            }else{
                console.log(number,square.indexOf(number))
                return judgeOfInputBox + 1
            }
        }
        const resultjudgeOfject = judgeOfject(textbox2,squareBox1,Row1,Column2) + judgeOfject(textbox4,squareBox2,Row1,Column4) + judgeOfject(textbox6,squareBox2,Row1,Column6) + judgeOfject(textbox8,squareBox3,Row1,Column8) + judgeOfject(textbox11,squareBox1,Row2,Column1) + judgeOfject(textbox13,squareBox1,Row2,Column3) + judgeOfject(textbox15,squareBox2,Row2,Column5) + judgeOfject(textbox17,squareBox3,Row2,Column7) + judgeOfject(textbox19,squareBox3,Row2,Column9) + judgeOfject(textbox22,squareBox1,Row3,Column2) + judgeOfject(textbox24,squareBox2,Row3,Column4) + judgeOfject(textbox26,squareBox2,Row3,Column6) + judgeOfject(textbox28,squareBox3,Row3,Column8)
        
        //正解,不正解,入力値不正をチェック
        function judgement(number){
            if(resultjudgeOfInput === 0){
                if(number === 0){
                    return judge = "正解！"
                }else{
                    return judge = "不正解"
                }
            }else{
                return judge = "入力値が不正です"
            }
        }

        //判定結果をボタンに出力
        document.getElementById("text").innerHTML = judgement(resultjudgeOfject);
    };

    document.getElementById("text-button1").onclick = function () { 
        document.getElementById("box2").value = "6"
        document.getElementById("box4").value = "8"
        document.getElementById("box6").value = "9"
        document.getElementById("box8").value = "7"
        document.getElementById("box11").value = "4"
        document.getElementById("box13").value = "5"
        document.getElementById("box15").value = "2"
        document.getElementById("box17").value = "6"
        document.getElementById("box19").value = "8"
        document.getElementById("box22").value = "7"
        document.getElementById("box24").value = "5"
        document.getElementById("box26").value = "6"
        document.getElementById("box28").value = "2"
    }

    document.getElementById("text-button2").onclick = function () { 
    const element = document.getElementById("Head")
    element.textContent = "今回の基礎コースで一番印象に残ったのは"
    element.style.fontSize = "50px"
    setTimeout(function(){element.textContent = "配列とオブジェクトでした"},5000)
    setTimeout(function(){element.textContent = "これを活かしたゲームはなんだろうと思い"},10000)
    setTimeout(function(){element.textContent = "ナンプレもどきを作ることにしました"},15000)
    setTimeout(function(){element.textContent = "同じブロック内、同じ行、同じ列には"},20000)
    setTimeout(function(){element.textContent = "同じ数字が有ってはいけないというルールに則り"},25000)
    setTimeout(function(){element.textContent = "同じ色ブロックの配列、行の配列、列の配列"},30000)
    setTimeout(function(){element.textContent = "3種類の配列を作り、これに固定数字を格納しています"},35000)
    setTimeout(function(){element.textContent = "そして、入力された値を3種類の配列と照らし合わせ"},40000)
    setTimeout(function(){element.textContent = "重複値の有無をチェックし、正誤を返しています"},45000)
    setTimeout(function(){element.textContent = "1~9の数字のみが入力されるようにIF文で||"},50000)
    setTimeout(function(){element.textContent = "入力値を読み取るためにgetElementById"},55000)
    setTimeout(function(){element.textContent = "配列内の要素を探すために.indexOf"},60000)
    setTimeout(function(){element.textContent = "4つの引数を取る関数を作ったり"},65000)
    setTimeout(function(){element.textContent = "この発表文を順番に表示するのにsetTimeout"},70000)
    setTimeout(function(){element.textContent = "Webページ表示を整えるためにタグ、id、class、style"},75000)
    setTimeout(function(){element.textContent = "（ちょっと表示崩れてるなぁ）"},80000)
    setTimeout(function(){element.textContent = "様々なことを学び、実際に作れるようになりました"},82000)
    setTimeout(function(){element.textContent = "数週前までは絶対に作れませんでした"},90000)
    setTimeout(function(){element.textContent = "ペアプログラミングも本当に刺激を受け、とてもいい経験になりました"},95000)
    setTimeout(function(){element.textContent = "講師の方、ペアになってくれた方々"},100000)
    setTimeout(function(){element.textContent = "本当にありがとうございました！"},105000)
    setTimeout(function(){element.textContent = "以上で発表を終わります"},110000)
    }
}    
