if (window.innerWidth <= 640) {
	$('.needBlock').addClass('oneBlock');
	$('.needCenter').addClass('recenter');
	$('.needPadtop').addClass('Padtop');
	$('.needPadtopsome').addClass('Padtopsome');
	$('.needPad').addClass('Pad');
	$('.needparaTitle').addClass('paraTitle');
	$('.needPadbottom').addClass('Padbottom');
	$('.needright').addClass('right');
	$('.littletop').addClass('notop');
	$('.mobileM').css('display', 'block');
	$('.desktopM').css('display', 'none');
	$('.needUsheader').addClass('Usheader');
	$('.USmobo').addClass('USINTERmobo');
	$('.formheader').css('height', '490px');
	$('.mediumHeader').css('height', '450px');
	$('.tinyHeader').css('height', '290px');
	$('.downheader').css('height', '510px');
	$('.mobomore').css('height', '450px');
	$('.aerHeader').css('height', '260px');
	$('.showabsnotop').addClass('absnotop');
	$('.moboPbottom').addClass('moboPbottomNo');
	$('.Frieghtheader').css('height', '380px');
	$('.needpackageFirstBlock').addClass('packageFirstBlock');
} else {
	$('.needBlock').removeClass('oneBlock');
	$('.needCenter').removeClass('recenter');
	$('.needPadtop').removeClass('Padtop');
	$('.needPadtopsome').removeClass('Padtopsome');
	$('.needPad').removeClass('Pad');
	$('.needparaTitle').removeClass('paraTitle');
	$('.needPadbottom').removeClass('Padbottom');
	$('.needright').removeClass('right');
	$('.mobileM').css('display', 'none');
	$('.desktopM').css('display', 'block');
	$('.needUsheader').removeClass('Usheader');
	$('.USmobo').removeClass('USINTERmobo');
	$('.littletop').removeClass('notop');
	$('.formheader').css('height', '420px');
	$('.mediumHeader').css('height', '380px');
	$('.tinyHeader').css('height', '330px');
	$('.downheader').css('height', '380px');
	$('.showabsnotop').removeClass('absnotop');
	$('.moboPbottom').removeClass('moboPbottomNo');
	$('.needpackageFirstBlock').removeClass('packageFirstBlock');
}

function openDay(DayName) {
    var i;
    var x = document.getElementsByClassName("day");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
	console.log('dayname is:' + DayName)
    $(DayName).css('display', 'block'); 
	console.log('works')
}

$('.opencell').on('click', function() {
	console.log('clicked');
	$('.opencell').addClass('borderActive');
	$(this).removeClass('borderActive');
});