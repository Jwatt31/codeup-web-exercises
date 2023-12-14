'use strict'




//-----------------------------------------------/*Splash Screen Export */----------------------------------------------
export default splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click',()=>{
    splashScreen.style.opacity = 0;
    setTimeout(()=>{
        splashScreen.classList.add('hidden')
    },610)
})

//--------------------------------------------------------/*End*/-----------------------------------------------------------
