$(document).ready(()=>{
	var prefix= "Happy BirthDay to You My";
	var suffix = ["Babu","Shona","Muccchi wali","Sweetu","Rosogolla","Babe","Teddy","Shazadi","Cutu","Jaan","Love",
	"Milki","Sexa","Jannu","Biro"]

	var text = [
	
	"<div>Firstly..</div><div>I miss you too much</div>",
	"<div>I wish you will get a</div><div>Good Job</div><div>As soon as possible</div>",
	"<div>I know </div><div>hum thora jyada react karte hai</div><div> maaf kar diya kijiye</div>",
	"<div>Hmmmm... </div><div>Thora jyada sad v h </div><div>kyuki aap pubg khelte hai </div><div>delete that asap</div>",
	"Want to meet you today",
	"Hug you tightly",
	"<div class='fx'><div class='pic'><div>I love you</div><div style='margin-top:100px'>and Keep smiling</div></div></div>",
	"<div>Be </div><div>with me</div>",
	"<div>I get very sad</div> <div>when you don't msg me</div>",
	"<div>Just want more time </div><div>from you </div><div>everyday</div>",
	"<div>Happy BirthDay </div><div>Love</div>",
	"<div>May god </div><div>blast You </div><div>with lots of laugh</div>",
	"<div>Be</div> <div>Happy and safe</div>",
	"Thank You Babe"
	]

	var tl = text.length;

	var l = suffix.length;
	var string ="";
	for(var i=0;i<1000;i++){
		string += prefix + suffix[i%l]+ " ";
	}
	setTimeout(()=>{
		$('.inner-block').slideDown({duration:500,queue:false})
		$('.next-btn').slideDown({duration:500,queue:false})
	},3000)
	function change(){
		setTimeout(()=>{
			var ran = Math.floor(Math.random()*l);
			$('.suffix').html(suffix[ran]);
			change();
		},200)
	}
	change();
	var curr = -1;
	$('.next-btn').click(()=>{
		curr++;
		$('.content').html(text[curr]);
		if(curr>0){
			$('.previous-btn').fadeIn({duration:100,queue:false})
		}
		if(curr==tl-1){
			$('.next-btn').fadeOut({duration:100,queue:false})
		}
	})
	$('.previous-btn').click(()=>{
		curr--;
		$('.content').html(text[curr]);
		if(curr<tl-1){
			$('.next-btn').fadeIn({duration:100,queue:false})
		}
		if(curr==0){
			$('.previous-btn').fadeOut({duration:100,queue:false})
		}
	})

	$('.outer-block').html(string)
})
