
var currentTab = '';

document.getElementById('feature').addEventListener('click', function() {
	$('.nav-tabs a[href="#menu1"]').tab('show')
});

function resetFeatureIframeHeight() {
	let height = document.documentElement.clientHeight - $('#featureiframe').offset().top - 20;
	$('#featureiframe').height(height);
}

$('.nav-tabs a[href="#menu1"]').on('shown.bs.tab', function(event){
	resetFeatureIframeHeight();
});

$(window).resize(function () {
	if(currentTab === 'Feature to JSON')
		resetFeatureIframeHeight();
});

$('.nav-tabs a').on('shown.bs.tab', function(event){
  currentTab = $(event.target).text();         // active tab
});