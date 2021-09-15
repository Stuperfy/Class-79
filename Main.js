emptyarrey=[]
function submit(){
    var name1=document.getElementById("hint").value;
    var name2=document.getElementById("hint1").value;
    var name3=document.getElementById("hint2").value;
    var name4=document.getElementById("hint3").value;
    emptyarrey.push(name1)
    emptyarrey.push(name2)
    emptyarrey.push(name3)
    emptyarrey.push(name4)
    console.log(emptyarrey)
    document.getElementById("display").innerHTML=emptyarrey;
    document.getElementById("submitbutton").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
}
function sorting(){
    emptyarrey.sort()
    console.log(emptyarrey)
    document.getElementById("display").innerHTML=emptyarrey;
}