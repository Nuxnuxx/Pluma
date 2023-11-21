// Fonction pour diviser le contenu d'un texte structuré en lignes
const diviserEnLignes = (contenu) => {
    return contenu.split('\n').map((ligne, index) => {
        const estLigneVide = ligne.trim() === '';

        return (
            <p key={index} className={estLigneVide ? 'ligne-vide' : ''}>
                {estLigneVide ? '\u00a0' : ligne}
            </p>
        );
    });
};

export default diviserEnLignes;