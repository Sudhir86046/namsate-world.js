let namastebutton = Document.querySelector('button');
namasteBtn.addEventListener('click', inputMsg);
 
function inputMsg(){
    let name = prompt('enter name of student');
    namastebutton.textContent = 'ROLL NO = 12' + name;
 }
