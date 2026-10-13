export interface FunnelStage {
  id: string;
  stepNumber: number;
  name: string;
  shortSummary: string;
  functionDescription: string;
  measurableDataExample: string;
  nextPossibilities: string[];
  externalDependencyNote?: string;
  isClickStage?: boolean;
  isConversionStage?: boolean;
  badgeLabel: 'Demonstrativo' | 'Externo / Não Medido Aqui' | 'Estratégico';
}

export const FUNNEL_STAGES: FunnelStage[] = [
  {
    id: "proposito",
    stepNumber: 1,
    name: "Propósito",
    shortSummary: "Autonomia na prevenção e adaptação ambiental sem promessas irrealistas.",
    functionDescription: "Estabelecer a premissa ética e o foco temático da iniciativa. Comunicar que a EcoSyntropia não fabrica produtos nem vende eliminação de riscos, mas atua como curadora honesta de soluções práticas.",
    measurableDataExample: "DEMONSTRATIVO: Taxa de adesão conceitual e clareza da proposta percebida por pesquisas de percepção (métrica qualitativa).",
    nextPossibilities: [
      "Definição de novos temas de vulnerabilidade climática (ex.: ondas de calor, qualidade do ar)",
      "Publicação do manifesto de independência editorial",
      "Parcerias comunitárias com associações de bairro"
    ],
    badgeLabel: "Estratégico"
  },
  {
    id: "conteudo-marketing",
    stepNumber: 2,
    name: "Conteúdo e Marketing",
    shortSummary: "Informação educativa, desmistificação de métodos ineficazes e orientação direta.",
    functionDescription: "Disseminar orientações em linguagem simples com base em fontes oficiais (Anvisa, OMS, literatura científica). Atrair pessoas que buscam resolver um incômodo real sem usar apelos de pânico ou alarmismo.",
    measurableDataExample: "DEMONSTRATIVO: Visualizações estimadas de artigos educativos, compartilhamentos em redes e buscas orgânicas por termos de prevenção.",
    nextPossibilities: [
      "Produção de guias visuais em formato infográfico para impressão doméstica",
      "Parcerias com agentes comunitários de saúde",
      "Distribuição de alertas sazonais com dados oficiais de boletins meteorológicos"
    ],
    badgeLabel: "Estratégico"
  },
  {
    id: "publico-interessado",
    stepNumber: 3,
    name: "Público Interessado",
    shortSummary: "Visitantes buscando alternativas práticas para sua situação residencial ou pessoal.",
    functionDescription: "Acolher pessoas comuns (inquilinos, mães/pais de recém-nascidos, trabalhadores ao ar livre) que precisam de uma solução rápida sem precisar dominar termos técnicos de engenharia têxtil ou bioquímica.",
    measurableDataExample: "DEMONSTRATIVO: Visitantes únicos navegando pela matriz 'Como Escolher' e tempo de permanência nas recomendações práticas.",
    nextPossibilities: [
      "Criação de questionário interativo mais aprofundado com filtros de orçamento",
      "Canal direto para envio anônimo de dúvidas frequentes do público",
      "Agrupamento de necessidades por região bioclimática do Brasil"
    ],
    badgeLabel: "Estratégico"
  },
  {
    id: "curadoria-produtos",
    stepNumber: 4,
    name: "Curadoria de Produtos",
    shortSummary: "Seleção rigorosa de barreiras físicas e repelentes certificados no Brasil.",
    functionDescription: "Filtrar itens disponíveis no mercado brasileiro com base em critérios estritos: malha adequada (<= 1,2 mm), facilidade de instalação sem furar parede e regularização formal na Anvisa (para repelentes tópicos). Exclusão ativa de itens sem comprovação.",
    measurableDataExample: "DEMONSTRATIVO: Taxa de itens aprovados na curadoria técnica vs. itens reprovados por falta de respaldo sanitário.",
    nextPossibilities: [
      "Fichas técnicas comparativas de durabilidade de tecidos",
      "Checklist de fornecedores nacionais com pontualidade comprovada",
      "Selo de compatibilidade para janelas de correr, basculantes e portas pivotantes"
    ],
    badgeLabel: "Estratégico"
  },
  {
    id: "clique-afiliado",
    stepNumber: 5,
    name: "Clique em Link Afiliado",
    shortSummary: "O visitante decide consultar o produto na loja parceira recomendada.",
    functionDescription: "Transição do ambiente de orientação da EcoSyntropia para a página do produto na plataforma do fornecedor parceiro. Neste protótipo, os cliques são registrados apenas na memória local do seu navegador.",
    measurableDataExample: "DEMONSTRATIVO: Neste protótipo, medido pelo contador local do navegador (localStorage). O valor atual é demonstrativo.",
    nextPossibilities: [
      "Integração futura com tags de afiliados aprovadas em programas oficiais",
      "Monitoramento anônimo agregado de quais soluções despertam maior interesse de saída",
      "Página intermediária de confirmação com lembrete das limitações do produto"
    ],
    isClickStage: true,
    badgeLabel: "Demonstrativo"
  },
  {
    id: "compra-parceiro",
    stepNumber: 6,
    name: "Compra no Parceiro",
    shortSummary: "Decisão autônoma do consumidor concluída diretamente na loja do parceiro.",
    functionDescription: "A transação financeira, pagamento, entrega e emissão de nota fiscal ocorrem 100% no ambiente do varejista/farmácia parceira. A EcoSyntropia não processa pagamentos, não armazena dados de cartão nem gerencia logística.",
    measurableDataExample: "EXTERNO / NÃO MEDIDO AQUI: Taxa de conversão de compras atribuídas fornecida exclusivamente pelo relatório do programa de afiliados.",
    nextPossibilities: [
      "Importação manual periódica de relatórios agregados de conversão de cada programa",
      "Auditoria de consistência entre itens clicados e itens efetivamente faturados",
      "Verificação de índice de cancelamento ou devolução por inadequação"
    ],
    isConversionStage: true,
    externalDependencyNote: "Esta etapa depende exclusivamente de dados fornecidos pelo programa de parceiros (ex.: Amazon Associados, Magazine Luiza, etc.) e NÃO é mensurada nem monitorada dentro deste protótipo.",
    badgeLabel: "Externo / Não Medido Aqui"
  },
  {
    id: "comissao-elegivel",
    stepNumber: 7,
    name: "Comissão Elegível",
    shortSummary: "Remuneração percentual por compra atribuída segundo as regras do parceiro.",
    functionDescription: "Se e quando a compra for confirmada e não houver devolução dentro do prazo legal, o programa de afiliados atribui uma comissão percentual à EcoSyntropia. Um clique NÃO gera comissão automática.",
    measurableDataExample: "EXTERNO / NÃO MEDIDO AQUI: Valor repassado apurado nas faturas do programa parceiro, sujeito a regras de janela de atribuição de cookies (ex.: 24h a 30 dias).",
    nextPossibilities: [
      "Relatório semestral público de sustentabilidade financeira da iniciativa",
      "Reinvestimento de excedentes em pesquisa técnica independente e conteúdo aberto",
      "Transparência da taxa média de comissão por categoria de produto"
    ],
    isConversionStage: true,
    externalDependencyNote: "A elegibilidade e o pagamento de comissões são regidos pelos termos contratuais de cada programa externo. Um clique nunca deve ser confundido com compra ou comissão garantida.",
    badgeLabel: "Externo / Não Medido Aqui"
  },
  {
    id: "aprendizado-melhoria",
    stepNumber: 8,
    name: "Aprendizado e Melhoria",
    shortSummary: "Retroalimentação da curadoria com base nas soluções que realmente ajudaram as pessoas.",
    functionDescription: "Análise contínua das soluções que funcionaram bem, das dúvidas que continuam recorrentes e das limitações que precisam ser explicadas com maior clareza para o público.",
    measurableDataExample: "DEMONSTRATIVO: Taxa de refinamento de fichas técnicas e novos artigos criados a partir das lacunas observadas nas escolhas do público.",
    nextPossibilities: [
      "Exclusão de produtos cujos relatos de durabilidade foram insatisfatórios",
      "Criação de novos caminhos específicos (ex.: quartos de estudantes, pousadas costeiras)",
      "Ajuste na linguagem das matrizes de decisão para simplificar termos"
    ],
    badgeLabel: "Estratégico"
  }
];
