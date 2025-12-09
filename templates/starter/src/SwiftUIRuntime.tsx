//
//  SwiftUIRuntime.tsx
//  Swift.js
//
//  Created by Aarav Gupta on 09/12/25.
//

// This effectively brings the "SwiftUI DX" to React
import React, { CSSProperties, ReactNode } from 'react';

// 1. The Spacer / Layout Shim
export const VStack = ({
    children,
    alignment = 'center',
    spacing = 0
}: { children: ReactNode, alignment?: string, spacing?: number }) => {
    
    const style: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: alignment === 'leading' ? 'flex-start' : alignment === 'trailing' ? 'flex-end' : 'center',
        gap: `${spacing}px`
    };

    return <div style={style}>{children}</div>;
};

// 2. The Basic Components
export const Text = ({ children }: { children: ReactNode }) => {
    return <span style={{ fontFamily: '-apple-system, sans-serif' }}>{children}</span>;
};

export const Button = ({ action, children }: { action: () => void, children: React.ReactNode }) => {
    return <button onClick={action}>{children}</button>;
};
