console.log(window.outerWidth);//显示窗口宽度

$(document).ready(function(){

	$("#search_submit").mouseenter(function(){
		$("#search_submit").css("background-image","url('image/search_ico_on.png')")
	});
	$("#search_submit").mouseout(function(){
		$("#search_submit").css("background-image","url('image/search_ico_out.png')")
	});

	$("#introduce").mouseenter(function(){
		$("#introduce").text("著名漫画家自久保带人烂尾之作")
	});
	$("#introduce").mouseout(function(){
		$("#introduce").text("故事的主角黑崎一护是个看似暴力、单薄，实质上善良、勇敢、爱护家庭的少年，并且拥有能看见灵的体质。家里有一个开诊所的老爸和两个性格正常的妹妹夏梨和游子，一护每天七点必须按时回家,否则老爸便会使用“身体语言教训”的家规。吵闹的父子，懂事的妹妹以及与其他普通人并无大异的普通生活，直到女死神朽木露琪亚被他一脚踢到墙角并满脸惊疑地望着他问“你能看见我？”时漫画的序幕才这样被正式地揭开。 从此黑崎一护身边所有的事物都产生了翻天覆地的变化。")
	});

});