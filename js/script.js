document.addEventListener("DOMContentLoaded", function () {
    // Obtener el contador de localStorage
    let visitCount = localStorage.getItem("visitCount");
  
    // Verificar si el contador existe en localStorage
    if (visitCount === null) {
      // Si no existe, inicializar el contador en 0
      visitCount = 0;
    } else {
      // Si existe, convertir a número
      visitCount = parseInt(visitCount);
    }
  
    // Mostrar el contador en la página
    document.getElementById("contadorVisitas").innerText = visitCount;
  
    // Incrementar el contador en cada carga de página
    visitCount++;
  
    // Guardar el nuevo valor del contador en localStorage
    localStorage.setItem("visitCount", visitCount);
  
    // Manejar el clic en el botón "Reestablecer Contador"
    document.getElementById("btnReestablecer").addEventListener("click", function () {
      // Reiniciar el contador a cero
      visitCount = 0;
  
      // Mostrar el contador reiniciado en la página
      document.getElementById("contadorVisitas").innerText = visitCount;
  
      // Guardar el nuevo valor del contador en localStorage
      localStorage.setItem("visitCount", visitCount);
    });
  });
  