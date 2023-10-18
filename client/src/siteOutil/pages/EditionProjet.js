import React, {useCallback, useEffect, useRef, useState} from 'react';
import ReactFlow, {
    addEdge,
    Background,
    Controls,
    MiniMap,
    ReactFlowProvider,
    useEdgesState,
    useNodesState
} from 'reactflow';
import 'reactflow/dist/style.css';
import '../styles/EditionProjet.scss'
import Toolbar from '../components/Toolbar/toolbar';

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const idCounters = {
    chapitre: 1,
    acte: 1,
    personnage: 1,
    lieu: 1,
    evenement: 1,
    blocnote: 1
}

const getId = type => {
    const count = idCounters[type];
    idCounters[type]++;
    return `dndnode_${type}_${count}`;
}

export default function EditionProjet() {
    const reactFlowWrapper = useRef(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();

            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            const type = event.dataTransfer.getData('application/reactflow');

            if (typeof type === 'undefined' || !type) {
                return;
            }

            let newNode = {
                id: getId(type),
                type: type,
                className: `${type}-node`
            }

            function getPosition(offset_x, offset_y){
                return reactFlowInstance.project({
                    x: (event.clientX - reactFlowBounds.left) - offset_x,
                    y: (event.clientY - reactFlowBounds.top) - offset_y
                });
            }

            switch (type){
                case "chapitre":
                    newNode = {
                        ...newNode,
                        position: getPosition(150, 150),
                        data: { label: <div><p>{type + " " + (idCounters["chapitre"]-1)}</p><p>nomChapitre</p></div> }
                    };
                    break;
                case "acte":
                    newNode = {
                        ...newNode,
                        position: getPosition(150, 50),
                        data: { label: <div><p>{type + " " + (idCounters["acte"]-1)} : "nomActe"</p></div> },
                    };
                    break;
                case "personnage":
                    newNode = {
                        ...newNode,
                        position: getPosition(40, 40),
                        data: { label: <div><p>Prénom Nom</p></div> }
                    };
                    break;
                case "lieu":
                    newNode = {
                        ...newNode,
                        position: getPosition(50, 50),
                        data: { label: <div><p>Nom du lieu</p></div> },
                    };
                    break;
                case "evenement":
                    newNode = {
                        ...newNode,
                        position: getPosition(50, 50),
                        data: { label: <div><p>Résumé événement</p></div> }
                    };
                    break;
                case "blocnote":
                    newNode = {
                        ...newNode,
                        position: getPosition(120, 70),
                        data: { label: <div>
                                <div className="titre-blocnote">
                                    <p>Idée {(idCounters["blocnote"]-1)}</p>
                                </div>
                                <div className="contenu-blocnote">
                                    <p>Contenu du bloc-note</p>
                                </div>
                        </div> },
                    };
                    break;
                default:
                    return;
            }

            setNodes((nds) => nds.concat(newNode));
        },
        [setNodes, reactFlowInstance]
    );

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isScreenTooSmall = screenWidth < 1023;


    return (
        <div className="dndflow">
            {isScreenTooSmall ? (
                <p>La taille de l'écran n'est pas adaptée pour afficher cette page.</p>
            ) : <ReactFlowProvider>
                    <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                        <div style={{ width: '87vw', height: '100vh' }}>
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onConnect={onConnect}
                            onInit={setReactFlowInstance}
                            onDrop={onDrop}
                            onDragOver={onDragOver}
                            fitView
                        >
                            <Toolbar />
                            <Controls position="top-right" />
                            <MiniMap />
                            <Background variant="dots" gap={10} size={0.5} />
                        </ReactFlow>
                        </div>
                    </div>
            </ReactFlowProvider>}
        </div>
    );
}