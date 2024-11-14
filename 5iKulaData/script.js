wydarzenie=document.querySelector("#wydarzenie");
btn1=document.querySelector("#btn1");
btn2=document.querySelector("#btn2");


display=document.querySelector(".display");
data=new Date();
datat=data.getTime();
e1=new Date('01-06-2025');
e1t=e1.getTime();
e2=new Date('05-03-2025')
e2t=e2.getTime();
e3=new Date('06-03-2025')
e3t=e3.getTime();







btn1.addEventListener('click', function(evt){
    evt.preventDefault();
    console.log(e1);
    console.log(e1t);
    console.log(data);
    console.log(datat);

    console.log(wydarzenie.value)


    if(wydarzenie.value==1)
    {
        let wynikT=e1t-datat;

        console.log(wynikT);

        wynik=wynikT/86400000;
        wynik=Math.round(wynik);
        console.log(wynik);
        display.innerHTML= "pozostało "+ wynik+" dni";
    }
    if(wydarzenie.value==2)
    {
        let wynikT=e2t-datat;

      

        wynik=wynikT/86400000;
        wynik=Math.round(wynik);
      display.innerHTML= "pozostało "+ wynik+" dni";
    }
    if(wydarzenie.value==3)
    {
        let wynikT=e3t-datat;

     

        wynik=wynikT/86400000;
        wynik=Math.round(wynik);
     
        display.innerHTML= "pozostało "+ wynik+" dni";
    }
    




    
})
btn2.addEventListener('click', function(evt){
    evt.preventDefault();
    data2=document.querySelector("#data2");
    data2=new Date(data2.value);
    data2T=data2.getTime();

    console.log(data2);
    console.log(data2T);
    if(wydarzenie.value==1)
    {
        let wynikT=e1t-data2T;

    

        wynik=wynikT/86400000;
        wynik=Math.round(wynik);
   
        display.innerHTML= "pozostało "+ wynik+" dni";
    }
    if(wydarzenie.value==2)
    {
        let wynikT=e2t-data2T;

      

        wynik=wynikT/86400000;
        wynik=Math.round(wynik);
      display.innerHTML= "pozostało "+ wynik+" dni";
    }
    if(wydarzenie.value==3)
    {
        let wynikT=e3t-data2T;

     

        wynik=wynikT/86400000;
        wynik=Math.round(wynik);
     
        display.innerHTML= "pozostało "+ wynik+" dni";
    }
    


})
