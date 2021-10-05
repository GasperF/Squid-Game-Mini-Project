const button = document.querySelector('.btn')

function showNumber(){

    document.getElementById('loadingYouAre').style.visibility= 'visible';

    document.getElementById('result').innerHTML = Math.floor(Math.random() *456);

    document.getElementById('declare').innerHTML = "Let The Games Begin"

    document.getElementById('loadingImage').style.visibility= 'visible';
}