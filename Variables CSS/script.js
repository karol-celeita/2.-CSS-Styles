const h1  =console.log(document.documentElement.scrollHeight);
const h2  =console.log(document.documentElement.clientHeight);

const unit= (h1-h2)/100
const root = document.documentElement.style

addEventListener('scroll', () =>{
    root.setProperty('--width', (scrollY))
})