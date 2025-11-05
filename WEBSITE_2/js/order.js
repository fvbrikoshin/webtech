document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('UserEnter');
  const sender = document.getElementById('send');
  const checker = document.querySelector('input[type="checkbox"]');
  sender.addEventListener('click', function() {
    if (!checker.checked) {
      alert('ОШИБКА! Примите условия пользовательского соглашения.');
      return;
    }

    const params = new URLSearchParams();
    const formData = new FormData(form);

    formData.forEach((value, key) => {
      if (key) {
        params.append(key, value);
      }
    });

    const bingUrl = form.getAttribute('action');
    const fullUrl = `${bingUrl}${params.toString()}`;

    window.open(fullUrl, '_blank');
  });
});