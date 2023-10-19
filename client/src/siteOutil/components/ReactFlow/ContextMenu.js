import React, { useCallback } from 'react';
import { useReactFlow } from 'reactflow';

export default function ContextMenu({ id, top, left, right, bottom, data, onDelete, type, ...props }) {
    const { getNode, setNodes, addNodes, setEdges } = useReactFlow();

    const duplicateNode = useCallback(() => {
        const node = getNode(id);
        const position = {
            x: node.position.x + 50,
            y: node.position.y + 50,
        };

        addNodes({ ...node, id: `${node.id}-copy`, position});
    }, [id, getNode, addNodes]);

    const deleteNode = useCallback(() => {
        setNodes((nodes) => nodes.filter((node) => node.id !== id));
        setEdges((edges) => edges.filter((edge) => edge.source !== id));

        if (type) {
            onDelete(id, type);
        }
    }, [id, setNodes, setEdges, onDelete, type]);

    return (
        <div style={{ top, left, right, bottom }} className="context-menu" {...props}>
            <p>
                <small>{data.label}</small>
            </p>
            <button>Editer</button> {/* onClick={/* editNode */}
            <button onClick={duplicateNode}>Dupliquer</button>
            <button onClick={deleteNode}>Supprimer</button>
        </div>
    );
}
