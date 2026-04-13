# Meivo — Identidade Visual (Guia Rápido)

## O que é a Meivo

A **Meivo** é uma marca de software focada em **operações rápidas de venda** no dia a dia.

No produto **Meivo PDV**, isso se traduz em um **sistema de ponto de venda (PWA mobile-first)** para **arrecadação de fundos de formatura** (vendas, estoque e relatórios), com foco em:

- **Agilidade no balcão** (poucos toques, UI clara)
- **Confiabilidade** (funciona com internet instável)
- **Organização** (estoque, categorias, histórico e relatórios)

## Personalidade da marca

- **Leve e amigável**, sem perder seriedade
- **Direta e objetiva** (o app “fala” pouco e resolve)
- **Confiável** (sensação de estabilidade e controle)

## Tom de voz (copy)

- Curto, prático e em português Brasil.
- Verbos de ação: “Adicionar”, “Finalizar”, “Confirmar”, “Cancelar”.
- Alertas sempre com o “o que aconteceu” + “o que fazer”: “Sem internet. Suas vendas serão sincronizadas quando voltar.”

## Logotipo

A marca é composta por:

- **Wordmark**: “Meivo” em lettering arredondado (uso principal em telas/marketing).
- **Símbolo (Mark)**: ícone circular inspirado no “o” (uso em app icon, favicon e elementos compactos).

Arquivos:

- Wordmark (principal): `brand/assets/logo/meivo-wordmark-blue.png`
- Mark (principal): `brand/assets/logo/meivo-mark-blue.png`
- Mark (SVG): `brand/assets/logo/meivo-mark-appicon.svg`, `brand/assets/logo/meivo-mark-blue.svg`, `brand/assets/logo/meivo-mark-white.svg`, `brand/assets/logo/meivo-mark-monochrome.svg`

### Área de respiro (clear space)

- Ao redor do logo, preserve no mínimo **1× o raio do círculo interno** do Mark (ou a altura do “e” no wordmark) como margem livre.

### Tamanhos mínimos recomendados

- **Mark**: 24px (UI), 32px (ícone em listas), 48px (cabeçalho)
- **Wordmark**: 120px de largura em telas (evite menor que isso)

### Uso em fundos

- Em fundo claro: prefira o **azul**.
- Em fundo escuro/azul: use a versão **branca** do Mark e wordmark claro (quando disponível).
- Evite aplicar sombra pesada ou “glow” no logo; a estética já é suave.

## Paleta de cores

Cores já utilizadas no projeto (UI):

- **Meivo Blue (primária)**: `#2B9DEE`
- **Deep Blue (apoio)**: `#1A56FF`
- **Sky Blue (apoio)**: `#4894FE`
- **PWA Blue (fundo iOS/PWA)**: `#1A7BD4`
- **Background**: `#F6F7F8`
- **Texto**: `#111827`
- **Neutro**: `#94A3B8`
- **Sucesso**: `#10B981`
- **Erro**: `#EF4444`

Regras rápidas:

- A cor primária deve dominar CTAs, foco e estados “ativos”.
- Use vermelho e verde apenas para estado (não como cor decorativa).

## Tipografia

Fonte base do produto:

- **Plus Jakarta Sans** (UI)

Fallbacks: `ui-sans-serif`, `system-ui`, `sans-serif`.

Regras:

- Priorize pesos `600–800` para títulos/valores e `400–600` para texto.
- Números e totais: aumente contraste e peso (legibilidade em balcão).

## Estilo visual (UI)

- Formas **arredondadas** e amigáveis.
- Contraste claro (background cinza muito suave).
- Destaques com azul e componentes “glass” (blur leve) quando fizer sentido.

## Iconografia

- Ícones lineares com cantos arredondados (ex.: Lucide).
- Evite misturar estilos (filled + outline) na mesma tela.

## Mascote

Mascote: pássaro azul (tom amigável e energético).

Arquivo: `brand/assets/mascot/mascote.png`

Uso recomendado:

- Splash/onboarding, estados vazios e comunicações leves.
- Evite usar o mascote em telas de operação intensa (checkout/relatórios) para não competir com a informação.

## Ativos do app (ícones e splash)

- Splash: `brand/assets/splash/splash-screen.png`
- Ícones: `brand/assets/icons/*` e `brand/assets/pwa/*`

