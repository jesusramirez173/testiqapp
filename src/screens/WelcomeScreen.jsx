import React from 'react';
import { Brain, Play, History, Info, Sparkles } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const WelcomeScreen = ({ onStartTest, onViewHistory }) => {
  return (
    <div className="content-area animate-fade-in" style={{ padding: '10px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        {/* Icono de Cerebro Flotante Animado */}
        <div 
          className="float-element" 
          style={{ 
            display: 'inline-flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            width: '100px', 
            height: '100px', 
            borderRadius: '30px', 
            background: 'linear-gradient(135deg, rgba(127, 0, 255, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            marginBottom: '20px'
          }}
        >
          <Brain size={50} color="#00f2fe" style={{ filter: 'drop-shadow(0 0 12px rgba(0, 242, 254, 0.6))' }} />
        </div>

        <h1 style={{ fontSize: '36px', fontWeight: '800', lineHeight: '1.2', marginBottom: '8px' }}>
          IQ Test <span style={{ background: 'linear-gradient(90deg, #00f2fe, #ff007f)', WebkitBackgroundClip: 'text', WebkitTextFill-color: 'transparent', WebkitTextFillColor: 'transparent' }}>Premium</span>
        </h1>
        
        <p style={{ fontSize: '15px', color: 'var(--text-muted)', maxWidth: '320px', margin: '0 auto' }}>
          Evalúa tus habilidades cognitivas con un test científico de 15 preguntas de lógica, matemáticas y lenguaje.
        </p>
      </div>

      <GlassCard style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: '#fff' }}>
          <Sparkles size={18} color="#ff007f" /> ¿Cómo funciona el test?
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(0, 242, 254, 0.1)', borderRadius: '8px', padding: '6px', color: '#00f2fe', flexShrink: 0 }}>
              <span style={{ fontSize: '14px', fontWeight: 'bold' }}>15</span>
            </div>
            <div>
              <h4 style={{ fontSize: '14px', color: '#fff', marginBottom: '2px' }}>Preguntas Seleccionadas</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Reactivos distribuidos equitativamente por área intelectual.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(255, 0, 127, 0.1)', borderRadius: '8px', padding: '6px', color: '#ff007f', flexShrink: 0 }}>
              <span style={{ fontSize: '14px', fontWeight: 'bold' }}>15m</span>
            </div>
            <div>
              <h4 style={{ fontSize: '14px', color: '#fff', marginBottom: '2px' }}>Límite de Tiempo</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Cuentas con 15 minutos en total. La velocidad influye en tu puntuación de IQ.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(127, 0, 255, 0.1)', borderRadius: '8px', padding: '6px', color: '#7f00ff', flexShrink: 0 }}>
              <span style={{ fontSize: '14px', fontWeight: 'bold' }}>IQ</span>
            </div>
            <div>
              <h4 style={{ fontSize: '14px', color: '#fff', marginBottom: '2px' }}>Puntuación Estimada</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Resultado calibrado en escala de campana de Gauss estándar (IQ promedio 100).</p>
            </div>
          </div>
        </div>
      </GlassCard>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button className="btn-primary" onClick={onStartTest}>
          <Play size={18} fill="currentColor" /> Comenzar Test
        </button>
        
        <button className="btn-secondary" onClick={onViewHistory}>
          <History size={18} /> Ver Historial
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px', marginTop: '24px', color: 'var(--text-muted)', fontSize: '12px' }}>
        <Info size={12} />
        <span>No se recopila información personal</span>
      </div>
    </div>
  );
};

export default WelcomeScreen;
