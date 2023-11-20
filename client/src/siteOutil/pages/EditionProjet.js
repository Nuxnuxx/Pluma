import React, {useCallback, useRef, useState} from 'react';
import ReactFlow, {addEdge, updateEdge, Background, Controls, MiniMap, ReactFlowProvider, useEdgesState, useNodesState} from 'reactflow';
import 'reactflow/dist/style.css';
import '../styles/EditionProjet.scss'
import Toolbar from '../components/Toolbar/toolbar';
import FloatingEdge from "../components/ReactFlow/FloatingEdge";
import CustomConnectionLine from "../components/ReactFlow/CustomConnectionLine";
import ContextMenu from "../components/ReactFlow/ContextMenu";

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
    const initialNodes = [];

    const initialEdges = [];

    const reactFlowWrapper = useRef(null);
    const ref = useRef(null);
    const edgeUpdateSuccessful = useRef(true);
    const [menu, setMenu] = useState(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    const onEdgeUpdateStart = useCallback(() => {
        edgeUpdateSuccessful.current = false;
    }, []);

    const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
        edgeUpdateSuccessful.current = true;
        setEdges((els) => updateEdge(oldEdge, newConnection, els));
    }, [setEdges]);

    const onEdgeUpdateEnd = useCallback((_, edge) => {
        if (!edgeUpdateSuccessful.current) {
            setEdges((eds) => eds.filter((e) => e.id !== edge.id));
        }

        edgeUpdateSuccessful.current = true;
    }, [setEdges]);

    const onNodeContextMenu = useCallback(
        (event, node) => {
            event.preventDefault();

            setMenu({
                id: node.id,
                top: event.clientY,
                left: event.clientX - 240,
                data: node.data,
                type: node.type,
            });
        },
        [setMenu]
    );

    const onEdgeContextMenu = useCallback(
        (event, edge) => {
            event.preventDefault();

            setMenu({
                id: edge.id,
                top: event.clientY,
                left: event.clientX - 240,
                data: edge.data,
                type: edge.type,
            });
        },
        [setMenu]
    );

    const onPaneClick = useCallback(() => setMenu(null), [setMenu]);

    const handleNodeDelete = useCallback((nodeId, type) => {
        setNodes((nodes) => nodes.filter((node) => node.id !== nodeId));
        setEdges((edges) => edges.filter((edge) => edge.source !== nodeId));

        if (idCounters[type] > 1) {
            idCounters[type]--;
        }
    }, [setNodes, setEdges]);

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

    const connectionLineStyle = {
        strokeWidth: 3,
        stroke: '#d6d6d6',
    };

    const edgeTypes = {
        floating: FloatingEdge,
    };

    const EdgeOptions = {
        style: { strokeWidth: 4, stroke: '#b26b5d'},
        type: 'floating',
    };

    return (
        <div className="dndflow">
            <ReactFlowProvider>
                    <div className="reactflow-wrapper" ref={reactFlowWrapper}>
                        <div style={{ width: '100%', height: '100%' }}>
                        <ReactFlow
                            ref={ref}
                            nodes={nodes}
                            edges={edges}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onEdgeUpdate={onEdgeUpdate}
                            onEdgeUpdateStart={onEdgeUpdateStart}
                            onEdgeUpdateEnd={onEdgeUpdateEnd}
                            onConnect={onConnect}
                            onInit={setReactFlowInstance}
                            onDrop={onDrop}
                            onDragOver={onDragOver}
                            onPaneClick={onPaneClick}
                            onNodeContextMenu={onNodeContextMenu}
                            onEdgeContextMenu={onEdgeContextMenu}
                            attributionPosition="bottom-left"
                            fitView
                            edgeTypes={edgeTypes}
                            defaultEdgeOptions={EdgeOptions}
                            connectionLineComponent={CustomConnectionLine}
                            connectionLineStyle={connectionLineStyle}
                        >
                            <Toolbar />
                            <Controls position="top-right" />
                            <MiniMap />
                            <Background variant="dots" gap={10} size={0.5} />
                            {menu && <ContextMenu onClick={onPaneClick} onDelete={handleNodeDelete} {...menu} />}
                        </ReactFlow>
                        </div>
                    </div>
            </ReactFlowProvider>}
        </div>
    );
}