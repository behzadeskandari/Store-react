import React from 'react';

export default function Handle({ children, activeGroupId, groupId, onClick }) {
    return (
        <div
            style={{
                position: 'relative',
                display: 'inline-block',
                borderTop:
                    activeGroupId === groupId ? '1px solid lightgrey' : '',
                borderRight:
                    activeGroupId === groupId ? '1px solid lightgrey' : '',
                borderLeft:
                    activeGroupId === groupId ? '1px solid lightgrey' : '',
                color: activeGroupId === groupId ? 'red' : 'black',
                top: activeGroupId === groupId ? '2px' : 0,
                borderRadius: '3px',
                padding: '1rem 2rem',
                backgroundColor: 'white',
            }}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

Handle.displayName = 'Handle';
