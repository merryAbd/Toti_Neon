function clickedbutton(){
    console.log('o Botão foi clicado');   
}

function addnewtab(){
    let input = document.querySelector('#tab');
    let tablist = document.querySelector('#tablist');
    let tab = input.value;
    input.value='';
    //console.log(tab);

    let itemlist=document.createElement('li');
    itemlist.textContent = tab;
    tablist.appendChild(itemlist);

}
function validateEmail(e){
    let field=e.target;
    let fielValue=field.value;
    if (fieldValue.search('@')==-1){
        displayError('Email não é valido', field);
    }else {
         clearError(field);
    }
    field.classList.remove('not-validated');
    checkEnableSubmit();
}
function displayError(message, field){
    clearError(field);
    field.classList.add('is-invalid');
    let error=document.createElement('small');
    error.style.color='red';
    error.classList.add('error-message');
    error.textContent=message;
    field.parentElement.appendChild(error);
}
function clearEror(field){
    let container=field.parentElement;
    let error=container.querySelector('.error-message');
    if(error){
        container.removeChild(error);
    }
    field.classList.remove('is-invalid');
}
function validateNotEmpty(e){
    let field=e.target;
    let fieldValue=field.value;
    if(fieldValue ==''){
        displayError('Campo não pode ser vazio', field);
    }else {
        clearerror(field);
    }
}
function disableSubmit(){
    let form=document.querySelector('#form');
    let form=form.querySelector('[type=submit]');
    submit.disabled=true;
}
document.querySelectorAll('input').forEach(el=> el.classList.add ('not-validated'));
document.querySelectorAll('input.email').forEach(el=> el.addEventListener ('keyup',validateEmail));
document.querySelectorAll('input:required').forEach(el=> el.addEventListener('keyup', validateNotEmpty));
