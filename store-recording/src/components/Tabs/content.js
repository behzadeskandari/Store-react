import React from 'react';

export default function Content({ children, groupId, activeGroupId }) {
    return (
        <div
            style={{
                display: activeGroupId === groupId ? 'block' : 'none',
            }}
        >
            {children}
        </div>
    );
}

Content.displayName = 'Content';
