
function addTo80(n){
 console.log('long time')

   return n + 80;
 }

 //make empty array, to see later if n value already existis in it when we fill it up
//it's better for cache to live inside function so i comment it out
   //let cache = {};
   function memoizedAddTo80(){
       let cache = {};
       // we use technic called closure so cache doesn't reset
         return function(n){
     //se if n is in cache
     if(n in cache){
         // and returns it if in cache thats how we make time

        return cache[n];
       }else {

         console.log('long time');
         cache[n] = n + 80;
            return cache[n];
       }
    }

   }

   const memoized = memoizedAddTo80();


   console.log('1', memoized(5));
   //second time it goes through cahe and see it already exists
   //in second time it doesn't to long time because it's in cache
   console.log('2',memoized(5));