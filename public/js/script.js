console.log('Script loaded');
const msg1=document.querySelector('#msg1');
const msg2=document.querySelector('#msg2');
const msg3=document.querySelector('#msg3');
function weatherForecast(location){
fetch(`/weather?address=${location}`).then((response)=>{
    response.json().then((data)=>{
        if(data.code)
        {
            msg1.innerHTML=data.message;
            msg2.innerHTML="404 Not Found";
            msg3.innerHTML="";
            console.log(data);
        }
        else
        {
            msg1.innerHTML=data.location.name+","+data.location.region+","+data.location.country;
            msg2.innerHTML="<img src="+data.current.condition.icon+" class='weatherimg'>";
            msg3.innerHTML=data.current.temp_c+" °C "+" <b> "+data.current.condition.text+"</b>";
            console.log(data.location); 
        }
    });
});
}
const form=document.querySelector('form');
const inputi=document.querySelector('input');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(inputi.value );
    weatherForecast(inputi.value);
    inputi.value="";
    console.log('hello');
});
