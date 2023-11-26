window.addEventListener("scroll", function(){
    let header = window.document.getElementById('header')
    let apresenta = window.document.querySelector('.apresentacao')
    let sumir = window.document.querySelector('.apresentacao')
    let efeitoSeta = window.document.querySelector('#seta')
    let setaa = window.document.querySelector('#seta')
    

    /*let aqui = window.document.querySelector('#boa')*/
    header.classList.toggle('rolagem', window.scrollY > 0)
    apresenta.classList.toggle('cinza', window.scrollY > 1)
    sumir.classList.toggle('sumiu', window.scrollY > 99)
    efeitoSeta.classList.toggle('cinzento', window.scrollY > 1)
    setaa.classList.toggle('sumindo', window.scrollY > 99)

})

document.addEventListener("DOMContentLoaded", function() {
    let dia = new Date()
    let hora = dia.getHours()
    let boas = window.document.querySelector('#boa')
    if (hora >=0 && hora <12){
        boas.innerHTML=`<strong>Bom dia! </strong>`
          
        } else if(hora < 18){
            boas.innerHTML=`<strong>Boa tarde! </strong>`
           
        }else if (hora>=18){
            boas.innerHTML=`<strong>Boa noite! </strong>`
            
        }
  })

 

/*function comprimentar() {
    let dia = new Date()
    let hora = 12/*dia.getHours()
    let boas = window.document.querySelector('#boa')
    if (hora >=0 && hora <12){
        boas.innerHTML=`<strong>Bom dia! </strong>`
          
        } else if(hora < 18){
            boas.innerHTML=`<strong>Boa tarde! </strong>`
           
        }else if (hora>=18){
            boas.innerHTML=`<strong>Boa noite! </strong>`
            
        }
} */