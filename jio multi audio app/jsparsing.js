window.addEventListener("load", function() {
  console.log("jsparsing loaded");
});

//// ------------------------------------------------------------KAIOS PAGE ADDRESSES ------------------------------------------------------------////
//app://687e712a-9b57-4101-9e80-d876aa9076a8/categories.html
//app://687e712a-9b57-4101-9e80-d876aa9076a8/audio_edit(1).html

//12:41:31.427 "app://3ee3ee51-411e-49e7-ab87-49bbf16b4d33/categories.html" 
    
//app://3ee3ee51-411e-49e7-ab87-49bbf16b4d33/categories.html

"use strict";

//// ------------------------------------------------------------GLOBAL LIST DECLARATION------------------------------------------------------------////

	var a= window.location.href;
	console.log(a);
	let cate_names=[];
	let vid_titles=[];
	let vid_temp=[];
	let lst=[];


//// ------------------------------------------------------------FUNCTION TO LOAD PAGES------------------------------------------------------------ ////

function selector(id){
  
		var b=id;
		localStorage.setItem("storage",b);


		if(a == 'categories.html')
			{
				window.location.href='audio_edit(1).html';		
			}

		if(a == 'audio_edit(1).html')
			{
				window.location.href='audio_player.html';		
			}	
		
	}

//// ------------------------------------------------------------HARDCODED JSON------------------------------------------------------------ ////	

