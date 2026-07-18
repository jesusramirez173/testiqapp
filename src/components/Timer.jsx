import React from 'react';
import { Clock } from 'lucide-react';

const Timer = ({ timeLeft, totalTime }) => {
  const percentage = (timeLeft / totalTime) * 100;
  
  // Formatear el tiempo como MM:SS
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Determinar color del gradiente basado en el tiempo restante
  let progressColor = 'linear-gradient(90deg, #00f2fe 0%, #4facfe 100%)'; // Azul neón por defecto
  let textColor = '#00f2fe';
  let glowColor = 'rgba(0, 242, 254, 0.4)';

  if (percentage < 25) {
    progressColor = 'linear-gradient(90deg, #ff0844 0%, #ffb199 100%)'; // Rojo neón crítico
    textColor = '#ff0844';
    glowColor = 'rgba(255, 8, 68, 0.5)';
  } else if (percentage < 50) {
    progressColor = 'linear-gradient(90deg, #f12711 0%, #f5af19 100%)'; // Naranja/Amarillo
    textColor = '#f5af19';
    glowColor = 'rgba(245, 175, 25, 0.4)';
  }

  return (
    <div className="timer-container" style={{ margin: '16px 0', width: '100%' }}>
      <div className="timer-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#e0e0e0' }}>
          <Clock size={18} color={textColor} className={timeLeft < 60 ? 'pulse' : ''} />
          <span style={{ fontSize: '14px', fontWeight: '500', letterSpacing: '0.5px' }}>Tiempo Restante</span>
        </div>
        <span style={{ fontSize: '18px', fontWeight: '700', fontFamily: 'monospace', color: textColor, textShadow: `0 0 10px ${glowColor}` }}>
          {formattedTime}
        </span>
      </div>
      <div className="progress-bar-bg" style={{ height: '8px', backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.03)' }}>
        <div 
          className="progress-bar-fill" 
          style={{ 
            height: '100%', 
            width: `${percentage}%`, 
            background: progressColor, 
            borderRadius: '4px',
            transition: 'width 1s linear',
            boxShadow: `0 0 8px ${glowColor}`
          }}
        />
      </div>
    </div>
  );
};

export default Timer;
