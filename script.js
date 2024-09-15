const buttons = document.querySelectorAll('.box')

const bg = document.querySelector('.main-container')


buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {

        if (e.target.id === 'box1'){
            bg.style.backgroundColor = 'rgb(13, 255, 0)'
        }
        if (e.target.id === 'box2'){
            bg.style.backgroundColor = 'rgb(0, 72, 255)'
        }
        if (e.target.id === 'box3'){
            bg.style.backgroundColor = 'rgb(238, 255, 0)'
        }
        if (e.target.id === 'box4'){
            bg.style.backgroundColor = 'rgb(166, 0, 255)'
        }
        if (e.target.id === 'box5'){
            bg.style.backgroundColor = 'rgb(255, 0, 0)'
        }
        if (e.target.id === 'box6'){
            bg.style.backgroundColor = 'rgb(255, 0, 255)'
        }

    })
})
