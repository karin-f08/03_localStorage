function audio() {
    document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
    document.getElementById('btn_audio').play(); //クリックしたら音を再生
}



const timer = document.getElementById('timer');
 const start=document.getElementById("start");
 const stop=document.getElementById("stop");

 let startTime;
 let timeoutId;


start.addEventListener('click', () => {
  startTime = Date.now();
  console.log(startTime);
  console.log(new Date(startTime))
  countUp();
});

 function countUp() {
  const d=new Date(Date.now()-startTime);
  const h=String(d.getHours()-9).padStart(2,"0");
  const m=String(d.getMinutes()).padStart(2,"0");
  const s=String(d.getSeconds()).padStart(2,"0");
  const ms =String(d.getMilliseconds()).padStart(3,"0");
  timer.textContent = `${h}:${m}:${s},${ms}`;


  timeoutId = setTimeout(() => {
    countUp();
  }, 10);
 }

  stop.addEventListener('click', () => {
    clearTimeout(timeoutId);
  });

//保存
$('#save').on('click',function(){
    const text = $('#text_area').val();
    //console.log(text);
    localStorage.setItem('memo',text);
  });

 

if(localStorage.getItem("memo")){
  const text = localStorage.getItem("memo");
  console.log(text);
  $("#text_area").val(text);



}