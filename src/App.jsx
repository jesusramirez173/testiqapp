import React, { useState } from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import HistoryScreen from './screens/HistoryScreen';
import { questions } from './data/questions';
import { BrainCircuit } from 'lucide-react';

const App = () => {
  const [screen, setScreen] = useState('welcome');
  const [testAnswers, setTestAnswers] = useState([]);
  const [testTimeLeft, setTestTimeLeft] = useState(0);

  const handleStartTest = () => {
    setTestAnswers([]);
    setTestTimeLeft(0);
    setScreen('quiz');
  };

  const handleQuizSubmit = (answers, timeLeft) => {
    setTestAnswers(answers);
    setTestTimeLeft(timeLeft);
    setScreen('result');
  };

  const handleViewHistory = () => {
    setScreen('history');
  };

  const handleGoHome = () => {
    setScreen('welcome');
  };

  return (
    <div className="app-container">
      {/* Barra de Navegación Fija Premium */}
      <header className="nav-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BrainCircuit size={22} color="#00f2fe" style={{ filter: 'drop-shadow(0 0 8px rgba(0, 242, 254, 0.4))' }} />
          <span className="nav-title">COGNITIVA IQ</span>
        </div>
        <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
          v1.0.0
        </span>
      </header>

      {/* Renderizado Condicional de las Pantallas */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {screen === 'welcome' && (
          <WelcomeScreen 
            onStartTest={handleStartTest} 
            onViewHistory={handleViewHistory} 
          />
        )}
        
        {screen === 'quiz' && (
          <QuizScreen 
            questions={questions} 
            onSubmit={handleQuizSubmit} 
            onBackToWelcome={handleGoHome}
          />
        )}
        
        {screen === 'result' && (
          <ResultScreen 
            questions={questions} 
            answers={testAnswers} 
            timeLeft={testTimeLeft} 
            onRestart={handleStartTest}
            onGoHome={handleGoHome}
          />
        )}
        
        {screen === 'history' && (
          <HistoryScreen 
            onGoHome={handleGoHome} 
          />
        )}
      </main>

      {/* Pie de página sutil */}
      <footer style={{ textAlign: 'center', padding: '15px 0 5px', fontSize: '11px', color: 'rgba(255,255,255,0.2)', borderTop: '1px solid rgba(255,255,255,0.02)', marginTop: '20px' }}>
        © {new Date().getFullYear()} Cognitiva IQ. Algoritmo de Estimación Calibrada.
      </footer>
    </div>
  );
};

export default App;
