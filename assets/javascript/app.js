 /*
*  BUILD THE QUESTIONS and ANSWERS VARIABLE AS AN OBJECT
*  CREATE A COUNTDOWN TIMER FOR THE ENTIRE GAME
*  PER QUESTION, CHECK FOR THE USERs ANSWER, INCREMENT COUNTERS RIGHT or WRONG based on USERs ANSWER
*  WHEN THE TIMER HAS RUN OUT, DISPLAY THE GAME SCORES
*/

<script type="text/javascript">

 var askItOne = {
     askOne: "What country was Crocodile Dundee from?",
     askOneA: "Austria",
     askOneB: "Argentina",
     askOneRgt:  "Australia"
 };

 var askItTwo = {
     askTwo:  "Who is the artist famous for singing Proud Mary?",
     askTwoA:  "'Tina Fey'",
     askTwoRgt:  "'Tina Turner'",
     askTwoC:  "'Tina Marie'"
 };

 var askItThree = {
     askThree: "What is the slang name for a multi-breed non-pedigree dog?",
     askThreeA:  "Henry797",
     askThreeRgt: "Heinz57",
     askThreeC:  "Horatio1207"
 };

 var askItFour = {
     askFour:  "What is the color of George Washingtons white horse?",
     askFourRgt: "'Not in List'",
     askFourB:  "'Dappled Grey'",
     askFourC:  "Black"
 };

 var askItFive = {
     askFive:  "Where in the world is?",
     askFiveA:  "'Carmen SanAntonio'",
     askFiveB:  "'Carmen SanFrancisco'",
     askFiveRgt:  "'Carmen SanDiego'"
 };

 // load the TEMPLATE with QUESTIONS and CHOICES
 function loadPage() {

     var shoQOne = askIt.askOne;
     var shoOneA = askIt.askOneA;
     var shoOneB = askIt.askOneB;
     var shoOneC = askIt.askOneRgt;

     console.log("shoQOne");
     console.log("shoOneA");
     console.log("shoOneB");
     console.log("shoOneC");

     $("document").getElementById("QuestOne")
         .innerHTML.("shoOne");
     $("qOneA").value("shoOneA");
     $("qOneB").value("shoOneB");
     $("qOneRgt").value("shoOneRgt");
 }

 //   BEGIN LOGIC

     //  LOAD THE TRIVIA GAME QUESTIONS
 loadPage();

     // INITIALIZE THE GAME SCORE COUNTERS

 var uRght = 0;
 var uWrng = 0;

 //   WAS THE START BUTTON PRESSED
  ("btnStart").on("click" function() {

            //  SHOW THE COUNTING DOWN TIMER
       var timeIs = floatParse(setTimeout(1000 * 500));

            //  UPDATE RIGHT OR WRONG COUNTER BASED ON USER SELECTION
       if ("qOneRgt").("click") || (askItOne.askOneRgt === $("qOneRgt").value)
       {
         uRght++
       }
       else{
         uWrng++
       }


     if ("qTwoRgt").("click") || (askItTwo.askTwoRgt === $("qTwoRgt").value)
     {
         uRght++
     }
     else{
         uWrng++
     }


     if ("qTwoRgt").("click") || (askItThree.askThreeRgt === $("qThreeRgt").value)
     {
         uRght++
     }
     else{
         uWrng++
     }


     if ("qFourRgt").("click") ||  (askItFour.askFourRgt === $("qFourRgt").value)
     {
         uRght++
     }
     else{
         uWrng++
     }


     if ("qFive.
        askItFive.askFiveRgt === $("qFiveRgt").value
     {
         uRght++
     }
     else{
         uWrng++
     }
 }
 </script>
