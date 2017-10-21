/*jslint devel: true */
function toggle(e) {
    "use strict";
	if (e.className == 'closed') {
		e.className = 'open';
	} else {
		e.className = 'closed';
	}
}


$(document).on("change", ".chk", function() {
    var sum = 0;
    $(".chk:checked").each(function() {
        sum += parseInt($(this).val());
    });
    $(".total").val(sum + ' EUR');
});

