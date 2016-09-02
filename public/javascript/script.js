var elem = document.getElementById('about');
var target = document.getElementById('target');

elem.addEventListener('mouseover', function() {
  target.style.visibility = 'visible';
})

elem.addEventListener('mouseout', function() {
  target.style.visibility = 'hidden';
})
