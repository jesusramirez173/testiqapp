import React from 'react';

// Componente para renderizar formas geométricas individuales
const ShapeRenderer = ({ matrixId, row, col, index, size = 60 }) => {
  const strokeColor = '#00f2fe';
  const strokeWidth = 3;
  const strokeWidthThick = 6;
  const strokeWidthThin = 1.5;
  const fillColor = 'rgba(0, 242, 254, 0.1)';

  // Determinar si estamos renderizando una celda del grid o una opción
  const isOption = index !== undefined;
  
  // Si es una celda del grid, mapeamos su fila y columna al elemento lógico
  let itemType = '';
  if (!isOption) {
    if (matrixId === 'matrix_rotation') {
      // Rotación: 0 = top, 1 = right, 2 = bottom, 3 = left
      if (row === 0 && col === 0) itemType = 'rot_0';
      if (row === 0 && col === 1) itemType = 'rot_90';
      if (row === 0 && col === 2) itemType = 'rot_180';
      if (row === 1 && col === 0) itemType = 'rot_90';
      if (row === 1 && col === 1) itemType = 'rot_180';
      if (row === 1 && col === 2) itemType = 'rot_270';
      if (row === 2 && col === 0) itemType = 'rot_180';
      if (row === 2 && col === 1) itemType = 'rot_270';
      if (row === 2 && col === 2) itemType = 'question';
    } else if (matrixId === 'matrix_addition') {
      // Suma: vertical, horizontal, cruz; círculo, triángulo, círculo+triángulo; círculo, cruz, círculo+cruz
      if (row === 0 && col === 0) itemType = 'line_v';
      if (row === 0 && col === 1) itemType = 'line_h';
      if (row === 0 && col === 2) itemType = 'cross';
      if (row === 1 && col === 0) itemType = 'circle_only';
      if (row === 1 && col === 1) itemType = 'triangle_only';
      if (row === 1 && col === 2) itemType = 'circle_triangle';
      if (row === 2 && col === 0) itemType = 'circle_only';
      if (row === 2 && col === 1) itemType = 'cross_only';
      if (row === 2 && col === 2) itemType = 'question';
    } else if (matrixId === 'matrix_sequence') {
      // Secuencia: forma, tamaño, grosor
      if (row === 0 && col === 0) itemType = 'circle_l_t';
      if (row === 0 && col === 1) itemType = 'circle_m_m';
      if (row === 0 && col === 2) itemType = 'circle_s_tk';
      if (row === 1 && col === 0) itemType = 'square_l_t';
      if (row === 1 && col === 1) itemType = 'square_m_m';
      if (row === 1 && col === 2) itemType = 'square_s_tk';
      if (row === 2 && col === 0) itemType = 'triangle_l_t';
      if (row === 2 && col === 1) itemType = 'triangle_m_m';
      if (row === 2 && col === 2) itemType = 'question';
    } else if (matrixId === 'matrix_lines') {
      // Líneas: progresivas
      if (row === 0 && col === 0) itemType = 'lines_1';
      if (row === 0 && col === 1) itemType = 'lines_2';
      if (row === 0 && col === 2) itemType = 'lines_3';
      if (row === 1 && col === 0) itemType = 'lines_3';
      if (row === 1 && col === 1) itemType = 'lines_4';
      if (row === 1 && col === 2) itemType = 'lines_5';
      if (row === 2 && col === 0) itemType = 'lines_4';
      if (row === 2 && col === 1) itemType = 'lines_5';
      if (row === 2 && col === 2) itemType = 'question';
    }
  } else {
    // Si es una opción
    if (matrixId === 'matrix_rotation') {
      if (index === 0) itemType = 'rot_0'; // Correcta
      if (index === 1) itemType = 'rot_90';
      if (index === 2) itemType = 'rot_180';
      if (index === 3) itemType = 'rot_270';
    } else if (matrixId === 'matrix_addition') {
      if (index === 0) itemType = 'circle_only';
      if (index === 1) itemType = 'circle_cross'; // Correcta
      if (index === 2) itemType = 'circle_dot';
      if (index === 3) itemType = 'square_cross';
    } else if (matrixId === 'matrix_sequence') {
      if (index === 0) itemType = 'triangle_s_tk'; // Correcta
      if (index === 1) itemType = 'triangle_l_t';
      if (index === 2) itemType = 'triangle_s_t';
      if (index === 3) itemType = 'square_m_m';
    } else if (matrixId === 'matrix_lines') {
      if (index === 0) itemType = 'lines_5';
      if (index === 1) itemType = 'lines_6'; // Correcta
      if (index === 2) itemType = 'lines_7';
      if (index === 3) itemType = 'lines_8';
    }
  }

  const center = size / 2;
  const radius = size * 0.35;

  // Renderizado de las formas en base al tipo mapeado
  switch (itemType) {
    case 'question':
      return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <text 
            x="50%" 
            y="60%" 
            dominantBaseline="middle" 
            textAnchor="middle" 
            fill="#ff007f" 
            fontSize={size * 0.6} 
            fontWeight="bold"
            style={{ textShadow: '0 0 10px rgba(255, 0, 127, 0.5)' }}
          >
            ?
          </text>
        </svg>
      );

    // MATRIX ROTATION SHAPES
    case 'rot_0':
    case 'rot_90':
    case 'rot_180':
    case 'rot_270': {
      let dotX = center;
      let dotY = center - radius;
      if (itemType === 'rot_90') { dotX = center + radius; dotY = center; }
      if (itemType === 'rot_180') { dotX = center; dotY = center + radius; }
      if (itemType === 'rot_270') { dotX = center - radius; dotY = center; }
      return (
        <svg width={size} height={size}>
          <circle cx={center} cy={center} r={radius} stroke={strokeColor} strokeWidth={strokeWidth} fill={fillColor} />
          <circle cx={dotX} cy={dotY} r={size * 0.08} fill="#ff007f" />
        </svg>
      );
    }

    // MATRIX ADDITION SHAPES
    case 'line_v':
      return (
        <svg width={size} height={size}>
          <circle cx={center} cy={center} r={radius} stroke={strokeColor} strokeWidth={strokeWidth} fill={fillColor} />
          <line x1={center} y1={center - radius} x2={center} y2={center + radius} stroke={strokeColor} strokeWidth={strokeWidth} />
        </svg>
      );
    case 'line_h':
      return (
        <svg width={size} height={size}>
          <circle cx={center} cy={center} r={radius} stroke={strokeColor} strokeWidth={strokeWidth} fill={fillColor} />
          <line x1={center - radius} y1={center} x2={center + radius} y2={center} stroke={strokeColor} strokeWidth={strokeWidth} />
        </svg>
      );
    case 'cross':
    case 'circle_cross':
      return (
        <svg width={size} height={size}>
          <circle cx={center} cy={center} r={radius} stroke={strokeColor} strokeWidth={strokeWidth} fill={fillColor} />
          <line x1={center} y1={center - radius} x2={center} y2={center + radius} stroke={strokeColor} strokeWidth={strokeWidth} />
          <line x1={center - radius} y1={center} x2={center + radius} y2={center} stroke={strokeColor} strokeWidth={strokeWidth} />
        </svg>
      );
    case 'circle_only':
      return (
        <svg width={size} height={size}>
          <circle cx={center} cy={center} r={radius} stroke={strokeColor} strokeWidth={strokeWidth} fill={fillColor} />
        </svg>
      );
    case 'triangle_only': {
      const topY = center - radius;
      const bottomY = center + radius * 0.8;
      const leftX = center - radius * 0.9;
      const rightX = center + radius * 0.9;
      return (
        <svg width={size} height={size}>
          <polygon points={`${center},${topY} ${leftX},${bottomY} ${rightX},${bottomY}`} stroke={strokeColor} strokeWidth={strokeWidth} fill={fillColor} />
        </svg>
      );
    }
    case 'circle_triangle': {
      const topY = center - radius * 0.7;
      const bottomY = center + radius * 0.6;
      const leftX = center - radius * 0.6;
      const rightX = center + radius * 0.6;
      return (
        <svg width={size} height={size}>
          <circle cx={center} cy={center} r={radius} stroke={strokeColor} strokeWidth={strokeWidth} fill={fillColor} />
          <polygon points={`${center},${topY} ${leftX},${bottomY} ${rightX},${bottomY}`} stroke="#ff007f" strokeWidth={strokeWidth} fill="none" />
        </svg>
      );
    }
    case 'cross_only':
      return (
        <svg width={size} height={size}>
          <line x1={center} y1={center - radius} x2={center} y2={center + radius} stroke={strokeColor} strokeWidth={strokeWidth} />
          <line x1={center - radius} y1={center} x2={center + radius} y2={center} stroke={strokeColor} strokeWidth={strokeWidth} />
        </svg>
      );
    case 'circle_dot':
      return (
        <svg width={size} height={size}>
          <circle cx={center} cy={center} r={radius} stroke={strokeColor} strokeWidth={strokeWidth} fill={fillColor} />
          <circle cx={center} cy={center} r={size * 0.08} fill="#ff007f" />
        </svg>
      );
    case 'square_cross': {
      const offset = radius * 0.9;
      return (
        <svg width={size} height={size}>
          <rect x={center - offset} y={center - offset} width={offset * 2} height={offset * 2} stroke={strokeColor} strokeWidth={strokeWidth} fill={fillColor} />
          <line x1={center} y1={center - offset} x2={center} y2={center + offset} stroke={strokeColor} strokeWidth={strokeWidth} />
          <line x1={center - offset} y1={center} x2={center + offset} y2={center} stroke={strokeColor} strokeWidth={strokeWidth} />
        </svg>
      );
    }

    // MATRIX SEQUENCE (Sizes and thickness)
    // circle_l_t (large thin), circle_m_m (medium medium), circle_s_tk (small thick)
    case 'circle_l_t':
      return (
        <svg width={size} height={size}>
          <circle cx={center} cy={center} r={radius * 1.1} stroke={strokeColor} strokeWidth={strokeWidthThin} fill={fillColor} />
        </svg>
      );
    case 'circle_m_m':
      return (
        <svg width={size} height={size}>
          <circle cx={center} cy={center} r={radius * 0.8} stroke={strokeColor} strokeWidth={strokeWidth} fill={fillColor} />
        </svg>
      );
    case 'circle_s_tk':
      return (
        <svg width={size} height={size}>
          <circle cx={center} cy={center} r={radius * 0.5} stroke={strokeColor} strokeWidth={strokeWidthThick} fill={fillColor} />
        </svg>
      );
    case 'square_l_t': {
      const offset = radius * 1.0;
      return (
        <svg width={size} height={size}>
          <rect x={center - offset} y={center - offset} width={offset * 2} height={offset * 2} stroke={strokeColor} strokeWidth={strokeWidthThin} fill={fillColor} />
        </svg>
      );
    }
    case 'square_m_m': {
      const offset = radius * 0.75;
      return (
        <svg width={size} height={size}>
          <rect x={center - offset} y={center - offset} width={offset * 2} height={offset * 2} stroke={strokeColor} strokeWidth={strokeWidth} fill={fillColor} />
        </svg>
      );
    }
    case 'square_s_tk': {
      const offset = radius * 0.5;
      return (
        <svg width={size} height={size}>
          <rect x={center - offset} y={center - offset} width={offset * 2} height={offset * 2} stroke={strokeColor} strokeWidth={strokeWidthThick} fill={fillColor} />
        </svg>
      );
    }
    case 'triangle_l_t': {
      const topY = center - radius * 1.1;
      const bottomY = center + radius * 0.9;
      const leftX = center - radius * 1.0;
      const rightX = center + radius * 1.0;
      return (
        <svg width={size} height={size}>
          <polygon points={`${center},${topY} ${leftX},${bottomY} ${rightX},${bottomY}`} stroke={strokeColor} strokeWidth={strokeWidthThin} fill={fillColor} />
        </svg>
      );
    }
    case 'triangle_m_m': {
      const topY = center - radius * 0.8;
      const bottomY = center + radius * 0.7;
      const leftX = center - radius * 0.8;
      const rightX = center + radius * 0.8;
      return (
        <svg width={size} height={size}>
          <polygon points={`${center},${topY} ${leftX},${bottomY} ${rightX},${bottomY}`} stroke={strokeColor} strokeWidth={strokeWidth} fill={fillColor} />
        </svg>
      );
    }
    case 'triangle_s_tk': {
      const topY = center - radius * 0.5;
      const bottomY = center + radius * 0.5;
      const leftX = center - radius * 0.5;
      const rightX = center + radius * 0.5;
      return (
        <svg width={size} height={size}>
          <polygon points={`${center},${topY} ${leftX},${bottomY} ${rightX},${bottomY}`} stroke={strokeColor} strokeWidth={strokeWidthThick} fill={fillColor} />
        </svg>
      );
    }
    case 'triangle_s_t': {
      const topY = center - radius * 0.5;
      const bottomY = center + radius * 0.5;
      const leftX = center - radius * 0.5;
      const rightX = center + radius * 0.5;
      return (
        <svg width={size} height={size}>
          <polygon points={`${center},${topY} ${leftX},${bottomY} ${rightX},${bottomY}`} stroke={strokeColor} strokeWidth={strokeWidthThin} fill={fillColor} />
        </svg>
      );
    }

    // MATRIX LINES (Line progressions)
    case 'lines_1':
      return (
        <svg width={size} height={size}>
          <line x1={center} y1={center - radius} x2={center} y2={center + radius} stroke={strokeColor} strokeWidth={strokeWidth} />
        </svg>
      );
    case 'lines_2':
      return (
        <svg width={size} height={size}>
          <polyline points={`${center - radius},${center + radius} ${center},${center - radius} ${center + radius},${center + radius}`} stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
        </svg>
      );
    case 'lines_3': {
      const topY = center - radius;
      const bottomY = center + radius * 0.8;
      const leftX = center - radius * 0.9;
      const rightX = center + radius * 0.9;
      return (
        <svg width={size} height={size}>
          <polygon points={`${center},${topY} ${leftX},${bottomY} ${rightX},${bottomY}`} stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
        </svg>
      );
    }
    case 'lines_4': {
      const offset = radius * 0.8;
      return (
        <svg width={size} height={size}>
          <rect x={center - offset} y={center - offset} width={offset * 2} height={offset * 2} stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
        </svg>
      );
    }
    case 'lines_5': {
      const points = [];
      for (let i = 0; i < 5; i++) {
        const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
        points.push(`${center + radius * Math.cos(angle)},${center + radius * Math.sin(angle)}`);
      }
      return (
        <svg width={size} height={size}>
          <polygon points={points.join(' ')} stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
        </svg>
      );
    }
    case 'lines_6': {
      const points = [];
      for (let i = 0; i < 6; i++) {
        const angle = (i * 2 * Math.PI) / 6 - Math.PI / 2;
        points.push(`${center + radius * Math.cos(angle)},${center + radius * Math.sin(angle)}`);
      }
      return (
        <svg width={size} height={size}>
          <polygon points={points.join(' ')} stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
        </svg>
      );
    }
    case 'lines_7': {
      const points = [];
      for (let i = 0; i < 7; i++) {
        const angle = (i * 2 * Math.PI) / 7 - Math.PI / 2;
        points.push(`${center + radius * Math.cos(angle)},${center + radius * Math.sin(angle)}`);
      }
      return (
        <svg width={size} height={size}>
          <polygon points={points.join(' ')} stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
        </svg>
      );
    }
    case 'lines_8': {
      const points = [];
      for (let i = 0; i < 8; i++) {
        const angle = (i * 2 * Math.PI) / 8 - Math.PI / 2;
        points.push(`${center + radius * Math.cos(angle)},${center + radius * Math.sin(angle)}`);
      }
      return (
        <svg width={size} height={size}>
          <polygon points={points.join(' ')} stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
        </svg>
      );
    }

    default:
      return null;
  }
};

const SVGMatrix = ({ matrixId, type = 'grid', optionIndex, size = 240 }) => {
  if (type === 'option') {
    return (
      <div className="svg-option-renderer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ShapeRenderer matrixId={matrixId} index={optionIndex} size={size} />
      </div>
    );
  }

  // Si es tipo 'grid', renderiza la matriz 3x3
  const cellSize = size / 3;

  return (
    <div 
      className="matrix-grid" 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        gap: '8px',
        width: `${size}px`,
        height: `${size}px`,
        margin: '0 auto',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        borderRadius: '16px',
        padding: '12px',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.4)'
      }}
    >
      {[0, 1, 2].map(row => 
        [0, 1, 2].map(col => (
          <div 
            key={`${row}-${col}`} 
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: row === 2 && col === 2 ? 'rgba(255, 0, 127, 0.05)' : 'rgba(255, 255, 255, 0.03)',
              borderRadius: '8px',
              border: row === 2 && col === 2 ? '1px dashed rgba(255, 0, 127, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
              overflow: 'hidden'
            }}
          >
            <ShapeRenderer matrixId={matrixId} row={row} col={col} size={cellSize - 10} />
          </div>
        ))
      )}
    </div>
  );
};

export default SVGMatrix;
