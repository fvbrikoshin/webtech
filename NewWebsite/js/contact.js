document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('UserEnter');
  const sender = document.getElementById('send');
  var dateField = document.getElementById("todayDate");
  var today = new Date();
  var year = today.getFullYear();
  var month = (today.getMonth() + 1).toString().padStart(2, '0');
  var day = today.getDate().toString().padStart(2, '0');
  var formattedDate = year + '-' + month + '-' + day;
  dateField.value = formattedDate;
  sender.addEventListener('click', function(event){
    event.preventDefault();
    
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