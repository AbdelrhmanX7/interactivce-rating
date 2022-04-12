let numberReview = document.querySelectorAll('.nc')
let submit_Btn = document.getElementById('submit-btn')
let nR = 0
function add_style(e) {
    e.style.color = 'white';
    e.style.background = 'hsl(25, 97%, 53%)';
}
for ( var i in numberReview) {
    numberReview[i].onclick = function() {
        for(x = 0; x < numberReview.length; x++) {
            numberReview[x].style.color = "hsl(217, 12%, 63%)"
            numberReview[x].style.background = "hsla(217, 12%, 63%, 0.102)"
        }
        add_style(this)
        nR = this.innerHTML
    }
}
submit_Btn.onclick = function(){
    document.querySelector(".review-page").style.display = 'none'
    document.querySelector(".result-page").style.display = 'flex'
    document.querySelector('.result-continer').innerHTML = `You selected ${nR} out of 5`
    console.log(nR)
}