let totalztem=0;
let totalteras=0;
let totalgvena=0;
let sum=0;
function add_piza(r){
    if(r==1) 
        document.getElementById('teras').style.backgroundColor = 'Red';
    if(r==2)
        document.getElementById('ztem').style.backgroundColor = 'Red';
    if(r==3)
        document.getElementById('gvena').style.backgroundColor = 'Red';
    if(r==4){
        r==0;
        document.getElementById('teras').style.backgroundColor = 'White';
        document.getElementById('ztem').style.backgroundColor = 'White';
        document.getElementById('gvena').style.backgroundColor = 'White';
        totalztem=totalgvena=totalteras=0;
        document.getElementById('total').innerHTML=0;
    }

}
document.querySelector('#teras').addEventListener('click',e=>{
    if(totalteras==0){
        totalteras++;
    }
    else {
        totalteras==0;
    }
})

       document.querySelector('#gvena').addEventListener('click',e=>{
        if(totalgvena==0)
           {
              
               totalgvena++;
           }
           else 
           {
               totalgvena==0;
           }
           
       })
       document.querySelector('#ztem').addEventListener('click',e=>{
        if(totalztem==0)
           {
               totalztem++;
               alert("קבלתה הנתחה של 15%");
           }
           else{
               totalztem==0;
           }
       })
       function total()
       {
           let calu=0,temp=0;
           if(totalteras==1)
           {
               calu+=20;
           }
           if(totalgvena==1)
           {
               calu+=20;
           }
           if(totalztem==1)
           {
               calu+=20;
               calu=calu-calu*0.15;
           }
           document.getElementById('total').innerHTML=calu;
        
       }