
function sendResetLink() {
   
    const email = document.getElementById('email').value.trim();

    
    if (!email) {
        alert('Veuillez entrer une adresse e-mail valide.');
        return;
    }

    
    fetch('http://127.0.0.1:5000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ email: email }) 
    })
    .then((response) => response.json()) 
    .then((data) => {
        
        alert(data.message);
    })
    .catch(() => {
        
        alert('Une erreur est survenue. Réessayez plus tard.');
    });
}
