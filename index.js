
var currentTab = '';

// event listener to handle click on feature to json jombotron
document.getElementById('feature').addEventListener('click', function() {
	$('.nav-tabs a[href="#menu1"]').tab('show')
});

// event listener to handle click on ontime tracker jombotron
document.getElementById('ontimetracker').addEventListener('click', function() {
	window.open("https://chrome.google.com/webstore/detail/ontime-tracker/geihfdjjmcldhcdgfipoodbniaepkfai", '_blank');
})

// prevent event propogation on mailto anchor tag
$('#mailto').click(function (e){
	e.stopPropagation();
})

// section to handle click on other projects

const ids = ['pic-extractor', 'jformat', 'date-picker', 'filter-table', 'pyautogui', 'firewall-breaker'];
const links = [
	'https://github.com/aln0071/PicExtractor',
	'https://github.com/aln0071/jformat',
	'https://www.npmjs.com/package/react-lite-datepicker',
	'https://www.npmjs.com/package/react-filter-tables',
	'https://github.com/aln0071/Python-Cisco-Autoconnect',
	'https://github.com/aln0071/File-Stripper'
];

ids.forEach(function (id, index) {
	$('#'+id).click(function () {
		window.open(links[index], '_blank');
	})
})

// end of click handling section

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