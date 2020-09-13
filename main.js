$(document).ready(function(){


    $("button").click(function(){



       

       var randnum=Math.floor( Math.random()*7)+1;
        

        if(randnum==1) {
            
            var inpt1=$(".inpt1").val();
            $("h1").text(" "+inpt1);

       
        $(".box-1 ").addClass("win");
      
        
       } 
       else if(randnum==2) {

       
        var inpt1=$(".inpt2").val();
            $("h1").text(" "+inpt1);
        $(".box-2 ").addClass("win");
       
       
         
       } 
       else if(randnum==3) {
        var inpt1=$(".inpt3").val();
        $("h1").text(" "+inpt1);

       
        $(".box-3 ").addClass("win");
        
       } 
       else if(randnum==4) {

        var inpt1=$(".inpt4").val();
        $("h1").text(" "+inpt1);

        
        $(".box-4 ").addClass("win");
       
       } 
       else if(randnum==5) {
        var inpt1=$(".inpt5").val();
        $("h1").text(" "+inpt1);


        
        $(".box-5 ").addClass("win");
       
       } 
       else if(randnum==6) {
        var inpt1=$(".inpt6").val();
        $("h1").text(" "+inpt1);


       
        $(".box-6 ").addClass("win");
       
       } 
       
      



       

    })
})