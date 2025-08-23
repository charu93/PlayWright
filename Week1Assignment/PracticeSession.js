function launchBrowser(browserName){
    if(browserName=="Chrome"){
        console.log(browserName + " is launched")
    }
    else{
        console.log(browserName+ " is launched ")
    }
    
}

function runTests(testType){
    switch(testType){
    case "smoke":
        console.log("Time for smoke testing");
        break
        case "sanity":
        console.log("Time for sanity testing");
        break
        case "regression":
        console.log("Time for regression testing");
        break
        default:
            console.log("smoke")
            break

}
}
let testType="smoke"
runTests()
// let testType="sanity"
// let testType="regression"

// launchBrowser("Chrome")
launchBrowser("Edge")
