import React from 'react';

const PersonnageNodeComponent = (id, count, reactFlowInstance, reactFlowBounds, event) => {
    const position = reactFlowInstance.project({
        x: (event.clientX - reactFlowBounds.left) - 40,
        y: (event.clientY - reactFlowBounds.top) - 40,
    });

    return {
        id: `dndnode_personnage_${id}`,
        type: 'personnage',
        className: 'personnage-node',
        position,
        data: {
            label: (
                <div>
                    <p>Prénom Nom</p>
                </div>
            ),
        },
    };
};

export default PersonnageNodeComponent;