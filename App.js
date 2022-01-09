
function GenaratePin(){

    const pin = Math.round(Math.random() * 10000);
    const pinLength = pin + "";
    if(pinLength.length == 4){

        document.getElementById('pinField').value = pin;

    }
    else{
        GenaratePin();
    }
   
}

function GetThePin(){
    GenaratePin();

}


document.getElementById('Keypad').addEventListener('click',function(event){
    const key =  event.target.innerText;
    // const a = 'c';
    if(isNaN(key) != true ){
        document.getElementById('diplayPinField').value += key;
       
    }
    else if(key == "C"){
        document.getElementById('diplayPinField').value = '';
    }

   

})


document.getElementById('SubmitButton').addEventListener('click',function(){
    
    const genPin = document.getElementById('pinField').value;
    const typPin = document.getElementById('diplayPinField').value;
    if(genPin == typPin){
       document.getElementById('success').style.display = 'block';
        document.getElementById('error').style.display = 'none';
        
    }
    else{
        document.getElementById('error').style.display = 'block';
        document.getElementById('success').style.display = 'none';
    }

})