$(function() {
    // $(document).ready(function () {
    //$(()=> {
    console.log("doc is ready");

    let userName; 

    $("#btnGetFacts").click(function () {
    
        //get value of input

        //call my function
        console.log(getCoolNameFacts("barry")); 
        
        let someOtherVariable; 
        //print back the result

        let thisString = "something";
        thisString = thisString + " something else";
        thisString += " and another thing";
        thisString += someOtherVariable + "more string" + "<br><h3>'this is just messy'</h3>";

        thisString += someOtherVariable + "more string" + '<br><h3>"this is just messy"</h3>';

        thisString += someOtherVariable + "more string" + '<br><h3>\'this is just messy\'</h3>';

        thisString += `here is a string and guess what else I want to do? I want to 'single quotes' and "double quotes" and wait, there's more, call now and we'll throw in a variable: ${someOtherVariable}`;

        $('body').append(thisString);


    });

    

}); 

function getCoolNameFacts(name) {
    console.log('in my function');
    $('#btnGetFacts').append("<h3>appending</h3");
    return "super cool";
}
