//  Re-Usable  Function

function commonHeartCount(id){{

    document.getElementById(id).addEventListener('click', function (e){
    e.preventDefault();
    const heart = parseInt(document.getElementById('heart-count').innerText);
   const heartCount = heart + 1
   document.getElementById('heart-count').innerText = heartCount;
   
})


}}


// Heart Count Function

commonHeartCount('heart-btn1')
commonHeartCount('heart-btn2')
commonHeartCount('heart-btn3')
commonHeartCount('heart-btn4')
commonHeartCount('heart-btn5')
commonHeartCount('heart-btn6')
commonHeartCount('heart-btn7')
commonHeartCount('heart-btn8')
commonHeartCount('heart-btn9')






