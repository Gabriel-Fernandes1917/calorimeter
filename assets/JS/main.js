
var UserWeight;
var GoalWeight;
var resul; // It is a value the cal who user need loss
var ResulExercise;

function call(UserWeight){

   UserWeight = Number(document.getElementById("user-weight").value); 
   
   GoalWeight = Number(document.getElementById("goal-weight").value);

   resul = UserWeight - GoalWeight;

   if(resul>0){

   document.querySelector('output').innerHTML = resul;

   return resul;

   }else{

    document.querySelector('output').innerHTML = "invalid value";

   }
   
}

// 7,700 cal = 1kg

function ExerciseRun(){
   //250 cal to  hour 
   //alert(resul);
   ResulExercise = Number(resul*7700)/250;
   //alert("You need run to "+ResulExercise+" hours");
   
   document.querySelector('#ResulTheExercise').innerHTML = ResulExercise;
   

}
