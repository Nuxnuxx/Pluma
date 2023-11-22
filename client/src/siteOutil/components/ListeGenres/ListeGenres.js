import React, { useState } from 'react';
import './ListeGenres.scss';

const ListeGenres = () => {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    const allGenres = [
        'Fantasy',
        'Science-Fiction',
        'Fantastique',
        'Aventure',
        'Historique',
        'Thriller',
        'Horreur',
        'Ceci est un texte vraiment très long pour effectuer le test',
        'Ceci est un autre texte vraiment très long pour effectuer le test',
        'Ceci est encore un autre texte vraiment très long pour effectuer le test'
];

    // Fonction appelée lorsqu'un mot clé est sélectionné
    const handleGenresSelect = (genre) => {
        // Vérifie si le mot clé est déjà sélectionné
        if (!selectedGenres.includes(genre)) {
            // Ajoute le mot clé à la liste des sélectionnés
            setSelectedGenres([...selectedGenres, genre]);
        }

        setSelectedOption('');
    };

    // Fonction appelée lorsqu'un mot clé est supprimé
    const handleGenreRemove = (genre) => {
        // Filtrer les genres pour obtenir une nouvelle liste sans le genre à supprimer
        const updatedGenres = selectedGenres.filter((selectedGenre) => selectedGenre !== genre);
        setSelectedGenres(updatedGenres);
    };

    return (
        <div className="genres">
            <h2>Genres :</h2>
            <ul className="liste-selection">
                {selectedGenres.map((genre, index) => (
                    <li className="genre-ajoute" onClick={() => handleGenreRemove(genre)} key={index}>
                        <span>{genre}</span>
                        <span className="remove-button">
                            {' '}x
                        </span>
                    </li>
                ))}
                <li>
                    <div className="select-personnalise">
                        <select value={selectedOption} onChange={(e) => handleGenresSelect(e.target.value)}>
                            <option className="option-defaut" value=""></option>
                            {allGenres.map((genre, index) => (
                                <option key={index} value={genre}>
                                    {genre}
                                </option>
                            ))}
                        </select>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ListeGenres;