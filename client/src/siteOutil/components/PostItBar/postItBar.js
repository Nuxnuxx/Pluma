import React, {useEffect, useState} from 'react';
import './postItBar.scss';

const PostItBar = () => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [postits, setPostits] = useState([
        { id: 1, titre: "Premier Post-it", contenu: "Contenu du premier Post-it" },
        { id: 2, titre: "Deuxième Post-it", contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula dolor nulla. Integer lacinia vulputate faucibus. Proin ac ipsum turpis. Aenean magna dui, euismod id lorem non, fermentum posuere ipsum. Quisque pretium tortor vel dui fermentum, et cursus neque scelerisque. Nullam sodales quam magna, non condimentum turpis viverra et. Ut non sollicitudin ante. Praesent vitae malesuada magna, ac vulputate nulla. Nulla volutpat interdum risus eu pharetra. Suspendisse ullamcorper libero sollicitudin ultricies vestibulum. Morbi tincidunt dignissim justo ac molestie.\n" +
                "\n" +
                "Vestibulum id volutpat nisl. Ut fringilla feugiat urna id suscipit. Etiam ultrices purus vel tortor ullamcorper, sit amet hendrerit leo iaculis. Maecenas maximus massa et enim vestibulum, a convallis leo tincidunt. Sed urna orci, consectetur at lorem convallis, placerat convallis magna. Vestibulum elementum in purus et cursus. Nulla auctor, lorem ac maximus gravida, orci felis finibus elit, sed aliquet augue felis et dolor. Proin posuere mollis massa. Aliquam facilisis mi ac risus mollis, a ullamcorper sapien feugiat. In quis bibendum augue. Nullam non ultricies sapien. Morbi dictum tincidunt nisl vitae gravida. Suspendisse dapibus quam ac felis efficitur elementum. Nam dapibus lacus nibh, non sodales massa viverra sed. Donec egestas tellus in velit commodo auctor." },
        { id: 3, titre: "Troisieme Post-it", contenu: "Contenu du troisieme Post-it" },
        { id: 4, titre: "4ème Post-it", contenu: "Contenu du 4ème Post-it" },
    ]);

    const [isPostItBarOpen, setIsPostItBarOpen] = useState(false);

    const deletePostIt = (id) => {
        setPostits((prevPostits) => prevPostits.filter((postit) => postit.id !== id));
    };

    const togglePostItBar = () => {
        setIsPostItBarOpen(prevState => !prevState);
    };

    const openOverlay = () => {
        setIsOverlayOpen(true);
    };

    const closeOverlay = () => {
        setIsOverlayOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            const postItBarElement = document.querySelector('.postitbar');
            const isPostItbarClose = postItBarElement.classList.contains('close');

            if (window.innerWidth < 768 && !isPostItbarClose) {
                togglePostItBar();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`postitbar relative w-auto z-0 h-screen flex flex-col justify-between ${isPostItBarOpen ? 'close' : ''}`}>
            <div className={`postitbar__content z-10 h-full ${isPostItBarOpen ? 'close' : ''}`}>
                <h5 className="text-center py-5">Post-Its</h5>
                <div className={`postit-container ${postits.length === 0 ? 'h-4/5 flex items-center justify-center' : ''}`}>
                    {postits.map(postit => (
                        <div key={postit.id} className="postit">
                            <div className="header-section">
                                <h6>{postit.titre}</h6>
                                <svg className="delete-postit" onClick={() => deletePostIt(postit.id)} width="15" height="15" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6 6 18"></path>
                                    <path d="m6 6 12 12"></path>
                                </svg>
                            </div>
                            <div className="content-section">
                                <p>{postit.contenu}</p>
                            </div>
                        </div>
                    ))}
                    {postits.length > 0 && <hr />}
                    <div className={`postit add-postit ${postits.length === 0 ? 'w-full' : ''}`} onClick={openOverlay}>
                        <div className="header-section">
                            <h6> </h6>
                        </div>
                        <div className="content-section flex flex-col items-center justify-center pb-4">
                            <svg width="46" height="46" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5v14"></path>
                                <path d="M5 12h14"></path>
                            </svg>
                            <p>Nouveau Post-It</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`toggle-button-right ${isPostItBarOpen ? 'close' : ''}`} onClick={togglePostItBar}>
                <svg id="eQXyaThE5gd1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 500" shapeRendering="geometricPrecision" textRendering="geometricPrecision" width="100%" height="100%">
                    <ellipse rx="237.58581" ry="214.427627" transform="matrix(.711193 0 0 1.000001 178.909992 250)" fill="#ffafa5" strokeWidth="0"/>
                    <polygon points="0,-98.25934 93.450185,-30.363806 57.755391,79.493476 -57.755391,79.493476 -93.450185,-30.363806 0,-98.25934" transform="matrix(1.138413 1.360925-1.539158 1.287505 56.492851 165.484719)" fill="#ffafa5" strokeWidth="0"/>
                    <polygon points="0,-98.25934 93.450185,-30.363806 57.755391,79.493476 -57.755391,79.493476 -93.450185,-30.363806 0,-98.25934" transform="matrix(.786197 1.590596-1.798908 0.889161 80.24744 339.908492)" fill="#ffafa5" strokeWidth="0"/>
                    <path d="M20.972,95.594L78.577,49.643c.951-.76.951-2.367,0-3.127L20.968,0.56c-.689-.547-1.716-.709-2.61-.414-.186.061-.33.129-.436.186-.65.35-1.056,1.025-1.056,1.764v91.967c0,.736.405,1.414,1.056,1.762.109.06.253.127.426.185.903.295,1.933.134,2.624-.416Z" transform={isPostItBarOpen ? "matrix(1.93752 0 0 1.93752 114.577189 156.84779)" : "matrix(-1.93752 0 0 -1.93752 300.881839 343.15225)"} fill="#fff" style={{ transition: 'transform 0.2s ease' }}/>
                </svg>
            </div>
            {isOverlayOpen && (
                <div className="overlay">
                    <button onClick={closeOverlay} className="button">X</button>
                </div>
            )}
        </div>
    );
};

export default PostItBar;