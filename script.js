var weightInput = document.querySelector(".weightnum");
var heightInput = document.querySelector(".heightnum");

var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{

    height = heightInput.value;
    weight = weightInput.value;
    BMI = (weight / Math.pow( (height/100), 2 )).toFixed(1);
    result.innerText = BMI;

    if(BMI < 18.5){
        result.innerHTML="Your BMI is "+BMI+" which means You are Underweight!";
    }else if((BMI > 18.5)&&(BMI<24.9)){
        result.innerHTML="Your BMI is "+BMI+" which means You are Normal!";
    }else if((BMI>25)&&(BMI<29.9)){
        result.innerHTML="Your BMI is "+BMI+" which means You are Overweight!";
    }else{
        result.innerHTML="Your BMI is "+BMI+" which means You are Obesity!";
    }
})