/*
	fetch("./android_tv_videos_new.json")
	.then(function(resp) {
		return resp.json();
	})
	.then(function(data){*/

		let jsobj={"googlevideos": [{
    "category": "Google+",
    "videos": [{
      "description": "Jon introduces Instant Upload with a few thoughts on how we remember the things that matter. Check out some ways we've been rethinking real-life sharing for the web at plus.google.com",
      "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Google%2B/Google%2B_%20Instant%20Upload.mp4"],
      "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Google%2B/Google%2B_%20Instant%20Upload/card.jpg",
      "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Google%2B/Google%2B_%20Instant%20Upload/bg.jpg",
      "title": "Instant Upload",
      "studio": "Google+"
    }, {
      "description": "With Google+ Instant Upload, every picture you take on your phone is instantly backed up to a private Google+ album. It's a simple way to make sure you never lose another memory.",
      "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Google%2B/Google%2B_%20New%20Dad.mp4"],
      "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Google%2B/Google%2B_%20New%20Dad/card.jpg",
      "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Google%2B/Google%2B_%20New%20Dad/bg.jpg",
      "title": "New Dad",
      "studio": "Google+"
    }, {
      "description": "Laugh, share news, celebrate, learn something new or stay in touch with Hangouts. And with Hangouts on your phone, you can drop in from wherever you are.",
      "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Google%2B/Google%2B_%20Say%20more%20with%20Hangouts.mp4"],
      "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Google%2B/Google%2B_%20Say%20more%20with%20Hangouts/card.jpg",
      "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Google%2B/Google%2B_%20Say%20more%20with%20Hangouts/bg.jpg",
      "title": "Say more with Hangouts",
      "studio": "Google+"
    }, {
      "description": "Search on Google+ helps you get advice from the people you know -- sometimes when you least expect it. Check out some ways we've been rethinking real-life sharing for the web at plus.google.com.",
      "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Google%2B/Google%2B_%20Search.mp4"],
      "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Google%2B/Google%2B_%20Search/card.jpg",
      "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Google%2B/Google%2B_%20Search/bg.jpg",
      "title": "Google+ Search",
      "studio": "Google+"
    }, {
      "description": "New ways of sharing the right things with the right people. Join at http://google.com/+",
      "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Google%2B/Google%2B_%20Sharing%20but%20like%20real%20life.mp4"],
      "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Google%2B/Google%2B_%20Sharing%20but%20like%20real%20life/card.jpg",
      "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Google%2B/Google%2B_%20Sharing%20but%20like%20real%20life/bg.jpg",
      "title": "Sharing but like real life",
      "studio": "Google+"
    }, {
      "description": "Jed introduces Circles with a few thoughts on the nature of friendship. Check out some ways we've been rethinking real-life sharing for the web at plus.google.com.",
      "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Google%2B/Google%2B_%20Circles.mp4"],
      "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Google%2B/Google%2B_%20Circles/card.jpg",
      "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Google%2B/Google%2B_%20Circles/bg.jpg",
      "title": "Google+ Circles",
      "studio": "Google+"
    }, {
      "description": "Aimee introduces Hangouts with a few thoughts on the spontaneous get-together. Check out some ways we've been rethinking real-life sharing for the web at plus.google.com.",
      "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Google%2B/Google%2B_%20Hangouts.mp4"],
      "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Google%2B/Google%2B_%20Hangouts/card.jpg",
      "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Google%2B/Google%2B_%20Hangouts/bg.jpg",
      "title": "Google+ Hangouts",
      "studio": "Google+"
    }]
  }, {
    "category": "Demo Slam",
    "videos": [{
        "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
        "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%2020ft%20Search.mp4"],
        "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%2020ft%20Search/card.jpg",
        "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%2020ft%20Search/bg.jpg",
        "title": "20ft Search",
        "studio": "Google Demo Slam"
      }, {
        "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
        "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Balcony%20Toss.mp4"],
        "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Balcony%20Toss/card.jpg",
        "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Balcony%20Toss/bg.jpg",
        "title": "Balcony Toss",
        "studio": "Google Demo Slam"
      }, {
        "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
        "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Dance%20Search.mp4"],
        "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Dance%20Search/card.jpg",
        "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Dance%20Search/bg.jpg",
        "title": "Dance Search",
        "studio": "Google Demo Slam"
      }, {
        "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
        "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Epic%20Docs%20Animation.mp4"],
        "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Epic%20Docs%20Animation/card.jpg",
        "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Epic%20Docs%20Animation/bg.jpg",
        "title": "Epic Docs Animation",
        "studio": "Google Demo Slam"
      }, {
        "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
        "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Extra%20Spicy.mp4"],
        "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Extra%20Spicy/card.jpg",
        "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Extra%20Spicy/bg.jpg",
        "title": "Extra Spicy",
        "studio": "Google Demo Slam"
      }, {
        "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
        "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Get%20Your%20Money's%20Worth.mp4"],
        "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Get%20Your%20Money's%20Worth/card.jpg",
        "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Get%20Your%20Money's%20Worth/bg.jpg",
        "title": "Get Your Money's Worth",
        "studio": "Google Demo Slam"
      }, {
        "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
        "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Guitar%20Search.mp4"],
        "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Guitar%20Search/card.jpg",
        "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Guitar%20Search/bg.jpg",
        "title": "Guitar Search",
        "studio": "Google Demo Slam"
      }, {
        "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
        "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Hangin'%20with%20the%20Google%20Search%20Bar.mp4"],
        "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Hangin'%20with%20the%20Google%20Search%20Bar/card.jpg",
        "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Hangin'%20with%20the%20Google%20Search%20Bar/bg.jpg",
        "title": "Hangin' with the Google Search Bar",
        "studio": "Google Demo Slam"
      }, {
        "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
        "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Hometown%20Caroling.mp4"],
        "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Hometown%20Caroling/card.jpg",
        "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Hometown%20Caroling/bg.jpg",
        "title": "Hometown Caroling",
        "studio": "Google Demo Slam"
      }, {
        "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
        "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Instant%20Music.mp4"],
        "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Instant%20Music/card.jpg",
        "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Instant%20Music/bg.jpg",
        "title": "Instant Music",
        "studio": "Google Demo Slam"
      }, {
        "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
        "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Pep%20Talk.mp4"],
        "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Pep%20Talk/card.jpg",
        "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Pep%20Talk/bg.jpg",
        "title": "Pep Talk",
        "studio": "Google Demo Slam"
      }, {
        "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
        "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Realtime%20Karaoke.mp4"],
        "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Realtime%20Karaoke/card.jpg",
        "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Realtime%20Karaoke/bg.jpg",
        "title": "Realtime Karaoke",
        "studio": "Google Demo Slam"
      }, {
        "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
        "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Revis%20posterizes%20Stoudemire.mp4"],
        "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Revis%20posterizes%20Stoudemire/card.jpg",
        "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Revis%20posterizes%20Stoudemire/bg.jpg",
        "title": "Revis posterizes Stoudemire",
        "studio": "Google Demo Slam"
      }, {
        "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
        "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Route%2066.mp4"],
        "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Route%2066/card.jpg",
        "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Route%2066/bg.jpg",
        "title": "Route 66",
        "studio": "Google Demo Slam"
      }, {
        "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
        "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Rushmore.mp4"],
        "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Rushmore/card.jpg",
        "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Rushmore/bg.jpg",
        "title": "Rushmore",
        "studio": "Google Demo Slam"
      }, {
        "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
        "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Shopping%20Cart.mp4"],
        "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Shopping%20Cart/card.jpg",
        "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Shopping%20Cart/bg.jpg",
        "title": "Shopping Cart",
        "studio": "Google Demo Slam"
      }, {
        "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
        "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Stealing%20the%20Logo.mp4"],
        "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Stealing%20the%20Logo/card.jpg",
        "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Stealing%20the%20Logo/bg.jpg",
        "title": "Stealing the Logo",
        "studio": "Google Demo Slam"
      }, {
        "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
        "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Stoudemire%20slams%20Revis.mp4"],
        "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Stoudemire%20slams%20Revis/card.jpg",
        "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Stoudemire%20slams%20Revis/bg.jpg",
        "title": "Stoudemire slams Revis",
        "studio": "Google Demo Slam"
      }, {
        "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
        "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Streetview%20Road%20Race.mp4"],
        "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Streetview%20Road%20Race/card.jpg",
        "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Streetview%20Road%20Race/bg.jpg",
        "title": "Streetview Road Race",
        "studio": "Google Demo Slam"
      }, {
        "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
        "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Thanksgiving%20Goggles.mp4"],
        "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Thanksgiving%20Goggles/card.jpg",
        "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Thanksgiving%20Goggles/bg.jpg",
        "title": "Thanksgiving Goggles",
        "studio": "Google Demo Slam"
      }, {
        "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
        "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Video%20Chat%20Magic.mp4"],
        "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Video%20Chat%20Magic/card.jpg",
        "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Demo%20Slam/Google%20Demo%20Slam_%20Video%20Chat%20Magic/bg.jpg",
        "title": "Video Chat Magic",
        "studio": "Google Demo Slam"
      }
    ]
  }, {
    "category": "Gone Google",
    "videos": [{
      "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
      "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Gone%20Google/Go%20Google_%20Google%20Drive.mp4"],
      "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Gone%20Google/Go%20Google_%20Google%20Drive/card.jpg",
      "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Gone%20Google/Go%20Google_%20Google%20Drive/bg.jpg",
      "title": "Google Drive has Gone Google",
      "studio": "Gone Google"
    }, {
      "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
      "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Gone%20Google/Go%20Google_%20Hall%20and%20Oates.mp4"],
      "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Gone%20Google/Go%20Google_%20Hall%20and%20Oates/card.jpg",
      "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Gone%20Google/Go%20Google_%20Hall%20and%20Oates/bg.jpg",
      "title": "Hall and Oates has Gone Google",
      "studio": "Gone Google"
    }, {
      "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
      "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Gone%20Google/Pt%20England%20School%20has%20Gone%20Google.mp4"],
      "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Gone%20Google/Pt%20England%20School%20has%20Gone%20Google/card.jpg",
      "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Gone%20Google/Pt%20England%20School%20has%20Gone%20Google/bg.jpg",
      "title": "Pt England School has Gone Google",
      "studio": "Gone Google"
    }, {
      "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
      "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Gone%20Google/Work%20has%20gone%20Google.mp4"],
      "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Gone%20Google/Work%20has%20gone%20Google/card.jpg",
      "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Gone%20Google/Work%20has%20gone%20Google/bg.jpg",
      "title": "Work has Gone Google",
      "studio": "Gone Google"
    }]
  }, {
    "category": "Zeitgeist",
    "videos": [{
      "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
      "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Zeitgeist/Google%20Zeitgeist%20-%202013%20in%20Searches.mp4"],
      "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Zeitgeist/Google%20Zeitgeist%20-%202013%20in%20Searches/card.jpg",
      "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Zeitgeist/Google%20Zeitgeist%20-%202013%20in%20Searches/bg.jpg",
      "title": "2013 in Searches",
      "studio": "Google Zeitgeist"
    }, {
      "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
      "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Zeitgeist/Zeitgeist%202010_%20Year%20in%20Review.mp4"],
      "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Zeitgeist/Zeitgeist%202010_%20Year%20in%20Review/card.jpg",
      "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Zeitgeist/Zeitgeist%202010_%20Year%20in%20Review/bg.jpg",
      "title": "Year In Review - 2010",
      "studio": "Google Zeitgeist"
    }, {
      "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
      "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Zeitgeist/Zeitgeist%202011_%20Year%20In%20Review.mp4"],
      "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Zeitgeist/Zeitgeist%202011_%20Year%20In%20Review/card.jpg",
      "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Zeitgeist/Zeitgeist%202011_%20Year%20In%20Review/bg.jpg",
      "title": "Year In Review - 2011",
      "studio": "Google Zeitgeist"
    }, {
      "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
      "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Zeitgeist/Zeitgeist%202012_%20Year%20In%20Review.mp4"],
      "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Zeitgeist/Zeitgeist%202012_%20Year%20In%20Review/card.jpg",
      "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Zeitgeist/Zeitgeist%202012_%20Year%20In%20Review/bg.jpg",
      "title": "Year In Review - 2012",
      "studio": "Google Zeitgeist"
    }, {
      "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
      "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/Zeitgeist/Google%20Zeitgeist%20_%20Here's%20to%202013.mp4"],
      "card": "https://storage.googleapis.com/android-tv/Sample%20videos/Zeitgeist/Google%20Zeitgeist%20_%20Here's%20to%202013/card.jpg",
      "background": "https://storage.googleapis.com/android-tv/Sample%20videos/Zeitgeist/Google%20Zeitgeist%20_%20Here's%20to%202013/bg.jpg",
      "title": "Here's to 2013",
      "studio": "Google Zeitgeist"
    }]
  }, {
    "category": "April Fool's 2013",
    "videos": [{
      "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
      "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/April%20Fool's%202013/Explore%20Treasure%20Mode%20with%20Google%20Maps.mp4"],
      "card": "https://storage.googleapis.com/android-tv/Sample%20videos/April%20Fool's%202013/Explore%20Treasure%20Mode%20with%20Google%20Maps/card.jpg",
      "background": "https://storage.googleapis.com/android-tv/Sample%20videos/April%20Fool's%202013/Explore%20Treasure%20Mode%20with%20Google%20Maps/bg.jpg",
      "title": "Explore Treasure Mode with Google Maps",
      "studio": "Google"
    }, {
      "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
      "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/April%20Fool's%202013/Introducing%20Gmail%20Blue.mp4"],
      "card": "https://storage.googleapis.com/android-tv/Sample%20videos/April%20Fool's%202013/Introducing%20Gmail%20Blue/card.jpg",
      "background": "https://storage.googleapis.com/android-tv/Sample%20videos/April%20Fool's%202013/Introducing%20Gmail%20Blue/bg.jpg",
      "title": "Introducing Gmail Blue",
      "studio": "Google"
    }, {
      "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
      "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/April%20Fool's%202013/Introducing%20Google%20Fiber%20to%20the%20Pole.mp4"],
      "card": "https://storage.googleapis.com/android-tv/Sample%20videos/April%20Fool's%202013/Introducing%20Google%20Fiber%20to%20the%20Pole/card.jpg",
      "background": "https://storage.googleapis.com/android-tv/Sample%20videos/April%20Fool's%202013/Introducing%20Google%20Fiber%20to%20the%20Pole/bg.jpg",
      "title": "Introducing Google Fiber to the Pole",
      "studio": "Google"
    }, {
      "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
      "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/April%20Fool's%202013/Introducing%20Google%20Nose.mp4"],
      "card": "https://storage.googleapis.com/android-tv/Sample%20videos/April%20Fool's%202013/Introducing%20Google%20Nose/card.jpg",
      "background": "https://storage.googleapis.com/android-tv/Sample%20videos/April%20Fool's%202013/Introducing%20Google%20Nose/bg.jpg",
      "title": "Introducing Google Nose",
      "studio": "Google"
    }, {
      "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
      "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/April%20Fool's%202013/YouTube's%20ready%20to%20select%20a%20winner.mp4"],
      "card": "https://storage.googleapis.com/android-tv/Sample%20videos/April%20Fool's%202013/YouTube's%20ready%20to%20select%20a%20winner/card.jpg",
      "background": "https://storage.googleapis.com/android-tv/Sample%20videos/April%20Fool's%202013/YouTube's%20ready%20to%20select%20a%20winner/bg.jpg",
      "title": "YouTube's ready to select a winner",
      "studio": "Google"
    }, {
      "description": "Fusce id nisi turpis. Praesent viverra bibendum semper. Donec tristique, orci sed semper lacinia, quam erat rhoncus massa, non congue tellus est quis tellus. Sed mollis orci venenatis quam scelerisque accumsan. Curabitur a massa sit amet mi accumsan mollis sed et magna. Vivamus sed aliquam risus. Nulla eget dolor in elit facilisis mattis. Ut aliquet luctus lacus. Phasellus nec commodo erat. Praesent tempus id lectus ac scelerisque. Maecenas pretium cursus lectus id volutpat.",
      "sources": ["https://storage.googleapis.com/android-tv/Sample%20videos/April%20Fool's%202013/Levity%20Algorithm.mp4"],
      "card": "https://storage.googleapis.com/android-tv/Sample%20videos/April%20Fool's%202013/Levity%20Algorithm/card.jpg",
      "background": "https://storage.googleapis.com/android-tv/Sample%20videos/April%20Fool's%202013/Levity%20Algorithm/bg.jpg",
      "title": "Levity Algorithm",
      "studio": "Google"
    }]
  }]  //json data
};

