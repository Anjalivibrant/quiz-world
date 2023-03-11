const questions = [
    {
        question: "What is the right way to initialize array?",
        optionA: "int num[6]={2,4,12,3,13};",
        optionB: "int n{}={2,4,3,5,12};",
        optionC: "int n{3}={2,4,6};",
        optionD: "int n(6)={2,4,6,8,10,4};",
        correctOption: "optionA"
    },

    {
        question: "An array elements are always store in _____ memory locations.",
        optionA: "Sequential",
        optionB: "Random",
        optionC: "Sequential and random",
        optionD: "None of the above",
        correctOption: "optionA"
    },

    {
        question: "Which function will you choose to join two words?",
        optionA: "strcpy()",
        optionB: "strcat()",
        optionC: "strncon()",
        optionD: "memcon()",
        correctOption: "optionB"
    },

    {
        question: "A _____ statement allows us to execute a statement or group of statements multiple times.",
        optionA: "condition",
        optionB: "loop",
        optionC: "array",
        optionD: "precedure",
        correctOption: "optionB"
    },

    {
        question: "Which type of loop is best known for its boolean condition that controls entry to the loop?",
        optionA: "do-while loop",
        optionB: "for (traditional)",
        optionC: "for-each",
        optionD: "while",
        correctOption: "optionD"
    },

    {
        question:"Which type of loop is best known for using an index or counter?",
        optionA: "do-while loop",
        optionB: "for(traditional)",
        optionC: "for-each",
        optionD: "while",
        correctOption: "optionB"
    },

    {
        question: "Which of the following loops is executed at least once, even if the condition is false from the start?",
        optionA: "while loop",
        optionB: "do-while loop",
        optionC: "for loop",
        optionD: "foreach loop",
        correctOption: "optionB"
    },

    {
        question: "Which of the following statements is true about the break statement in a loop?",
        optionA: "It stops the loop from executing any further and moves to the next iteration",
        optionB: "It stops the loop executing any further and exits the loop.",
        optionC: "It skips the current iteration and moves to the next iteration.",
        optionD: "It is used to create an infinite loop",
        correctOption: "optionB"
    },

    {
        question: "Which of the following is the correct syntax if the ternary operator in programming?",
        optionA: "condition?value_if_true:value_if_false",
        optionB: "condition:value_if_true?value_if_false",
        optionC: "condition?value_if_false:value_if_true",
        optionD: "value_if_false?condition:value_if_true",
        correctOption: "optionA"
    },

    {
        question: "Which of the following is the value assigned to the variable y in the following statement: int y=(5<10)?100:200;?",
        optionA: "100",
        optionB: "200",
        optionC: "5",
        optionD: "10",
        correctOption: "optionA"
    },

    {
        question: "Which of the following methods can be used to get the length of a string in programming?",
        optionA: "string.length()",
        optionB: "string.size()",
        optionC: "string.count()",
        optionD: "string.chars()",
        correctOption: "optionA"
    },

    {
        question: "What is the output of the following code? int arr[]={3,2,1}; cout<<*arr;",
        optionA: "3",
        optionB: "2",
        optionC: "1",
        optionD: "Compilation error",
        correctOption: "optionA"
    },


    {
        question: "What is the output of the following code? int arr[5]={1,2,3,4,5}; int *ptr =arr; cout<< *(ptr+2);",
        optionA: "2",
        optionB: "3",
        optionC: "4",
        optionD: "5",
        correctOption: "optionB"
    },

    {
        question: "The conditional operator are also known as ",
        optionA: "Relational operator",
        optionB: "Binary operator",
        optionC: "Ternary operator",
        optionD: "Arithmetic operator",
        correctOption: "optionC"
    },

    {
        question: "If you have to make decision based on multiple choices, which of the following is best suited?",
        optionA: "if",
        optionB: "if-else",
        optionC: "if-else-if",
        optionD: "All of the above",
        correctOption: "optionC"
    },

    {
        question: "The continue statement can be used with______",
        optionA: "for",
        optionB: "while",
        optionC: "do while",
        optionD: "switch",
        correctOption: "optionD"
    },

    {
        question: "Which of the following is an valid if-else statement?",
        optionA: "if(if(a==1)){}",
        optionB: "if(a){}",
        optionC: "if((char)a){}",
        optionD: "if (func1 (a)){}",
        correctOption: "optionA"
    },

    {
        question: "Switch statement accepts",
        optionA: "int",
        optionB: "char",
        optionC: "long",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "Using goto inside for loop equivalent to using",
        optionA: "Continue",
        optionB: "break",
        optionC: "Return",
        optionD: "None of the above",
        correctOption: "optionD"
    },

    {
        question: "A switch statement is used to",
        optionA: "To use switching variable",
        optionB: "Switch between function in a programchar",
        optionC: "Switch from one variable to another variable ",
        optionD: "to choose from multiple possibilities which may arise due to different values of a single variable",
        correctOption: "optionD"
    },

    {
        question: "If switch feature is used, then",
        optionA: "default case must be present",
        optionB: "default case,if used ,should be the last case",
        optionC: "default case,if used,can be placed anywhere",
        optionD: "none of the above",
        correctOption: "optionC"
    },

    {
        question: "What is the output of the following code? int main() {for(i=0;i<10;i++); printf('%d',i); return 0;}",
        optionA: "10",
        optionB: "0123456789",
        optionC: "syntax error",
        optionD: "Infinite loop",
        correctOption: "optionA"
    },

    {
        question: "What id the output of the following code snippet? #include<stdio.h> int main(){ int a[]={1,2,3,4}; int sum =0; for(int i=0;i<4;i++){ sum+= a[i];} printf('%d',sum); return 0;}",
        optionA: "1",
        optionB: "4",
        optionC: "20",
        optionD: "10",
        correctOption: "optionD"
    },

    {
        question: "What will be the output of the following code snippet? #include<stdio.h> int main() {int a =3, b=5; int t=a; a=b; b=t; printf('%d%d',a,b); return 0;}",
        optionA: "3 5",
        optionB: "3 3",
        optionC: "5 5",
        optionD: "5 3",
        correctOption: "optionD"
    },

    {
        question: "How is the third element in an array accessed based on pointer notation?",
        optionA: "*a+3",
        optionB: "*(a+3)",
        optionC: "*(*a+3)",
        optionD: "&(a+3)",
        correctOption: "optionB"
    },

    {
        question: "How are string represented in memory in C?",
        optionA: "An array of charcters",
        optionB: "The object of some class",
        optionC: "Same as other primitive data types.",
        optionD: "Linkedlist of characters.",
        correctOption: "optionA"
    },

    {
        question: "What is the disadvantage of arrays in C?",
        optionA: "The amount of memory to be allocated should be known beforehand.",
        optionB: "Elements of an array can be accessed in constant time.",
        optionC: "Elements are stored in contiguous memory blocks",
        optionD: "Multiple other data structures can be implemented using arrays.",
        correctOption: "optionA"
    },

    {
        question: "What does the following declaration indicate? int x:8;",
        optionA: "x stores a value of 8",
        optionB: "x is an 8-bit integer",
        optionC: "Both A and B",
        optionD: "None of the above",
        correctOption: "optionB"
    },

    {
        question: "Which of the following is the proper syntax for declaring macros in c?",
        optionA: "#define long long ||",
        optionB: "#define || long long",
        optionC: "#define ||",
        optionD: "#define long long",
        correctOption: "optionB"
    },

    {
        question: "Which of the following is an exit controlled loop?",
        optionA: "while loop",
        optionB: "for loop",
        optionC: "do-while loop",
        optionD: "None of the above",
        correctOption: "optionC"
    },

    {
        question: "What is the size of the int data type (in bytes) in C?",
        optionA: "4",
        optionB: "8",
        optionC: "2",
        optionD: "1",
        correctOption: "optionA"
    },

    {
        question: "How to declare a double-pointer in C?",
        optionA: "int*val",
        optionB: "int**val",
        optionC: "int&val",
        optionD: "it *&val",
        correctOption: "optionB"
    },

    {
        question: "If p is an integer pointer with a value 1000,then what will the value of p+5 be?",
        optionA: "1020",
        optionB: "1005",
        optionC: "1004",
        optionD: "1010",
        correctOption: "optionA"
    },

    {
        question: "What will be the outputof the following code snippet? #include<stdio.h> void solve() {printf('%d %d', (023),(23)); int main(){ solve(); return 0;}}",
        optionA: "023 23",
        optionB: "23 23",
        optionC: "19 23",
        optionD: "23 19",
        correctOption: "optionC"
    },

    {
        question: "What will be the output of the following code snippet? #include<stdio.h> void solve() {bool ok=false; printf(ok ?'Yes':'No'); int main(){ solve(); return 0;}}",
        optionA: "Yes",
        optionB: "No",
        optionC: "Compilation error",
        optionD: "None of the above",
        correctOption: "optionC"
    },

    {
        question: "In which of the following languages is function overloading not possible?",
        optionA: "C",
        optionB: "C++",
        optionC: "Java",
        optionD: "Python",
        correctOption: "optionA"
    },

    {
        question: "Which of the following function is used to open a file in C++?",
        optionA: "fopen",
        optionB: "fclose",
        optionC: "fseek",
        optionD: "fgets",
        correctOption: "optionA"
    },

    {
        question: "Which of the following are correct file opening modes in C?",
        optionA: "r",
        optionB: "rb",
        optionC: "w",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "What is the return type of the fopen() function in C?",
        optionA: "Pointer to a FILE object",
        optionB: "Pointer to an integer",
        optionC: "An integer",
        optionD: "An integer",
        correctOption: "optionA"
    },

    {
        question: "What will be the output of the following code snippet? #include<stdio.h> void solve(){int a[]={1,2,3,4,5}; int sum=0; for(int i=0;i<5;i++){if(i%2==0){sum += *(a+i);}else{sum -= *(a+i);}} printf('%d',sum);} int main() { solve(); return 0;}",
        optionA: "2",
        optionB: "3",
        optionC: "Syntax error",
        optionD: "15",
        correctOption: "optionB"
    },

    {
        question: "What will be the output of the following code snippet?#include <stdio.h>void solve() {int a = 3;int res = a++ + ++a + a++ + ++a;printf('%d',res);} int main() {solve();return 0;}",
        optionA: "12",
        optionB: "24",
        optionC: "20",
        optionD: "18",
        correctOption: "optionC"
    },

    {
        question: "What will be the output of the following code snippet? int main(){ int val=1; do{val++; ++val; } while(val++>25); printf('%d\n', val); return 0;}",
        optionA: "2",
        optionB: "8",
        optionC: "None of these",
        optionD: "4",
        correctOption: "optionD"
    },

    {
        question: "Which of he following will occur if we call the free() function on a NULL pointer?",
        optionA: "compilation error",
        optionB: "runtime error",
        optionC: "undefined behaviour",
        optionD: "the program will execute normally",
        correctOption: "optionD"
    },

    {
        question: "Which of the following should be used to free memory from a pointer allocated using the 'new operator'?",
        optionA: "free()",
        optionB: "delete",
        optionC: "realloc()",
        optionD: "None of the above",
        correctOption: "optionB"
    },

    {
        question: "Which data structure is used to handle recursion in C?",
        optionA: "Stack",
        optionB: "Queue",
        optionC: "Deque",
        optionD: "Trees",
        correctOption: "optionA"
    },
]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 29) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 29) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 15) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 14 && playerScore < 23) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 27) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 30) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
