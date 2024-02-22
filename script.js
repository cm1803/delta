function analyzeName() {
    var name = document.getElementById("nameInput").value;
    var nameLength = name.length;
    var reversedName = name.split("").reverse().join("");

    var spiritAnimal = "";
    if (nameLength <= 3) {
        spiritAnimal = "toad";
    } else if (nameLength <= 5) {
        spiritAnimal = "cat";
    } else if (nameLength <= 7) {
        spiritAnimal = "unicorn";
    } else {
        spiritAnimal = "giraffe";
    }

    var resultText = "Your name is " + nameLength + " letters long. ";
    resultText += "When spelled backwards, it is '" + reversedName + "'. ";
    resultText += "Your spirit animal is a " + spiritAnimal + ".";

    document.getElementById("result").innerText = resultText;
}

document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();
    analyzeName();
});
