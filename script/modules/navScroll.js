const navScroll = function(){
const header = document.querySelector('.stella-header');
const footer = document.querySelector('.stella-footer');

//блоки

const product = document.querySelector('.stella-product__title');
const cases = document.querySelector('.stella-case__title');
const team = document.querySelector('.stella-employees__header-text');
const contacts = document.querySelector('.stella-info__map');
function scrollToElement (e){
    if(!e.target.dataset.scroll) return;
    e.preventDefault()
    switch (e.target.dataset.scroll){
        case ('main'):
            document.body.scrollBy({
                top: header.getBoundingClientRect().top,
                behavior: "smooth",
            })
            break;
        case ('product'):
            document.body.scrollBy({
                top: product.getBoundingClientRect().top,
                behavior: "smooth",
            })
            break;
        case ('cases'):
            document.body.scrollBy({
                top: cases.getBoundingClientRect().top,
                behavior: "smooth",
            })
            break;
        case ('team'):
            document.body.scrollBy({
                top: team.getBoundingClientRect().top,
                behavior: "smooth",
            })
            break;
        case ('contacts'):
            document.body.scrollBy({
                top: contacts.getBoundingClientRect().top,
                behavior: "smooth",
            })
            break;
    }
}

header.addEventListener("click", scrollToElement);

footer.addEventListener("click", scrollToElement);
}

export default navScroll;