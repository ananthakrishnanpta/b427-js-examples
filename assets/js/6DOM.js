// -----

let data = [
    {
        question : 'asdfasdf',
        options : [
            'asdfasf', 'asdfasdf', 'asdfasdf', 'asdfasdf'
        ],
        correct: 'asdfasdf'
    },
    {
        question : 'asdfasdf',
        options : [
            'asdfasf', 'asdfasdf', 'asdfasdf', 'asdfasdf'
        ],
        correct: 'asdfasdf'
    },
    {
        question : 'asdfasdf',
        options : [
            'asdfasf', 'asdfasdf', 'asdfasdf', 'asdfasdf'
        ],
        correct: 'asdfasdf'
    },
    {
        question : 'asdfasdf',
        options : [
            'asdfasf', 'asdfasdf', 'asdfasdf', 'asdfasdf'
        ],
        correct: 'asdfasdf'
    },
    {
        question : 'asdfasdf',
        options : [
            'asdfasf', 'asdfasdf', 'asdfasdf', 'asdfasdf'
        ],
        correct: 'asdfasdf'
    },
    {
        question : 'asdfasdf',
        options : [
            'asdfasf', 'asdfasdf', 'asdfasdf', 'asdfasdf'
        ],
        correct: 'asdfasdf'
    },
    {
        question : 'asdfasdf',
        options : [
            'asdfasf', 'asdfasdf', 'asdfasdf', 'asdfasdf'
        ],
        correct: 'asdfasdf'
    }

]
// MCQ selection example 
let hintBox = document.querySelector('#hint-box');
let selected = false;
document.getElementById('mcq').addEventListener(
    'click',
    function (event) {
        if (event.target.tagName === 'LI') {
            // alert(`You selected ${event.target.innerText}; it was li id: ${event.target.id}
            //     You clicked on child element of ul id: ${event.currentTarget.id}
            //     `);
            hintBox.innerText = `You selected ${event.target.innerText}`;
            
            // changing the target element's font color
            event.target.style.color = 'blue';
            sel_opt.style.color = 'blue';
            selected = true;


        }
    }
)
document.getElementById('mcq').addEventListener(
    'mouseover',
    function (event) {
        if (!selected) {
            if (event.target.tagName === 'LI') {
                let result = '';
                switch (event.target.id) {
                    case 'opt1':
                        result = 'Are you serious?';
                        break;
                    case 'opt2':
                        result = `Yeah! I'm pretty sure`;
                        break;
                    case 'opt3':
                        result = `Okay!!!`;
                        break;
                    case 'opt4':
                        result = 'Maybe you are right'
                    default:
                        result = '';

                }
                hintBox.innerText = result;


            }
        }
    }
)

function renderQuestion(question, choices){
    let option_markup = '';
    for (let choice of choices){
        option_markup += `<li id=${choice}_${question}>choice</li>`
    }
    let markup = `
    <div class="card p-3">
                <strong class="">${question} ?</strong>
                <ul id="mcq">
                ${option_markup}
                </ul>
                <p class="box-shadow-sm card bg-dark text-info" id="hint-box"></p>
            </div>
    `
    return markup;
}