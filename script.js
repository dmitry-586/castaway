const txtHome = document.querySelector('.txtHome')
const txtEpisodes = document.querySelector('.txtEpisodes')
const txtAbout = document.querySelector('.txtAbout')
const txtRecall = document.querySelector('.txtRecall')
const txtContact = document.querySelector('.txtContact')
const ftHome = document.querySelector('.ftHome')
const ftAbout = document.querySelector('.ftAbout')
const ftEpisodes = document.querySelector('.ftEpisodes')
const ftRecall = document.querySelector('.ftRecall')
const ftContact = document.querySelector('.ftContact')


function validation(form) {

    function removeError(input) {
        const parent = input.parentNode

        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove()
            parent.classList.remove('error')
        }
    }


    function createError(input, text) {
        const parent = input.parentNode
        const errorLabel = document.createElement('label')

        errorLabel.classList.add('error-label')
        errorLabel.textContent = text

        parent.classList.add('error')
        parent.append(errorLabel)

    }

    let result = true

    const allInputs = form.querySelectorAll('input').forEach(input => {
        
        removeError(input)

        if(input.value == '') {

            console.log('error')
            createError(input, 'поле не заполнено')
            result = false
        }

    });

    return result
}

document.getElementById('add-form').addEventListener('submit', function(event) {
   event.preventDefault()
   
   if (validation(this) == true) {
        alert('форма проверена успешно')
   }

})


txtHome.addEventListener('click', function(){
    window.scrollTo({
        top: 220,
        behavior: "smooth",
    })
})

txtEpisodes.addEventListener('click', function(){
    window.scrollTo({
        top: 1100,
        behavior: "smooth",
    })
})

txtAbout.addEventListener('click', function(){
    window.scrollTo({
        top: 3110,
        behavior: "smooth",
    })
})

txtRecall.addEventListener('click', function(){
    window.scrollTo({
        top: 4630,
        behavior: "smooth",
    })
})

txtContact.addEventListener('click', function(){
    window.scrollTo({
        top: 5555,
        behavior: "smooth",
    })
})

ftHome.addEventListener('click', function(){
    event.preventDefault()
    window.scrollTo({
        top: -1,
        behavior: "smooth",
    })
})

ftAbout.addEventListener('click', function(){
    event.preventDefault()
    
    const el = document.getElementById('forFtAbout')
    el.scrollIntoView({block: "center", behavior: "smooth"})
})

ftEpisodes.addEventListener('click', function(){
    event.preventDefault()
    
    const el = document.getElementById('forFtEpisodes')
    el.scrollIntoView({behavior: "smooth"})
})

ftContact.addEventListener('click', function(){
    event.preventDefault()
})

ftRecall.addEventListener('click', function(){
    event.preventDefault()
    
    const el = document.getElementById('forFtRecall')
    el.scrollIntoView({block: "start", behavior: "smooth"})
})


document.getElementById('sg').addEventListener('click', function(){
    event.preventDefault()
})

document.getElementById('Instructions').addEventListener('click', function(){
    event.preventDefault()
})

document.getElementById('Changelog').addEventListener('click', function(){
    event.preventDefault()
})

document.getElementById('Credit').addEventListener('click', function(){
    event.preventDefault()
})

document.getElementById('pbw').addEventListener('click', function(){
    event.preventDefault()
})

document.getElementById('Licenses').addEventListener('click', function(){
    event.preventDefault()
})

