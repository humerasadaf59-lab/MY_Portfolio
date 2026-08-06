if (document.getElementById('subscribeform')) {
    document.getElementById('subscribeform').addEventListener('submit', function(e) {
        e.preventDefault();
        
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new FormData(this)
        })
        .then(() => {
            document.getElementById('subscribeform').style.display = 'none';
            document.getElementById('successMessage').style.display = 'block';
        })
        .catch(error => console.error('Error:', error));
    });
}

console.log('Portfolio loaded! Forms connected to Netlify.');
