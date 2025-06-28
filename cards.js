// cards.js

const topic = 'react';

const allCards = {
  react: [
    {
      question: "What is the difference between useEffect and useLayoutEffect?",
      answer: "useEffect runs after painting. useLayoutEffect runs synchronously before painting. LayoutEffect can block paint if heavy.",
      question_pt: "Qual a diferença entre useEffect e useLayoutEffect?",
      answer_pt: "useEffect executa após a renderização. useLayoutEffect é executado antes da pintura. Pode bloquear se for pesado."
    },
    {
      question: "What are React keys used for?",
      answer: "Keys help React identify which items have changed, are added, or are removed in a list.",
      question_pt: "Para que servem as keys no React?",
      answer_pt: "Ajudam o React a identificar quais itens mudaram, foram adicionados ou removidos em uma lista."
    },
    {
      question: "What is the virtual DOM?",
      answer: "The virtual DOM is a lightweight JS representation of the real DOM used by React to improve performance.",
      question_pt: "O que é o DOM virtual?",
      answer_pt: "Uma representação leve do DOM real, usada pelo React para melhorar a performance."
    },
    {
      question: "What does useMemo do?",
      answer: "It memoizes a computed value so it only recalculates when dependencies change.",
      question_pt: "Para que serve o useMemo?",
      answer_pt: "Memoriza um valor computado e só recalcula quando as dependências mudam."
    },
    {
      question: "What is a controlled component in React?",
      answer: "A component whose form data is handled by the React state.",
      question_pt: "O que é um componente controlado no React?",
      answer_pt: "É um componente cujo estado dos inputs é controlado pelo React."
    },
    {
      question: "What are React hooks?",
      answer: "Functions that let you use state and lifecycle methods in functional components.",
      question_pt: "O que são React hooks?",
      answer_pt: "Funções que permitem usar estado e ciclo de vida em componentes funcionais."
    },
    {
      question: "What is the purpose of useRef?",
      answer: "To persist values across renders without triggering a re-render. Also used for DOM access.",
      question_pt: "Para que serve o useRef?",
      answer_pt: "Para manter valores entre renders sem causar re-renderização. Também usado para acessar o DOM."
    },
    {
      question: "What is Context API in React?",
      answer: "A way to pass data through the component tree without prop drilling.",
      question_pt: "O que é a Context API do React?",
      answer_pt: "Uma forma de passar dados na árvore de componentes sem usar props manualmente."
    },
    {
      question: "What is React.StrictMode?",
      answer: "A wrapper that activates additional checks and warnings for its children.",
      question_pt: "O que é o React.StrictMode?",
      answer_pt: "Um envoltório que ativa verificações e avisos extras em tempo de desenvolvimento."
    },
    {
      question: "What does React.lazy do?",
      answer: "Allows lazy loading of components with dynamic import.",
      question_pt: "Para que serve o React.lazy?",
      answer_pt: "Permite carregar componentes de forma preguiçosa usando import dinâmico."
    }
  ],

  node: [
    {
      question: "What is the event loop in Node.js?",
      answer: "It handles async operations by offloading tasks and pushing callbacks when complete.",
      question_pt: "O que é o event loop no Node.js?",
      answer_pt: "É o mecanismo que gerencia operações assíncronas no Node.js."
    },
    {
      question: "What is the difference between process.nextTick() and setImmediate()?",
      answer: "nextTick runs before the event loop continues, setImmediate after current poll phase.",
      question_pt: "Qual a diferença entre process.nextTick() e setImmediate()?",
      answer_pt: "nextTick executa antes do loop continuar, setImmediate após a fase de polling."
    },
    {
      question: "What are streams in Node.js?",
      answer: "Streams are abstract interfaces for working with streaming data like reading/writing files.",
      question_pt: "O que são streams no Node.js?",
      answer_pt: "Interfaces para trabalhar com dados em fluxo, como leitura e escrita de arquivos."
    },
    {
      question: "What is middleware in Express?",
      answer: "Functions that execute during the lifecycle of a request to a server.",
      question_pt: "O que é middleware no Express?",
      answer_pt: "Funções que são executadas no meio do processamento de requisições."
    },
    {
      question: "How do you handle uncaught exceptions in Node.js?",
      answer: "Use process.on('uncaughtException', ...) and handle with care — process may be unstable.",
      question_pt: "Como lidar com exceções não capturadas no Node.js?",
      answer_pt: "Usando process.on('uncaughtException', ...), mas com cautela pois o processo pode ficar instável."
    },
    {
      question: "How do you improve Node.js app performance?",
      answer: "Use clustering, async operations, efficient DB queries, and caching.",
      question_pt: "Como melhorar a performance de uma app Node.js?",
      answer_pt: "Com clustering, operações assíncronas, consultas otimizadas e cache."
    },
    {
      question: "What is the use of package-lock.json?",
      answer: "It locks dependency versions for consistent installs across environments.",
      question_pt: "Para que serve o package-lock.json?",
      answer_pt: "Para travar versões de dependências e garantir instalações consistentes."
    },
    {
      question: "Difference between require and import?",
      answer: "require is CommonJS (sync), import is ESModules (async). Node supports both with configs.",
      question_pt: "Qual a diferença entre require e import?",
      answer_pt: "require é CommonJS (síncrono), import é ESModules (assíncrono). Node suporta ambos."
    },
    {
      question: "What is the role of the 'buffer' module in Node.js?",
      answer: "To handle binary data streams, especially for TCP or file operations.",
      question_pt: "Para que serve o módulo 'buffer' no Node.js?",
      answer_pt: "Para lidar com dados binários, como em conexões TCP ou arquivos."
    },
    {
      question: "What are some security best practices in Node.js?",
      answer: "Validate inputs, use HTTPS, avoid eval, use Helmet, rate-limit endpoints.",
      question_pt: "Boas práticas de segurança no Node.js?",
      answer_pt: "Validar entradas, usar HTTPS, evitar eval, usar Helmet e limitar requisições."
    }
  ],

  behavioral: [
    {
      question: "Tell me about a time you overcame a challenge at work.",
      answer: "Describe situation, your action, and the result. Show growth and impact.",
      question_pt: "Fale sobre um desafio que você superou no trabalho.",
      answer_pt: "Descreva a situação, sua ação e o resultado. Mostre aprendizado e impacto."
    },
    {
      question: "Why do you want to leave your current job?",
      answer: "Emphasize growth, new challenges, or values alignment. Never blame.",
      question_pt: "Por que você quer sair do seu emprego atual?",
      answer_pt: "Enfatize crescimento, novos desafios ou alinhamento de valores. Não culpe a empresa."
    },
    {
      question: "Where do you see yourself in 5 years?",
      answer: "Show ambition and alignment with company/team values.",
      question_pt: "Onde você se vê em 5 anos?",
      answer_pt: "Mostre ambição e alinhamento com os valores da empresa/equipe."
    },
    {
      question: "How do you handle conflicts in a team?",
      answer: "Communicate, listen, and find compromise or escalate respectfully.",
      question_pt: "Como você lida com conflitos em equipe?",
      answer_pt: "Comunicando, ouvindo, buscando acordo ou escalando com respeito."
    },
    {
      question: "How do you stay updated in tech?",
      answer: "Blogs, courses, docs, side projects, communities, meetups.",
      question_pt: "Como você se mantém atualizado em tecnologia?",
      answer_pt: "Blogs, cursos, documentação, projetos paralelos, comunidades e meetups."
    },
    {
      question: "What are your strengths and weaknesses?",
      answer: "Be honest, show self-awareness. Focus on improving areas.",
      question_pt: "Quais são seus pontos fortes e fracos?",
      answer_pt: "Seja honesto, mostre autoconhecimento e foco em melhorar seus pontos fracos."
    },
    {
      question: "Describe a successful project you led.",
      answer: "Explain goals, your role, how you managed it, and the outcomes.",
      question_pt: "Descreva um projeto de sucesso que você liderou.",
      answer_pt: "Explique os objetivos, sua função, como conduziu o projeto e os resultados."
    },
    {
      question: "How do you prioritize tasks?",
      answer: "By impact, deadlines, effort. Use tools, break tasks, revisit priorities.",
      question_pt: "Como você prioriza tarefas?",
      answer_pt: "Pelo impacto, prazos e esforço. Uso de ferramentas, divisão de tarefas e revisão constante."
    },
    {
      question: "What motivates you at work?",
      answer: "Learning, solving problems, collaboration, helping users.",
      question_pt: "O que te motiva no trabalho?",
      answer_pt: "Aprendizado, resolver problemas, colaborar e ajudar os usuários."
    },
    {
      question: "How do you deal with tight deadlines?",
      answer: "Stay focused, break down tasks, communicate risks early, and deliver MVP if needed.",
      question_pt: "Como você lida com prazos apertados?",
      answer_pt: "Mantendo o foco, dividindo tarefas, comunicando riscos e entregando MVP se necessário."
    }
  ]
};
