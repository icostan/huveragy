function mmm(map_id, map_type, cts, cls, $) {
    var countries = jQuery.extend(true, {}, cts)
    var colors = jQuery.extend(true, {}, cls)
	$(map_id).vectorMap({
	    map: map_type,
	    backgroundColor: '#a5bfdd',
	    borderOpacity: 0.25,
	    borderWidth: 1,
	    color: '#f4f3f0',
	    enableZoom: true,
	    hoverColor: '#c9dfaf',
	    hoverOpacity: null,
	    normalizeFunction: 'linear',
	    scaleColors: ['#dc9658', '#d62728'],
	    selectedColor: '#c9dfaf',
	    selectedRegions: null,
	    showTooltip: true,
	    values: countries
	});
	jQuery(map_id).bind('labelShow.jqvmap',
          function(event, label, code)
          {
          var message = label.text();
	      var visits = countries[code];
	      if (visits) {
		      message += ' - visits: ' + visits;
	          label.text(message);
	      }
    });
}
