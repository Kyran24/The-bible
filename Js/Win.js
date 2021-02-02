var mylocation="./About.html"
var winheight=100
var winsize=100
var x=5

function go(){
win2=window.open("","","scrollbars")
if (!document.layers&&!document.all){
win2.location=mylocation
return
}
win2.resizeTo(100,100)
win2.moveTo(0,0)
go2()
}
function go2(){
if (winheight>=screen.availHeight-3)
x=0
win2.resizeBy(5,x)
winheight+=5
winsize+=5
if (winsize>=screen.width-5){
win2.location=mylocation
winheight=100
winsize=100
x=5
return
}
setTimeout("go2()",50)
}
