export type EditorialState = 'ideia' | 'em rascunho' | 'publicado';
export type RelatedCollection = 'Casa' | 'Sono Protegido' | 'Campo';

export interface EditorialCard {
  id: string;
  title: string;
  targetAudience: string;
  objective: string;
  relatedCollection: RelatedCollection;
  state: EditorialState;
  sourcesToConsult: string[]; // Vazio por padrão nesta rodada
  editorialGuidelines: string;
}

/**
 * PAUTAS INICIAIS DO PLANEJAMENTO EDITORIAL
 * - Todos os cartões começam obrigatoriamente com o estado 'ideia'.
 * - Não contém artigos completos redigidos nesta rodada.
 * - 'Fontes a consultar' inicia vazio por padrão ([]).
 * - Diretriz de não alarmismo, sem promessas milagrosas e sem determinismos sobre El Niño.
 */
export const INITIAL_EDITORIAL_CARDS: EditorialCard[] = [
  {
    id: "pauta-tela-janela",
    title: "Como escolher uma tela para a janela",
    targetAudience: "Famílias e moradores de casas ou apartamentos (incluindo imóveis alugados).",
    objective: "Orientar o morador na medição do vão da janela, escolha do tipo de fixação (velcro adesivo sem furar vs magnética) e checagem da malha correta (<= 1,2 mm) para ventilação sem insetos.",
    relatedCollection: "Casa",
    state: "ideia",
    sourcesToConsult: [],
    editorialGuidelines: "Linguagem prática passo a passo. Enfatizar que a tela não precisa de furos em aluguel e alertar sobre a importância de limpar o batente antes de colar a fita."
  },
  {
    id: "pauta-mosquiteiro-cama",
    title: "Como selecionar um mosquiteiro para a cama",
    targetAudience: "Pessoas com sono interrompido por zumbidos, gestantes e pais de crianças pequenas.",
    objective: "Comparar a praticidade do modelo pop-up autoportante (sem furos no teto) com o modelo cônico de teto suspenso, ressaltando o cuidado de colocar as bordas sob o colchão.",
    relatedCollection: "Sono Protegido",
    state: "ideia",
    sourcesToConsult: [],
    editorialGuidelines: "Tom calmo e acolhedor focado na qualidade do sono. Deixar claro que a pessoa não deve dormir encostada na tela para evitar picadas por contato."
  },
  {
    id: "pauta-atividades-ar-livre",
    title: "O que levar para atividades ao ar livre",
    targetAudience: "Praticantes de caminhadas, trilhas ecológicas, pescadores, campistas e trabalhadores rurais.",
    objective: "Apresentar o kit mecânico essencial (chapéu com tela de cabeça, rede de dormir protegida) combinado com repelente tópico regularizado para momentos de esforço e suor.",
    relatedCollection: "Campo",
    state: "ideia",
    sourcesToConsult: [],
    editorialGuidelines: "Foco na resistência ao suor e no conforto térmico. Alertar que repelentes tópicos exigem reaplicação e não substituem vestimenta física adequada."
  },
  {
    id: "pauta-diferenciar-metodos",
    title: "Como diferenciar proteção física, repelentes tópicos e aparelhos",
    targetAudience: "Consumidores sobrecarregados com ofertas de produtos e soluções mágicas na internet.",
    objective: "Esclarecer a hierarquia de eficácia científica: barreiras físicas mecânicas (1ª linha), ativos químicos registrados na Anvisa (2ª linha) e a comprovada ineficácia de velas, plantas e ultrassom.",
    relatedCollection: "Casa",
    state: "ideia",
    sourcesToConsult: [],
    editorialGuidelines: "Postura pedagógica sem ridicularizar o público. Citar revisões sistemáticas da literatura com serenidade e sem prometer eliminação total de riscos biológicos."
  },
  {
    id: "pauta-preparar-casa-ambiente-adverso",
    title: "Como preparar a casa para condições ambientais adversas",
    targetAudience: "Moradores de áreas com alta pluviosidade, ondas de calor ou proximidade com matas e corpos d'água.",
    objective: "Fornecer um checklist doméstico simples de 15 minutos: inspeção de ralos com fecho mecânico, telas de janela, vedação da base de portas e eliminação de recipientes com água parada.",
    relatedCollection: "Casa",
    state: "ideia",
    sourcesToConsult: [],
    editorialGuidelines: "Evitar completamente alarmismo ou previsões simplistas sobre fenômenos como El Niño. Apresentar a adaptação residencial como autonomia de autocuidado contínuo."
  }
];
