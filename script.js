

$(function() {
	$( "#PINform" )();
});

$( "#PINcode" ).html(
	"<form action='' method='' name='PINform' id='PINform' autocomplete='off' draggable='true'>" +
		"<input id='PINbox' type='number' value='' name='PINbox' disabled />" +
		"<br/>" +
		"<input type='button' class='PINbutton' name='1' value='1' id='1' onClick=addNumber(this); />" +
		"<input type='button' class='PINbutton' name='2' value='2' id='2' onClick=addNumber(this); />" +
		"<input type='button' class='PINbutton' name='3' value='3' id='3' onClick=addNumber(this); />" +
		"<br>" +
		"<input type='button' class='PINbutton' name='4' value='4' id='4' onClick=addNumber(this); />" +
		"<input type='button' class='PINbutton' name='5' value='5' id='5' onClick=addNumber(this); />" +
		"<input type='button' class='PINbutton' name='6' value='6' id='6' onClick=addNumber(this); />" +
		"<br>" +
		"<input type='button' class='PINbutton' name='7' value='7' id='7' onClick=addNumber(this); />" +
		"<input type='button' class='PINbutton' name='8' value='8' id='8' onClick=addNumber(this); />" +
		"<input type='button' class='PINbutton' name='9' value='9' id='9' onClick=addNumber(this); />" +
		"<br>" +
		"<input type='button' class='PINbutton clear' name='-' value='clear' id='-' onClick=clearForm(this); />" +
		"<input type='button' class='PINbutton' name='0' value='0' id='0' onClick=addNumber(this); />" +
		"<input type='button' class='PINbutton enter' name='+' value='enter' id='+' onClick=submitForm(PINbox); />" +
	"</form>"
);

function addNumber(e){
	//document.getElementById('PINbox').value = document.getElementById('PINbox').value+element.value;
	var v = $( "#PINbox" ).val();
	$( "#PINbox" ).val( v + e.value );
}
function clearForm(e){
	//document.getElementById('PINbox').value = "";
	$( "#PINbox" ).val( "" );
}
function submitForm(e) {
	if (e.value == "") {
		alert("Enter a PIN");
	} else {
		var hari_ini= new Date()
		var tahun = hari_ini.getFullYear()
		var bulan = ('0'+(hari_ini.getMonth()+1)).slice(-2)
		var tanggal = ('0'+(hari_ini.getDate()+1)).slice(-2)
		var jam = ('0'+(hari_ini.getHours())).slice(-2)
		var menit = ('0'+(hari_ini.getMinutes())).slice(-2)
		var detik = ('0'+(hari_ini.getSeconds())).slice(-2)
		alert( "No. Dada : " + e.value +" Waktu : "+jam+":"+menit+":"+detik);
		data = {
			pin: e.value
		}
		/*		
		apiCall( data, function( r ) {
			$( "#logo" ).attr( "src", r.site_logo );
			$( ".title-msg" ).text( r.site_msg );
			accent = r.accent;
			$( ".accent-bg" ).css( "background-color", accent );
		});
		*/
		
		//document.getElementById('PINbox').value = "";
		$( "#PINbox" ).val( "" );
	};
};

/*
function apiCall( post, callback ) {	
	$.ajax({
		type: "POST",
		contentType: "application/json",
		url: "admin/api.php",
		data: JSON.stringify( post ),
		dataType: "json",
		success: function ( r ) {
			callback( r );
		},
		error: function ( response ) {
			console.log( response )
		},
	});
}
*/