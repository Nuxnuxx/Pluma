import React from 'react';

const ChapitreNodeComponent = (id, count, reactFlowInstance, reactFlowBounds, event) => {
    const position = reactFlowInstance.project({
        x: (event.clientX - reactFlowBounds.left) - 150,
        y: (event.clientY - reactFlowBounds.top) - 150,
    });

    return {
        id: `dndnode_chapitre_${count}`,
        type: 'chapitre',
        className: 'chapitre-node',
        position,
        data: {
            label: (
                <div>
                    <p>{`chapitre ${count} : "nomChapitre"`}</p>
                </div>
            ),
        },
    };
};

export default ChapitreNodeComponent;