// cards.js

const allCards = {
  react: [
    {
      question:
        "Explain the difference between controlled and uncontrolled components in React.",
      answer:
        "In a budgeting form, controlled components tied to useState ensure immediate validation; for file uploads, uncontrolled components accessed via refs work better.",
      question_pt:
        "Explique a diferença entre componentes controlados e não controlados no React.",
      answer_pt:
        "Em um formulário de orçamento, componentes controlados vinculados ao useState garantem validação imediata; para uploads de arquivos, componentes não controlados via refs funcionam melhor.",
    },
    {
      question:
        "How have you used custom hooks to share logic across components?",
      answer:
        "I created a useApi hook wrapping fetch for error handling and retries in multiple pages, reducing boilerplate.",
      question_pt:
        "Como você usou custom hooks para compartilhar lógica entre componentes?",
      answer_pt:
        "Criei um hook useApi que encapsula fetch com tratamento de erros e retries em várias páginas, reduzindo boilerplate.",
    },
    {
      question: "How do you manage form validation in React?",
      answer:
        "I use react-hook-form for its performance and schema validation with Zod, allowing precise control and minimal re-renders.",
      question_pt: "Como você gerencia validação de formulários no React?",
      answer_pt:
        "Uso react-hook-form por sua performance e integração com Zod, permitindo controle preciso e renderizações mínimas.",
    },
    {
      question: "What are React keys used for in lists?",
      answer:
        "Keys help React identify which items changed. I avoid using indexes when list order may change.",
      question_pt: "Para que servem as keys no React?",
      answer_pt:
        "Ajudam o React a identificar itens que mudaram. Evito usar índices quando a ordem da lista pode mudar.",
    },
    {
      question: "What is useMemo and when should you use it?",
      answer:
        "useMemo memoizes expensive computations. I used it to cache filtered results in a searchable table.",
      question_pt: "O que é useMemo e quando usá-lo?",
      answer_pt:
        "useMemo memoriza cálculos caros. Usei para cachear resultados filtrados em uma tabela com busca.",
    },
    {
      question: "How does useEffect work and what are its common pitfalls?",
      answer:
        "useEffect runs after render. Missing dependencies can cause bugs; I always lint with eslint-plugin-react-hooks.",
      question_pt: "Como funciona o useEffect e quais armadilhas comuns?",
      answer_pt:
        "useEffect executa após render. Dependências ausentes causam bugs; uso eslint-plugin-react-hooks para evitar.",
    },
    {
      question: "What is context and when do you use it?",
      answer:
        "Context lets you pass data through the tree without props. I use it for auth/user data across pages.",
      question_pt: "O que é context e quando usar?",
      answer_pt:
        "Permite passar dados sem props entre componentes. Uso para dados de autenticação e usuário.",
    },
    {
      question: "How do you optimize performance in a large React app?",
      answer:
        "Use memoization, code splitting with lazy/Suspense, and avoid unnecessary state in parents.",
      question_pt: "Como otimizar performance em um app React grande?",
      answer_pt:
        "Uso memoização, divisão de código com lazy/Suspense e evito estados desnecessários em pais.",
    },
    {
      question: "Explain React.lazy and Suspense.",
      answer:
        "React.lazy enables code-splitting by dynamically loading components; Suspense shows fallback while loading.",
      question_pt: "Explique React.lazy e Suspense.",
      answer_pt:
        "React.lazy permite dividir código carregando componentes dinamicamente; Suspense exibe fallback.",
    },
    {
      question: "What are the benefits of using TypeScript with React?",
      answer:
        "TypeScript improves safety and IDE support. I define props interfaces and use discriminated unions in complex forms.",
      question_pt: "Quais os benefícios de usar TypeScript com React?",
      answer_pt:
        "Aumenta segurança e suporte da IDE. Defino interfaces para props e uso unions em formulários complexos.",
    },
  ],
  node: [
    {
      question: "What is the event loop in Node.js?",
      answer:
        "The event loop handles asynchronous operations by delegating tasks to the system and executing callbacks in the call stack.",
      question_pt: "O que é o event loop no Node.js?",
      answer_pt:
        "O event loop lida com operações assíncronas delegando tarefas ao sistema e executando callbacks na pilha de chamadas.",
    },
    {
      question: "How do you handle async errors in Node.js?",
      answer:
        "Using try/catch with async/await and centralized error middleware in Express.",
      question_pt: "Como você lida com erros assíncronos no Node.js?",
      answer_pt:
        "Utilizo try/catch com async/await e middleware centralizado de erro no Express.",
    },
    {
      question: "What is the difference between require and import in Node.js?",
      answer:
        "require is CommonJS, import is ESModule. I use import in modern TypeScript projects.",
      question_pt: "Qual a diferença entre require e import no Node.js?",
      answer_pt:
        "require é CommonJS, import é ESModule. Uso import em projetos modernos com TypeScript.",
    },
    {
      question: "How do you secure environment variables in Node.js?",
      answer:
        "Using dotenv for local and AWS SSM for production, never committing .env files.",
      question_pt: "Como você protege variáveis de ambiente no Node.js?",
      answer_pt:
        "Uso dotenv localmente e AWS SSM em produção, nunca comito arquivos .env.",
    },
    {
      question: "How do you use streams in Node.js?",
      answer:
        "I use streams to process large files, like parsing CSVs line-by-line without loading everything in memory.",
      question_pt: "Como você usa streams no Node.js?",
      answer_pt:
        "Uso streams para processar arquivos grandes, como CSVs, linha a linha sem carregar tudo na memória.",
    },
    {
      question: "What is middleware in Express?",
      answer:
        "Middleware functions intercept requests. I use them for auth, logging, and validation.",
      question_pt: "O que é middleware no Express?",
      answer_pt:
        "Funções que interceptam requisições. Uso para autenticação, logs e validação.",
    },
    {
      question: "How do you handle file uploads in Node.js?",
      answer:
        "Using multer for parsing multipart/form-data and sending files to S3.",
      question_pt: "Como você lida com upload de arquivos no Node.js?",
      answer_pt:
        "Uso multer para multipart/form-data e envio dos arquivos para o S3.",
    },
    {
      question: "How do you cache data in Node.js apps?",
      answer:
        "I use Redis with TTL to store frequently accessed data like session info or API responses.",
      question_pt: "Como você faz cache de dados em apps Node.js?",
      answer_pt:
        "Uso Redis com TTL para armazenar dados acessados com frequência como sessões e respostas de API.",
    },
    {
      question: "What is a memory leak and how do you avoid it?",
      answer:
        "When memory isn’t released. I monitor usage with Chrome DevTools and close DB connections properly.",
      question_pt: "O que é um vazamento de memória e como evitá-lo?",
      answer_pt:
        "Quando a memória não é liberada. Monitoro com DevTools e fecho conexões com banco corretamente.",
    },
    {
      question: "What is clustering in Node.js?",
      answer:
        "Spawning multiple processes to utilize all CPU cores. I use PM2 or cluster module.",
      question_pt: "O que é clustering no Node.js?",
      answer_pt:
        "Criar múltiplos processos para usar todos os núcleos da CPU. Uso PM2 ou o módulo cluster.",
    },
  ],
  nest: [
    {
      question: "What is NestJS and why do you use it?",
      answer:
        "NestJS is a progressive Node.js framework using TypeScript and heavily inspired by Angular. I use it for its modularity and strong typing.",
      question_pt: "O que é NestJS e por que você usa?",
      answer_pt:
        "NestJS é um framework Node.js progressivo com TypeScript e inspirado no Angular. Uso por sua modularidade e tipagem forte.",
    },
    {
      question: "How does dependency injection work in NestJS?",
      answer:
        "NestJS uses decorators like @Injectable to inject services. It improves testability and separation of concerns.",
      question_pt: "Como funciona injeção de dependência no NestJS?",
      answer_pt:
        "NestJS usa decorators como @Injectable para injetar serviços. Isso melhora testabilidade e separação de responsabilidades.",
    },
    {
      question: "How do you structure a large NestJS application?",
      answer:
        "Using modules to separate features. I use Core, Auth, Shared, and Domain-specific modules.",
      question_pt: "Como você estrutura uma aplicação grande em NestJS?",
      answer_pt:
        "Uso módulos para separar funcionalidades: Core, Auth, Shared e módulos específicos do domínio.",
    },
    {
      question: "What is a provider in NestJS?",
      answer:
        "A provider is any class annotated with @Injectable that can be injected via the constructor.",
      question_pt: "O que é um provider no NestJS?",
      answer_pt:
        "Provider é qualquer classe com @Injectable que pode ser injetada no construtor.",
    },
    {
      question: "How do you handle validation in NestJS?",
      answer:
        "Using class-validator and class-transformer with DTOs and ValidationPipe.",
      question_pt: "Como você faz validação no NestJS?",
      answer_pt:
        "Uso class-validator e class-transformer com DTOs e ValidationPipe.",
    },
    {
      question: "How do you implement guards in NestJS?",
      answer:
        "I use @UseGuards with AuthGuard and custom role-based guards to restrict route access.",
      question_pt: "Como você implementa guards no NestJS?",
      answer_pt:
        "Uso @UseGuards com AuthGuard e guards personalizados baseados em roles para restringir acesso.",
    },
    {
      question: "How do you connect NestJS with a PostgreSQL database?",
      answer:
        "Using @nestjs/typeorm or @nestjs/sequelize modules with configuration in app.module.",
      question_pt: "Como conectar o NestJS com um banco PostgreSQL?",
      answer_pt:
        "Usando os módulos @nestjs/typeorm ou @nestjs/sequelize com configuração no app.module.",
    },
    {
      question: "How do you test a NestJS service?",
      answer:
        "Using Jest with mocked dependencies injected via Test.createTestingModule().",
      question_pt: "Como testar um service no NestJS?",
      answer_pt:
        "Uso Jest com dependências mockadas injetadas via Test.createTestingModule().",
    },
    {
      question: "How do you implement exception filters in NestJS?",
      answer:
        "Creating a class that implements ExceptionFilter and using @Catch decorator.",
      question_pt: "Como implementar exception filters no NestJS?",
      answer_pt:
        "Criando uma classe que implementa ExceptionFilter e usando o decorator @Catch.",
    },
    {
      question:
        "How do you expose a REST API and a GraphQL API simultaneously in NestJS?",
      answer:
        "I configure both GraphQLModule and standard @Controller routes; NestJS handles both.",
      question_pt:
        "Como expor uma API REST e uma GraphQL ao mesmo tempo no NestJS?",
      answer_pt:
        "Configuro tanto o GraphQLModule quanto rotas com @Controller; o NestJS lida com ambos.",
    },
  ],
  behavioral: [
     {
      question: "Tell me about a challenging project you worked on and how you handled it.",
      answer: "I led a refactoring initiative on a CMS API for Volkswagen. The challenge was ensuring the system supported multiple countries and permissions. I redesigned the data models and implemented permission layers, significantly improving flexibility.",
      question_pt: "Conte sobre um projeto desafiador que você trabalhou e como o lidou.",
      answer_pt: "Liderei uma iniciativa de refatoração em uma API CMS da Volkswagen. O desafio era garantir suporte a múltiplos países e permissões. Redesenhei os modelos de dados e implementei camadas de permissão, melhorando bastante a flexibilidade."
    },
    {
      question: "How do you manage deadlines when working on multiple tasks?",
      answer:
        "I prioritize tasks by impact and urgency, use project management tools to track progress, and communicate early if risks appear to ensure deadlines are met.",
      question_pt:
        "Como você gerencia prazos trabalhando em múltiplas tarefas?",
      answer_pt:
        "Priorizo tarefas por impacto e urgência, uso ferramentas de gestão para acompanhar progresso e comunico cedo caso riscos apareçam para garantir cumprimento dos prazos.",
    },
    {
      question: "Describe a time you had to learn a new technology quickly.",
      answer:
        "When adopting NestJS, I studied official docs, explored community examples, and refactored parts of an existing Node project incrementally to master it efficiently.",
      question_pt:
        "Descreva uma ocasião em que precisou aprender uma tecnologia nova rapidamente.",
      answer_pt:
        "Ao adotar NestJS, estudei a documentação oficial, explorei exemplos da comunidade e refatorei partes de um projeto Node existente de forma incremental para aprender eficientemente.",
    },
    {
      question: "How do you handle disagreements in a development team?",
      answer:
        "I listen actively, seek to understand all perspectives, and focus on data and best practices to guide decisions collaboratively.",
      question_pt:
        "Como você lida com discordâncias em uma equipe de desenvolvimento?",
      answer_pt:
        "Escuto ativamente, procuro entender todas as perspectivas e foco em dados e boas práticas para guiar decisões colaborativas.",
    },
    {
      question: "What motivates you as a senior developer?",
      answer:
        "Solving complex problems that impact users positively, mentoring juniors, and continuously improving code quality motivate me.",
      question_pt: "O que te motiva como desenvolvedor senior?",
      answer_pt:
        "Resolver problemas complexos que impactam positivamente usuários, mentorar juniores e melhorar continuamente a qualidade do código me motivam.",
    },
    {
      question: "How do you ensure your code is maintainable?",
      answer:
        "I follow SOLID principles, write clear tests, document complex parts, and participate in code reviews to keep codebase healthy.",
      question_pt: "Como garante que seu código é manutenível?",
      answer_pt:
        "Sigo princípios SOLID, escrevo testes claros, documento partes complexas e participo de code reviews para manter o código saudável.",
    },
    {
      question:
        "Tell me about a time you had to handle unexpected production issues.",
      answer:
        "In one case, a deployment caused service degradation; I quickly rolled back, analyzed logs to identify root cause, and fixed the bug with a hotfix and additional monitoring.",
      question_pt:
        "Fale sobre uma vez que teve que lidar com problemas inesperados em produção.",
      answer_pt:
        "Em um caso, uma implantação causou degradação do serviço; reverti rápido, analisei logs para achar a causa raiz e corrigi com hotfix e monitoramento extra.",
    },
    {
      question: "How do you stay updated with new technologies?",
      answer:
        "I follow blogs, attend webinars, participate in local dev groups, and experiment with new tools on side projects.",
      question_pt: "Como você se mantém atualizado com novas tecnologias?",
      answer_pt:
        "Sigo blogs, participo de webinars, grupos locais de devs e experimento novas ferramentas em projetos paralelos.",
    },
    {
      question:
        "Describe a situation where you improved a process or workflow.",
      answer:
        "I automated the deployment pipeline with Docker and Kubernetes, reducing manual errors and deployment time significantly.",
      question_pt:
        "Descreva uma situação onde você melhorou um processo ou fluxo de trabalho.",
      answer_pt:
        "Automatizei a pipeline de deploy com Docker e Kubernetes, reduzindo erros manuais e tempo de implantação significativamente.",
    },
    {
      question:
        "How do you balance writing new features and maintaining existing code?",
      answer:
        "I allocate time for technical debt alongside feature work, prioritize refactoring in planning, and discuss trade-offs openly with the team.",
      question_pt:
        "Como você equilibra desenvolver novas funcionalidades e manter o código existente?",
      answer_pt:
        "Reserve tempo para dívida técnica junto com novas features, priorizo refatorações no planejamento e discuto trade-offs abertamente com a equipe.",
    },
  ],
  cloud: [
    {
      question: "How do you manage secrets securely in AWS environments?",
      answer:
        "I use AWS Systems Manager Parameter Store with encryption enabled and restrict access via IAM policies, avoiding hardcoding secrets.",
      question_pt:
        "Como você gerencia segredos de forma segura em ambientes AWS?",
      answer_pt:
        "Uso o AWS Systems Manager Parameter Store com criptografia habilitada e restrinjo acesso via políticas IAM, evitando hardcoding.",
    },
    {
      question:
        "What strategies do you use for deploying applications in Kubernetes?",
      answer:
        "I use Helm charts for templating deployments, apply rolling updates for zero downtime, and monitor pods with readiness and liveness probes.",
      question_pt: "Quais estratégias você usa para deploys em Kubernetes?",
      answer_pt:
        "Uso Helm charts para template dos deployments, aplico rolling updates para zero downtime e monitoro pods com readiness e liveness probes.",
    },
    {
      question: "How do you implement CI/CD pipelines in cloud projects?",
      answer:
        "I use GitHub Actions or AWS CodePipeline integrating build, test, and deploy steps, with automated rollback on failures.",
      question_pt: "Como você implementa pipelines CI/CD em projetos na nuvem?",
      answer_pt:
        "Uso GitHub Actions ou AWS CodePipeline integrando build, teste e deploy, com rollback automático em falhas.",
    },
    {
      question: "Explain how you optimize cloud costs in your projects.",
      answer:
        "I analyze resource usage, implement auto-scaling, use spot instances where possible, and clean up unused resources regularly.",
      question_pt: "Explique como otimiza custos na nuvem em seus projetos.",
      answer_pt:
        "Analiso uso de recursos, implemento auto-scaling, uso spot instances quando possível e limpo recursos não usados regularmente.",
    },
    {
      question: "What is your experience with serverless architectures?",
      answer:
        "I developed AWS Lambda functions triggered by API Gateway, used DynamoDB as serverless DB, and integrated with SNS for async events.",
      question_pt: "Qual sua experiência com arquiteturas serverless?",
      answer_pt:
        "Desenvolvi funções AWS Lambda disparadas por API Gateway, usei DynamoDB como banco serverless e integrei SNS para eventos assíncronos.",
    },
    {
      question:
        "How do you monitor and log applications in cloud environments?",
      answer:
        "I set up CloudWatch logs and alarms, use centralized logging solutions like ELK or AWS OpenSearch, and implement custom metrics when needed.",
      question_pt: "Como você monitora e faz logging de aplicações na nuvem?",
      answer_pt:
        "Configuro CloudWatch logs e alarms, uso soluções centralizadas como ELK ou AWS OpenSearch, e implemento métricas customizadas quando preciso.",
    },
    {
      question: "Describe your approach to infrastructure as code.",
      answer:
        "I use Terraform and AWS CloudFormation to version and automate infrastructure provisioning, ensuring consistency across environments.",
      question_pt: "Descreva sua abordagem para infraestrutura como código.",
      answer_pt:
        "Uso Terraform e AWS CloudFormation para versionar e automatizar provisionamento da infraestrutura, garantindo consistência entre ambientes.",
    },
    {
      question: "How do you secure APIs deployed in the cloud?",
      answer:
        "I enforce authentication and authorization via AWS Cognito or API Gateway authorizers, use HTTPS, and apply WAF rules for protection.",
      question_pt: "Como você protege APIs implantadas na nuvem?",
      answer_pt:
        "Faço autenticação/autorização via AWS Cognito ou authorizers do API Gateway, uso HTTPS e aplico regras WAF para proteção.",
    },
    {
      question: "What are some common cloud migration challenges you've faced?",
      answer:
        "Handling data consistency, refactoring apps for statelessness, and managing downtime were key challenges I addressed through phased migration and robust testing.",
      question_pt:
        "Quais desafios comuns em migração para nuvem você enfrentou?",
      answer_pt:
        "Consistência de dados, refatorar apps para serem stateless e gerenciar downtime foram desafios que superei com migração em fases e testes rigorosos.",
    },
    {
      question:
        "How do you handle backups and disaster recovery in cloud systems?",
      answer:
        "I automate snapshots and backups using AWS Backup, test restores regularly, and design multi-region failover strategies for critical systems.",
      question_pt:
        "Como você gerencia backups e recuperação de desastres em sistemas na nuvem?",
      answer_pt:
        "Automatizo snapshots e backups com AWS Backup, testo restaurações regularmente e projeto estratégias de failover multi-região para sistemas críticos.",
    },
  ],
  microservices: [
    {
      question:
        "What are the main advantages of using microservices architecture?",
      answer:
        "Microservices allow independent development, deployment, and scaling of services, improving fault isolation and enabling diverse technologies.",
      question_pt:
        "Quais as principais vantagens da arquitetura de microservices?",
      answer_pt:
        "Microservices permitem desenvolvimento, deploy e escalonamento independentes, melhoram isolamento de falhas e permitem uso de tecnologias diversas.",
    },
    {
      question: "How do you handle inter-service communication?",
      answer:
        "I use asynchronous messaging with RabbitMQ or Kafka for loose coupling, and REST or gRPC for synchronous calls when low latency is critical.",
      question_pt: "Como você gerencia comunicação entre serviços?",
      answer_pt:
        "Uso mensagens assíncronas com RabbitMQ ou Kafka para desacoplamento e REST ou gRPC para chamadas síncronas quando a latência é crítica.",
    },
    {
      question: "How do you manage data consistency across microservices?",
      answer:
        "I implement eventual consistency with event sourcing and sagas patterns, avoiding distributed transactions to keep services decoupled.",
      question_pt:
        "Como você gerencia consistência de dados entre microservices?",
      answer_pt:
        "Implemento consistência eventual com event sourcing e padrões sagas, evitando transações distribuídas para manter desacoplamento.",
    },
    {
      question:
        "How do you monitor and troubleshoot microservices in production?",
      answer:
        "I use centralized logging, distributed tracing (e.g., OpenTelemetry), and alerting tools to identify bottlenecks and failures quickly.",
      question_pt:
        "Como você monitora e resolve problemas em microservices em produção?",
      answer_pt:
        "Uso logging centralizado, tracing distribuído (OpenTelemetry) e ferramentas de alerta para identificar gargalos e falhas rapidamente.",
    },
    {
      question: "What strategies do you use for deploying microservices?",
      answer:
        "I adopt CI/CD pipelines with containerization (Docker), orchestrated by Kubernetes, enabling rolling updates and canary deployments.",
      question_pt: "Quais estratégias você usa para deploy de microservices?",
      answer_pt:
        "Adoto pipelines CI/CD com containerização (Docker), orquestrados pelo Kubernetes, permitindo rolling updates e canary deployments.",
    },
    {
      question: "How do you ensure security between microservices?",
      answer:
        "I implement mutual TLS authentication, API gateways with token validation, and fine-grained IAM policies per service.",
      question_pt: "Como garante segurança entre microservices?",
      answer_pt:
        "Implemento autenticação mútua TLS, gateways de API com validação de tokens e políticas IAM granulares por serviço.",
    },
    {
      question: "How do you handle versioning of microservices APIs?",
      answer:
        "I use URI versioning and backward-compatible changes, deprecating old versions gradually to avoid breaking clients.",
      question_pt: "Como gerencia versionamento de APIs de microservices?",
      answer_pt:
        "Uso versionamento via URI e mudanças backward-compatible, depreciando versões antigas gradualmente para evitar quebras.",
    },
    {
      question:
        "What patterns do you use for fault tolerance in microservices?",
      answer:
        "I implement circuit breakers, retries with exponential backoff, and fallback mechanisms to improve resilience.",
      question_pt:
        "Quais padrões usa para tolerância a falhas em microservices?",
      answer_pt:
        "Implemento circuit breakers, retries com backoff exponencial e mecanismos de fallback para aumentar resiliência.",
    },
    {
      question: "How do you handle database management in microservices?",
      answer:
        "Each microservice owns its database to maintain independence, and data duplication is managed through events and synchronization patterns.",
      question_pt: "Como gerencia bancos de dados em microservices?",
      answer_pt:
        "Cada serviço possui seu banco para manter independência, e duplicação de dados é gerenciada via eventos e padrões de sincronização.",
    },
    {
      question: "How do you deal with deployment failures in microservices?",
      answer:
        "I automate rollback procedures, keep deployments atomic when possible, and monitor health to quickly revert problematic releases.",
      question_pt: "Como lida com falhas de deploy em microservices?",
      answer_pt:
        "Automatizo rollback, mantenho deploys atômicos quando possível e monitoro saúde para reverter rapidamente versões problemáticas.",
    },
  ],
  other: [
    {
      question: "What is the importance of writing unit tests?",
      answer:
        "Unit tests catch bugs early, document expected behavior, and facilitate safe refactoring.",
      question_pt: "Qual a importância de escrever testes unitários?",
      answer_pt:
        "Testes unitários capturam bugs cedo, documentam comportamento esperado e facilitam refatorações seguras.",
    },
    {
      question: "How do you handle state management in React applications?",
      answer:
        "I use React Context for simple cases, and Redux or Zustand for complex state with multiple data flows.",
      question_pt: "Como você gerencia estado em aplicações React?",
      answer_pt:
        "Uso React Context para casos simples e Redux ou Zustand para estados complexos com múltiplos fluxos de dados.",
    },
    {
      question: "What are RESTful APIs and their principles?",
      answer:
        "RESTful APIs follow stateless communication, use HTTP verbs properly, and expose resources via URLs.",
      question_pt: "O que são APIs RESTful e seus princípios?",
      answer_pt:
        "APIs RESTful seguem comunicação stateless, usam verbos HTTP adequadamente e expõem recursos via URLs.",
    },
    {
      question: "How do you optimize database queries?",
      answer:
        "By adding indexes, avoiding N+1 queries, caching frequent requests, and using query analyzers to find bottlenecks.",
      question_pt: "Como você otimiza consultas em banco de dados?",
      answer_pt:
        "Adicionando índices, evitando N+1, cacheando requisições frequentes e usando analisadores de query para achar gargalos.",
    },
    {
      question: "What is CORS and how do you handle it?",
      answer:
        "CORS is a browser security policy restricting cross-origin requests; I configure server headers to allow trusted domains.",
      question_pt: "O que é CORS e como você lida com ele?",
      answer_pt:
        "CORS é uma política de segurança do navegador que restringe requisições cross-origin; configuro headers no servidor para domínios confiáveis.",
    },
    {
      question: "What are web sockets and when do you use them?",
      answer:
        "WebSockets provide full-duplex communication channels, ideal for real-time features like chat or notifications.",
      question_pt: "O que são web sockets e quando usá-los?",
      answer_pt:
        "WebSockets permitem comunicação full-duplex, ideais para features em tempo real como chat ou notificações.",
    },
    {
      question: "How do you secure a web application?",
      answer:
        "By using HTTPS, sanitizing inputs, implementing authentication and authorization, and keeping dependencies updated.",
      question_pt: "Como você protege uma aplicação web?",
      answer_pt:
        "Usando HTTPS, sanitizando entradas, implementando autenticação e autorização, e mantendo dependências atualizadas.",
    },
    {
      question: "Explain the difference between SQL and NoSQL databases.",
      answer:
        "SQL databases use structured schemas and support complex queries; NoSQL are flexible, schema-less, and scale horizontally.",
      question_pt: "Explique a diferença entre bancos SQL e NoSQL.",
      answer_pt:
        "Bancos SQL têm schemas estruturados e suportam consultas complexas; NoSQL são flexíveis, sem schema fixo, e escalam horizontalmente.",
    },
    {
      question:
        "What are some common performance bottlenecks in web applications?",
      answer:
        "I/O operations, large payloads, inefficient database queries, blocking the event loop, and unoptimized rendering.",
      question_pt: "Quais gargalos comuns de performance em aplicações web?",
      answer_pt:
        "Operações I/O, payloads grandes, queries ineficientes, bloqueio do event loop e renderização não otimizada.",
    },
    {
      question: "How do you approach debugging a complex issue?",
      answer:
        "I reproduce the problem, check logs, isolate components step-by-step, and add temporary debug outputs to narrow down the cause.",
      question_pt: "Como você aborda o debug de um problema complexo?",
      answer_pt:
        "Reproduzo o problema, verifico logs, isolo componentes passo a passo e adiciono logs temporários para identificar a causa.",
    },
  ],
};
