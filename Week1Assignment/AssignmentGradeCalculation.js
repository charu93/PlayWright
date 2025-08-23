
function student(score){
    switch(true){
case (score >=90 && score <= 100):
    console.log("A grade")
    break
case (score>=80 && score<=89):
    console.log("B grade")
    break
case (score>=70 && score<=79):
        console.log("C grade")
    break
default:
        console.log("Need improvement")
}
}
student(70)
