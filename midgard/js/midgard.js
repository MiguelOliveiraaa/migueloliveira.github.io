/*   ---   HEADER covers opacity control   ---   */
if(document.getElementById("news")){
var news = document.getElementById("news");
var orderNow = document.getElementById("ordernow");
news.onmouseover = function(){
    document.getElementById("backg01").style.opacity = "0.5";
}
news.onmouseleave = function(){
    document.getElementById("backg01").style.opacity = "1.0";
}

orderNow.onmouseover = function(){
    document.getElementById("backg02").style.opacity = "0.5";
}
orderNow.onmouseleave = function(){
    document.getElementById("backg02").style.opacity = "1.0";
}
}

/*   ---   menu clicking DISPLAY NONE/BLOCK   ---   */
if(document.getElementById("close")){
var trigger = false;
var navBtn = document.getElementById("close");
navBtn.onclick = function(){
    if(trigger == false){
        trigger = true;
        document.getElementById("navMenu").style.display = "block";
        navBtn.innerHTML = '<img src="imgs/mobile_less.png">';
    } else {
        trigger = false;
        document.getElementById("navMenu").style.display = "none";
        navBtn.innerHTML = '<img src="imgs/mobile_more.png">';
    }
}
}






/*function popFig(nome, preço, img, excl, nov, stock, classe) {
    this.nome = nome;
    this.preço = preço;
    this.img = img;
    this.stock = stock;
    this.classe = classe;
}

var goku = new popFig('Goku Black Suit', 15.99 + '€', '../imgs/gokublacksuit.png', 3, 'excl');
var spiderFut = new popFig('Spider-Man Future', 31.99 + '€', '../imgs/spidermanfuture.png', 3, 'nov');
var pika = new popFig('Pikachu', 20.99 + '€', '../imgs/pikachu.png', 3, 'glow');

var midgardPops = new Array[goku, spiderFut, pika];

for (i = 0; i < midgardPops.length; i++) {
    var newFigure = document.createElement('figure');
    var content = '<div class="sticker"></div><img src="imgs/pop_backg.jpg" alt="Pop! Background" class="popbackg"><div id="popbox"><img src="' + midgardPops[i].img + '" alt="Pop! Preview"><button class="price">' + midgardPops[i].preço + '</button></div><div class="popinfo"><figcaption class="popname">' + midgardPops[i].nome + '</figcaption></div>';
    newFigure.innerHTML = content;
    document.getElementById('cat').appendChild(newFigure);
}*/