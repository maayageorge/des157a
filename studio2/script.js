(function () {
    "use strict";
    console.log('reading js');

    /* mouseover code*/

      const overlay = document.getElementById('overlay');
      const diatop = document.getElementById('dia-top');
      const hysterictop = document.getElementById('hysteric-top');
      const bloomershorts = document.getElementById('bloomer-shorts');
      const furshorts = document.getElementById('fur-shorts');
      const viv = document.getElementById('viv-necklace');
      const heavn = document.getElementById('heavn-necklace');

    diatop.addEventListener('mouseover', function() {
        // change image source on mouseover
        diatop.src = 'images/dia-alt.JPEG';
    }); 
    diatop.addEventListener('mouseout', function() {
        // change image source back on mouseout
        diatop.src = 'images/dia-top.JPEG';
    });

    hysterictop.addEventListener('mouseover', function() {
        // change image source on mouseover
        hysterictop.src = 'images/hysteric-alt.JPEG';
    }); 
    hysterictop.addEventListener('mouseout', function() {
        // change image source back on mouseout
        hysterictop.src = 'images/hysteric-top.JPEG';
    });

    bloomershorts.addEventListener('mouseover', function() {
        // change image source on mouseover
        bloomershorts.src = 'images/bloomer-alt.JPEG';
    }); 
    bloomershorts.addEventListener('mouseout', function() {
        // change image source back on mouseout
        bloomershorts.src = 'images/bloomer-shorts.JPEG';
    });

    furshorts.addEventListener('mouseover', function() {
        // change image source on mouseover
        furshorts.src = 'images/furshorts-alt.JPEG';
    }); 
    furshorts.addEventListener('mouseout', function() {
        // change image source back on mouseout
        furshorts.src = 'images/fur-shorts.JPEG';
    });

    viv.addEventListener('mouseover', function() {
        // change image source on mouseover
        viv.src = 'images/viv-alt.JPEG';
    }); 
    viv.addEventListener('mouseout', function() {
        // change image source back on mouseout
        viv.src = 'images/viv-necklace.JPEG';
    });

    heavn.addEventListener('mouseover', function() {
        // change image source on mouseover
        heavn.src = 'images/heavn-alt.JPEG';
    }); 
    heavn.addEventListener('mouseout', function() {
        // change image source back on mouseout
        heavn.src = 'images/heavn-necklace.JPEG';
    });
  
    
    /* overlay code*/

    const image = document.querySelector('#pic');
    const item = document.querySelector('#item');
    const itemtext = document.querySelector('#item-text');

    document.querySelector('#dia-top').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className= 'showing';
        image.src = "images/dia-top.JPEG";
        item.innerHTML = "✭ D.I.A T-Shirt ✭";
        itemtext.innerHTML = "This t-shirt is one of my most-worn clothing items. I love it because it’s so comfortable and fits so well. It is from the brand D.I.A which one of my favorite brands. D.I.A specializes in gyaru fashion — gyaru being a Japanese subculture that was popular in the 90s and early 2000s. I draw a lot of inspiration from this subculture when it comes to my personal style. I bought it from Buyee, a proxy service that ships out secondhand clothing internationally from Japan. My favorite features of this t-shirt are the gold grommets in the back and the u-shaped neckline.";
    });


    document.querySelector('#hysteric-top').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className= 'showing';
        image.src = "images/hysteric-top.JPEG";
        item.innerHTML = "⋆｡‧ Hysteric Glamour Top °. ♪";
        itemtext.innerHTML = "I bought this top from Japan as well, and it is from the iconic streetwear brand Hysteric Glamour. I love this brand because they have such cool graphics on their shirts, heavily influenced by elements of American culture from the 1970s as well as punk and new wave. It is reflective of my style because I love to mix cutesy, delicate things with edgy and alternative aesthetics and I love to style this piece in such a way with my white frilly bloomer shorts, stockings, and lace socks.";
    });

    document.querySelector('#bloomer-shorts').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className= 'showing';
        image.src = "images/bloomer-shorts.JPEG";
        item.innerHTML = "⋆ ˚｡ Bloomer Shorts ⋆୨୧˚";
        itemtext.innerHTML = "These bloomers are probably the most versatile piece in my closet. They are perfect because they can be styled in so many different ways and they are very comfortable. I love lace and ruffles and black is my favorite color, so I was ecstatic when I found these online for a good bargain. While bloomers have historically been worn underneath skirts and dresses, nowadays people wear them on their own as shorts which is what I usually do.";
    });

    document.querySelector('#fur-shorts').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className= 'showing';
        image.src = "images/fur-shorts.JPEG";
        item.innerHTML = "˚ ༘ ⋆ Fur-trimmed Shorts ૮ • ﻌ - ა";
        itemtext.innerHTML = "These fur-trimmed shorts were hand-sewn by me over the summer. It was my first ever sewing project, and I had a lot of fun doing it! I made it with my roommate who taught me. I was inspired by gyaru-slyle fur shorts. I was initially going to buy a pair, but all the ones I saw online were extremely overpriced so I decided to make them myself. I have made some more fur-trimmed shorts and skirts since but this one is my favorite out of all of them.";
    });

    document.querySelector('#viv-necklace').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className= 'showing';
        image.src = "images/viv-necklace.JPEG";
        item.innerHTML = "₊‧°𐐪 3D Orb Necklace 𐑂°‧₊";
        itemtext.innerHTML = "This 3D orb necklace is from the late Vivienne Westwood, one of my favorite fashion designers. Her orb is an iconic symbol of her legacy, seen across many of her garments and jewelry. The star details embellishing the orb pendant, coupled with the bright colors and the distinctive box chain of the necklace make it such a unique piece.";
    });

    document.querySelector('#heavn-necklace').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className= 'showing';
        image.src = "images/heavn-necklace.JPEG";
        item.innerHTML = "‧₊˚ Hydnellum Necklace ⋆｡𖦹";
        itemtext.innerHTML = "This is the Hydnellum Necklace from the brand Heaven by Marc Jacobs. I got it when I went to LA and visited the Heaven store. I like this necklace because it looks like fungi or organic matter of some sort (hence the name). It is definitely a statement piece, and I don’t wear it that often because it is more difficult to style, however I still love it because it’s so unique. I adore all the little details like the crystal accents and the heart-shaped fastener.";
    });

    document.querySelector('.close').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('#overlay').className= 'hidden';
    });

    document.addEventListener('keydown',function(event){
        if(event.key === 'Escape'){
            document.querySelector('#overlay').className= 'hidden';
        }
    });


})();