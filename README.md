# Nexora CRM

Protótipo front-end de um CRM para acompanhar clientes, empresas, oportunidades comerciais e tarefas.

## Estado atual

O projeto é uma aplicação estática feita com HTML, CSS e JavaScript puro. Não há backend, banco de dados, processo de build ou instalação de dependências. Os dados apresentados são exemplos escritos diretamente no HTML.

Funcionalidades disponíveis:

- dashboard com indicadores, atividades recentes e próximas tarefas;
- listagem visual de clientes e formulário de filtros;
- pipeline de oportunidades em formato Kanban;
- menu lateral recolhível;
- páginas reservadas para Empresas, Tarefas e Configurações.

Alguns botões e formulários ainda são apenas visuais e não executam operações de cadastro, edição, remoção ou pesquisa.

## Como executar

Abra `index.html` diretamente no navegador. Opcionalmente, sirva a pasta com Python:

```bash
python -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

## Estrutura do projeto

```text
nexora-crm/
├── index.html            # Dashboard e visão geral
├── clientes.html         # Busca e tabela de clientes
├── empresas.html         # Módulo em desenvolvimento
├── oportunidades.html    # Pipeline comercial
├── tarefas.html          # Módulo em desenvolvimento
├── configuracoes.html    # Módulo em desenvolvimento
├── css/
│   └── style.css         # Layout, componentes e estilos das páginas
└── js/
    └── app.js            # Comportamento do menu lateral
```

## Onde alterar cada parte

- Navegação, cabeçalho e rodapé: em cada arquivo HTML.
- Cores e medidas globais: variáveis no início de `css/style.css`.
- Componentes de clientes: seção “Módulo de clientes” no CSS e `clientes.html`.
- Pipeline: seção “Pipeline de oportunidades” no CSS e `oportunidades.html`.
- Interatividade compartilhada: `js/app.js`.

## Convenções para continuar

- Comente por bloco ou responsabilidade, explicando a intenção do código.
- Evite comentários que apenas repitam literalmente uma propriedade ou tag.
- Reutilize as variáveis de `:root` para manter cores e medidas consistentes.
- Preserve atributos de acessibilidade como `aria-label`, `aria-controls` e `aria-expanded`.
- Em novas páginas, mantenha a estrutura de cabeçalho, menu, conteúdo e rodapé.

## Próximos passos sugeridos

1. Padronizar o destaque `aria-current="page"` em cada menu.
2. Restaurar ao carregar a página o estado salvo do menu lateral.
3. Conectar filtros, cadastros e ações a dados reais.
4. Criar os módulos de Empresas, Tarefas e Configurações.
5. Adicionar responsividade para telas pequenas e testes das interações.
