const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const yesDoggoButton = document.querySelectorAll('[data-yes-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
}) 

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
}) 

yesDoggoButton.forEach(button => {
    button.addEventListener('click', () => {
    doggoYes()
    })
}) 

function doggoYes() {
    const dog = prompt("What breed of dog do you have?", "Lab");
    // VALIDATION
    if (dog === ''){ // if not dog, (dog === null || undefined);
        return alert('Please try again!'); // --> show prop THEN return null;
       
    }else if(dog.includes('cat')){
        return alert('No cats only dogs')
    }
    const toLower = dog.toLowerCase()
    if (toLower.includes("shiba") || toLower.includes("inu") || toLower.includes("ken")){      
            alert(`Christine loves your ${dog}`); 
            return;
        }if(dog.includes("cat")){
            alert(`Your ${dog} is ew`)
        }else {
        alert(`Christine says a ${dog}?...thats an ugly dog`);    
        }
} 

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')

}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
    
}