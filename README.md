# 🌟 Landing Page de Avaliações - Roda Rico

Uma landing page moderna e interativa para coletar avaliações de clientes, com **banco de dados próprio** e roteamento inteligente baseado na satisfação.

## 📋 Funcionalidades

- ⭐ **Sistema de Avaliação por Estrelas** (1-5)
- 🔀 **Roteamento Inteligente**:
  - **1-3 estrelas**: Formulário interno de feedback
  - **4-5 estrelas**: Redirecionamento para Google Reviews
- 💾 **Banco de Dados SQLite** para armazenar feedbacks
- 📊 **Painel Administrativo** com estatísticas em tempo real
- 🎯 **API REST** completa para gerenciar feedbacks
- 📱 **Design Responsivo** (mobile-first)
- 🎨 **Interface Moderna** com animações suaves
- ✨ **Micro-animações** para melhor UX

## 🚀 Instalação e Configuração

### 1. Instalar Dependências

Edite o arquivo `script.js` e configure:

```javascript
const CONFIG = {
    // URL do Google Forms para feedback negativo
    googleFormNegativeURL: 'https://docs.google.com/forms/d/e/SEU_ID_AQUI/viewform',
    
    // URL da página de avaliação do Google
    googleReviewURL: 'https://g.page/r/SEU_ID_AQUI/review',
};
```

### 2. Obter URL do Google Reviews

1. Acesse [Google Meu Negócio](https://business.google.com/)
2. Selecione seu estabelecimento
3. Clique em **"Obter mais avaliações"**
4. Copie o link curto (formato: `https://g.page/r/...`)

### 3. Criar Google Form (Opcional)

Para coletar feedback negativo:

1. Acesse [Google Forms](https://forms.google.com/)
2. Crie um novo formulário com os campos:
   - Nome (opcional)
   - E-mail (opcional)
   - Feedback (obrigatório)
3. Clique em **Enviar** > **Link** > Copiar
4. Cole no `CONFIG.googleFormNegativeURL`

### 4. Abrir no Navegador

Simplesmente abra o arquivo `index.html` em qualquer navegador moderno.

## 📁 Estrutura de Arquivos

```
google-review-landing/
├── index.html          # Estrutura HTML
├── styles.css          # Estilos e animações
├── script.js           # Lógica e interatividade
└── README.md           # Documentação
```

## 🎨 Personalização

### Cores

Edite as variáveis CSS em `styles.css`:

```css
:root {
    --primary-color: #4285F4;    /* Azul Google */
    --secondary-color: #34A853;  /* Verde Google */
    --warning-color: #FBBC05;    /* Amarelo Google */
    --danger-color: #EA4335;     /* Vermelho Google */
}
```

### Textos das Avaliações

Edite em `script.js`:

```javascript
ratingTexts: {
    1: 'Muito insatisfeito 😞',
    2: 'Insatisfeito 😕',
    3: 'Neutro 😐',
    4: 'Satisfeito 😊',
    5: 'Muito satisfeito! 🤩'
}
```

### Logo

Substitua o SVG da estrela no `index.html` pelo logo da sua empresa.

## 📊 Integração com Analytics

O código já possui funções preparadas para Google Analytics e Facebook Pixel:

```javascript
// Exemplo de tracking
trackEvent('rating_selected', { rating: 5 });
trackEvent('feedback_submitted', { type: 'negative' });
```

## 🌐 Deploy

### Opção 1: GitHub Pages (Grátis)

1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Vá em **Settings** > **Pages**
4. Selecione a branch `main` e pasta `/root`
5. Seu site estará em `https://seuusuario.github.io/nome-repo`

### Opção 2: Netlify (Grátis)

1. Acesse [Netlify](https://netlify.com)
2. Arraste a pasta do projeto
3. Pronto! URL gerada automaticamente

### Opção 3: Vercel (Grátis)

1. Acesse [Vercel](https://vercel.com)
2. Importe o projeto
3. Deploy automático

## 💡 Dicas

- **Teste antes de publicar**: Verifique se os links do Google estão funcionando
- **Mobile First**: A maioria dos usuários acessará pelo celular
- **Resposta Rápida**: Responda aos feedbacks negativos rapidamente
- **Incentivos**: Considere oferecer um desconto para quem avaliar

## 🔧 Troubleshooting

### Link do Google Reviews não funciona

- Verifique se você tem uma conta Google Meu Negócio ativa
- Certifique-se de que o estabelecimento está verificado
- Use o link curto fornecido pelo Google

### Formulário não envia

- Verifique se o URL do Google Forms está correto
- Certifique-se de que o formulário aceita respostas
- Teste manualmente abrindo o link

## 📝 Licença

Este projeto é de código aberto e pode ser usado livremente.

## 🤝 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório.

---

Feito com ❤️ para melhorar a experiência dos seus clientes!
