var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');

function changeImg1() {
            var rand = Math.floor((Math.random() * 3) + 1); 
            img1.src = document.getElementById('img1');            
            switch(rand) {
                case 1 :
                    img1.src = 'images/cat-1.jpg';
                    img1.alt = 'cat1';
                    break;
                case 2:
                    img1.src = 'images/panda-1.jpg';
                    img1.alt = 'panda1';
                    break;
                case 3:
                    img1.src = 'images/monkey-1.jpg';
                    img1.alt = 'monkey1';
                    break;
            }

            let isCat = img1.alt + img2.alt + img3.alt + img4.alt + img5.alt === 'cat1cat2cat3cat4cat5' ;
            let isPanda = img1.alt + img2.alt + img3.alt + img4.alt + img5.alt === 'panda1panda2panda3panda4panda5' ;
            let isMonkey = img1.alt + img2.alt + img3.alt + img4.alt + img5.alt === 'monkey1monkey2monkey3monkey4monkey5' ;

            if (isCat || isPanda || isMonkey) {
                alert('Right');
            }
}

function changeImg2() {
            var rand = Math.floor((Math.random() * 3) + 1); 
            img2.src = document.getElementById('img2');          
            switch(rand) {
                case 1 :
                    img2.src = 'images/cat-2.jpg';
                    img2.alt = 'cat2';
                    break;
                case 2:
                    img2.src = 'images/panda-2.jpg';
                    img2.alt = 'panda2';
                    break;
                case 3:
                    img2.src = 'images/monkey-2.jpg';
                    img2.alt = 'monkey2';
                    break;
            }
            let isCat = img1.alt + img2.alt + img3.alt + img4.alt + img5.alt === 'cat1cat2cat3cat4cat5' ;
            let isPanda = img1.alt + img2.alt + img3.alt + img4.alt + img5.alt === 'panda1panda2panda3panda4panda5' ;
            let isMonkey = img1.alt + img2.alt + img3.alt + img4.alt + img5.alt === 'monkey1monkey2monkey3monkey4monkey5' ;

            if (isCat || isPanda || isMonkey) {
                alert('Right');
            }

}
function changeImg3() {
            var rand = Math.floor((Math.random() * 3) + 1); 
            img3.alt = document.getElementById('img3');           
            switch(rand) {
                case 1 :
                    img3.src = 'images/cat-3.jpg';
                    img3.alt = 'cat3';
                    break;
                case 2:
                    img3.src = 'images/panda-3.jpg';
                    img3.alt = 'panda3';
                    break;
                case 3:
                    img3.src = 'images/monkey-3.jpg';
                    img3.alt = 'monkey3';
                    break;
            }
            let isCat = img1.alt + img2.alt + img3.alt + img4.alt + img5.alt === 'cat1cat2cat3cat4cat5' ;
            let isPanda = img1.alt + img2.alt + img3.alt + img4.alt + img5.alt === 'panda1panda2panda3panda4panda5' ;
            let isMonkey = img1.alt + img2.alt + img3.alt + img4.alt + img5.alt === 'monkey1monkey2monkey3monkey4monkey5' ;

            if (isCat || isPanda || isMonkey) {
                alert('Right');
            }
}
function changeImg4() {
            var rand = Math.floor((Math.random() * 3) + 1); 
            img4.src = document.getElementById('img4');           
            switch(rand) {
                case 1 :
                    img4.src = 'images/cat-4.jpg';
                    img4.alt = 'cat4';
                    break;
                case 2:
                    img4.src = 'images/panda-4.jpg';
                    img4.alt = 'panda4';
                    break;
                case 3:
                    img4.src = 'images/monkey-4.jpg';
                    img4.alt = 'monkey4';
                    break;
            }
            let isCat = img1.alt + img2.alt + img3.alt + img4.alt + img5.alt === 'cat1cat2cat3cat4cat5' ;
            let isPanda = img1.alt + img2.alt + img3.alt + img4.alt + img5.alt === 'panda1panda2panda3panda4panda5' ;
            let isMonkey = img1.alt + img2.alt + img3.alt + img4.alt + img5.alt === 'monkey1monkey2monkey3monkey4monkey5' ;

            if (isCat || isPanda || isMonkey) {
                alert('Right');
            }
}
function changeImg5() {
            var rand = Math.floor((Math.random() * 3) + 1); 
            img5.src = document.getElementById('img5');      
            switch(rand) {
                case 1 :
                    img5.src = 'images/cat-5.jpg';
                    img5.alt = 'cat5';
                    break;
                case 2:
                    img5.src = 'images/panda-5.jpg';
                    img5.alt = 'panda5';
                    break;
                case 3:
                    img5.src = 'images/monkey-5.jpg';
                    img5.alt = 'monkey5';
                    break;
            }
            let isCat = img1.alt + img2.alt + img3.alt + img4.alt + img5.alt === 'cat1cat2cat3cat4cat5' ;
            let isPanda = img1.alt + img2.alt + img3.alt + img4.alt + img5.alt === 'panda1panda2panda3panda4panda5' ;
            let isMonkey = img1.alt + img2.alt + img3.alt + img4.alt + img5.alt === 'monkey1monkey2monkey3monkey4monkey5' ;

            if (isCat || isPanda || isMonkey) {
                alert('Right');
            }
}


