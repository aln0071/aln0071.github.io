// document.getElementById('feature').addEventListener('click', function() {
// 	document.getElementById('featurelink').click();
// 	let height = document.documentElement.clientHeight - $('#featureiframe').offset().top - 20;
// 	$('#featureiframe').height(height);
// })

 document.getElementById('feature').addEventListener('click', function() {
	document.getElementById('featurelink').click();
});

$('.nav-tabs a[href="#menu1"]').on('shown.bs.tab', function(event){
	let height = document.documentElement.clientHeight - $('#featureiframe').offset().top - 20;
	$('#featureiframe').height(height);
});