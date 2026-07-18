import React, { useState, useEffect } from 'react';
import { Award, RotateCcw, Home, ChevronDown, ChevronUp, Check, X, ShieldAlert, Sparkles } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const ResultScreen = ({ questions, answers, timeLeft, onRestart, onGoHome }) => {
  const [userName, setUserName] = useState('');
  const [showReview, setShowReview] = useState(false);

  // Calcular número de respuestas correctas
  const correctCount = answers.reduce((acc, userChoice, idx) => {
    return userChoice === questions[idx].correctAnswerIndex ? acc + 1 : acc;
  }, 0);

  // Calcular Coeficiente Intelectual (IQ) estimado
  // Promedio de IQ es 100, Desviación Estándar es 15
  // Mapeamos de 65 a 145 puntos de IQ
  const baseIQ = 70;
  const correctFactor = (correctCount / questions.length) * 65; // Max 65
  const timeBonus = (timeLeft / (15 * 60)) * 10; // Max 10 por rapidez
  const estimatedIQ = Math.min(145, Math.max(65, Math.round(baseIQ + correctFactor + timeBonus)));

  // Determinar rango y descripción
  let rangeTitle = '';
  let rangeDesc = '';
  let themeColor = '';
  
  if (estimatedIQ >= 130) {
    rangeTitle = "Intelecto Muy Superior (Genio)";
    rangeDesc = "Tu rendimiento cognitivo se encuentra en el 2% superior de la población. Posees una excelente capacidad de abstracción, lógica y resolución de problemas complejos.";
    themeColor = "#ff007f"; // Rosa fucsia neón
  } else if (estimatedIQ >= 120) {
    rangeTitle = "Intelecto Superior";
    rangeDesc = "Muestras habilidades intelectuales muy por encima de la media. Procesas información de forma sumamente veloz y analítica.";
    themeColor = "#7f00ff"; // Violeta neón
  } else if (estimatedIQ >= 110) {
    rangeTitle = "Inteligencia Media Alta";
    rangeDesc = "Tu capacidad cognitiva es sólida y superior a la media de la población. Tienes muy buena destreza en tareas lógicas y lógico-verbales.";
    themeColor = "#00f2fe"; // Cian neón
  } else if (estimatedIQ >= 90) {
    rangeTitle = "Inteligencia Promedio";
    rangeDesc = "Tu puntuación se alinea perfectamente con la media general de la población. Posees las capacidades esperadas para resolver retos lógicos habituales.";
    themeColor = "#4facfe"; // Azul neón
  } else if (estimatedIQ >= 80) {
    rangeTitle = "Inteligencia Media Baja";
    rangeDesc = "Tu puntuación se sitúa ligeramente por debajo del promedio. Con un poco de práctica mental y entrenamiento cognitivo puedes potenciar tu agilidad.";
    themeColor = "#94a3b8"; // Gris suave
  } else {
    rangeTitle = "Bajo el Promedio";
    rangeDesc = "Tu puntuación indica dificultades en la resolución de algunos patrones y lógicas del test bajo presión. Recomendamos estimulación cognitiva constante.";
    themeColor = "#ef4444"; // Rojo neón
  }

  // Guardar puntuación en historial local al cargar la pantalla
  useEffect(() => {
    const saveToHistory = async () => {
      try {
        const historyData = localStorage.getItem('iq_test_history');
        const history = historyData ? JSON.parse(historyData) : [];
        
        const newRecord = {
          id: Date.now(),
          date: new Date().toLocaleDateString('es-ES', { 
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }),
          iq: estimatedIQ,
          correct: correctCount,
          total: questions.length,
          range: rangeTitle
        };

        const updatedHistory = [newRecord, ...history].slice(0, 20); // Guardar máximo 20
        localStorage.setItem('iq_test_history', JSON.stringify(updatedHistory));
      } catch (e) {
        console.error("Error guardando el historial", e);
      }
    };

    saveToHistory();
  }, [estimatedIQ, correctCount]);

  // Agrupar puntuación por categorías
  const categories = {};
  questions.forEach((q, idx) => {
    const catName = q.category === 'Lógico/Visual' ? 'Lógica Visual' : q.category;
    if (!categories[catName]) {
      categories[catName] = { total: 0, correct: 0 };
    }
    categories[catName].total += 1;
    if (answers[idx] === q.correctAnswerIndex) {
      categories[catName].correct += 1;
    }
  });

  return (
    <div className="content-area animate-fade-in" style={{ padding: '10px 0 30px' }}>
      {/* Encabezado */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div 
          style={{ 
            display: 'inline-flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            width: '70px', 
            height: '70px', 
            borderRadius: '50%', 
            background: `rgba(0, 242, 254, 0.1)`,
            border: `1px solid ${themeColor}`,
            boxShadow: `0 0 20px ${themeColor}33`,
            marginBottom: '15px'
          }}
        >
          <Award size={35} color={themeColor} />
        </div>
        <h2 style={{ fontSize: '26px', fontWeight: '800' }}>Resultados del Test</h2>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Calibración completada con éxito</p>
      </div>

      {/* Círculo de Puntuación de IQ */}
      <div className="score-circle" style={{ borderColor: themeColor, boxShadow: `0 0 25px ${themeColor}44` }}>
        <span style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: '700', letterSpacing: '1px' }}>Tu IQ</span>
        <span style={{ fontSize: '42px', fontWeight: '800', color: '#fff', margin: '-4px 0' }}>{estimatedIQ}</span>
        <span style={{ fontSize: '11px', color: themeColor, fontWeight: '700' }}>Rango: {estimatedIQ >= 100 ? '+' : ''}{estimatedIQ - 100}%</span>
      </div>

      {/* Tarjeta de Resumen */}
      <GlassCard style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h3 style={{ fontSize: '18px', color: themeColor, marginBottom: '8px' }}>{rangeTitle}</h3>
        <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.5' }}>{rangeDesc}</p>
        
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px', padding: '15px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div>
            <span style={{ display: 'block', fontSize: '20px', fontWeight: '700', color: '#fff' }}>{correctCount}/15</span>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Respuestas</span>
          </div>
          <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.05)' }} />
          <div>
            <span style={{ display: 'block', fontSize: '20px', fontWeight: '700', color: '#fff' }}>
              {Math.floor((15 * 60 - timeLeft) / 60)}m {((15 * 60 - timeLeft) % 60)}s
            </span>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Tiempo de prueba</span>
          </div>
        </div>
      </GlassCard>

      {/* Desglose por Categorías */}
      <GlassCard style={{ marginBottom: '20px' }}>
        <h4 style={{ fontSize: '15px', color: '#fff', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Sparkles size={16} color="#00f2fe" /> Rendimiento por Aptitud
        </h4>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {Object.keys(categories).map(catKey => {
            const cat = categories[catKey];
            const pct = Math.round((cat.correct / cat.total) * 100);
            
            let barColor = 'var(--color-primary)';
            if (catKey === 'Verbal') barColor = 'var(--color-secondary)';
            if (catKey === 'Lógica Visual') barColor = 'var(--color-accent)';

            return (
              <div key={catKey}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                  <span style={{ fontWeight: '600', color: '#cbd5e1' }}>{catKey}</span>
                  <span style={{ color: '#fff', fontWeight: '700' }}>{pct}% ({cat.correct}/{cat.total})</span>
                </div>
                <div style={{ height: '6px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div 
                    style={{ 
                      height: '100%', 
                      width: `${pct}%`, 
                      backgroundColor: barColor, 
                      borderRadius: '3px',
                      boxShadow: `0 0 6px ${barColor}aa`
                    }} 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </GlassCard>

      {/* Certificado Personalizable */}
      <GlassCard className="certificate" style={{ marginBottom: '24px' }}>
        <div className="certificate-glow" />
        <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--color-primary)', fontWeight: '800', display: 'block', marginBottom: '8px' }}>
          Certificado Oficial Digital
        </span>
        <h4 style={{ fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '15px', fontStyle: 'italic' }}>
          Acreditación de IQ Estimado
        </h4>

        {/* Input para personalizar */}
        <input 
          type="text" 
          placeholder="Escribe tu nombre aquí..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          maxLength={25}
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px',
            padding: '8px 12px',
            color: '#fff',
            fontSize: '14px',
            textAlign: 'center',
            width: '80%',
            marginBottom: '15px',
            outline: 'none',
            fontFamily: 'var(--font-body)'
          }}
        />

        <div style={{ borderTop: '1px dashed rgba(255,255,255,0.1)', borderBottom: '1px dashed rgba(255,255,255,0.1)', padding: '20px 0', margin: '5px 0' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '8px' }}>Se certifica que la persona con el nombre de:</p>
          <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#fff', minHeight: '33px', fontFamily: 'var(--font-title)' }}>
            {userName || 'Escribe tu Nombre'}
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '8px' }}>ha completado la evaluación de habilidades cognitivas, registrando un coeficiente de:</p>
          <span style={{ display: 'block', fontSize: '32px', fontWeight: '800', color: varColor(estimatedIQ), marginTop: '8px', textShadow: `0 0 15px ${varColor(estimatedIQ)}aa` }}>
            {estimatedIQ} Puntos (IQ)
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px', fontSize: '11px', color: 'var(--text-muted)' }}>
          <span>ID: #{Math.floor(Math.random() * 900000) + 100000}</span>
          <span>Fecha: {new Date().toLocaleDateString('es-ES')}</span>
        </div>
      </GlassCard>

      {/* Botones de Control */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
        <button className="btn-primary" onClick={onRestart} style={{ margin: 0 }}>
          <RotateCcw size={18} /> Repetir Test
        </button>
        <button className="btn-secondary" onClick={onGoHome} style={{ margin: 0 }}>
          <Home size={18} /> Volver al Inicio
        </button>
      </div>

      {/* Revisión de Preguntas Toggle */}
      <button 
        onClick={() => setShowReview(!showReview)}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          width: '100%',
          padding: '12px',
          background: 'none',
          border: 'none',
          color: 'var(--color-primary)',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '600'
        }}
      >
        {showReview ? (
          <>Ocultar Revisión de Respuestas <ChevronUp size={16} /></>
        ) : (
          <>Ver Explicación de Respuestas <ChevronDown size={16} /></>
        )}
      </button>

      {/* Panel de Revisión */}
      {showReview && (
        <div className="animate-slide-up" style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {questions.map((q, idx) => {
            const isCorrect = answers[idx] === q.correctAnswerIndex;
            return (
              <GlassCard key={q.id} style={{ padding: '16px', borderLeft: `4px solid ${isCorrect ? '#10b981' : '#ef4444'}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '700' }}>PREGUNTA {q.id}</span>
                  <span style={{ 
                    fontSize: '11px', 
                    fontWeight: '700', 
                    color: isCorrect ? '#10b981' : '#ef4444',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    {isCorrect ? <><Check size={14} /> Correcta</> : <><X size={14} /> Incorrecta</>}
                  </span>
                </div>
                
                <p style={{ fontSize: '14px', fontWeight: '600', color: '#fff', marginBottom: '12px' }}>{q.questionText}</p>
                
                {/* Mostrar la matriz SVG si la pregunta es de este tipo */}
                {q.type === 'matrix' && (
                  <div style={{ margin: '10px 0', display: 'flex', justifyContent: 'center' }}>
                    <SVGMatrix matrixId={q.matrixId} type="grid" size={130} />
                  </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', margin: '12px 0 10px', padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Tu respuesta:</span>
                    <span style={{ color: answers[idx] === null ? '#ef4444' : isCorrect ? '#10b981' : '#ffb199', fontWeight: '600' }}>
                      {answers[idx] === null ? 'Sin responder' : `${String.fromCharCode(65 + answers[idx])}. ${q.options[answers[idx]]}`}
                    </span>
                  </div>
                  {!isCorrect && (
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Respuesta correcta:</span>
                      <span style={{ color: '#10b981', fontWeight: '600' }}>
                        {String.fromCharCode(65 + q.correctAnswerIndex)}. {q.options[q.correctAnswerIndex]}
                      </span>
                    </div>
                  )}
                </div>
                
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.4', fontStyle: 'italic', borderLeft: '2px solid rgba(255,255,255,0.1)', paddingLeft: '8px' }}>
                  <strong>Explicación:</strong> {q.explanation}
                </p>
              </GlassCard>
            );
          })}
        </div>
      )}
    </div>
  );
};

// Función auxiliar para obtener el color en base al IQ
function varColor(iq) {
  if (iq >= 130) return "#ff007f";
  if (iq >= 120) return "#7f00ff";
  if (iq >= 110) return "#00f2fe";
  if (iq >= 90) return "#4facfe";
  if (iq >= 80) return "#cbd5e1";
  return "#ef4444";
}

export default ResultScreen;
