






 const form = document.querySelector('form')

form.addEventListener( 'submit' , function(e)
{
    e.preventDefault()

  let ht = Number(document.getElementById("height").value);
  console.log(ht);
  let wt = Number(document.getElementById("weight").value);
  console.log(wt);
   const result = document.querySelector('#results')


    if(ht === '' || ht <= 0 || isNaN(ht) || ht === null)
    {
        result.innerHTML = 'Give valid input'
    }

    else if(wt === '' || wt <= 0 || isNaN(wt)  || wt === null )
    {
        result.innerHTML = 'Give valid input'
    }
    else
    {
      const bmi =   (wt/((ht*ht)/10000)).toFixed(2)
      result.innerHTML = bmi
    }

    let result1 = document.getElementById('results')
    let r = result.innerHTML;

    if(r < 18.6)
    {
     
       document.getElementById('normal').style.display = 'none'
       document.getElementById('over').style.display = 'none'
       document.getElementById('under').style.display = 'block'
      
    }
    else if(r > 18.6 && r < 24.9)
    {
      document.getElementById('normal').style.display = 'none'
      document.getElementById('under').style.display = 'none'
      document.getElementById('normal').display = 'block'
    }
    else
    {
      document.getElementById('under').style.display = 'none'
      document.getElementById('normal').style.display = 'none'
      document.getElementById('over').display = 'block'
    }


    document.getElementById("height").value = ""
    document.getElementById("weight").value = ""

} )








      // OR



// let ht1 = document.getElementById("height")
// let wt1 = document.getElementById("weight")
// let form = document.forms[0];
// form.addEventListener( 'submit' , function(e)
// {
//     e.preventDefault()
//    const result = document.querySelector('#results')
//  let ht = Number(ht1.value)
//  let wt = Number(wt1.value)
//     if(ht === '' || ht < 0 || isNaN(ht) )
//     {
//         result.innerHTML = 'Give valid input'
//     }

//     else if(wt === '' || wt < 0 || isNaN(wt) )
//     {
//         result.innerHTML = 'Give valid input'
//     }
//     else
//     {
//       const bmi =   (wt/((ht*ht)/10000)).toFixed(2)
//       result.innerHTML = bmi
//     }

// } )