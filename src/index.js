// Test import of a JavaScript module
import { example } from '@/js/example'

// Test import of styles
import '@/styles/index.scss'

const heading = document.createElement('h1')
heading.textContent = example()

// Test a background image url in CSS
const imageBackground = document.createElement('div')
imageBackground.classList.add('image')

const app = document.querySelector('#root')
app?.append(heading, imageBackground)

const burger = document.querySelectorAll('.burger')
const sidebar = document.querySelector('.sidebar')

burger.forEach((el) =>
  el.addEventListener('click', () => {
    if (sidebar.classList.contains('sidebar-active')) {
      sidebar.classList.remove('sidebar-active')
    } else {
      sidebar.classList.add('sidebar-active')
    }
  })
)
