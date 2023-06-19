const touches = [...document.querySelectorAll('.button')];
// console.log(touches);

const keyList= touches.map(touche => touche.dataset.key)
// console.log(keyList);
const ecran=document.querySelector('.ecran');

document.addEventListener('keydown', (e) =>{
    const valeur= e.keyCode.toString();
    // console.log(valeur,typeof valeur)
})
document.addEventListener('click', (e) => {
    const valeur=e.target.dataset.key;
    calcul(valeur)
})
const calcul= (valeur) => {
    if(keyList.includes(valeur)) {
        switch (valeur) {
            case '8' :
                ecran.textContent='';
                break;
            case '187': 
                const calculer= eval(ecran.textContent);
                ecran.textContent=calculer;
                break;
            default :
                const indexkeyCode=keyList.indexOf(valeur)
                const touche = touches[indexkeyCode]; 
                ecran.textContent += touche.innerHTML;
                // ou ecran.textContent += valeur; 
        }
    }

}
window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre cacul')
} )