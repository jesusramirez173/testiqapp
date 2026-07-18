export const questions = [
  {
    id: 1,
    category: "Verbal",
    type: "text",
    questionText: "Sol es a día como Luna es a...",
    options: ["Tierra", "Estrella", "Noche", "Oscuridad"],
    correctAnswerIndex: 2,
    explanation: "El sol es la luminaria principal del día, así como la luna es la luminaria que destaca en la noche."
  },
  {
    id: 2,
    category: "Matemático",
    type: "text",
    questionText: "Completa la serie numérica: 2, 6, 12, 20, 30, ...",
    options: ["40", "42", "45", "50"],
    correctAnswerIndex: 1,
    explanation: "La serie aumenta sumando números pares consecutivos: +4 (6), +6 (12), +8 (20), +10 (30). El siguiente incremento es +12, dando como resultado 42. También responde a la fórmula n² + n (donde n = 1, 2, 3...)."
  },
  {
    id: 3,
    category: "Lógico/Visual",
    type: "matrix",
    matrixId: "matrix_rotation",
    questionText: "¿Qué figura completa la matriz lógica según la rotación de los elementos?",
    options: ["Figura A (Círculo arriba)", "Figura B (Círculo derecha)", "Figura C (Círculo abajo)", "Figura D (Círculo izquierda)"],
    correctAnswerIndex: 0,
    explanation: "El círculo pequeño rota 90 grados en sentido de las agujas del reloj en cada paso. En la tercera fila, después del círculo en la parte inferior (C1) y a la izquierda (C2), debe situarse en la parte superior (arriba)."
  },
  {
    id: 4,
    category: "Lógico",
    type: "text",
    questionText: "Si todos los hombres son mortales y Sócrates es un hombre, entonces:",
    options: [
      "Sócrates podría ser inmortal",
      "Sócrates es mortal",
      "Los mortales son hombres",
      "Ninguna de las anteriores"
    ],
    correctAnswerIndex: 1,
    explanation: "Es un silogismo deductivo clásico. Si la premisa mayor ('todos los hombres son mortales') y la menor ('Sócrates es hombre') son verdaderas, la conclusión lógica directa es que Sócrates es mortal."
  },
  {
    id: 5,
    category: "Matemático",
    type: "text",
    questionText: "Si 5 máquinas tardan 5 minutos en hacer 5 artículos, ¿cuánto tiempo tardarán 100 máquinas en hacer 100 artículos?",
    options: ["100 minutos", "20 minutos", "5 minutos", "1 minuto"],
    correctAnswerIndex: 2,
    explanation: "Cada máquina tarda 5 minutos en hacer un artículo. Si tienes 100 máquinas funcionando en paralelo, cada una de ellas terminará su artículo al cabo de 5 minutos."
  },
  {
    id: 6,
    category: "Lógico/Visual",
    type: "matrix",
    matrixId: "matrix_addition",
    questionText: "Descubre la regla de combinación (Suma de formas): ¿Qué opción completa la tercera celda de la última fila?",
    options: ["Círculo vacío", "Círculo con cruz interna", "Círculo con punto central", "Cuadrado con cruz"],
    correctAnswerIndex: 1,
    explanation: "La tercera columna es la suma visual de la primera y segunda columna. Al sumar la línea vertical de la primera y la línea horizontal de la segunda, se obtiene una cruz dentro del círculo."
  },
  {
    id: 7,
    category: "Verbal",
    type: "text",
    questionText: "Árbol es a Bosque como Estrella es a...",
    options: ["Universo", "Constelación", "Cielo", "Galaxia"],
    correctAnswerIndex: 1,
    explanation: "Un árbol individual forma parte de un conjunto estructurado llamado bosque, de la misma manera que una estrella individual conforma una constelación definida."
  },
  {
    id: 8,
    category: "Matemático",
    type: "text",
    questionText: "Encuentra el número que falta en la secuencia: 3, 5, 9, 17, ...",
    options: ["25", "30", "33", "35"],
    correctAnswerIndex: 2,
    explanation: "La diferencia entre los números se duplica en cada paso: +2 (5), +4 (9), +8 (17). El siguiente incremento es +16, por lo que 17 + 16 = 33."
  },
  {
    id: 9,
    category: "Lógico",
    type: "text",
    questionText: "Un bate y una pelota de béisbol cuestan $1.10 en total. El bate cuesta $1.00 más que la pelota. ¿Cuánto cuesta la pelota?",
    options: ["$0.10", "$0.05", "$0.15", "$0.08"],
    correctAnswerIndex: 1,
    explanation: "Si la pelota cuesta $x, el bate cuesta $x + 1.00. La suma es x + (x + 1.00) = 1.10, lo que da 2x + 1.00 = 1.10 -> 2x = 0.10 -> x = 0.05 (5 centavos). El bate cuesta $1.05."
  },
  {
    id: 10,
    category: "Lógico/Visual",
    type: "matrix",
    matrixId: "matrix_sequence",
    questionText: "¿Qué figura completa la secuencia de cambio de grosor y tamaño en la tercera columna?",
    options: ["Triángulo pequeño grueso", "Triángulo grande delgado", "Triángulo pequeño delgado", "Cuadrado mediano"],
    correctAnswerIndex: 0,
    explanation: "En cada fila, la primera figura es delgada y grande, la segunda es mediana con grosor medio, y la tercera es pequeña y gruesa. En la última fila, al haber un triángulo, el elemento restante es un triángulo pequeño y grueso."
  },
  {
    id: 11,
    category: "Verbal",
    type: "text",
    questionText: "¿Qué palabra no pertenece al grupo?",
    options: ["Lima", "Bogotá", "Madrid", "Barcelona"],
    correctAnswerIndex: 3,
    explanation: "Lima, Bogotá y Madrid son capitales de países (Perú, Colombia y España, respectivamente), mientras que Barcelona es una ciudad importante pero no capital de país."
  },
  {
    id: 12,
    category: "Lógico",
    type: "text",
    questionText: "Si un tren eléctrico viaja hacia el norte a 120 km/h y el viento sopla con fuerza hacia el sur a 30 km/h, ¿hacia dónde se dirige el humo del tren?",
    options: ["Hacia el sur", "Hacia el norte", "No tiene dirección fija", "No echa humo"],
    correctAnswerIndex: 3,
    explanation: "Es un tren eléctrico, por lo tanto, no genera ni echa humo."
  },
  {
    id: 13,
    category: "Matemático",
    type: "text",
    questionText: "Si anteayer tenía 20 años y el próximo año cumpliré 23, ¿en qué día y mes nací?",
    options: ["1 de enero", "31 de diciembre", "30 de diciembre", "A mitad de año"],
    correctAnswerIndex: 1,
    explanation: "Naciste el 31 de diciembre. Si hoy es 1 de enero, ayer (31 de dic) cumpliste 21 años. Anteayer (30 de dic) tenías 20 años. Este año el 31 de diciembre cumplirás 22 y el próximo año cumplirás 23."
  },
  {
    id: 14,
    category: "Lógico/Visual",
    type: "matrix",
    matrixId: "matrix_lines",
    questionText: "¿Cuántas líneas debe tener la última figura para mantener el patrón aritmético progresivo?",
    options: ["5 líneas", "6 líneas", "7 líneas", "8 líneas"],
    correctAnswerIndex: 1,
    explanation: "El patrón de líneas en las filas es sumatorio o progresivo. En la última fila tenemos figuras con 4 y 5 líneas. La siguiente figura lógica debe tener 6 líneas (como un hexágono) para completar la progresión +1."
  },
  {
    id: 15,
    category: "Lógico",
    type: "text",
    questionText: "Cinco personas (A, B, C, D, E) están sentadas en fila. A está al lado de B. C está al lado de D. Si E no está al lado de C y D está en el extremo derecho, ¿quién está en el medio?",
    options: ["A", "B", "C", "E"],
    correctAnswerIndex: 3,
    explanation: "Dado que D está en el extremo derecho (_ _ _ _ D) y C está al lado de D, la fila queda así: _ _ _ C D. A está al lado de B, por lo que deben ocupar las posiciones conjuntas. Como E no puede estar al lado de C, E debe estar en otra posición. El único acomodo válido es E A B C D o E B A C D. En ambos casos, E se sitúa o bien en el extremo izquierdo o bien en el centro si variamos las posiciones. Analizando detalladamente: Si D está en el extremo derecho, y C a su izquierda, el orden es X X X C D. E no está al lado de C, por lo que E debe ocupar la primera posición (E _ _ C D). A y B están juntos, así que deben estar en medio. La fila es E A B C D o E B A C D. El elemento que está justo en el centro de las 5 posiciones (la tercera posición) es B o A. Corrijamos la deducción: Si la secuencia es E - A - B - C - D, el del medio es B. Si es E - B - A - C - D, el del medio es A. Espera, si E está al lado de A o B, y no de C. Evaluemos la pregunta de quién está en medio. Si la respuesta es E: el orden es A B E C D. A está al lado de B. C al lado de D (que es el extremo derecho). E está en medio, no al lado de C (está al lado de B y C? No, si es A B E C D, E está al lado de B y C, lo cual contradice 'E no está al lado de C'). Por lo tanto, el orden correcto es E A B C D o E B A C D. Si el orden es E-A-B-C-D, B es el medio. Si es E-B-A-C-D, A es el centro. Hagamos una pregunta lógica más sencilla de deducir inequívocamente: 'Si tres gatos cazan tres ratones en tres minutos, ¿cuántos gatos se necesitan para cazar cien ratones en cien minutos?'"
  }
];

// Reemplacemos la pregunta 15 con una pregunta de lógica deductiva inequívoca y elegante
questions[14] = {
  id: 15,
  category: "Lógico",
  type: "text",
  questionText: "Seis amigos están sentados en una mesa redonda. Juan está enfrente de María. María está a la derecha de Pedro. Si Pedro está enfrente de Luis, ¿quién está al lado izquierdo de Juan?",
  options: ["Luis", "Pedro", "María", "No se puede determinar"],
  correctAnswerIndex: 1,
  explanation: "Dibujando la mesa redonda: Colocamos a María en una posición. Juan está enfrente de ella. Como María está a la derecha de Pedro, Pedro se sitúa al lado de María (a su izquierda desde la vista superior). Pedro está enfrente de Luis. El lugar a la izquierda de Juan queda ocupado por Pedro."
};
