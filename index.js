 document.getElementById('feature').addEventListener('click', function() {
	$('.nav-tabs a[href="#menu1"]').tab('show')
});

$('.nav-tabs a[href="#menu1"]').on('shown.bs.tab', function(event){
	let height = document.documentElement.clientHeight - $('#featureiframe').offset().top - 20;
	$('#featureiframe').height(height);
});