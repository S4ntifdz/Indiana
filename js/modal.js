// Función para inicializar el modal
function initializeModal(imgId, modalId, modalImgId, captionId, closeClass) {
    var modal = document.getElementById(modalId);
    var img = document.getElementById(imgId);
    var modalImg = document.getElementById(modalImgId);
    var captionText = document.getElementById(captionId);
    var span = document.getElementsByClassName(closeClass)[0];
  
    if (modal && img && modalImg && captionText && span) {
      img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }
  
      span.onclick = function() {
        modal.style.display = "none";
      }
    }
  }
  
  // Función para abrir el modal
  function openModal() {
    console.log("openModal called");
    initializeModal("myImg", "myModal", "modalImg", "caption", "close");
  }
  // Función para cerrar el modal
  function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
  }
  