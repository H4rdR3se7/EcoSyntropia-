export interface DecisionScenario {
  id: string;
  title: string;
  iconName: string;
  question: string;
  situation: string;
  recommendedCategory: 'casa' | 'sono' | 'campo' | 'repelente';
  recommendedSolution: string;
  whyThisSolution: string;
  keyLimitation: string;
  linkedProductId: string;
  priceBand: 'Econômico' | 'Intermediário' | 'Especializado';
}

export const DECISION_SCENARIOS: DecisionScenario[] = [
  {
    id: "alugado-janelas",
    title: "Moro de aluguel e não posso furar paredes",
    iconName: "Home",
    question: "Como vedar as janelas sem danificar o imóvel?",
    situation: "Imóvel alugado ou janelas de alumínio/vidro sem suporte para furações permanentes.",
    recommendedCategory: "casa",
    recommendedSolution: "Tela com fita adesiva aderente (velcro)",
    whyThisSolution: "Fixa-se com adesivo removível diretamente no batente, sem parafusos nem ferramentas. Permite deixar a janela aberta à noite para ventilar sem entrada de insetos.",
    keyLimitation: "A cola da fita pode ressecar com exposição solar intensa ao longo de meses e precisa ser substituída sem custo elevado.",
    linkedProductId: "casa-tela-velcro-janela",
    priceBand: "Econômico"
  },
  {
    id: "quarto-sem-teto-furado",
    title: "Mosquitos zumbindo à noite no quarto",
    iconName: "Moon",
    question: "Qual a melhor proteção para o sono sem furar o teto?",
    situation: "Noites com calor, sem ar-condicionado ou com janelas antigas difíceis de vedar.",
    recommendedCategory: "sono",
    recommendedSolution: "Mosquiteiro Pop-up autoportante sobre a cama",
    whyThisSolution: "Não exige nenhum gancho no teto. Abre-se sozinho em segundos e envolve o colchão por completo, criando uma redoma física de 360 graus.",
    keyLimitation: "Se o corpo encostar diretamente na malha durante a noite, mosquitos podem picar através dela; deixe folga nas laterais.",
    linkedProductId: "sono-mosquiteiro-popup-cama",
    priceBand: "Intermediário"
  },
  {
    id: "bebe-recem-nascido",
    title: "Proteção para bebê ou recém-nascido",
    iconName: "Baby",
    question: "Como proteger bebês que não podem usar a maioria dos repelentes químicos?",
    situation: "Menores de 2 meses não têm indicação de repelente químico tópico; até 2 anos as opções são muito restritas.",
    recommendedCategory: "sono",
    recommendedSolution: "Mosquiteiro elástico ajustável para berço e carrinho",
    whyThisSolution: "Barreira puramente mecânica, sem dispersão de aerossóis, sem absorção cutânea e com encaixe elástico perimetral rápido.",
    keyLimitation: "Deve ficar bem tensionado pelo lado de fora para a criança não puxar o tecido para dentro do berço.",
    linkedProductId: "sono-mosquiteiro-berco-carrinho",
    priceBand: "Econômico"
  },
  {
    id: "porta-passagem-pets",
    title: "Porta de quintal/varanda aberta para circulação",
    iconName: "DoorOpen",
    question: "Como ventilar a casa e deixar animais passarem sem encher a sala de mosquito?",
    situation: "Portas que precisam ficar abertas para ventilar ou permitir a entrada e saída de cães/gatos.",
    recommendedCategory: "casa",
    recommendedSolution: "Cortina mosquiteira magnética central",
    whyThisSolution: "Os ímãs centrais abrem facilmente com o empurrão do corpo ou focinho e fecham-se sozinhos instantaneamente por atração magnética.",
    keyLimitation: "Rajadas fortes de vento lateral podem abrir as frestas temporariamente; pisos muito desnivelados deixam fresta na base.",
    linkedProductId: "casa-tela-magnetica-porta",
    priceBand: "Intermediário"
  },
  {
    id: "trabalho-pesca-campo",
    title: "Trabalho ao ar livre, horta, trilha ou pescaria",
    iconName: "Compass",
    question: "Como evitar picadas no rosto e pescoço onde o suor remove o repelente?",
    situation: "Atividades em matas, beira de rios ou jardinagem onde a transpiração intensa dilui cosméticos rapidamente.",
    recommendedCategory: "campo",
    recommendedSolution: "Chapéu com tela mosquiteira ampla integrada",
    whyThisSolution: "A aba afasta a tela do rosto, impedindo que o mosquito alcance a pele mesmo com suor abundante. Malha escura não ofusca a vista.",
    keyLimitation: "Protege apenas cabeça e pescoço. Braços e pernas requerem roupas compridas de algodão ou tecido denso.",
    linkedProductId: "campo-chapeu-tela-cabeca",
    priceBand: "Econômico"
  },
  {
    id: "caminhadas-deslocamento-rua",
    title: "Deslocamentos urbanos e transporte coletivo",
    iconName: "Shield",
    question: "O que usar quando não é possível carregar mosquiteiros ou telas?",
    situation: "Pontos de ônibus, calçadas, salas de espera ou locais públicos sem climatização nem telas.",
    recommendedCategory: "repelente",
    recommendedSolution: "Repelente tópico com Icaridina 20-25% regularizado na Anvisa",
    whyThisSolution: "Ativo de longa duração que confunde os sensores de odor do mosquito em ambientes dinâmicos externos.",
    keyLimitation: "Exige reaplicação se houver chuva, suor intenso ou banho; não forma barreira de ar para pessoas ao redor.",
    linkedProductId: "repelente-icaridina-longa-duracao",
    priceBand: "Intermediário"
  }
];

