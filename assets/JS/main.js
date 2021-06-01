
var UserWeight;
var GoalWeight;
var resul;

function call(UserWeight){

   UserWeight = document.getElementById("user-weight").value; 
   
   GoalWeight = document.getElementById("goal-weight").value;

   resul = UserWeight - GoalWeight;

   if(resul>0){

   document.querySelector('output').innerHTML = resul;

   return resul;

   }else{

    document.querySelector('output').innerHTML = "invalid value";

   }
   
}

function retorno(){
    
}
