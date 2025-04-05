const cases = function(){
    const caseBlock = document.querySelector('.stella_case')
   
    const page = document.querySelector('.stella-case__page')

    const caseItems = document.querySelector('.stella-case__items')

    const casseItem = document.querySelectorAll('.stella-case__item')

    const itemsAmount = casseItem.length

    const pageCount = Math.ceil(itemsAmount/4)

    let scroll = 0;

    let currentPage = 1;
    page.innerHTML = 1 + '/' + Math.ceil(itemsAmount/4) 

    caseBlock.addEventListener("click", function (e) {
        if (e.target.closest('A') == null || !e.target.closest('A').dataset.case) return;
        e.preventDefault()
       
        function scrollBack (){
            scroll -= (casseItem[0].clientWidth * 4)
            currentPage == 1 ? currentPage = 1 : --currentPage;
        }

        function scrollForward (){
            scroll += casseItem[0].clientWidth * 4
            if(scroll >= casseItem[0].clientWidth * itemsAmount) scroll = casseItem[0].clientWidth * (itemsAmount - 4)
            if(currentPage < pageCount ){
                currentPage++;
            }
        }
        
        console.log(scroll, casseItem[0].clientWidth *  (itemsAmount - 4));
        switch (e.target.closest('A').dataset.case){
            case 'arrow-forward':
                scrollForward ()
                break;
            case 'arrow-back':
                scrollBack ()
                break;
        }

       /*  if(e.target.closest('A').dataset.case == 'arrow-forward' && currentPage > pageCount){
            scroll = 0;
            currentPage = 1;
        } */

        page.innerHTML = currentPage + '/' + pageCount 
        caseItems.scrollTo({
            left: scroll,
            behavior: "smooth",
        })
    });
}

export default cases;