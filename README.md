# JS-Snippets

# Implecit conversion 
## Basic Conversions

### ToBoolean
 
 null: false, 
 undefined: false, 
 "": false, 
 0: false,
 []: true,
 {}: true
 

 ### ToNumber 
  
   null: 0 , 
   undefined: NaN, 
   true: 1,
   "2": 2,  
   "2 3": NaN,
    [3]: 3, 
    [[4]]: 4,
    [3,4]: NaN, 
    {}: NaN,
    {valueOf: ()=> return 5 } : 5
  

  ### ToString
  {
   null: "null",
   undefined: "undefined",
   false: "false",
   5: "5", 
   [3,4]: "[3,4]", 
   {}: [object Object]
   }

   ## Conversion Rules for Addition ( + ) 
    - concatenation   "shu" + "bham" => "shubham"
    - addition   4 + 5 => 9 

    - ToPrimitive 
    - if any one of them is string, then everything else ToString, 
    - if no string, ToNumber

    4 + [5] => 4 + '5' => "45"
    4 + {}=> "4[object Object]"
    true + true => 2

    ## Conversion for less than (<)

    - ToPrimitive, 
    - if both are String, String comparison
    - if both are not String, then it converts ToNumber
     4 < [8] // true
     "a"  < "c" // true
     4 < "9" // true

    ## Conversion for Equality (==)

      - if both types not same
      - Object ToPrimitive
      - Boolean ToNumber
      - String ToNumber
      - null only == null , undefined == undefined, rest all false
     
    
   
