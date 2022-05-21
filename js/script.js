let ratingScreen = document.getElementById('ratingScreenContainer');
let thanksScreen = document.getElementById('thanksScreenContainer');
let thanksSubtitle = document.getElementById('thanksSubtitle');
let rating = 0;

Array.from(document.getElementsByClassName('rating-btn')).forEach(btn => {
    btn.addEventListener('click', ()=>{selectRating(btn)});
});

document.querySelector('.submit-btn').addEventListener('click', ()=>{
    submit(); 
})

function selectRating(btn) {
    let el = document.querySelector('.btn-selected');
    el?.classList.remove('btn-selected');
    btn.classList.add('btn-selected');
    rating = btn.id.charAt(btn.id.length - 1);
    console.log(rating);
}

function submit() {
    ratingScreen.classList.add('hidden');
    thanksScreen.classList.remove('hidden');
    if (rating != 0) {
        thanksSubtitle.innerText = `You selected ${rating} out of 5`;
    }
}