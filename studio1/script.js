(function () {
    "use strict";
    console.log('reading js');

    // variable that references the form 
    const myform = document.querySelector('#myform');
    // variable that references the madlib article
    const madlib = document.querySelector('#madlib');

    // when the form is submitted, event handler calls anonymous function
    myform.addEventListener("submit", function(event){

        // prevents the default form submission behavior
        event.preventDefault();

        // these variables get the value from each form field 
        const name1 = document.querySelector('#name1').value;
        const name2 = document.querySelector('#name2').value;
        const color = document.querySelector('#color').value;
        const food1 = document.querySelector('#food1').value;
        const bev = document.querySelector('#bev').value;
        const verb = document.querySelector('#verb').value;
        const adj1 = document.querySelector('#adj1').value;
        const adj2 = document.querySelector('#adj2').value;

        let myText;

        if(name1 == ''){
            myText = "Please fill out this field";
            document.querySelector('#name1').focus();
        } 
        else if(name2 == ''){
            myText = "Please fill out this field";
            document.querySelector('#name2').focus();
        }
        else if(color == ''){
            myText = "Please fill out this field";
            document.querySelector('#color').focus();
        }
        else if(food1 == ''){
            myText = "Please fill out this field";
            document.querySelector('#food1').focus();
        }
        else if(bev == ''){
            myText = "Please fill out this field";
            document.querySelector('#bev').focus();
        }
        else if(verb == ''){
            myText = "Please fill out this field";
            document.querySelector('#verb').focus();
        }
        else if(adj1 == ''){
            myText = "Please fill out this field";
            document.querySelector('#adj1').focus();
        }
        else if(adj2 == ''){
            myText = "Please fill out this field";
            document.querySelector('#adj2').focus();
        }
        else{
        // values from each form field go into the template literal
        myText = `Once upon a time, a fluffy black kitten named Misu decided to have a picnic with his feline friends, ${name1} and ${name2}. 
        They brought a ${color} picnic blanket and a basket filled with yummy snacks, including ${food1} and ${bev}. As they were ${verb} their treats, Misu spotted a few butterflies fluttering in the distance. Misu, being a ${adj1} kitten, decided to chase after one of the butterflies. The other kitties followed suit.
        The picnic then turned into a playful game as the others joined in. They chased the butterflies and raced each other through the grass until they got tired. As the sun set, the friends rested on the grass, gazing at the starlit sky and feeling the evening breeze ruffle their fur. It was truly a ${adj2} day.`;
        }

        mystory.classList.add("showing");
        questions.classList.add("hiding");

        // return the madlib article
        madlib.innerHTML = myText;


        // return the interactive elements to their original empty state
        const textFields = document.querySelectorAll('input[type=text]');
        for (let i=0; i<textFields.length; i++){
            textFields[i].value = '';
        }

    });

})();