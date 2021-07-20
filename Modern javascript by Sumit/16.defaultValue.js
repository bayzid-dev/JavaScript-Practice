
        // FUNCTION.DEFAULT PARAMETER VALUE
        
        // default value set up in parameter
        function defaultValue( x = 10){
          return x;
        };

        console.log(defaultValue()); 


        // null send korLe kaJ korE na 


        function defaultName( y = 20 ){
            return y;
          };
  
          console.log(defaultName(null)); 


          // undefined send korLE kaj koRe

          function defaul( z = 30 ){
            return z;
          };
  
          console.log(defaul(undefined));