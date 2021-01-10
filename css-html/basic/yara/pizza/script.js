function AddOrder(){
    let orderForm = document.getElementById("Order");
    let header = document.getElementById("title");
    let order = document.getElementById("Order");
      if(orderForm.style.display === 'none'){
        orderForm.style.display = 'block';
        header.style.display = 'none';  
        order.style.display = 'none';
      }else{
        orderForm.style.display = 'none';
      }
  }

    
  function End1(){
      /*
    let check="";
    if(document.getElementById("Pperoni").checked = true){
      check+=document.getElementById("Pperoni").value;
    }
    if(document.getElementById("Cheeze").checked = true){
      check+=document.getElementById("Cheeze").value;
    }
     if(document.getElementById("Veggies").checked = true){
      check+=document.getElementById("Veggies").value;
    }
   if(document.getElementById("Onion").checked = true){
      check+=document.getElementById("Onion").value;
    }
    */
    alert(document.getElementById("Pperoni").value) 
  }