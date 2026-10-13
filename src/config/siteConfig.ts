/**
 * Configuração central da iniciativa.
 * O NOME da iniciativa é editável em um ÚNICO lugar aqui (SITE_NAME).
 */
export const SITE_CONFIG = {
  // Nome provisório editável em um único lugar:
  name: "ECOSYNTROPIA",
  
  // Tagline oficial:
  tagline: "Compreender as consequências. Ampliar a capacidade de agir.",
  
  // Propósito fundamental:
  purpose: "Autonomia na prevenção e na adaptação às consequências climáticas e ambientais.",
  
  // Declaração de conceito e modelo comercial:
  conceptDescription: 
    "A EcoSyntropia é uma ponte de informação, curadoria e acesso comercial. Não fabricamos produtos, não mantemos estoque e não vendemos a promessa de eliminar riscos. Ajudamos pessoas comuns a entender uma necessidade prática e encontrar opções acessíveis e eficazes.",
  
  // Modelo de afiliados transparente:
  affiliateDisclosure:
    "Transparência de monetização: A EcoSyntropia adota o modelo inicial de afiliados. Links indicados podem gerar pequenas comissões caso você opte por concluir uma compra na loja de destino, conforme as regras de cada programa. Você não paga nenhum valor a mais por isso.",

  // Contato e versão:
  contactEmail: "contato@ecosyntropia.org",
  version: "Protótipo v0.9 (Demonstrativo)",
  lastUpdated: "Outubro/2026",
  legalEntityNotice: "Iniciativa de curadoria informativa independente em fase de prototipagem conceitual.",
} as const;

export type SiteConfig = typeof SITE_CONFIG;
