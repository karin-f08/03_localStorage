function audio() {
    document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio').play(); //クリックしたら音を再生
}



 const timer = document.getElementById('timer');
 const startButton=document.getElementById("start");
 const stopButton=document.getElementById("stop");
 const resetButton =document.getElementById("reset");
 const lapArea = document.getElementById("lapArea");

 let startTime;
 let timeoutID;
 let stopTime = 0;


 function displayTime() {
  const currentTime = new Date(Date.now() - startTime + stopTime);
  const h = String(currentTime.getHours()-9).padStart(2, '0');
  const m = String(currentTime.getMinutes()).padStart(2, '0');
  const s = String(currentTime.getSeconds()).padStart(2, '0');
  const ms = String(currentTime.getMilliseconds()).padStart(3, '0');

  timer.textContent = `${h}:${m}:${s}.${ms}`;
  timeoutID = setTimeout(displayTime, 10);
  console.log(timer);
}

// スタートボタンがクリックされたら時間を進める
 startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
  startTime = Date.now();
  displayTime();
});

// ストップボタンがクリックされたら時間を止める
  stopButton.addEventListener('click', function ()  {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
  clearTimeout(timeoutID);
  stopTime += (Date.now() - startTime);
});
  
// リセットボタンがクリックされたら時間を0に戻す
resetButton.addEventListener('click', function() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
  timer.textContent = '00:00:00.000';
  stopTime = 0;
  const element = document.createElement('li');
  element.innerHTML = stopTime;
  list.appendChild(element);

});


const list = document.getElementById('list');


//記録された時間を消す
const buttonClear = document.getElementsById('button-clear');

buttonClear.addEventListener ('click',function(){
  list.removeChild(list.lastChild);
});


//保存
$('#save').on('click',function(){
  const text = $('#text_area').val();
  //console.log(text);
  localStorage.setItem('memo',text);
});
//削除


$("#clear").on("click", function () {
localStorage.removeItem("memo");
$("#text_area").val("");
});

if(localStorage.getItem("memo")){
const text = localStorage.getItem("memo");
console.log(text);
$("#text_area").val(text);



}
