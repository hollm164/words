//Feel free to change these words:
var nouns = ["HAMMER","PIG","TREE","SILENCE", "ROSE","COFFEE","CLOVER","CARDBOARD"];

var randNum, randNoun;

var articles = ["THE","A"];

var randArticle;

var randNum2;

var adjectives = ["BLUE","SOFT","SHINY","COLORFUL","FUZZY","BEAUTIFUL", "UGLY"];

var randAdj;

var randNum3;

var randColor;

var randColor2;

function setup() {
	createCanvas(800,800);

	randNum = floor (random(0,nouns.length));
	randNum2 = floor (random(0,articles.length));
	randNum3 = floor (random(0,adjectives.length));

	randNoun = nouns[randNum];
	randArticle = articles[randNum2];
	randAdj = adjectives[randNum3];
	
	randColor = color(random(255),random(255),random(255));
	randColor2 = color(random(255),random(255), random(255));

}

function draw(){
	background(randColor);

	for(var i=0; i<10; i++){
		fill(randColor2);
		noStroke();
		ellipse(100*i,100*i,20,520);
	}

	textFont("Bebas Kai");
	textSize(100);
	fill("white");
	text(randArticle+" "+randAdj+" "+randNoun,25,400);

}
