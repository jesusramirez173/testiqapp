import React, { useState, useEffect } from 'react';
import { ArrowLeft, Trash2, Calendar, Award, CheckCircle } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const HistoryScreen = ({ onGoHome }) => {
  const [history, setHistory] = useState([]);

  // Cargar historial de localStorage al iniciar
  useEffect(() => {
    const historyData = localStorage.getItem('iq_test_history');
    if (historyData) {
      setHistory(JSON.parse(historyData));
    }
  }, []);

  const handleClearHistory = () => {
    const confirmClear = window.confirm("¿Estás seguro de que deseas borrar todo tu historial de pruebas? Esta acción no se puede deshacer.");
    if (confirmClear) {
      localStorage.removeItem('iq_test_history');
      setHistory([]);
    }
  };

  // Función para obtener colores del puntaje de IQ
  const getIqColor = (iq) => {
    if (iq >= 130) return "#ff007f";
    if (iq >= 120) return "#7f00ff";
    if (iq >= 110) return "#00f2fe";
    if (iq >= 90) return "#4facfe";
    if (iq >= 80) return "#cbd5e1";
    return "#ef4444";
  };

  return (
    <div className="content-area animate-fade-in" style={{ padding: '10px 0' }}>
      {/* Cabecera */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
        <button 
          onClick={onGoHome}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'var(--text-muted)', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '4px', 
            cursor: 'pointer',
            fontSize: '13px'
          }}
        >
          <ArrowLeft size={16} /> Volver al Inicio
        </button>
        
        {history.length > 0 && (
          <button 
            onClick={handleClearHistory}
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#ef4444', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '4px', 
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '600'
            }}
          >
            <Trash2 size={16} /> Borrar Todo
          </button>
        )}
      </div>

      <h2 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '20px' }}>Tu Historial</h2>

      {history.length === 0 ? (
        /* Estado vacío */
        <GlassCard style={{ padding: '40px 20px', textAlign: 'center', marginBottom: '30px' }}>
          <div 
            style={{ 
              display: 'inline-flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              width: '60px', 
              height: '60px', 
              borderRadius: '50%', 
              backgroundColor: 'rgba(255,255,255,0.02)',
              border: '1px dashed rgba(255,255,255,0.1)',
              marginBottom: '15px',
              color: 'var(--text-muted)'
            }}
          >
            <Calendar size={24} />
          </div>
          <h4 style={{ fontSize: '16px', color: '#fff', marginBottom: '6px' }}>Sin registros aún</h4>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.4', maxWidth: '280px', margin: '0 auto' }}>
            Aún no has completado ningún test. Realiza tu primer test de IQ y tus resultados aparecerán en esta sección.
          </p>
        </GlassCard>
      ) : (
        /* Lista de intentos */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px', maxHeight: '60vh', overflowY: 'auto', paddingRight: '4px' }}>
          {history.map((record) => {
            const iqColor = getIqColor(record.iq);
            return (
              <GlassCard 
                key={record.id} 
                style={{ 
                  padding: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  borderLeft: `3px solid ${iqColor}`
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>
                    <Calendar size={12} />
                    <span>{record.date}</span>
                  </div>
                  <h4 style={{ fontSize: '14px', color: '#fff', marginBottom: '2px' }}>{record.range}</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--text-muted)' }}>
                    <CheckCircle size={12} color="#10b981" />
                    <span>{record.correct}/{record.total} correctas</span>
                  </div>
                </div>

                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <span style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: '700', letterSpacing: '0.5px' }}>IQ</span>
                  <span style={{ fontSize: '24px', fontWeight: '800', color: iqColor, textShadow: `0 0 10px ${iqColor}22` }}>{record.iq}</span>
                </div>
              </GlassCard>
            );
          })}
        </div>
      )}

      <button className="btn-primary" onClick={onGoHome}>
        Realizar un Test
      </button>
    </div>
  );
};

export default HistoryScreen;
