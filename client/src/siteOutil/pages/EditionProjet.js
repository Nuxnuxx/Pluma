import React, {useCallback, useEffect, useState} from 'react';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import '../styles/EditionProjet.scss'
import Toolbar from '../components/Toolbar/toolbar';

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function EditionProjet() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isScreenTooSmall = screenWidth < 1023; // Exemple : seuil de 768 pixels


    return (
        <div>
        {isScreenTooSmall ? (
            <p>La taille de l'écran n'est pas adaptée pour afficher cette page.</p>
        ) : <div style={{ width: '87vw', height: '100vh' }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    fitView
                >
                    <Toolbar />
                    <Controls position="top-right" />

                    <MiniMap />
                    <Background variant="dots" gap={10} size={0.5} />
                </ReactFlow>
            </div>}
        </div>
    );
}
