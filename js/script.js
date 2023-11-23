document.addEventListener("DOMContentLoaded", function () {

    let visitCount = localStorage.getItem("visitCount");
  
    if (visitCount === null) {
    
      visitCount = 0;
    } else {
     
      visitCount = parseInt(visitCount);
    }
  
    
    document.getElementById("contadorVisitas").innerText = visitCount;
  

    visitCount++;
  

    localStorage.setItem("visitCount", visitCount);
  

    document.getElementById("btnReestablecer").addEventListener("click", function () {
      
      visitCount = 0;
  
   
      document.getElementById("contadorVisitas").innerText = visitCount;
  
   
      localStorage.setItem("visitCount", visitCount);
    });
  });
  