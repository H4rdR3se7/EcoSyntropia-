/**
 * Fontes científicas e regulatórias com rigor metodológico.
 * Toda informação ambiental e climática possui FONTE, DATA, REGIÃO DE REFERÊNCIA e LIMITAÇÕES explícitas.
 */

export interface ClimateAndVectorReference {
  id: string;
  topic: string;
  statement: string;
  source: string;
  sourceUrl?: string;
  date: string;
  referenceRegion: string;
  limitationsAndUncertainty: string;
}

export interface ActiveRepellentSubstance {
  name: string;
  scientificName: string;
  pubchemCid: number;
  anvisaStatus: string;
  whoClassification: string;
  typicalDuration: string;
  pediatricGuidelineAnvisa: string;
  mechanismOfAction: string;
  safetyProfile: string;
}

export interface MythVsFactItem {
  id: string;
  popularClaim: string;
  isEffective: boolean;
  scientificVerdict: string;
  scientificExplanation: string;
  evidenceSource: string;
}

// Princípios ativos comprovados na literatura biomédica e regularizados no Brasil:
export const ACTIVE_REPELLENT_SUBSTANCES: ActiveRepellentSubstance[] = [
  {
    name: "Icaridina (KBR 3023 / Picaridina)",
    scientificName: "1-(1-metilpropiloxicarbonil)-2-(2-hidroxietil)piperidina",
    pubchemCid: 123614,
    anvisaStatus: "Regularizado na Anvisa como ingrediente ativo em cosméticos repelentes de insetos (Grau 2).",
    whoClassification: "Recomendado pela OMS (WHOPES) para controle de vetores e prevenção de picadas.",
    typicalDuration: "Aproximadamente 8 a 10 horas em concentrações entre 20% e 25% (varia com suor e fricção).",
    pediatricGuidelineAnvisa: "Geralmente permitido a partir de 2 meses ou 6 meses, dependendo da formulação específica autorizada pelo fabricante e das instruções de rotulagem aprovadas.",
    mechanismOfAction: "Volatiliza na superfície cutânea criando uma camada gasosa que bloqueia e confunde os receptores olfativos antenais dos mosquitos, tornando a pele humana 'indetectável'.",
    safetyProfile: "Baixa toxicidade dérmica, sem efeito corrosivo em plásticos e materiais sintéticos."
  },
  {
    name: "DEET (Dietiltoluamida)",
    scientificName: "N,N-dietil-3-metilbenzamida",
    pubchemCid: 4284,
    anvisaStatus: "Regularizado na Anvisa desde a década de 1950, com regras estritas de dosagem e rotulagem.",
    whoClassification: "Histórico padrão-ouro da OMS para proteção contra dípteros hematófagos.",
    typicalDuration: "4 a 6 horas em concentração de 15%; até 8 horas em concentrações superiores a 20%.",
    pediatricGuidelineAnvisa: "Proibido em menores de 2 anos pela diretriz brasileira. Para crianças de 2 a 12 anos, a concentração máxima permitida é de 10% com até 3 aplicações diárias.",
    mechanismOfAction: "Interage com receptores de odor (ORs e receptores gustativos) provocando forte aversão sensorial e inibindo a atração aos compostos da transpiração.",
    safetyProfile: "Pode danificar plásticos, óculos de acetato e tecidos sintéticos como elastano e nylon."
  },
  {
    name: "IR3535 (Butilacetilaminopropionato de etila)",
    scientificName: "3-(N-acetil-N-butilamino)propanoato de etila",
    pubchemCid: 104278,
    anvisaStatus: "Regularizado na Anvisa com excelente histórico de tolerância em peles sensíveis.",
    whoClassification: "Aprovado pela OMS com baixa ecotoxicidade e alta biocompatibilidade.",
    typicalDuration: "4 a 6 horas em concentração em torno de 20%.",
    pediatricGuidelineAnvisa: "Autorizado para crianças a partir de 6 meses de vida na maioria das preparações cosméticas regularizadas.",
    mechanismOfAction: "Análogo sintético do aminoácido beta-alanina que mascara a emanação térmica e química corporal percebida pelos mosquitos.",
    safetyProfile: "Muito suave na derme humana, não degrada polímeros plásticos."
  }
];

