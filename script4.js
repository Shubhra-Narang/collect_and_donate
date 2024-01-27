const scriptURL = 'https://script.google.com/macros/s/AKfycbxxl46SmXqhtc0nqVY5tR0SypqWym58ciATtrEjVYb8VSXQpcEeO8Dqha32lupBHnu3CQ/exec'
			const form = document.forms['DONOR-DETAILS']
		  
			form.addEventListener('submit', e => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
				.then(response => alert("Thank you! your form is submitted successfully. We'll be soon contacting you" ))
				.then(() => {  window.location.reload(); })
				.catch(error => console.error('Error!', error.message))
			})