export interface ComparisonRow {
  method: string;
  category: string;
  idealFor: string;
  installationType: string;
  maintenanceEffort: string;
  relativeCost: 'Baixo' | 'Médio' | 'Alto';
  mainLimitation: string;
}

export const COMPARISON_TABLE: ComparisonRow[] = [
  {
    method: "Tela com Velcro para Janela",
    category: "Casa",
    idealFor: "Quartos e salas de apartamentos ou casas alugadas",
    installationType: "Fita adesiva (sem furos)",
    maintenanceEffort: "Troca da fita a cada 6-12 meses se pegar sol forte",
    relativeCost: "Baixo",
    mainLimitation: "Não veda frestas inferiores de portas ou ralos abertos"
  },
  {
    method: "Cortina Magnética de Porta",
    category: "Casa",
    idealFor: "Acesso a varandas, quintais e passagens de animais",
    installationType: "Velcro ou tachinhas no batente",
    maintenanceEffort: "Manter o batente limpo e alinhado",
    relativeCost: "Médio",
    mainLimitation: "Pode abrir momentaneamente com vento muito forte"
  },
  {
    method: "Mosquiteiro Pop-up de Cama",
    category: "Sono Protegido",
    idealFor: "Dormitórios sem telas e viagens em pousadas",
    installationType: "Nenhuma (autoexpansível)",
    maintenanceEffort: "Apenas higienização periódica da malha",
    relativeCost: "Médio",
    mainLimitation: "Pode ser picado se dormir colado encostando na malha"
  },
  {
    method: "Mosquiteiro Cônico de Teto",
    category: "Sono Protegido",
    idealFor: "Quartos com ponto de fixação no teto",
    installationType: "1 gancho central no teto",
    maintenanceEffort: "Ajustar pontas sob o colchão todas as noites",
    relativeCost: "Baixo",
    mainLimitation: "Frestas deixadas no chão anulam a proteção"
  },
  {
    method: "Chapéu com Tela Mosquiteira",
    category: "Campo",
    idealFor: "Hortas, jardinagem, pesca e trilhas florestais",
    installationType: "Uso vestuário direto",
    maintenanceEffort: "Lavagem manual suave",
    relativeCost: "Baixo",
    mainLimitation: "Não protege braços, tronco e pernas"
  },
  {
    method: "Rede com Mosquiteiro Integrado",
    category: "Campo",
    idealFor: "Camping, pernoites em área rural e varandas",
    installationType: "Amarração entre suportes/árvores",
    maintenanceEffort: "Cuidar com faíscas de fogueiras e superfícies pontiagudas",
    relativeCost: "Médio",
    mainLimitation: "Tecido do fundo pode ser picado se não houver isolamento"
  },
  {
    method: "Repelente Tópico (Icaridina/DEET)",
    category: "Repelente Regularizado",
    idealFor: "Deslocamentos na rua, esportes e áreas sem barreira",
    installationType: "Aplicação na pele exposta",
    maintenanceEffort: "Reaplicação obrigatória a cada 4-8 horas",
    relativeCost: "Médio",
    mainLimitation: "Não dura indefinidamente e requer quantidade adequada na pele"
  }
];
