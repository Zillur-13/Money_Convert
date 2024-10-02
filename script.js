

let converter = document.querySelector(`#moneyConverterApp`).addEventListener(`submit`,function(e){
    e.preventDefault();

    let amount = document.querySelector(`#amount`).value;
    let currency = document.querySelector(`#currency`).value;
    let result = document.querySelector(`#result`)
    let header = document.querySelector(`#header`)
    // currency.toLowerCase()
     
    const converterFunction = ()=>{
        header.innerHTML = `Convert Success <i class="fa-solid fa-check"></i>`
        header.style.color = `green`;

        if(amount == `` || currency == ``){
            alert(`please fill the input field then you can convert`);
        }
        else{

            if(currency == `dollar` || currency == `Dollar`){
        
                 result.innerHTML = `${amount} ${currency} = ${amount * 119.73} BDT`;
                 result.style.classList.add = `.results`
             }
             else if(currency == `rupi` || currency == `Rupi`){
                
                result.innerHTML = `${amount} ${currency} = ${amount * 1.43} BDT`
            }
             else if(currency == `pound` || currency == `Pound`){
                
                    result.innerHTML = `${amount} ${currency} = ${amount * 158.91} BDT`
                }
             else if(currency == `euro` || currency == `Euro`){
                result.innerHTML = `${amount} ${currency} = ${amount * 132.47} BDT`
             }

             }
        }
        document.querySelector(`#moneyConverterApp`).reset()
        if(amount && currency){
            converterFunction()
        }
    });
 




   
//   const myfunction = (event) =>{
//     event.preventDefault();
//     let input1 = document.querySelector(`#amount`).value;
//     let input2 = document.querySelector(`#amount`).value;
//     let result = document.querySelector(`#result`)

//     let sum = parseInt(input1) + parseInt(input2);
//     result.innerHTML = `result : ${sum}`
//   }    
    
      






