// Var declaration

const ratingScreen = document.getElementById('ratingScreenContainer');
const thanksScreen = document.getElementById('thanksScreenContainer');
const thanksSubtitle = document.getElementById('thanksSubtitle');
let rating = 0;

// Function definition 

function selectRating(btn) {
    const el = document.querySelector('.btn-selected');
    el?.classList.remove('btn-selected');
    // el?.ariaPressed = "false";
    btn.classList.add('btn-selected');
    btn.ariaPressed = "true";
    rating = btn.id.charAt(btn.id.length - 1);
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
    btn.addEventListener('click', () => { selectRating(btn) });
    //For keyboard users
    btn.addEventListener('keydown', (ev) => {
        if (ev.key == "Enter" || ev.key == "Space") {
            selectRating(btn);
            document.querySelector('.submit-btn').focus();
        }
    }); 
});

const submitButton = document.querySelector('.submit-btn');
submitButton.addEventListener('click', () => {
    submit();
});
submitButton.addEventListener('keydown', (ev) => {
    if (ev.key == "Enter" || ev.key == "Space") {
        submit();
    }
});