// Dados climáticos e epidemiológicos reais com data, fonte, região e limitações:
export const CLIMATE_AND_VECTOR_DATA: ClimateAndVectorReference[] = [
  {
    id: "ms-arboviroses-sazonalidade",
    topic: "Sazonalidade das Arboviroses Urbanas e Temperatura Média",
    statement: "No Brasil, a densidade populacional de mosquitos do gênero Aedes e as notificações de arboviroses concentram-se historicamente entre os meses de dezembro e maio, período com médias térmicas elevadas e maior regime pluviométrico.",
    source: "Ministério da Saúde do Brasil — Secretaria de Vigilância em Saúde e Ambiente (SVSA), Boletim Epidemiológico Arboviroses Vol. 55, Nº 03.",
    date: "Janeiro a Abril de 2024",
    referenceRegion: "Brasil (Nacional, com ênfase nas Regiões Centro-Oeste, Sudeste e Sul)",
    limitationsAndUncertainty: "A associação entre pluviosidade e mosquitos NÃO é estritamente linear: chuvas torrenciais podem lavar criadouros naturais, enquanto secas prolongadas muitas vezes forçam o armazenamento domiciliar improvisado de água, gerando novos focos artificiais. Fatores de saneamento, coleta de lixo e imunidade prévia da população interferem tanto quanto variáveis climáticas puras."
  },
  {
    id: "oms-barreiras-fisicas",
    topic: "Eficácia de Telas e Barreiras Físicas nas Habitações",
    statement: "A instalação de telas nas janelas e portas reduz significativamente a entrada de mosquitos e a taxa de contato homem-vetor em ambientes fechados sem introduzir agentes inseticidas no ar doméstico.",
    source: "Organização Mundial da Saúde (OMS / WHO) — Guidelines for Malaria Vector Control & Global Vector Control Response 2017–2030.",
    date: "Publicação consolidada 2017, revisada 2022",
    referenceRegion: "Regiões tropicais e subtropicais globais",
    limitationsAndUncertainty: "A barreira física protege o interior do domicílio. Ela não altera o índice de infestação no perímetro externo do bairro e perde eficácia se houver frestas não vedadas maiores que 1,2 mm ou se portas permanecerem abertas sem cortina."
  },
  {
    id: "inmet-incerteza-climatica",
    topic: "Padrões Oceânicos e Previsibilidade Climática Regional",
    statement: "Fenômenos como El Niño ou La Niña alteram padrões de circulação atmosférica e anomalias de temperatura da superfície do mar, influenciando regimes térmicos e de chuva regionais.",
    source: "Instituto Nacional de Meteorologia (INMET) & Centro de Previsão de Tempo e Estudos Climáticos (CPTEC/INPE) — Relatórios Climatológicos.",
    date: "Atualizações trimestrais 2023–2024",
    referenceRegion: "América do Sul / Território Brasileiro",
    limitationsAndUncertainty: "Modelos climatológicos operam com faixas probabilísticas e não com certezas determinísticas. É cientificamente incorreto afirmar que determinada fase do El Niño resultará em um número fixo ou exato de mosquitos ou casos de doenças em uma cidade específica."
  }
];

// Mitos vs Fatos científicos rigorosos:
export const MYTHS_VS_FACTS: MythVsFactItem[] = [
  {
    id: "plantas-citronela",
    popularClaim: "Ter vasos de citronela, lavanda ou hortelã na janela afasta mosquitos da casa.",
    isEffective: false,
    scientificVerdict: "Sem comprovação de eficácia como barreira espacial protetora.",
    scientificExplanation: "Embora compostos extraídos da citronela em altas concentrações laboratoriais possuam atividade repelente fugaz, a planta viva em vaso não emite concentrações suficientes de vapores voláteis na atmosfera aberta para criar uma 'cúpula protetora'. O mosquito voa livremente ao redor e entra pela janela aberta.",
    evidenceSource: "Revisões sistemáticas de repelentes botânicos (Malaria Journal / Cochrane Review on Topical Insect Repellents)."
  },
  {
    id: "velas-aromaticas",
    popularClaim: "Velas aromáticas e incensos botânicos mantêm a área externa livre de picadas.",
    isEffective: false,
    scientificVerdict: "Eficácia nula ou desprezível em ambientes ventilados.",
    scientificExplanation: "Qualquer leve brisa dispersa a fumaça ou o vapor da vela. Além disso, a queima contínua de incensos e velas em recintos fechados gera material particulado inalável sem oferecer barreira física confiável contra mosquitos famintos em busca de CO2.",
    evidenceSource: "American Mosquito Control Association (AMCA) & Centers for Disease Control and Prevention (CDC)."
  },
  {
    id: "aparelhos-ultrassonicos",
    popularClaim: "Aparelhos ultrassônicos de tomada ou aplicativos de celular espantam mosquitos com frequências sonoras.",
    isEffective: false,
    scientificVerdict: "Comprovadamente ineficazes em dezenas de testes clínicos controlados.",
    scientificExplanation: "Revisões sistemáticas da Cochrane demonstraram que mosquitos fêmeas não alteram seu comportamento de pouso e picada na presença de aparelhos ultrassônicos. Não há base biológica que justifique seu uso.",
    evidenceSource: "Cochrane Systematic Review: 'Electronic mosquito repellents for preventing mosquito bites and malaria infection'."
  },
  {
    id: "barreiras-fisicas-mecanicas",
    popularClaim: "Telas mosquiteiras de malha fina e mosquiteiros de cama impedem picadas de forma confiável.",
    isEffective: true,
    scientificVerdict: "Padrão de ouro de eficácia mecânica física comprovada.",
    scientificExplanation: "A barreira mecânica é intransponível para insetos com envergadura e corpo maiores que a abertura da malha (orifícios <= 1,2 mm). Funciona 24 horas por dia, sem consumir eletricidade, sem emitir vapores químicos e sem induzir resistência biológica nos mosquitos.",
    evidenceSource: "Manual de Diretrizes para Controle Vetorial da OMS (WHO Guidelines for Vector Control)."
  },
  {
    id: "repelentes-topicos-anvisa",
    popularClaim: "Repelentes tópicos com Icaridina, DEET ou IR3535 protegem a pele quando aplicados corretamente.",
    isEffective: true,
    scientificVerdict: "Eficácia comprovada e regularizada por agências sanitárias internacionais e Anvisa.",
    scientificExplanation: "Essas três moléculas possuem ensaios clínicos controlados medindo o 'tempo de proteção completa' (CPT - Complete Protection Time) em câmaras com mosquitos. Elas realmente bloqueiam os receptores de atração olfativa, desde que aplicadas de maneira uniforme e reaplicadas conforme a rotulagem.",
    evidenceSource: "Anvisa — Gerência-Geral de Cosméticos (Guia de Repelentes de Insetos) e EPA/CDC dos EUA."
  }
];
