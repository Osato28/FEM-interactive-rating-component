// Var declaration

const ratingScreen = document.getElementById('ratingScreenContainer');
const thanksScreen = document.getElementById('thanksScreenContainer');
const thanksSubtitle = document.getElementById('thanksSubtitle');
let rating = 0;

// Function definition 

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

// Executing code

Array.from(document.getElementsByClassName('rating-btn')).forEach(btn => {
    btn.addEventListener('click', ()=>{selectRating(btn)});
});

document.querySelector('.submit-btn').addEventListener('click', ()=>{
    submit(); 
})
