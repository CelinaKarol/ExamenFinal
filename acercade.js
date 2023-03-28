window.addEventListener('load', async function ()
{
    

    let btnaccion = document.getElementById('btnSaludar');
  
    btnaccion.addEventListener('click', mostrarnombre);
    function mostrarnombre(){
        alert(" Dueño de la empresa  Victor peres");
    }
});
