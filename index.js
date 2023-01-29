const left = document.querySelector('.left')
const right = document.querySelector('.right')

left.addEventListener('mouseenter', () => {
    right.classList.add('shrink')
    left.classList.add('split')
})

left.addEventListener('mouseleave', () => {
    right.classList.remove('shrink')
    left.classList.remove('split')
})

right.addEventListener('mouseenter', () => {
    left.classList.add('shrink')
    right.classList.add('split')
})

right.addEventListener('mouseleave', () => {
    left.classList.remove('shrink')
    right.classList.remove('split')
})