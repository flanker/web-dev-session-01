$(function () {
  $('.delete').click(function (e) {
    e.preventDefault();
    if (confirm('Do you want to delete your listing?')) {
      alert('Deleting');
    }
  });
});