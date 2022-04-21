const titleElem = document.querySelector('.title')

document.addEventListener('keyup', function (event) {


//create word toUpperCase and add or remove
    appendValueToDom(event)

    let userEventKey = event.key.toUpperCase() // 's a d'
    let mainKeyElem = document.getElementById(userEventKey)

    mainKeyElem.classList.add('hit')

    mainKeyElem.addEventListener('animationend', function () {
        mainKeyElem.classList.remove('hit')
    })

    console.log(mainKeyElem);
})

//remove frist of end word
function appendValueToDom (event) {
    console.log(event);

    if (event.code === 'Backspace') {
        titleElem.innerHTML = titleElem.innerHTML.slice(0, -1)
        return
    }
//add word
    titleElem.innerHTML += event.key

}
