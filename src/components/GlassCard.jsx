import React from 'react';

const GlassCard = ({ children, className = '', style = {} }) => {
  return (
    <div 
      className={`glass-card ${className}`} 
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(16px) saturate(120%)',
        WebkitBackdropFilter: 'blur(16px) saturate(120%)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '24px',
        padding: '24px',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default GlassCard;
