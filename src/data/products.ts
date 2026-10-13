export type ProductCategory = 'casa' | 'sono' | 'campo' | 'repelente';

export interface ProductItem {
  id: string;
  name: string;
  collection: ProductCategory;
  collectionLabel: string;
  purpose: string;
  priceTier: 'Econômico' | 'Intermediário' | 'Especializado';
  estimatedPriceRange: string;
  installation: string;
  installationDifficulty: 'Nenhuma' | 'Fácil (sem furar)' | 'Moderada (ganchos/fita)' | 'Avançada';
  limitations: string[];
  features: string[];
  technicalSpecs: {
    meshSize?: string;
    material?: string;
    dimensions?: string;
    activeIngredient?: string;
    anvisaApprovalNote?: string;
  };
  demonstrativeLabel: string;
  affiliatePlaceholderUrl: string;
  evidenceNote: string;
}

export const PRODUCTS_DATA: ProductItem[] = [
  // --- COLEÇÃO CASA ---
  {
    id: "casa-tela-velcro-janela",
    name: "Tela Mosquiteira com Fita Aderente (Velcro)",
    collection: "casa",
    collectionLabel: "Casa",
    purpose: "Bloqueio físico imediato em janelas padrão de quartos e salas sem necessidade de ferramentas ou furos.",
    priceTier: "Econômico",
    estimatedPriceRange: "R$ 18,00 - R$ 35,00",
    installation: "Sem furos. Aplicação com fita adesiva de contato autocolante no batente da janela.",
    installationDifficulty: "Fácil (sem furar)",
    limitations: [
      "A fita adesiva pode perder aderência após exposição prolongada a umidade intensa ou sol direto.",
      "Não impede passagem de insetos se a janela for aberta sem fechar o velcro corretamente.",
      "Não substitui a vedação de frestas inferiores de portas ou ralos."
    ],
    features: [
      "Malha fina de poliéster lavável",
      "Permite circulação natural do ar e luminosidade",
      "Pode ser recortada na medida exata com tesoura comum",
      "Ideal para imóveis alugados"
    ],
    technicalSpecs: {
      meshSize: "Orifícios de ~1,2 mm (impede passagem de mosquitos comuns e flebotomíneos)",
      material: "Fibra de poliéster flexível com fita de fixação acrílica",
      dimensions: "1,30 m x 1,50 m (ajustável por corte)"
    },
    demonstrativeLabel: "DEMONSTRATIVO",
    affiliatePlaceholderUrl: "#placeholder-afiliado-casa-tela-velcro",
    evidenceNote: "Barreiras físicas mecânicas em aberturas residenciais são a primeira linha recomendada pela OMS para impedir a entrada de vetores no domicílio sem dispersão química."
  },
  {
    id: "casa-tela-magnetica-porta",
    name: "Cortina Mosquiteira Magnética para Portas",
    collection: "casa",
    collectionLabel: "Casa",
    purpose: "Permitir passagem contínua de pessoas e animais domésticos fechando-se automaticamente no centro.",
    priceTier: "Intermediário",
    estimatedPriceRange: "R$ 45,00 - R$ 75,00",
    installation: "Fixação no batente superior e laterais por velcro adesivo ou tachinhas incluídas.",
    installationDifficulty: "Fácil (sem furar)",
    limitations: [
      "Ventos muito fortes podem forçar a abertura temporária das emendas magnéticas centrais.",
      "Exige batente regular e limpo para que a fita permaneça colada.",
      "Não veda a base se houver desnível no piso."
    ],
    features: [
      "Fechamento automático por ímãs centrais",
      "Passagem livre sem precisar soltar ganchos",
      "Excelente para cozinhas com acesso a quintal ou varanda",
      "Não exige ferramentas pesadas"
    ],
    technicalSpecs: {
      meshSize: "Malha de poliéster reforçado com orifícios de ~1,2 mm",
      material: "Poliéster tramado com ímãs embutidos selados",
      dimensions: "90 cm ou 100 cm x 210 cm"
    },
    demonstrativeLabel: "DEMONSTRATIVO",
    affiliatePlaceholderUrl: "#placeholder-afiliado-casa-porta-magnetica",
    evidenceNote: "Evita que portas fiquem abertas sem barreira durante horários de maior atividade de mosquitos (crepúsculo e início da manhã)."
  },
  {
    id: "casa-vedador-fresta-porta",
    name: "Vedador de Frestas e Rodo Duplo para Base de Portas",
    collection: "casa",
    collectionLabel: "Casa",
    purpose: "Bloquear frestas inferiores entre o chão e a porta, por onde mosquitos e outros insetos rastejantes entram.",
    priceTier: "Econômico",
    estimatedPriceRange: "R$ 15,00 - R$ 28,00",
    installation: "Encaixe deslizante sob a porta ou fita autoadesiva flexível.",
    installationDifficulty: "Fácil (sem furar)",
    limitations: [
      "Protege apenas a base inferior da porta; não resolve laterais ou aberturas superiores.",
      "Pode sofrer desgaste mecânico ao roçar em pisos muito ásperos.",
      "Não substitui telas em janelas."
    ],
    features: [
      "Desliza suavemente no piso sem riscar",
      "Ajuda também na contenção de poeira e vento",
      "Ajustável por corte para qualquer largura de porta",
      "Solução sem cola agressiva disponível"
    ],
    technicalSpecs: {
      material: "Espuma de polietileno expandido revestida em tecido impermeabilizado",
      dimensions: "Comprimento de 80 cm a 95 cm"
    },
    demonstrativeLabel: "DEMONSTRATIVO",
    affiliatePlaceholderUrl: "#placeholder-afiliado-casa-vedador-fresta",
    evidenceNote: "Frestas inferiores de 5 mm já são suficientes para entrada de mosquitos em repouso no solo durante o calor."
  },
  {
    id: "casa-fita-reparo-tela",
    name: "Fita Autoadesiva de Reparo para Telas de Fibra",
    collection: "casa",
    collectionLabel: "Casa",
    purpose: "Consertar rasgos, perfurações ou furos em telas mosquiteiras já instaladas sem precisar trocar a tela inteira.",
    priceTier: "Econômico",
    estimatedPriceRange: "R$ 12,00 - R$ 22,00",
    installation: "Limpar o local rasgado, cortar um pedaço da fita e colar sobre a perfuração pressionando levemente.",
    installationDifficulty: "Fácil (sem furar)",
    limitations: [
      "Não recupera a estética original da tela (deixa marca visual da emenda).",
      "Se o rasgo for maior que a largura da fita (5 cm), a emenda pode descolar com o tempo.",
      "Exige que a tela existente esteja limpa e seca para boa aderência."
    ],
    features: [
      "Adesivo acrílico de alta fixação resistente a intempéries",
      "Padrão de malha respirável que mantém a passagem de ar",
      "Evita o descarte precoce de telas íntegras",
      "Rolo compacto de 2 metros"
    ],
    technicalSpecs: {
      meshSize: "Padrão correspondente a telas 16x18 fios/polegada",
      material: "Fibra de vidro com cola transparente ultra-aderente",
      dimensions: "Largura 5 cm x Comprimento 200 cm"
    },
    demonstrativeLabel: "DEMONSTRATIVO",
    affiliatePlaceholderUrl: "#placeholder-afiliado-casa-fita-reparo",
    evidenceNote: "A manutenção preventiva de telas é mais ecológica e econômica do que a troca completa de caixilhos."
  },

  // --- COLEÇÃO SONO PROTEGIDO ---
  {
    id: "sono-mosquiteiro-popup-cama",
    name: "Mosquiteiro Pop-up Autoportante para Cama",
    collection: "sono",
    collectionLabel: "Sono Protegido",
    purpose: "Criar uma redoma física completa de 360° em torno do colchão sem precisar furar paredes ou o teto.",
    priceTier: "Intermediário",
    estimatedPriceRange: "R$ 85,00 - R$ 140,00",
    installation: "Nenhuma furação. A estrutura de aço flexível arma sozinha ao abrir a bolsa (sistema pop-up).",
    installationDifficulty: "Nenhuma",
    limitations: [
      "Dobrar de volta para a bolsa exige técnica e paciência nos primeiros usos.",
      "Reduz ligeiramente a sensação de amplitude visual no quarto.",
      "Se encostar a pele diretamente na tela durante a noite, mosquitos podem picar através da malha."
    ],
    features: [
      "Estrutura flexível que não cai sobre a pessoa",
      "Aberturas com zíper duplo lateral para entrar e sair",
      "Fundo vedado ou elástico para prender sob o colchão",
      "Fácil de transportar em viagens ou casas de veraneio"
    ],
    technicalSpecs: {
      meshSize: "Orifícios de ~1,0 mm (alta densidade anti-insetos)",
      material: "Malha de poliéster 100% com hastes de aço de memória elástica",
      dimensions: "Modelos Solteiro (1,0x1,9x1,1m) e Casal/Queen (1,5x2,0x1,5m)"
    },
    demonstrativeLabel: "DEMONSTRATIVO",
    affiliatePlaceholderUrl: "#placeholder-afiliado-sono-popup-cama",
    evidenceNote: "Mosquiteiros de leito são uma das intervenções não farmacológicas mais robustas catalogadas pela literatura biomédica para proteção noturna contínua."
  },
  {
    id: "sono-mosquiteiro-teto-suspenso",
    name: "Mosquiteiro Cônico de Teto com Aro Expansível",
    collection: "sono",
    collectionLabel: "Sono Protegido",
    purpose: "Proteger camas de solteiro ou casal com caimento estético fluido e ampla circulação interna de ar.",
    priceTier: "Econômico",
    estimatedPriceRange: "R$ 38,00 - R$ 68,00",
    installation: "1 único gancho no teto (adesivo reforçado ou com bucha/parafuso).",
    installationDifficulty: "Moderada (ganchos/fita)",
    limitations: [
      "Exige cuidado ao ajeitar as abas sob o colchão para não deixar frestas abertas no chão.",
      "Ganchos adesivos simples podem soltar em tetos com tinta fraca ou gesso poroso.",
      "Não tem estrutura rígida na base."
    ],
    features: [
      "Design clássico cônico com aro superior de aço flexível",
      "Ponto de fixação único centralizado",
      "Material leve e compacto quando guardado",
      "Acompanha gancho de fixação básico"
    ],
    technicalSpecs: {
      meshSize: "Malha respirável de poliéster com mais de 250 furos/pol²",
      material: "100% poliéster multifilamento",
      dimensions: "Aro de 60 cm de diâmetro, altura de 2,5 m, circunferência da base de até 9 m"
    },
    demonstrativeLabel: "DEMONSTRATIVO",
    affiliatePlaceholderUrl: "#placeholder-afiliado-sono-teto-suspenso",
    evidenceNote: "A cobertura adequada das bordas sob o colchão é crucial; frestas de apenas 2 cm anulam o efeito de barreira do mosquiteiro de teto."
  },
  {
    id: "sono-mosquiteiro-berco-carrinho",
    name: "Mosquiteiro Elástico Ajustável para Berço e Carrinho",
    collection: "sono",
    collectionLabel: "Sono Protegido",
    purpose: "Proteção física imediata para bebês e recém-nascidos, cuja aplicação de repelentes tópicos tem fortes restrições de idade.",
    priceTier: "Econômico",
    estimatedPriceRange: "R$ 22,00 - R$ 42,00",
    installation: "Elástico perimetral que se molda automaticamente à borda do berço desmontável, berço fixo ou carrinho de passeio.",
    installationDifficulty: "Nenhuma",
    limitations: [
      "Não deve conter folgas que a criança possa puxar para dentro do leito (risco de asfixia; deve ficar tensionado por fora).",
      "Deve ser retirado durante movimentação da criança acordada.",
      "Não dispensa a inspeção prévia de insetos já dentro do carrinho."
    ],
    features: [
      "Borda 100% elástica com encaixe rápido em segundos",
      "Branco translúcido para fácil visualização do bebê",
      "Lavável em máquina no ciclo delicado",
      "Não utiliza substâncias químicas"
    ],
    technicalSpecs: {
      meshSize: "Malha ultra fina microporosa",
      material: "Tecido de poliéster hipoalergênico atóxico",
      dimensions: "Compatível com berços padrão americano (até 130x70cm) e carrinhos universais"
    },
    demonstrativeLabel: "DEMONSTRATIVO",
    affiliatePlaceholderUrl: "#placeholder-afiliado-sono-berco",
    evidenceNote: "A Sociedade Brasileira de Pediatria e a Anvisa desaconselham repelentes tópicos químicos em menores de 2 meses; a barreira física elástica em berços é a principal diretriz de proteção segura."
  },

  // --- COLEÇÃO CAMPO ---
  {
    id: "campo-chapeu-tela-cabeca",
    name: "Chapéu com Tela Mosquiteira Embutida para Cabeça e Pescoço",
    collection: "campo",
    collectionLabel: "Campo",
    purpose: "Proteção mecânica contínua dos olhos, ouvidos, rosto e nuca durante caminhadas, agricultura, pesca ou jardinagem.",
    priceTier: "Econômico",
    estimatedPriceRange: "R$ 32,00 - R$ 58,00",
    installation: "Vestir diretamente na cabeça; fecho inferior com cordão ajustável na altura do colarinho.",
    installationDifficulty: "Nenhuma",
    limitations: [
      "Reduz ligeiramente o campo visual periférico e a ventilação sobre a face em dias de calor extremo.",
      "Protege apenas cabeça e pescoço; braços e pernas requerem roupas compridas adequadas ou repelente tópico.",
      "Exige manter o cordão bem ajustado na camisa para impedir a subida de mosquitos por baixo."
    ],
    features: [
      "Aba larga que mantém a tela afastada da pele do rosto",
      "Malha escura de alta visibilidade que não ofusca a visão",
      "Cordão com tanca regulável no pescoço",
      "Tecido do chapéu com secagem rápida e proteção UV básica"
    ],
    technicalSpecs: {
      meshSize: "Malha fina de poliamida/poliéster anti-inseto",
      material: "Poliéster respirável e malha anti-mosquitos",
      dimensions: "Aba de 8 cm, altura de tela de 40 cm"
    },
    demonstrativeLabel: "DEMONSTRATIVO",
    affiliatePlaceholderUrl: "#placeholder-afiliado-campo-chapeu-tela",
    evidenceNote: "A cabeça e as orelhas são alvos frequentes devido à concentração de CO2 e calor expirados; barreiras afastadas da pele impedem picadas através do tecido."
  },
  {
    id: "campo-rede-mosquiteiro-integrado",
    name: "Rede de Descanso com Mosquiteiro Integrado para Camping",
    collection: "campo",
    collectionLabel: "Campo",
    purpose: "Descanso e pernoite em áreas de mata, camping ou varandas de sítios com proteção total contra picadas por cima e pelos lados.",
    priceTier: "Intermediário",
    estimatedPriceRange: "R$ 95,00 - R$ 160,00",
    installation: "Fixação entre duas árvores ou mourões com fitas de suspensão e mosquetões inclusos.",
    installationDifficulty: "Fácil (sem furar)",
    limitations: [
      "Se o tecido inferior da rede for de camada simples e fino, mosquitos podem picar por baixo caso o corpo encoste sem isolamento (recomenda-se colchonete ou cobertor na base).",
      "Exige pontos firmes e seguros para ancoragem da rede.",
      "Não abriga mais de uma pessoa confortavelmente na maioria dos modelos."
    ],
    features: [
      "Zíper bidirecional de ponta a ponta",
      "Hastes ou cordas de sustentação para a tela não tocar no rosto",
      "Pode ser usada invertida como rede comum de descanso",
      "Tecido de paraquedas resistente e respirável com bolso de transporte acoplado"
    ],
    technicalSpecs: {
      meshSize: "Malha B3 de poliéster de altíssima densidade",
      material: "Nylon 210T de alta tenacidade e tela mosquiteira respirável",
      dimensions: "2,60 m x 1,40 m; suporta até 200 kg"
    },
    demonstrativeLabel: "DEMONSTRATIVO",
    affiliatePlaceholderUrl: "#placeholder-afiliado-campo-rede-mosquiteiro",
    evidenceNote: "Amplamente utilizada por brigadistas florestais e pesquisadores de campo para reduzir o uso excessivo de produtos químicos durante pernoites externos."
  },
  {
    id: "campo-tenda-abrigo-externo",
    name: "Tenda Abrigo com Paredes de Tela para Áreas Externas",
    collection: "campo",
    collectionLabel: "Campo",
    purpose: "Criar uma área comum protegida (mesa, cadeiras, área de preparo de alimentos) em acampamentos ou quintais abertos.",
    priceTier: "Especializado",
    estimatedPriceRange: "R$ 290,00 - R$ 480,00",
    installation: "Montagem com varetas de fibra de vidro e estacas para fixação no solo contra o vento.",
    installationDifficulty: "Moderada (ganchos/fita)",
    limitations: [
      "Requer tempo de montagem (10 a 15 minutos) e espaço plano de pelo menos 3x3 metros.",
      "Não oferece isolamento térmico em dias de frio.",
      "Requer ancoragem cuidadosa com estacas para não tombar em rajadas de vento forte."
    ],
    features: [
      "Quatro paredes de malha mosquiteira com ampla ventilação cruzada",
      "Teto com cobertura impermeabilizada para sombra e orvalho",
      "Duas portas com zíper duplo",
      "Bolsa de transporte com alça reforçada"
    ],
    technicalSpecs: {
      meshSize: "Tela mosquiteira densa 100% poliéster",
      material: "Teto de poliéster 190T com varetas em fibra de vidro 9,5 mm",
      dimensions: "3,0 m x 3,0 m de base por 2,1 m de altura central"
    },
    demonstrativeLabel: "DEMONSTRATIVO",
    affiliatePlaceholderUrl: "#placeholder-afiliado-campo-tenda-abrigo",
    evidenceNote: "Cria espaços de convívio comunitário protegido durante períodos de alta densidade de mosquitos em locais sem telas estruturais."
  },

  // --- REPELENTES TÓPICOS REGULARIZADOS (ANVISA) ---
  {
    id: "repelente-icaridina-longa-duracao",
    name: "Repelente Tópico em Loção/Spray com Icaridina 20-25%",
    collection: "repelente",
    collectionLabel: "Repelente Regularizado",
    purpose: "Proteção tópica complementar na pele exposta durante deslocamentos onde não há barreira física.",
    priceTier: "Intermediário",
    estimatedPriceRange: "R$ 45,00 - R$ 75,00 (frasco ~100ml)",
    installation: "Aplicação direta e uniforme nas áreas expostas da pele. Não aplicar sob as roupas.",
    installationDifficulty: "Nenhuma",
    limitations: [
      "Exige reaplicação se houver transpiração excessiva, banho de mar/piscina ou contato com água.",
      "Não deve ser inalado nem aplicado perto de olhos, boca e mucosas.",
      "Não substitui as barreiras físicas domiciliares (telas e mosquiteiros)."
    ],
    features: [
      "Ativo de referência: Icaridina (KBR 3023 / Picaridin)",
      "Tempo de proteção estimado: até 8 a 10 horas em condições normais",
      "Baixo odor e menor sensação pegajosa na pele",
      "Produto deve conter número de registro obrigatório de Cosmético Grau 2 na Anvisa"
    ],
    technicalSpecs: {
      activeIngredient: "Icaridina 20% a 25% (Hidroxietil Isobutil Piperidina Carboxilato)",
      anvisaApprovalNote: "Ativo regularizado e reconhecido pela Anvisa (Resolução RDC e Guia de Repelentes) e pela OMS para proteção contra Aedes e Culex. Uso permitido a partir de 2 meses ou 6 meses a depender da fórmula específica do fabricante."
    },
    demonstrativeLabel: "DEMONSTRATIVO",
    affiliatePlaceholderUrl: "#placeholder-afiliado-repelente-icaridina",
    evidenceNote: "A Icaridina atua saturando e confundindo os receptores olfativos dos mosquitos, impedindo que localizem os compostos voláteis da pele humana."
  },
  {
    id: "repelente-deet-uso-cotidiano",
    name: "Repelente Tópico com DEET 15%",
    collection: "repelente",
    collectionLabel: "Repelente Regularizado",
    purpose: "Opção tradicional e acessível para proteção tópica de média duração em atividades diárias.",
    priceTier: "Econômico",
    estimatedPriceRange: "R$ 19,00 - R$ 34,00 (frasco ~100ml)",
    installation: "Aplicação nas partes expostas do corpo com as mãos limpas.",
    installationDifficulty: "Nenhuma",
    limitations: [
      "Duração média menor (4 a 6 horas em concentração de 15%); exige reaplicações mais frequentes.",
      "Pode danificar materiais sintéticos como armações de óculos plásticas, relógios e tecidos sintéticos.",
      "Não recomendado pela Anvisa para menores de 2 anos em concentrações adultas."
    ],
    features: [
      "Ativo histórico padrão-ouro de eficácia com décadas de estudo: DEET",
      "Excelente custo-benefício para uso rápido",
      "Disponível amplamente em farmácias do Brasil",
      "Obrigatório registro ativo na Anvisa no rótulo"
    ],
    technicalSpecs: {
      activeIngredient: "N,N-dietil-meta-toluamida (DEET) 15%",
      anvisaApprovalNote: "Ativo amplamente regularizado na Anvisa. Crianças entre 2 e 12 anos devem usar fórmulas com até 10% de DEET e no máximo 3 aplicações ao dia, conforme norma técnica sanitária."
    },
    demonstrativeLabel: "DEMONSTRATIVO",
    affiliatePlaceholderUrl: "#placeholder-afiliado-repelente-deet",
    evidenceNote: "O DEET é o repelente sintético mais pesquisado no mundo pela literatura biomédica, com ação repelente de contato e vapor comprovada contra diversas espécies de dípteros."
  },
  {
    id: "repelente-ir3535-sensivel",
    name: "Repelente Tópico com IR3535 20% (Fórmula Suave)",
    collection: "repelente",
    collectionLabel: "Repelente Regularizado",
    purpose: "Opção com perfil de tolerabilidade cutânea suave, frequentemente indicada para uso pediátrico autorizado.",
    priceTier: "Intermediário",
    estimatedPriceRange: "R$ 38,00 - R$ 62,00 (frasco ~100ml)",
    installation: "Aplicação moderada com espalhamento homogêneo nas áreas desprotegidas de roupas.",
    installationDifficulty: "Nenhuma",
    limitations: [
      "Duração moderada (em torno de 4 a 6 horas); requer reaplicação regular em calor intenso.",
      "Como todo repelente tópico, não impede que mosquitos pousem em áreas cobertas por roupas finas e justas.",
      "Uso pediátrico exige leitura atenta da faixa etária indicada pelo laboratório fabricante."
    ],
    features: [
      "Ativo: Etil Butilacetilaminopropionato (IR3535)",
      "Perfil toxicológico seguro reconhecido pela OMS e Anvisa",
      "Textura suave e baixo potencial irritativo na pele",
      "Não degrada materiais sintéticos plásticos"
    ],
    technicalSpecs: {
      activeIngredient: "Butilacetilaminopropionato de etila (IR3535) 20%",
      anvisaApprovalNote: "Ativo aprovado pela Anvisa. Reconhecido como seguro para uso a partir de 6 meses de vida na maioria das formulações comerciais aprovadas no Brasil."
    },
    demonstrativeLabel: "DEMONSTRATIVO",
    affiliatePlaceholderUrl: "#placeholder-afiliado-repelente-ir3535",
    evidenceNote: "Estruturalmente derivado do aminoácido beta-alanina, com excelente perfil de tolerância dermatológica documentado em ensaios clínicos controlados."
  }
];
