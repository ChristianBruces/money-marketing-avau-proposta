# Apresentação — Projeto Radar Financeiro

Apresentação comercial da Money Marketing para a AVAU Consultoria, construída em HTML, CSS e JavaScript puro.

## Abrir

Abra `index.html` no Chrome ou Edge. Não é necessário instalar nada.

Para testar em servidor local, dentro desta pasta execute:

```powershell
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Navegação

- Setas direita/esquerda, Page Up/Page Down, espaço e Enter
- Botões no canto inferior direito
- `Home` e `End` levam ao primeiro e ao último slide
- Tecla `F` ou botão `⛶` ativa a tela cheia
- No celular, deslize para os lados
- O endereço usa `#1`, `#2` etc.; assim é possível enviar um link direto para um slide
- Nos slides de lançamento e próximos passos, clique em um box para destacá-lo durante a apresentação

## Editar conteúdo

Os 18 slides estão em `index.html`, cada um em uma tag `<section class="slide">`. Procure pelo título ou pelo atributo `data-title`.

## Alterar valores

Procure em `index.html` por:

- `13.600` para o investimento parcelado
- `10.600` para o investimento à vista
- `2.300` para o fee mensal integrado
- `1.500` para o fee mensal exclusivo do novo projeto
- `50%` para as condições de pagamento

## Logos e ativos

As logos oficiais da Money Marketing e da AVAU, além da textura escura aprovada, já estão em `assets`.

Para substituir ou adicionar logos:

Crie uma pasta `assets`, coloque as imagens em PNG ou SVG e substitua o bloco textual `.brand` por:

```html
<img class="brand-logo" src="assets/logo-money.png" alt="Money Marketing">
```

Adicione ao CSS:

```css
.brand-logo { width: auto; height: 32px; object-fit: contain; }
```

Nunca defina largura e altura fixas ao mesmo tempo; isso preserva a proporção.

## Cores e aparência

As cores principais ficam no início de `styles.css`, dentro de `:root`. Altere as variáveis para atualizar toda a apresentação.

## Salvar como PDF

1. Abra `index.html` no Chrome ou Edge.
2. Pressione `Ctrl + P`.
3. Selecione **Salvar como PDF**.
4. Escolha **Paisagem**.
5. Use margens **Nenhuma**.
6. Ative **Gráficos de plano de fundo**.
7. Mantenha escala em **100%**.

Cada slide será impresso em uma página 16:9.

## Publicar gratuitamente na Vercel

1. Crie uma conta em vercel.com.
2. Crie um novo projeto e envie esta pasta ou conecte um repositório Git.
3. Não é necessário configurar framework ou comando de build.
4. Confirme a publicação. O `index.html` será reconhecido automaticamente.

Antes de publicar, remova informações comerciais confidenciais caso o link seja público.

## Arquivos

- `index.html`: conteúdo e estrutura dos slides
- `styles.css`: identidade visual, responsividade e impressão
- `script.js`: navegação, gestos, progresso e tela cheia
- `README.md`: instruções de uso

## Observações de escopo

O valor apresentado não presume desenvolvimento de motor de consulta, integrações financeiras, pagamentos ou área logada. Essas frentes dependem de validação técnica, jurídica e de LGPD.
