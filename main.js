const ratingState = document.getElementById('rating__state');
const thankyouState = document.getElementById('thankyou__state');
const submitBtn = document.querySelector('.btn__submit');
const rating = document.getElementById('rating');
const ratingNum = document.querySelectorAll('.btn');

function submitRating(e) {
    thankyouState.style.display = 'grid';
    ratingState.style.display = 'none';
    e.stopPropagation();
}
submitBtn.addEventListener('click', submitRating)

// because querySelectorAll return in array form 
ratingNum.forEach(num => {
    num.addEventListener('click', (e) => {
        rating.innerHTML = num.innerHTML;
        e.stopPropagation();
    })
})