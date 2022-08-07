const modal = document.querySelector('.container');
const oppenModal = document.getElementById('oppenBtn');
const closeModal = document.querySelector('.closeBtn');

oppenModal.addEventListener('click', ()=>{
    modal.style.display = 'block'
});

closeModal.addEventListener('click', ()=>{
    modal.style.display = ' none'
});

window.addEventListener('click', (e)=>{
    if(e.target == modal){
        modal.style.display = ' none'
    }
})