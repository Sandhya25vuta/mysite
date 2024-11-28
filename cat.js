function switchoff(){
    document.getElementById("bulbimage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
document.getElementById("offswitch").style.backgroundColor="#cbd2d9";
document.getElementById('onswitch').style.backgroundColor="#22c55e"
document.getElementById('catimage').src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
document.getElementById("switchstatus").textContent="switchoff";
}
function switchon(){
    document.getElementById("bulbimage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("onswitch").style.backgroundColor="#cbd2d9";
    document.getElementById("offswitch").style.backgroundColor="#e12d39"
    document.getElementById("catimage").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchstatus").textContent="switchon"
}