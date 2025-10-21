
import React from 'react';

interface IconProps {
    className?: string;
}

export const SparklesIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.25c.42 0 .82.12 1.16.33l1.83 1.05 1.05 1.83c.21.34.33.74.33 1.16s-.12.82-.33 1.16l-1.05 1.83-1.83 1.05c-.34.21-.74.33-1.16.33s-.82-.12-1.16-.33l-1.83-1.05L6.49 6.77c-.21-.34-.33-.74-.33-1.16s.12-.82.33-1.16l1.05-1.83 1.83-1.05c.34-.21.74-.33 1.16-.33zM3.75 9.75c.42 0 .82.12 1.16.33l1.83 1.05 1.05 1.83c.21.34.33.74.33 1.16s-.12.82-.33 1.16l-1.05 1.83-1.83 1.05c-.34.21-.74.33-1.16.33s-.82-.12-1.16-.33L.76 17.23l-1.05-1.83c-.21-.34-.33-.74-.33-1.16s.12-.82.33-1.16L.76 11.23l1.83-1.05c.34-.21.74-.33 1.16-.33zM18 9.75c.42 0 .82.12 1.16.33l1.83 1.05 1.05 1.83c.21.34.33.74.33 1.16s-.12.82-.33 1.16l-1.05 1.83-1.83 1.05c-.34.21-.74.33-1.16.33s-.82-.12-1.16-.33l-1.83-1.05-1.05-1.83c-.21-.34-.33-.74-.33-1.16s.12-.82.33-1.16l1.05-1.83 1.83-1.05c.34-.21.74-.33 1.16-.33z" />
    </svg>
);

export const ImageIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

export const AlertTriangleIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);
