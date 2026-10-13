export type BridgeState = 'planejado' | 'demonstrativo' | 'configurado' | 'validado';

export interface BridgeItem {
  id: string;
  name: string;
  group: 'AGORA' | 'PRÓXIMO' | 'FUTURO' | 'PESQUISA';
  state: BridgeState;
  description: string;
  researchDisclaimer?: string;
  manualUpdateNote: string;
}

export const BRIDGE_GROUPS = [
  { id: 'AGORA', label: 'Agora (Fundação do Protótipo)', description: 'Recursos essenciais já prototipados na interface.' },
  { id: 'PRÓXIMO', label: 'Próximo (Validação Operacional)', description: 'Etapas seguintes de viabilização comercial e diálogo com o público.' },
  { id: 'FUTURO', label: 'Futuro (Expansão de Escopo)', description: 'Expansão para novos nichos ambientais e alianças diretas.' },
  { id: 'PESQUISA', label: 'Pesquisa (Investigação Científica)', description: 'Investigação aprofundada de literatura sem qualquer alegação comercial precipitada.' },
] as const;

/**
 * REGRAS ESTRITAS DESTA RODADA:
 * 1. Todo item começa OBRIGATORIAMENTE como 'planejado' ou 'demonstrativo'.
 * 2. NENHUM item inicia como 'configurado' ou 'validado'.
 * 3. Itens do grupo PESQUISA possuem obrigatoriamente o aviso:
 *    "Sem alegação de eficácia até haver evidência avaliada."
 */
