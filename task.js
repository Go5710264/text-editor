const textArea = document.getElementById('editor');
const clearContent = document.getElementById('clearContent');

if (localStorage.text) {
    textArea.value = localStorage.text; 
}

textArea.addEventListener('input', () => {
    localStorage.setItem('text', textArea.value);
})

clearContent.addEventListener('click', () => {
    textArea.value = '';
    delete localStorage.text;
})

