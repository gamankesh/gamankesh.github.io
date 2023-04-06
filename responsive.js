let formArea = document.getElementById('form-area');
let feedBack = document.getElementById('feedback');
let feedBackCheck = document.getElementById('feedbackcheck');
let feedBackButton = document.getElementById('submit');


feedBackButton.addEventListener('click', function(){
    if( feedback.value == 'Y' || feedback.value == 'y'){
        formArea.style.display = 'block';
        feedBackCheck.style.display = 'none'
        feedBack.value = '';
       
    }else{
        feedBackCheck.style.display = 'none';   
    }  
    }
)
;