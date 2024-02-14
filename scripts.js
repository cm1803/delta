$(function() {
    console.log("doc is ready");
    let userName; 
    $("#btnGetFacts").click(function () {
  console.log(getCoolNameFacts("Claire")); 
        
        let someOtherVariable; 
        //print back the result

        let thisString = " So";
        thisString = thisString + " very";
        thisString += " cool.";

        $('body').append(thisString);


    });
  }); 

function getCoolNameFacts(name) {
    console.log('in my function');
    $('body').append("You're a cool unicorn.");
}
