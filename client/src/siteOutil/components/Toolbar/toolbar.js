import React, {useState} from 'react';
import './toolbar.scss';

const Toolbar = ({allOptions = true}) => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const openOverlay = () => {
        setIsOverlayOpen(true);
    };

    const closeOverlay = () => {
        setIsOverlayOpen(false);
    };

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    const preventDrag = (e) => {
        e.preventDefault ? e.preventDefault() : e.returnValue = false
    }

    return (
        <div className="toolbar relative z-10 w-auto bg-white h-screen flex flex-col justify-between">
            <div className="content">
                {allOptions ? (
                    <>
                        <div className="dndnode chapitre mb-6">
                            <img src="/assets/toolbar/chapitre.png" alt="Icone chapitre" title="Chapitre" onDragStart={(event) => onDragStart(event, 'chapitre')} draggable />
                        </div>
                        <div className="dndnode acte mb-6">
                            <img src="/assets/toolbar/acte.png" alt="Icone acte" title="Acte" onDragStart={(event) => onDragStart(event, 'acte')} draggable />
                        </div>
                    </>
                    ) : (
                    <>
                        <div onMouseDown={preventDrag} className="dndnode__disabled chapitre mb-6">
                            <img src="/assets/toolbar/chapitre.png" alt="Icone chapitre" title="Chapitre"/>
                        </div>
                        <div onMouseDown={preventDrag} className="dndnode__disabled acte mb-6">
                            <img src="/assets/toolbar/acte.png" alt="Icone acte" title="Acte"/>
                        </div>
                    </>
                )}
                <div className="dndnode personnage mb-6">
                    <img src="/assets/toolbar/personnage.png" alt="Icone personnage" onDragStart={(event) => onDragStart(event, 'personnage')} draggable />
                </div>
                <div className="dndnode lieu mb-6">
                    <img src="/assets/toolbar/lieu.png" alt="Icone lieu" onDragStart={(event) => onDragStart(event, 'lieu')} draggable />
                </div>
                <div className="dndnode evenement mb-6">
                    <img src="/assets/toolbar/evenement.png" alt="Icone evenement" onDragStart={(event) => onDragStart(event, 'evenement')} draggable />
                </div>
                <div className="dndnode bloc-note">
                    <img src="/assets/toolbar/bloc-note.png" alt="Icone bloc-note" title="Bloc-note" onDragStart={(event) => onDragStart(event, 'blocnote')} draggable />
                </div>
            </div>

            <div className="generateur-nom flex items-center justify-center">
                <button onClick={openOverlay}>
                    <img src="/assets/toolbar/eclair.png" alt="Icone générateur de nom (éclair)" draggable="false"/>
                </button>
            </div>
            {isOverlayOpen && (
                <div className="overlay">
                    <button onClick={closeOverlay} className="button">X</button>
                </div>
            )}

        </div>
    );
};

export default Toolbar;