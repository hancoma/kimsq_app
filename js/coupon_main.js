function main_menu() {
	var category=no;
	$.post("http://kimsqapp.kimsq.co.kr/main_menu.php",
	{
		
	},function(data) {
		$("#main_menu").html(data);
	});
}



// 더보기 파일 

 
