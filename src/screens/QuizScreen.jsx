import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, HelpCircle } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import Timer from '../components/Timer';
import SVGMatrix from '../components/SVGMatrix';

const TOTAL_TIME = 15 * 60; // 15 minutos en segundos

const QuizScreen = ({ questions, onSubmit, onBackToWelcome }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  
  const timerRef = useRef(null);

  // Efecto para el temporizador de cuenta regresiva
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          // Forzar envío cuando se agote el tiempo
          handleSubmit(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleSelectOption = (optionIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = optionIndex;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = (force = false) => {
    // Si no se fuerza por tiempo, confirmar que quiere enviar
    if (!force) {
      const unansweredCount = answers.filter(a => a === null).length;
      if (unansweredCount > 0) {
        const confirmSubmit = window.confirm(`Tienes ${unansweredCount} preguntas sin responder. ¿Estás seguro de que deseas finalizar el test?`);
        if (!confirmSubmit) return;
      }
    }
    
    if (timerRef.current) clearInterval(timerRef.current);
    onSubmit(answers, timeLeft);
  };

  const currentQuestion = questions[currentIndex];
  const progressPercent = ((currentIndex + 1) / questions.length) * 100;

  // Determinar la categoría para mostrar el color del badge adecuado
  const getCategoryBadge = (category) => {
    switch (category) {
      case 'Matemático':
        return <span className="badge badge-math">Matemáticas</span>;
      case 'Verbal':
        return <span className="badge badge-verbal">Verbal</span>;
      case 'Lógico/Visual':
      case 'Lógico':
      default:
        return <span className="badge badge-logical">Lógica</span>;
    }
  };

  return (
    <div className="content-area animate-slide-up" style={{ padding: '5px 0' }}>
      {/* Cabecera del Test */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <button 
          onClick={onBackToWelcome}
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
          <ArrowLeft size={16} /> Salir del Test
        </button>
        <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--color-primary)' }}>
          Pregunta {currentIndex + 1} de {questions.length}
        </span>
      </div>

      {/* Barra de progreso superior */}
      <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '2px', overflow: 'hidden', marginBottom: '15px' }}>
        <div 
          style={{ 
            height: '100%', 
            width: `${progressPercent}%`, 
            background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
            transition: 'width 0.3s ease'
          }} 
        />
      </div>

      {/* Temporizador */}
      <Timer timeLeft={timeLeft} totalTime={TOTAL_TIME} />

      {/* Tarjeta de Pregunta */}
      <GlassCard style={{ marginBottom: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {getCategoryBadge(currentQuestion.category)}
        </div>

        <p style={{ fontSize: '16px', fontWeight: '600', color: '#fff', marginBottom: '20px', lineHeight: '1.4' }}>
          {currentQuestion.questionText}
        </p>

        {/* Si es una pregunta tipo matriz visual, renderizamos el grid SVG */}
        {currentQuestion.type === 'matrix' && (
          <div style={{ margin: '15px 0 25px', display: 'flex', justifyContent: 'center' }}>
            <SVGMatrix matrixId={currentQuestion.matrixId} type="grid" size={200} />
          </div>
        )}

        {/* Contenedor de Opciones */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {currentQuestion.type === 'matrix' ? (
            /* Si es matriz visual, renderizamos las opciones en un formato grid visual de 2x2 */
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '12px', 
                marginTop: '10px' 
              }}
            >
              {currentQuestion.options.map((optionText, idx) => {
                const isSelected = answers[currentIndex] === idx;
                return (
                  <button
                    key={idx}
                    className={`option-button ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleSelectOption(idx)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '12px',
                      height: '110px',
                      margin: 0,
                      gap: '8px'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                      <span className="option-index" style={{ width: '20px', height: '20px', fontSize: '11px' }}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                    </div>
                    <SVGMatrix matrixId={currentQuestion.matrixId} type="option" optionIndex={idx} size={50} />
                  </button>
                );
              })}
            </div>
          ) : (
            /* Opciones tipo texto tradicionales */
            currentQuestion.options.map((optionText, idx) => {
              const isSelected = answers[currentIndex] === idx;
              return (
                <button
                  key={idx}
                  className={`option-button ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelectOption(idx)}
                >
                  <span className="option-index">{String.fromCharCode(65 + idx)}</span>
                  <span style={{ flex: 1 }}>{optionText}</span>
                </button>
              );
            })
          )}
        </div>
      </GlassCard>

      {/* Controles de Navegación del Test */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginTop: '10px' }}>
        <button 
          className="btn-secondary" 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
          style={{ flex: 1, opacity: currentIndex === 0 ? 0.3 : 1, padding: '14px 20px', margin: 0 }}
        >
          <ArrowLeft size={16} /> Anterior
        </button>

        {currentIndex === questions.length - 1 ? (
          <button 
            className="btn-accent animate-pulse" 
            onClick={() => handleSubmit(false)}
            style={{ flex: 1, padding: '14px 20px', margin: 0 }}
          >
            <CheckCircle size={16} /> Finalizar Test
          </button>
        ) : (
          <button 
            className="btn-primary" 
            onClick={handleNext}
            style={{ flex: 1, padding: '14px 20px', margin: 0 }}
          >
            Siguiente <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizScreen;
