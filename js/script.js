//  Re-Usable  Function

function commonHeartCount(id) {
    {

        document.getElementById(id).addEventListener('click', function (e) {
            e.preventDefault();
            const heart = parseInt(document.getElementById('heart-count').innerText);
            const heartCount = heart + 1
            document.getElementById('heart-count').innerText = heartCount;

        })


    }
}


function copyCount (id,num){
    document.getElementById(id).addEventListener('click', function (e) {
        e.preventDefault();

        
        alert('নম্বর কপি হয়েছে'+ " : " + document.getElementById(num).innerText);


        const copy = parseInt(document.getElementById('copy-count').innerText);
        const copyCount = copy + 1
        document.getElementById('copy-count').innerText = copyCount;

        navigator.clipboard.writeText(document.getElementById(num).innerText);


    })
}










    

// Card Component



const card1 = {
    name: 'জাতীয় জরুরি সেবা',
    number: '999'
}
const card2 = {
    name: 'পুলিশ',
    number: '999'
}
const card3 = {
    name: 'ফায়ার সার্ভিস',
    number: '999'
}
const card4 = {
    name: 'অ্যাম্বুলেন্স',
    number: '1994-99-9999'
}
const card5 = {
    name: 'নারী ও শিশু সহায়তা',
    number: '109'
}
const card6 = {
    name: 'দুদক',
    number: '106'
}
const card7 = {
    name: 'বিদ্যুৎ বিভ্রাট',
    number: '16216'
}
const card8 = {
    name: 'ব্র্যাক',
    number: '16445'
}
const card9 = {
    name: 'বাংলাদেশ রেলওয়ে',
    number: '163'
}






function callCount (id,cardSubtitle$,num,title$){
    document.getElementById(id).addEventListener('click', function (e) {
        e.preventDefault();

        
        const coin = parseInt(document.getElementById('coin-count').innerText);


        if(coin < 20){
            alert('আপনার পর্যাপ্ত কয়েন নেই ! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
            return;
        }

        alert('Calling'+' '+ document.getElementById(cardSubtitle$).innerText +' '+ document.getElementById(num).innerText + '.....');

        const coinCount = coin - 20;
        document.getElementById('coin-count').innerText = coinCount;

        

        const historyData = [];

        const cardComponent = {
            name:document.getElementById(title$).innerText,
            number:document.getElementById(num).innerText,
            callTime:new Date().toLocaleTimeString()
        };

        historyData.push(cardComponent);


        const callHistory = document.getElementById('call-history-details');
        

    for(const data of historyData){
        const div = document.createElement('div')
        div.innerHTML = `
       <div class="p-4 block">
                <div class="flex justify-between items-center bg-[#fafafa] rounded-lg p-3">
                    <div>
                        <h1 class="text-[12px] font-semibold">${cardComponent.name}</h1>
                        <p class="text-[13px]">${cardComponent.number}</p>
                    </div>

                    <p class="text-[12px]">${cardComponent.callTime}</p>

                </div>
            </div>
        
        `
        callHistory.appendChild(div);
    }


    })
}

// Clear Button Functionality

document.getElementById('clear-btn').addEventListener('click',function(e){
    e.preventDefault();
     const callHistory = document.getElementById('call-history-details');
    callHistory.innerText='';
})



// Heart Count Function

commonHeartCount('heart-btn1');
commonHeartCount('heart-btn2');
commonHeartCount('heart-btn3');
commonHeartCount('heart-btn4');
commonHeartCount('heart-btn5');
commonHeartCount('heart-btn6');
commonHeartCount('heart-btn7');
commonHeartCount('heart-btn8');
commonHeartCount('heart-btn9');

// Copy Count 




copyCount('copy-btn0','num0')
copyCount('copy-btn1','num1')
copyCount('copy-btn2','num2')
copyCount('copy-btn3','num3')
copyCount('copy-btn4','num4')
copyCount('copy-btn5','num5')
copyCount('copy-btn6','num6')
copyCount('copy-btn7','num7')
copyCount('copy-btn8','num8')



// Call count

callCount('call-btn1','card-subtitle-1','num0','title-1');
callCount('call-btn2','card-subtitle-2','num1','title-2');
callCount('call-btn3','card-subtitle-3','num2','title-3');
callCount('call-btn4','card-subtitle-4','num3','title-4');
callCount('call-btn5','card-subtitle-5','num4','title-5');
callCount('call-btn6','card-subtitle-6','num5','title-6');
callCount('call-btn7','card-subtitle-7','num6','title-7');
callCount('call-btn8','card-subtitle-8','num7','title-8');
callCount('call-btn9','card-subtitle-9','num8','title-9');