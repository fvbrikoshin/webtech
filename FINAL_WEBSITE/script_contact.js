document.addEventListener('DOMContentLoaded', () => {

    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', function (event) {

        event.preventDefault();

        const baseUrl = this.action;

        const formData = new FormData(this);

        const searchParams = new URLSearchParams(formData).toString();

        const finalUrl = `${baseUrl}${searchParams}`;

        window.location.href = finalUrl;
    });
});
