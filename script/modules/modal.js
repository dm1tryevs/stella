const modal = function(){
    const modalEl = document.querySelector('.stella-modal');
    
    const modalClose = document.querySelector('.stella-modal__close');

    setTimeout(() => {
         modalEl.style.display = 'flex'
    }, 2000);

    modalEl.addEventListener("click", function (e) {
       if(e.target == this || e.target == modalClose) this.style.display = 'none'
        
    });

    document.body.addEventListener('keydown', function(e){
        if(e.key == 'Escape') modalEl.style.display = 'none'
    })
    
}

export default modal;