//// ------------------------------------------------------------EXTRACTING DATA FROM JSON------------------------------------------------------------ ////
let data= jsobj;

			var bc=10;
		let obj= data.googlevideos;

			for(let i=0; i<data.googlevideos.length; i++)
			{
				cate_names.push(data.googlevideos[i].category);
			} 

			for(let j=0;j<data.googlevideos.length;j++)
			{
				vid_temp.length=0;
				lst.push(data.googlevideos[j].videos.length);
				for(let i=0; i<data.googlevideos[j].videos.length; i++)
				{
					
					vid_temp.push(data.googlevideos[j].videos[i].title);
				} 
				
				vid_titles.push(j+2);
			
				for(let k=0;k<vid_temp.length;k++)
				{
					vid_titles.push(vid_temp[k]);
				}
				
			}
		


			console.log(lst);
			console.log(window.location.href);

//// ------------------------------------------------------------PRINTING BUTTONS------------------------------------------------------------////      
			
if(window.location.href == 'categories.html')
			{
				obj=document.getElementById("cont");

				for(let i =0 ; i<cate_names.length;i++)
				{	
					obj.innerHTML += "<button class=\"c1\" id=\""+(i+2)+"\" tabindex=\""+(i+2)+"\" onClick=\"selector(this.id)\" ><h6>"+ cate_names[i]+"</h6></button>";
				}

				document.getElementById("1").focus();
			}

			if(a == 'audio_edit(1).html')
			{
				var id=localStorage.getItem("storage");
				console.log(id + " of button clicked");
				var j=2;
				for(let i =vid_titles.indexOf(parseInt(id))+1 ; i<vid_titles.indexOf(parseInt(id))+1+ lst[parseInt(id)-3];i++)
				{	
					document.getElementById("cont1").innerHTML += "<button class=\"c1\" id=\""+(j)+"\" tabindex=\""+(j)+"\" onClick=\"selector(this.id)\" ><h6>"+ vid_titles[i]+"</h6></button>"; 
					j=j+1;
				}		

				document.getElementById("1").focus();			
			}

