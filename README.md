# Compras — GitHub Pages + Google Apps Script + Google Sheets

Aplicativo mobile-first/PWA para criação e acompanhamento de listas de compras.

## Funcionalidades

- Nova lista com nome opcional e tipo de compra.
- Itens com autocomplete pesquisável, unidade (UN, KG, g), quantidade decimal e observação.
- Biblioteca inicial ampla para mercado, feira, açougue, padaria, farmácia, pet shop, eletrodomésticos e material de construção.
- Autocomplete prioriza os itens relacionados ao tipo de lista selecionado.
- Cadastro rápido de um item inexistente diretamente pelo autocomplete.
- Tela **Biblioteca** para pesquisar e gerenciar itens personalizados.
- Itens padrão são protegidos; itens personalizados podem ser editados ou removidos da biblioteca.
- Compras pendentes com checkbox, separação entre Pendentes e Comprados e efeito fade nos comprados.
- Edição de lista pendente: adicionar, editar/substituir e excluir itens.
- Cancelar compra mantém a lista em Pendentes e reinicia os checkboxes.
- Conclusão automática quando todos os itens são marcados ou manual com itens pendentes.
- Arquivo/histórico de compras concluídas.
- Criação de nova lista a partir de uma compra do histórico.
- PWA instalável no celular.

## Estrutura do Google Sheets

O Apps Script cria/migra automaticamente estas abas:

- `Listas`
- `ItensLista`
- `Itens`
- `TiposLista`

A aba `Itens` usa: `id`, `name`, `category`, `defaultUnit`, `listTypes`, `active`, `isCustom`.

## Instalação

1. Crie uma planilha no Google Sheets.
2. Abra **Extensões > Apps Script**.
3. Substitua o conteúdo por `apps-script/Code.gs`.
4. Execute `setupSpreadsheet()` uma vez e autorize o script.
5. Em **Implantar > Nova implantação**, selecione **Aplicativo da Web**.
6. Configure a execução como você e o acesso conforme sua necessidade.
7. Copie a URL terminada em `/exec`.
8. Em `app.js`, informe essa URL em `CONFIG.APPS_SCRIPT_URL`.
9. Publique `index.html`, `styles.css`, `app.js`, `manifest.json`, `sw.js` e a pasta `icons` no GitHub Pages.

Enquanto `APPS_SCRIPT_URL` estiver vazio, o app usa `localStorage` para testes no navegador.

## Atualização de uma versão anterior

O novo `Code.gs` preserva as listas existentes e acrescenta as novas colunas à aba `Itens`. Os itens padrão antigos são enriquecidos com categoria, unidade e tipos de lista, sem excluir o histórico.

## Sincronização (versão atual)
- As ações do usuário são aplicadas imediatamente no armazenamento local do aparelho, sem consultar o Google Sheets a cada item criado ou checkbox marcado.
- Ao abrir o app, é feita uma sincronização inicial.
- Enquanto o app estiver aberto/ativo, a sincronização automática ocorre a cada 30 minutos.
- O botão ↻ no cabeçalho força uma sincronização manual a qualquer momento.
- O cabeçalho informa `Alterações locais`, `Sincronizando…` ou há quanto tempo ocorreu a última atualização.
- Uma PWA fechada pelo sistema operacional não pode garantir execução exata a cada 30 minutos; ao voltar ao app, uma sincronização vencida é disparada.
- Esta versão adiciona a ação `syncSnapshot` ao Apps Script. Depois de substituir o `Code.gs`, publique uma nova versão da implantação do Web App.

## Atualização desta versão
- Cada item em compra possui os estados Pendente, Comprado e Não encontrado.
- A compra só pode ser concluída quando não houver itens Pendentes.
- Se houver itens Não encontrados, a conclusão permite criar uma nova lista somente com essas pendências ou encerrar sem nova lista.
- O histórico preserva os itens Não encontrados.
- No modo Editar, os itens podem ser reordenados por arrastar e soltar; a ordem é persistida em `sortOrder`.
- Após atualizar `Code.gs`, execute `setupSpreadsheet()` uma vez para adicionar a coluna `purchaseState` à aba `ItensLista`, e publique uma nova versão da implantação do Web App.
