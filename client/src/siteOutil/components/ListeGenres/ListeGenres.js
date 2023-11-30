import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import './ListeGenres.scss';
import UseFetchData from "../operationsDonnees";
import apiUrl from "../../../config";
import {useNavigate} from "react-router-dom";

const ListeGenres = () => {
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [menuOuvert, setMenuOuvert] = useState(false);
    const [position, setPosition] = useState({left: 0 });
    const menuSelectionRef = useRef(null);
    const boutonSelectionRef = useRef(null);

    const navigate = useNavigate();

    const { data: listeGenres, loading: loading, error: error } = UseFetchData(`${apiUrl}/readTable/genre`);



    const updatePosition = () => {
        if (menuSelectionRef.current) {
            const rect = menuSelectionRef.current.getBoundingClientRect();
            const rightEdgeDistance = window.innerWidth - rect.right;

            setPosition({
                left: rightEdgeDistance <= 0 ? rightEdgeDistance : 'auto',
            });
        }
    };

    useLayoutEffect(() => {
        updatePosition();

        window.addEventListener('resize', updatePosition);

        return () => {
            window.removeEventListener('resize', updatePosition);
        };
    }, [menuOuvert]);



    const handleClickOutside = (e) => {
        if (boutonSelectionRef.current && !boutonSelectionRef.current.contains(e.target)) {
            setMenuOuvert(false);
        }
    };

    useEffect(() => {
        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [menuOuvert]);



    const handleGenresSelect = (genre) => {
        if (!selectedGenres.includes(genre)) {
            setSelectedGenres([...selectedGenres, genre]);
        }

        setMenuOuvert(false);
        setSelectedGenre('');
    };

    const handleGenreRemove = (genre) => {
        const updatedGenres = selectedGenres.filter((selectedGenre) => selectedGenre !== genre);
        setSelectedGenres(updatedGenres);
    };



    if (loading) {
        return <div className="chargement">Chargement en cours...</div>;
    }

    if (error || !listeGenres) {
        navigate('/404', { replace: true });
        return null;
    }

    return (
        <div className="genres">
            <label className="label-container">Genres:</label>
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
                    <div className={`select-personnalise`}>
                        <div className="bouton-selection" onClick={() => setMenuOuvert(!menuOuvert)} ref={boutonSelectionRef}></div>
                        <ul className={`genres ${menuOuvert ? 'open' : ''}`} ref={menuSelectionRef} style={{ ...position }}>
                            {listeGenres.map((genre, index) => (
                                <li key={index} className={`genre ${selectedGenres.includes(genre.nom_genre) ? 'genre-selectionne' : ''}`} onClick={() => handleGenresSelect(genre.nom_genre)}>
                                    {genre.nom_genre}
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ListeGenres;