function hcant(i, data, status, response) {
  if (status === "success") {
    data.forEach(function(c) {
      var elem = $('<option>'+c.name+'</option>')
        .data('cant-id', c.id);
      $('select').append(elem);
    });
    
    var n = response.getResponseHeader('x-total-pages');
    if (i <= n)
	    $('.progress-bar').css('width', (i/n*100)+"%");
  }

	// more to go
  if (i == 0 || i < n) {
    $.ajax({
      url: '//openmensa.org/api/v2/canteens/',
      params: {page: (i+1)},
      success: function(data, status, response) { 
      	hcant(i+1, data, status, response); 
      }
    });
  }
}

$('select').show().change(function (event) {
	var id = $(this).find('option:selected').data('cant-id');
  $.ajax({
    url: `//openmensa.org/api/v2/canteens/${id}/days/20171115/meals`,
    success: function(data, success, request) {
    	$('ul').empty();
      data.forEach(function (meal) {
        $('ul').append($(`<li>${meal.name}</li>`));
      });
    },
    error: function() {
      $('ul').empty().append($('<li>No data</li>'));
    }
  });
});

// trigger loading
hcant(0);