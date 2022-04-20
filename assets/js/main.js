
const form = document.querySelector('.form');
console.log(form);

form.addEventListener('submit', e => {
e.preventDefault();
const peso = document.getElementById('peso').value;
const altura = document.getElementById('altura').value;
    
    const imc = peso/((altura/100)**2)
    console.log(imc)  
    let result = ''
    const resp = document.getElementById('resp')
    
    if(imc < 18.5){
       result = 'vocë esta abaixo do peso' 
    } else if(imc >= 18.5 && imc < 25 ){
        result = 'seu peso esta normal '
    } else if (imc >= 25 && imc < 30){
        result = `voce está com sobre peso`  
    } else if (imc >= 30 && imc < 35){
        result = 'voce esta com obesidade de grau 1'
    } else if(imc >= 35 && imc < 40){
        result = 'voce esta com obesidade de grau 2'
    } else if (imc >= 40){
        result = 'voce esta com obesidade de grau 3'
    }
    
    resp.innerHTML = `Seu IMC é de ${imc.toFixed(2)} e ${result}`
})
