

//notification count
const notificationCount = document.querySelector('.notifications')

//mark all as read
const markAll = document.querySelector('.mark_all');

const red_dot = [...document.querySelectorAll('.red_dot')];

const notificationDisplay = document.querySelectorAll('.top_three .figure');

let content = [...document.querySelectorAll('.content_link')];

//read notification
notificationDisplay.forEach((item, i) => {
    
    item.addEventListener('click', (e)=> {
        e.preventDefault();
        item.classList.add('none')
        content[i].style.color = 'var(--dark-grayish-blue)';

        red_dot[i].style.display = 'none';

        
        if (notificationCount.innerText != 0) {
            notificationCount.innerText--;
        }
    } )
})


//mark all as read
markAll.addEventListener ('click', (e) => {
    notificationDisplay.forEach((item, i) => {

        item.classList.add('none')
        content[i].style.color = 'var(--dark-grayish-blue)';

        red_dot[i].style.display = 'none';
        item.classList.add('none')
        content[i].style.color = 'var(--dark-grayish-blue)';

        red_dot[i].style.display = 'none';

        notificationCount.innerText = 0;
    })
})