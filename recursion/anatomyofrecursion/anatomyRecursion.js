//use coutern to see how much funtion is called
let counter = 0 ;
function inception(){
    console.log(counter);
   if(counter > 3){
     return 'done';

   }
   counter++;
   //we return inception so we can avoid returning undefined
    return inception();
}


console.log(inception());

//three rules with recursion
//Identify Base case
//identify recursive case
//get closer and closer and return when needed
