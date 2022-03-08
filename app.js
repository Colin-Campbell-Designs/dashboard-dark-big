//Nav 
const nav = document.querySelector('.nav')
const navButton = document.querySelector('.nav__closeButton');
const navItem = document.querySelectorAll('.nav__item');
const navIcon = document.querySelectorAll('.nav__icon');

navButton.addEventListener('click', e => {
    e.preventDefault();

    if(nav.classList.contains('close')){
        navOpen();
        } else {
           navClosed()
        }
    })

    
    navItem.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
        
            if(nav.classList.contains('close')){
                navOpen();
                } else {
                   navClosed()
                }
            })
    })
       

function navOpen() {
    nav.classList.remove('close')
        nav.classList.add('open');
        navButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        iconDisappear()
    }

    function navClosed() {
            nav.classList.remove('open')
            nav.classList.add('close');
            navButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
            iconShow()
        }

        function iconDisappear() {
            navIcon.forEach(icon => {
                icon.style.display = 'none';
            })
        }

        function iconShow() {
            navIcon.forEach(icon => {
                icon.style.display = 'block';
            })
        }

        const ctx = document.getElementById('chart1');
            const chart1 = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    layout: {
                        padding: {
                            left: 10,
                            bottom: 120,
                            right: 10
                        } 
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    
                }
});

        