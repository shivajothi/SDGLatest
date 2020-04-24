var sdg = sdg || {};

(function(app){
    let events = document.getElementById('events');
    let status = document.getElementById('status');

    let signupBtn = document.getElementById('signUp');
    app.init = function() {
        if(page === 'home') 
        {
            enroll();
        }
        else {
            signup();
        }
            
           

    }   

    function enroll() {
        events.addEventListener('click',function(e){
           window.location.href = './enroll.html'
        });
    }

    function signup(event) {
        signupBtn.addEventListener('click',function(e){
            e.preventDefault();
            updateStatus();
        });
    }

    function updateStatus() {
            status.style.display = 'block';
    }
    app.init();

})(sdg);