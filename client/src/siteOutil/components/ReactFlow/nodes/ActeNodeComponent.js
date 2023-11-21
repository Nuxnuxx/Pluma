import React from 'react';

const ActeNodeComponent = (id, count, reactFlowInstance, reactFlowBounds, event) => {
    const position = reactFlowInstance.project({
        x: (event.clientX - reactFlowBounds.left) - 150,
        y: (event.clientY - reactFlowBounds.top) - 50,
    });

    return {
        id: `dndnode_acte_${count}`,
        type: 'acte',
        className: 'acte-node',
        position,
        data: {
            label: (
                <div>
                    <p>acte {count} : "nomActe"</p>
                </div>
            ),
        },
    };
};

export default ActeNodeComponent;