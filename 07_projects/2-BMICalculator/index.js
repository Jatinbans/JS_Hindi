const form = document.querySelector('form')
//this usecase will gave empty value
//const height=parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results= document.querySelector('#results')

    if(height === '' || height <0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    } else if(weight === '' || weight <0 || isNaN(weight)){
        results.innerHTML = `Please give a valid height ${weight}`;
    }else {
       const bmi =  (weight/((height * height)/10000)).toFixed(2)
        results.innerHTML = `<span> ${bmi}</span>`;

        if(bmi <18.6){
            results.innerHTML = `You are under Weight ${bmi}`
        } else if(bmi > 24.9){
            results.innerHTML = `You are over Weight ${bmi}`
        }else{
            results.innerHTML =` You are normal  ${bmi}`
        }
    }


})