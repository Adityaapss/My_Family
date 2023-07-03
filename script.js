function showDescription(personName) {
    var description = document.getElementById('description-' + personName);
    if (description.style.display === 'none') {
      description.style.display = 'block';
    } else {
      description.style.display = 'none';
    }
  }
  