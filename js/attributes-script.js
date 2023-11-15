let count = 0;
// let max = ;
let interval = 2000;
function myTimer() {
    setTimeout(function () {
        let newPic = document.getElementById('profile-pic');
        newPic.src = "image/Joe.jpg"
    }, 2000)

    setTimeout(function () {
        let newName = document.getElementById('profile-name');
        newName.innerHTML = 'Lama Lamasons'
    }, 4000)

    setTimeout(function () {
        let newColorB = document.getElementById('profile-desc');
        newColorB.style.backgroundColor = 'black';
        newColorB.style.color = 'gold'
        newColorB.textContent = 'The best lama to ever lama as old as the incas as strong as carl wheezer and as wise as ultra lord all bow to your new lord and savior LAMA LAMASONS'
    }, 6000)

    // setInterval(function () {
    //     let colorCard = document.getElementById("profile-card")
    //     colorCard.classList.toggle('background-color')
    // }, interval)
}
myTimer()

function getRandomcolor() {
    count
}