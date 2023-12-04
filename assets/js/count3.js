window.addEventListener('load', function() {
	var curtain = document.getElementById('curtain');
	var content = document.getElementById('content');
	curtain.classList.add('show-content');
	setTimeout(function() {
		curtain.style.display = 'none';
	}, 1500);
});

function redirectToPage() {
    window.location.href = "https://sreelakshmi2708.github.io/wesat/index.html";
  }