export const ROADMAP_BRIDGES_DATA: BridgeItem[] = [
  // --- GRUPO AGORA ---
  {
    id: "agora-pagina-marca",
    name: "Página da marca",
    group: "AGORA",
    state: "demonstrativo",
    description: "Identidade visual, propósito de autonomia preventiva e modelo conceitual da iniciativa com nome editável centralizado.",
    manualUpdateNote: "Prototipada na interface com dados demonstrativos."
  },
  {
    id: "agora-catalogo-demo",
    name: "Catálogo demonstrativo",
    group: "AGORA",
    state: "demonstrativo",
    description: "Seleção curada de barreiras físicas (Casa, Sono Protegido, Campo) e repelentes regulares com limitações e especificações técnicas visíveis.",
    manualUpdateNote: "Operando em modo demonstrativo com placeholders deリンク."
  },
  {
    id: "agora-conteudo-educativo",
    name: "Conteúdo educativo",
    group: "AGORA",
    state: "demonstrativo",
    description: "Orientações práticas fundamentadas em fontes de saúde pública (Anvisa, OMS), desmistificação de ineficazes e incertezas climáticas declaradas.",
    manualUpdateNote: "Estruturado com dados documentais reais e limitações declaradas."
  },
  {
    id: "agora-links-afiliado-configuraveis",
    name: "Links de afiliado configuráveis",
    group: "AGORA",
    state: "planejado",
    description: "Estrutura de links parametrizados para inserção de identificadores oficiais de programas de afiliados parceiros.",
    manualUpdateNote: "Aguardando cadastro formal e homologação em programas externos."
  },
  {
    id: "agora-metricas-cliques",
    name: "Métricas básicas de cliques",
    group: "AGORA",
    state: "demonstrativo",
    description: "Contador local no navegador (localStorage) para testar o fluxo de cliques sem rastreadores externos nem backend.",
    manualUpdateNote: "Funcional no navegador, estritamente local e rotulado como demonstrativo."
  },

  // --- GRUPO PRÓXIMO ---
  {
    id: "proximo-integracao-afiliados",
    name: "Integração com programas de afiliados",
    group: "PRÓXIMO",
    state: "planejado",
    description: "Contratação e homologação em redes de afiliados de varejistas e redes farmacêuticas operando legalmente no território brasileiro.",
    manualUpdateNote: "Planejado para rodada subsequente de expansão operacional."
  },
  {
    id: "proximo-produtos-brasil",
    name: "Identificação de produtos disponíveis no Brasil",
    group: "PRÓXIMO",
    state: "planejado",
    description: "Mapeamento contínuo de disponibilidade em estoque e prazos de entrega reais no comércio nacional.",
    manualUpdateNote: "Planejado para checagem periódica com fornecedores nacionais."
  },
  {
    id: "proximo-comparacao-finalidade-orcamento",
    name: "Comparação de opções por finalidade e orçamento",
    group: "PRÓXIMO",
    state: "planejado",
    description: "Aprofundamento da matriz 'Como Escolher' com cruzamento detalhado entre custo de instalação e durabilidade das malhas.",
    manualUpdateNote: "Estrutura inicial esboçada; detalhamento numérico planejado."
  },
  {
    id: "proximo-analise-perguntas-publico",
    name: "Análise de perguntas e interesses do público",
    group: "PRÓXIMO",
    state: "planejado",
    description: "Mecanismo anônimo e ético para receber as dúvidas reais das pessoas sobre vedação domiciliar e hábitos de proteção.",
    manualUpdateNote: "Planejado para implantação sem coleta de dados invasivos."
  },

  // --- GRUPO FUTURO ---
  {
    id: "futuro-novos-nichos-ambientais",
    name: "Novos nichos de preparação ambiental",
    group: "FUTURO",
    state: "planejado",
    description: "Expansão da curadoria para ondas de calor extremo, vedação contra fumaça/queimadas e qualidade da água domiciliar.",
    manualUpdateNote: "Planejado para fases posteriores após consolidação do nicho de mosquitos."
  },
  {
    id: "futuro-parcerias-fabricantes",
    name: "Parcerias diretas com fabricantes e fornecedores",
    group: "FUTURO",
    state: "planejado",
    description: "Diálogo com indústrias nacionais de telas técnicas e têxteis para viabilizar condições mais acessíveis para a população.",
    manualUpdateNote: "Planejado para estágio maduro da iniciativa."
  },
  {
    id: "futuro-kits-montados-parceiros",
    name: "Kits montados por parceiros",
    group: "FUTURO",
    state: "planejado",
    description: "Combinações práticas (ex.: kit vedação janela + vedação porta) fornecidas em pacote único por distribuidores credenciados.",
    manualUpdateNote: "Planejado para validação comercial conjunta."
  },
  {
    id: "futuro-conteudo-personalizado",
    name: "Conteúdo personalizado e ferramentas de orientação",
    group: "FUTURO",
    state: "planejado",
    description: "Ferramentas interativas abertas que calculam a quantidade de tela necessária a partir das dimensões das janelas informadas pelo morador.",
    manualUpdateNote: "Planejado para desenvolvimento técnico futuro."
  },

  // --- GRUPO PESQUISA ---
  {
    id: "pesquisa-plantas-aromaticas",
    name: "Plantas e produtos aromáticos",
    group: "PESQUISA",
    state: "planejado",
    description: "Revisão bibliográfica crítica sobre óleos essenciais, fitoterápicos e plantas cultivadas no contexto de repulsão vetorial.",
    researchDisclaimer: "Sem alegação de eficácia até haver evidência avaliada.",
    manualUpdateNote: "Investigação acadêmica exploratória estrita."
  },
  {
    id: "pesquisa-estudos-botanicos",
    name: "Estudos sobre soluções botânicas",
    group: "PESQUISA",
    state: "planejado",
    description: "Análise sistemática de artigos científicos indexados que testam substâncias de origem vegetal sob protocolos padronizados de laboratório.",
    researchDisclaimer: "Sem alegação de eficácia até haver evidência avaliada.",
    manualUpdateNote: "Investigação acadêmica exploratória estrita."
  },
  {
    id: "pesquisa-evidencias-regulacao",
    name: "Avaliação de evidências, segurança e requisitos regulatórios",
    group: "PESQUISA",
    state: "planejado",
    description: "Monitoramento de normas da Anvisa, toxicidade cutânea e inalatória e critérios internacionais da OMS para novas moléculas repelentes.",
    researchDisclaimer: "Sem alegação de eficácia até haver evidência avaliada.",
    manualUpdateNote: "Acompanhamento regulatório permanente."
  }
];
