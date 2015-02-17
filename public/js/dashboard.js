var dischargeEditing = false;

$('#btn-toggle-dischage-edit').on('click', function() {
	dischargeEditing = !dischargeEditing;
	$(this).prevAll('.panel-heading').add($(this).find('.fa')).toggleClass('hidden');
	if( dischargeEditing ) {
		// editing the rate
		text = 'Save Discharge Rate';
	} else {
		// done editing, save dat shizzle
		text = 'Edit Discharge Rate';
	}
	$(this).find('.pull-left').text(text);
	return false;
});