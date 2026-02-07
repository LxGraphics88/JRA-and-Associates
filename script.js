document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you! George will be in touch with you shortly.");
    this.reset();
});