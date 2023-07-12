function ObtenerLista() {

    let usuario = document.getElementById("usuario").value
    let password = document.getElementById("password").value
    //  document.write(`http://gazytv.com:8880/get.php?username=${usuario}&password=${password}=Ua7vofbxiS&type=m3u_plus&output=mpegts`)
    //document.getElementById("lista").textContent = (URL = `http://gazytv.com:8880/get.php?username=${usuario}&password=${password}=Ua7vofbxiS&type=m3u_plus&output=mpegts`)

    document.getElementById("lista").textContent = new URL(`http://136421.one:8880/get.php?username=${usuario}&password=${password}=&type=m3u_plus&output=mpegts`)


}

/*DARK THEME*/
/*const modoNocturnoBtn = document.getElementById("modoNocturnoBtn");
const body = document.body;

modoNocturnoBtn.addEventListener("click", function() {
  body.classList.toggle("dark-theme")
  body.classList.toggle("light-theme")
})
*/

/DARK THEME/
const boton = document.querySelector('#boton_cambiar')
const prefresLightScheme = window.matchMedia('(prefers-color-scheme: light-theme)')

boton.addEventListener('click', () => {

    if (prefresLightScheme.matches) {
        document.body.classList.toggle('light-theme')
    } else {
        document.body.classList.toggle('dark-theme')
    }
})