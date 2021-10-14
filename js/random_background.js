function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
var currentBackground = getRandomIntInclusive(1, 1);//How many wallpapers on the right
document.body.style.background = 'url(./background/'+currentBackground+'.jpg)';
document.body.style.backgroundSize = 'cover';
