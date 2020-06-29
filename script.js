$(document).ready(()=>{
	var prefix= "Happy BirthDay to You My ";
	var suffix = ["Hrishidev","Guru Ji","Biro","Bhai","Devta","Bhaiya Ji","Chote Bhaiya","Bare bhaiya","jaaneman","Developer","Topper","9 GPA wala"]

	var text = ["Bhaiya ji Party kidhar hai????",
	"Mithayi, naan and curry Parcel kar do bhai",
	"Sab Maze me na?",
	"Girlfriend banao bhai..<br> kab tak single baithoge?",
	"Aur batao?<br> Next press kro aur aage padho",
	"Happy Birthday<br>bhai",
	"Wish you will get a<br> Best job",
	"8LPA minimum wala k liye wish kr dete hai jaa tu v kya yaad rakhega",
	"Thora humpe v kripa banaye rakhe<br> guru dev",
	"next page ki screenshot leke bhejo sir kon sa naam aya dekhu",
	`<div>HAPPY BIRTHDAY</div>
	<div class="to">TO</div>
	<div class="you">You</div>
	<div class="suffix">Hrishidev</div>`
	]

	var fa = [
	'<i class="far fa-sad-tear"></i>',
	'<i class="far fa-grin-stars"></i>',
	'<i class="far fa-grin-beam-sweat"></i>',
	'<i class="far fa-grin-tongue-squint"></i>',
	'<i class="far fa-grin-squint-tears"></i>',
	'<i class="far fa-grin-hearts"></i>',
	'<i class="far fa-grin-alt"></i>',
	'<i class="far fa-grin-wink"></i>',
	'<i class="far fa-laugh"></i>',
	'<i class="far fa-grin-squint"></i>',
	'<i class="far fa-birthday-cake"></i>'
	]
	var tl = text.length;

	var l = suffix.length;
	
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
		$('.want').fadeOut({duration:200,queue:false})
		curr++;
		s = "";
		n = 5;
		while(n--){
			s+=fa[curr];
		}
		$('.content').html(text[curr]+"<div>"+s+"</div>");
		if(curr>0){
			$('.previous-btn').fadeIn({duration:100,queue:false})
		}
		if(curr==tl-1){
			$('.next-btn').fadeOut({duration:100,queue:false})
		}
	})
	$('.previous-btn').click(()=>{
		curr--;
		s = "";
		n = 5;
		while(n--){
			s+=fa[curr];
		}
		$('.content').html(text[curr]+"<div>"+s+"</div>");
		if(curr<tl-1){
			$('.next-btn').fadeIn({duration:100,queue:false})
		}
		if(curr==0){
			$('.previous-btn').fadeOut({duration:100,queue:false})
		}
	})


	function wall() {
		s="";
		for(var i=0;i<16;i++){
			if(i%2==0){
				s+=`<div class="s-brick"></div>`;
				for(var j=0;j<9;j++){
					s+=	`<div class='brick'></div>`
				}
				s+=`<div class="s-brick"></div>`;
			}
			else{
				for(var j=0;j<10;j++){
					s+=	`<div class='brick'></div>`
				}
			}
		}
		$('.wall').html(s)
	}
	wall();
	

	$('.door-btn').click(()=>{
		$('.want').html('I want to say you something ')
		$('.gate').css('left','70%');
		setTimeout(()=>{
			$('.inside-wall').addClass('full-width');
			setTimeout(()=>{
				$('.inner-block').slideDown({duration:500,queue:false})
				setTimeout(()=>{
					$('.want').slideDown({duration:500,queue:false})
					setTimeout(()=>{
						$('.next-btn').slideDown({duration:500,queue:false})
					},0)
				},0)
			},0)
		},0)
	})

	
})