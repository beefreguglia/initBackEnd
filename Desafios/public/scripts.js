const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for(let card of cards){

    card.addEventListener("click", function(){

        const id = card.getAttribute("id")
        window.location.href = `/courses/${id}`
        //modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${id}`
        //modalOverlay.classList.add('active')

    })

}

document.querySelector('.maximize-modal').addEventListener("click", function(){

    if(modalOverlay.querySelector('.modal').classList.contains('max')){
    
        modalOverlay.querySelector('.modal').classList.remove('max')

    }else{

        modalOverlay.querySelector('.modal').classList.add('max')

    }

})

document.querySelector('.close-modal').addEventListener("click", function(){

    modalOverlay.classList.remove('active')
    if(modalOverlay.querySelector('.modal').classList.contains('max')){
    
        modalOverlay.querySelector('.modal').classList.remove('max')

    }

    modalOverlay.querySelector("iframe").src = ""

})

