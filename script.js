// Définition des couleurs du drapeau
const colors = [
    "#5BCEFA", // Bleu clair
    "#F5A9B8", // Rose
    "#FFFFFF", // Blanc
    "#F5A9B8", // Rose
    "#5BCEFA"  // Bleu clair
];

window.addEventListener('scroll', () => {
    // On calcule le pourcentage de scroll (0 à 1) 
    const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    
    // On détermine l'index de la couleur dans le tableau (de 0 à 4)
    const colorIndex = Math.floor(scrollPercent * colors.length);
    
    // On applique la couleur au body si on est dans les limites
    if (colorIndex >= 0 && colorIndex < colors.length) {
        document.body.style.backgroundColor = colors[colorIndex];
    }
});