/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;

    const data = {
        name: name,
        email: email,
        comment: comment
    };

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        access_key: '3b42b856-2470-4b14-9292-ce3449888998',
        ...data
        })
    })
    .then(response => {
        if (response.ok) {
            alert('Form submitted successfully!');
        } else {
            alert('There was an error submitting the form.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
    });
}