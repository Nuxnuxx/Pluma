import React, {useEffect, useRef} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../styles/StyleEcritureChapitre.scss"
import Toolbar from "../components/Toolbar/toolbar";
import PostItBar from "../components/PostItBar/postItBar";
import {Link} from "react-router-dom";

export default function EcritureChapitre() {
    const editorRef = useRef(null);
    const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const autosaveInterval = setInterval(Save, 300000);

        return () => clearInterval(autosaveInterval);
    }, []);

    const Save = () => {
        if (editorRef.current) {
            const content = editorRef.current.getContent();
            console.log(content);                            // REMPLACER PAR REQUETE SQL !!
        }
    };

    const goToChapter = (next) => {
        const projetParam = location.pathname.split('/')[3];
        let ChapterId = null;

        if(next)
            ChapterId = id + 1;
        else
            if (!isChapterOne) ChapterId = id - 1



        const newRoute = `/mon-espace/projet/${projetParam}/edition/${ChapterId}/ecriture`;

        navigate(newRoute);
    };

    const id = parseInt(location.pathname.split('/')[5], 10);
    const nomChapitre = "Il était une fois..."

    const isChapterOne = id === 1; // ou plus sûr numPremierChap dans BDD
    // const isLastChapter = id === numDernierChap; // BDD

    return (
        <div className="write-chapter">
            <Toolbar allOptions={false}/>
            <div className="write-chapter-content">
                <h3>Chapite {id} : {nomChapitre}</h3>
                <form className="write-chapter-textarea" id="write-chapter-form">

                    <Editor
                        className="textarea-tinymce"
                        onInit={(evt, editor) => {
                            editorRef.current = editor;
                            editorRef.current.formElement = document.getElementById('write-chapter-form');}}
                        apiKey='71wiknj441rhr2md3o44ea0s87fmdc3lmoa55fslxo4f9km3'
                        initialValue="<p>This is the initial content of the editor.</p>"
                        onSaveContent={Save}
                        init={{
                            selector: 'textarea-write-chapter',

                            height: '100%',
                            resize: false,
                            menubar: false,

                            plugins: 'searchreplace autolink autosave save ' +
                                'directionality visualchars fullscreen image ' +
                                'link media charmap pagebreak nonbreaking ' +
                                'wordcount charmap',

                            toolbar: "save | undo redo | fontfamily fontsize | " +
                                "bold italic underline strikethrough | forecolor backcolor | " +
                                "align outdent indent | charmap link image | pagebreak | cut copy paste selectall | searchreplace",

                            contextmenu: 'copy paste cut selectall',

                            language: 'fr_FR',

                            autosave_ask_before_unload: true,
                            autosave_interval: '60s',
                            autosave_prefix: '{path}{query}-{id}-',
                            autosave_restore_when_empty: false,
                            autosave_retention: '30m',

                            content_style: 'body { font-family:Arial, Helvetica, sans-serif; font-size:12pt }',

                            skin: useDarkMode ? 'oxide-dark' : 'oxide',
                            content_css: useDarkMode ? 'dark' : 'default',
                        }}
                    />
                    <button name="submitbtn"></button>
                </form>
                <div>
                    <div className="switch-chapter absolute flex bottom-2 ms-3 items-center">
                        <button onClick={() => goToChapter(false)} disabled={isChapterOne}>
                            <svg width="28" height="28" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12h14"></path>
                                <path d="m5 12 6 6"></path>
                                <path d="m5 12 6-6"></path>
                            </svg>
                        </button>
                        <p>{id}</p>
                        <button onClick={() => goToChapter(true)}> {/* disabled={isLastChapter} */}
                            <svg width="28" height="28" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12h14"></path>
                                <path d="m13 18 6-6"></path>
                                <path d="m13 6 6 6"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <PostItBar />
            <Link to={`../..`}>
                <button className="retour-salle-chapitres" onClick={Save}>
                    Retour à la salle des chapitres
                </button>
            </Link>
        </div>
    );
}