//// ------------------------------------------------------------SEARCH FUNCTION------------------------------------------------------------ //////

  /*
  function myFunction()
  {
    input = document.getElementById("1");
    filter = input.value.toUpperCase();
    link=window.location.href;
    if(link=="/audio_edit(1).html")
    {
      divi = document.getElementById("cont1");
    }
    else
    {
      divi = document.getElementById("cont");
    }
    btn = divi.getElementsByTagName("button");


    ////  ---- EVENT LISTENER ----////
    document.addEventListener('keydown', (event) =>    
    {
      const keyName = event.key;

      if(keyName=="Backspace")                                            ////------------CONDITION 1
      {
        event.preventDefault();

        if(filter=="")
        {
          for(let i=0;i<btn.length;i++)
          {
            btn[i].style.display="none";
            btn[i].className="temp";

          }
          for(let i=0;i<4;i++)
          {
            btn[i].style.display="";
            btn[i].className="c1";
          }        
        }
        else
        {
          for(let i=0;i<btn.length;i++)
          {
            btn[i].style.display="none";
            btn[i].className="temp";

          } 
          var j=2;
          
          for(i=0;i<btn.length;i++)
          {
            if(input)
            {
              txtValue = btn[i].textContent || btn[i].innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) 
              {
                btn[i].style.display = "";
              } 
              else
              {
                btn[i].style.display = "none";
                btn[i].style.className = "temp";
              }
            }     
          }      
        }         
      }
      else if(event.key=="ArrowUp" || event.key=="ArrowDown")        ////------------CONDITION 2
      {
        if(input=="")
        {
          console.log("Cursoring part1");
        }                       
      }
      else                                                           ////------------CONDITION 3
      {
        var j=2;
        btn = divi.getElementsByTagName("button");
        for(i=0;i<btn.length;i++)
        {
         if(input)
         {
            txtValue = btn[i].textContent || btn[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) 
            {
              btn[i].style.display = "";
            } 
            else
            {
              btn[i].style.display = "none";
              btn[i].style.className = "temp";
            }
          }
        }
      }
    }, false);

    ////-------EVENT LISTENER---------////
  }

  */