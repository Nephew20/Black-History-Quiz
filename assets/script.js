var containerEl = document.querySelector('#container');
var questionsContainer = document.createElement('ol');

var multiChoice = [
    {
        question: "Who is the civil rights leader from Atlanta, GA?",
        ans: ["MLK", "Bob Marley", "Malcomlm X"]
    },
    {
        question: "What religion was Malcoml X apart of?", 
        ans: ["Christianity", "Islam", "Budhism"]
    },
    {
        question: "What did the citizens boycott?",
        ans: ["Segregation", "Discrimination", "Public Transportation"]
    }
]

console.log(multiChoice[1].question)

for (i = 0; i < multiChoice.length; i++) {
    // Creates the question element for each question in the array
    const questionsEl = document.createElement('li');
    questionsEl.textContent = multiChoice[i].question

    for (x=0; x<multiChoice[i].ans.length; x++) {
     const answersEl = document.createElement('button')
     answersEl.textContent = multiChoice[i].ans[x]
     questionsEl.appendChild(answersEl)
    }

    questionsContainer.appendChild(questionsEl)
    
}

containerEl.appendChild(questionsContainer)