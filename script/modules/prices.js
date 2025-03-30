const prices = function(){
    const pricesBlock = document.querySelector('.stella-prices');
    pricesBlock.addEventListener("click", function (e) {
        if(!e.target.dataset.cross) return;
        const existingPrice = document.querySelector('.stella-prices__price-active')
        const pricesCard = e.target.parentNode.parentNode
        const price = e.target.parentNode.nextElementSibling
        const priceActive = e.target.classList.contains('cross-active')
 
        function showPrice (e){
            price.innerHTML = `от <br> ${pricesCard.dataset.price}`
            price.classList.add('stella-prices__price-active')
            e.target.classList.add('cross-active')
        }

        function hidePrice (){
            if (document.querySelector('.cross-active') !== null){
                document.querySelector('.cross-active').classList.remove('cross-active')
                document.querySelector('.stella-prices__price-active').classList.remove('stella-prices__price-active')
            }
        }

        switch (true){
            case (existingPrice && priceActive ):
                hidePrice ();
                break;
            case (!!existingPrice):
                hidePrice ();
                showPrice (e) ;
                break;
            case (!existingPrice):
                showPrice (e);
                break;
        }
  });
}

export default prices;