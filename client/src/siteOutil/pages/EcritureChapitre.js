import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import "../styles/StyleEcritureChapitre.scss"
import Toolbar from "../components/Toolbar/toolbar";
import PostItBar from "../components/PostItBar/postItBar";

export default function EcritureChapitre() {
    const editorRef = useRef(null);
    const useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    const id = 1
    const nomChapitre = "Il était une fois..."

    return (
        <div className="write-chapter">
            <Toolbar allOptions={false}/>
            <div className="write-chapter-content">
                <h3>Chapite {id} : {nomChapitre}</h3>
                <div className="write-chapter-textarea">
                    <Editor
                        className="textarea-tinymce"
                        onInit={(evt, editor) => editorRef.current = editor}
                        apiKey='71wiknj441rhr2md3o44ea0s87fmdc3lmoa55fslxo4f9km3'
                        initialValue="<p>This is the initial content of the editor.</p>"
                        init={{
                            selector: 'textarea-write-chapter',

                            height: '100%',
                            resize: false,
                            menubar: false,

                            plugins: 'preview searchreplace autolink autosave save ' +
                                'directionality visualchars fullscreen image ' +
                                'link media template charmap pagebreak nonbreaking ' +
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
                            autosave_retention: '2m',

                            content_style: 'body { font-family:Arial, Helvetica, sans-serif; font-size:12pt }',

                            skin: useDarkMode ? 'oxide-dark' : 'oxide',
                            content_css: useDarkMode ? 'dark' : 'default',
                        }}
                    />
                    <button onClick={log} style={{background: "red", color: "white", borderRadius: "10px", padding: "5px"}}>Envoyer dans les logs</button>
                </div>
            </div>
            <PostItBar />
            {/* ICI ZONE BLOC NOTE (CREER COMPONENT ??) */}
        </div>
    );
}