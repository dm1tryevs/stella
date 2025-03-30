const employees = function () {
    const empl = [
        {
            id: 'ceo',
            name: "Алекснадр Корнев",
            pos: 'Руководитель <br> юридического <br> отдела',
            text: " Главный юрист, эксперт в области корпоративного права. 15 лет курировал правовые вопросы в компаниях федерального значения.Возглавлял юридическую службу международной компании ПАО «Метафракс», реализовал несколько амбициозных проектов, в том числе международных.<span>Гарантирует реалистическую оценку перспективам дела и защитувашего бизнеса</span>",
            src: "./src/img/empl/kornev.jpg"
        },

        {
            id: '1',
            name: "Андрей Новиков",
            pos: 'Лучший <br> тим <br> лид',
            text: "За 7 лет работы в юридической компании Андрей успешно сопроводил более 20 сделок M&A, включая сделки на сумму свыше $5 млн. Разработал систему договорной работы для клиента из ритейла, сократив судебные споры на 40%. Эксперт в налоговом планировании и due diligence. <span>Клиенты ценят его за практичный подход и умение находить нестандартные решения.</span>",
            src: "./src/img/empl/andr.jpg"
        },

        {
            id: '2',
            name: "Илья Канатников",
            pos: 'Мастер <br> по <br> расходам',
            text: "За 5 лет практики Илья выиграл более 30 трудовых споров, включая дела о незаконных увольнениях и взыскании компенсаций. Разработал систему кадрового документооборота для IT-компании, что помогло избежать штрафов при проверках. Его кейсы включают дела против крупных корпораций с успешным восстановлением сотрудников в должности. <span>Клиенты отмечают его настойчивость и глубокое знание судебной практики.</span>",
            src: "./src/img/empl/kanat.jpg"
        },

        {
            id: '3',
            name: "Степан Канатников",
            pos: 'Главный <br> балабол <br> России',
            text: "Степа за 8 лет оформил более 50 сложных сделок с коммерческой недвижимостью, включая спорные участки и объекты с обременениями. Провел успешный судебный процесс по признанию права собственности на землю, сэкономив клиенту ₽15 млн. Помог строительной компании урегулировать конфликт с администрацией, ускорив получение разрешений.<span> Работает на результат, знает все подводные камни в сделках с недвижимостью.</span>",
            src: "./src/img/empl/step.jpg"
        }
        
    ]

    const empBlock = document.querySelector('.stella-employees');
    const emplPost = document.querySelector('.stella-employees__post')
    const emplName = document.querySelector('.stella-employees__name');
    const emplInfo = document.querySelector('.stella-employees__info')
    const emplImg = document.querySelector('.stella-employees__bigimg')
    empBlock.addEventListener("click", function (e) {
        if(!e.target.closest('LI')) return;
        const employee = e.target.closest('LI')
        let currentEmpl = empl.filter (item => employee.dataset.pos == item.id);
        currentEmpl = currentEmpl[0]
        if(document.querySelector('.item__active') !== null){
            document.querySelector('.item__active').classList.remove('item__active')
            employee.classList.add('item__active')
        }

        emplPost.innerHTML = currentEmpl.pos;
        emplName.innerHTML = currentEmpl.name;
        emplInfo.innerHTML = currentEmpl.text;
        emplImg.src = currentEmpl.src
        
    });
}

export default employees;