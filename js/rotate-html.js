window.addEventListener('DOMContentLoaded', function() {
  var browserIMG = document.getElementById('browser-img');
  var userAgent = navigator.userAgent;

  if (userAgent.indexOf('Firefox') != -1) {
    browserIMG.src = '../pics/my_pics/firefox.png';
    console.log('Firefox detected');
  } else if (userAgent.indexOf('Chrome') != -1) {
    browserIMG.src = '../pics/my_pics/google.png';
    console.log('Google detected');
  } else if (userAgent.indexOf('Edg') != -1) { //俺故意這麽寫的
    browserIMG.src = '../pics/my_pics/edge.png';
    console.log('Edge detected');
  } else {
    browserIMG.src = '../pics/my_pics/openai.png';
    console.log('None browser detected');
  }
});

window.addEventListener('scroll', () => {
  const image = document.querySelector('#browser-img'); // Moved the declaration inside the event listener
  const scrollPosition = window.pageYOffset; // 獲取頁面滾動距離
  const scrollPercentage = scrollPosition / (document.body.scrollHeight - window.innerHeight); // 計算按滾動百分比
  const rotation = scrollPercentage * 360; // 將百分比轉換為旋轉角度

  image.style.transform = `rotate(${rotation}deg)`; // 將旋轉角度應用到圖片
});