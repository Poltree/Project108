//https://teachablemachine.withgoogle.com/models/y_Jl9AL5a/

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/y_Jl9AL5a/model.json', modelReady);

}

function modelReady() {
    classifier.classify(gotResults);

}

function gotResults(error, results) {
    if (error) {
        console.log('Got Result')
    }
    else {
        console.log(results);

        variable_r = Math.floor(Math.random() * 255) + 1
        variable_g = Math.floor(Math.random() * 255) + 1
        variable_b = Math.floor(Math.random() * 255) + 1

        document.getElementById("result_label").style.color = "rgb(" + variable_r + " , " + variable_g + " , " + variable_b + ")"
        document.getElementById("result_confidence").style.color = "rgb(" + variable_r + " , " + variable_g + " , " + variable_b + ")"

        document.getElementById("result_label").innerHTML = "I Can Hear " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy" + " " + (results[0].confidence * 100).toFixed(2) + " %"

        image_1 = document.getElementById("image");


        if (results[0].label == "Bird") {
            image_1.src = "Bird.gif"


        }
        else if (results[0].label == "Cat") {
            image_1.src = "cat.gif"

        }
        else if (results[0].label == "Dog") {
            image_1.src = "dog.gif"

        }
        else if (results[0].label == "Rabbit") {
            image_1.src = "rabbit.gif"

        }
        else {
            image_1.src = "ear.png"
        }

    }










}
