const form = document.querySelector('#memeOutput');
const imageInput = document.querySelector('input[name ="imageInput"]');
const topTextInput = document.querySelector('input[name ="topTextInput"]');
const bottomTextInput = document.querySelector('input[name="bottomTextInput"]');
const result1 = document.querySelector('#result1');
const result2 = document.querySelector('#result2');
const result3 = document.querySelector('#result3');
// inputs
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newLogo1 = topTextInput.value
    const newLogo2 = imageInput.value









    const newLogo3 = bottomTextInput.value

    result1.append(newLogo1);
    result2.append(newLogo2);
    result3.append(newLogo3);


})