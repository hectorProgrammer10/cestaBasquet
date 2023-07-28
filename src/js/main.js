const url = 'http://localhost:3000/score';

getAPI();

function getAPI(){
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la solicitud:', response.status, response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('Datos obtenidos:', data);
    mostrar(data);
  })
  .catch(error => {
    console.error(error.message);
  });

}

function mostrar(data){
    let imprimir = document.getElementById("puntuacion");
    console.log(data.puntuacion)
    imprimir.innerHTML = `0 0 0 ${data.puntuacion}`;
    setTimeout(function () {
        getAPI();
      }, 2000);
}