# Guia de Apresentacao - App Rick & Morty

## Resumo do Projeto

Aplicacao Ionic + Vue.js que consome a API Rick & Morty para mostrar personagens e episodios da serie.

---

## Estrutura da Aplicacao

```
src/
  views/
    Tab1Page.vue    -> Home (boas-vindas)
    Tab2Page.vue    -> Personagens (API + modal + filtragem)
    Tab3Page.vue    -> Episodios (API + IonSegment)
    Tab4Page.vue    -> Sobre (info autor)
    TabsPage.vue    -> Navegacao por tabs
  services/
    RickAndMortyService.ts  -> Chamadas a API
  assets/
    img/rick-morty-logo.svg -> Asset local
```

---

## Requisitos Cumpridos

| # | Requisito | Onde esta |
|---|-----------|-----------|
| 1 | Navegacao por tabs | TabsPage.vue |
| 2 | Pagina Home com boas-vindas | Tab1Page.vue |
| 3 | Personagens (API, listagem, modal, filtragem) | Tab2Page.vue |
| 4 | Episodios (API, listagem) | Tab3Page.vue |
| 5 | Pagina Sobre | Tab4Page.vue |
| 6 | Asset local | src/assets/img/rick-morty-logo.svg |
| 7 | Componente Ionic novo | IonSegment em Tab3Page.vue |

---

## Componente Ionic Novo: IonSegment

### O que e?
O IonSegment e um componente de navegacao horizontal com botoes que permite filtrar conteudo por categorias.

### Onde foi usado?
Na pagina de Episodios (Tab3Page.vue) para filtrar episodios por temporada.

### Codigo relevante:

```vue
<ion-segment v-model="selectedSeason">
  <ion-segment-button value="all">
    <ion-label>Todas</ion-label>
  </ion-segment-button>
  <ion-segment-button value="S01">
    <ion-label>T1</ion-label>
  </ion-segment-button>
  <!-- ... T2, T3, T4, T5 -->
</ion-segment>
```

### Logica de filtragem:

```typescript
const selectedSeason = ref('all');

const filteredEpisodes = computed(() => {
  if (selectedSeason.value === 'all') {
    return episodes.value;
  }
  return episodes.value.filter(episode =>
    episode.episode.startsWith(selectedSeason.value)
  );
});
```

### Justificacao:
- Melhora a experiencia do utilizador ao permitir filtrar rapidamente por temporada
- E um componente visual e interativo
- Integra-se bem com o Vue atraves do v-model

---

## Decisoes Tecnicas para Explicar

### 1. Uso de Computed Properties
**O que e:** Uma propriedade calculada que se atualiza automaticamente quando os dados mudam.

**Onde:** `filteredCharacters` em Tab2Page.vue e `filteredEpisodes` em Tab3Page.vue

**Porque:** Permite filtrar dados de forma reativa sem ter de chamar funcoes manualmente.

### 2. Uso de ref() vs reactive()
**Escolha:** Usamos `ref()` para valores simples (strings, arrays)

**Exemplo:**
```typescript
const searchText = ref('');
const characters = ref<Character[]>([]);
```

### 3. Consumo da API com async/await
**Como funciona:**
```typescript
onMounted(async () => {
  characters.value = await RickAndMortyService.getCharacters();
  loading.value = false;
});
```

### 4. TypeScript Interfaces
**Porque:** Definir tipos para os dados da API ajuda a evitar erros.

```typescript
interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  gender: string;
}
```

---

## Componentes Ionic Usados

| Componente | Onde | Para que serve |
|------------|------|----------------|
| IonPage | Todas as paginas | Container principal |
| IonHeader/Toolbar | Todas | Cabecalho |
| IonContent | Todas | Area de conteudo |
| IonList/Item | Tab2, Tab3, Tab4 | Listas |
| IonCard | Tab1, Tab4 | Cartoes informativos |
| IonSearchbar | Tab2 | Campo de pesquisa |
| IonModal | Tab2 | Popup com detalhes |
| IonSpinner | Tab2, Tab3 | Indicador de loading |
| IonAvatar | Tab2 | Imagem circular |
| IonBadge | Tab2, Tab3 | Status e codigo episodio |
| IonChip | Tab4 | Tags de tecnologias |
| IonSegment | Tab3 | **NOVO** - Filtros por temporada |
| IonRefresher | Tab2 | **BONUS** - Pull to refresh |
| IonToast | Tab2 | Notificacoes |

---

## Dificuldades e Solucoes

### 1. IonSegment nao mostrava todos os botoes
**Problema:** Com `scrollable`, os botoes ficavam muito espacados
**Solucao:** Remover `scrollable` e adicionar estilos CSS personalizados

### 2. Filtragem de personagens
**Problema:** Tinha de filtrar em tempo real enquanto o utilizador escreve
**Solucao:** Usar `computed()` que reage automaticamente a mudancas no `searchText`

### 3. Mostrar loading enquanto carrega dados
**Problema:** A pagina ficava vazia enquanto carregava
**Solucao:** Usar variavel `loading` com `v-if` para mostrar spinner

---

## API Rick & Morty

**URL Base:** https://rickandmortyapi.com/api

**Endpoints usados:**
- `/character` - Lista de personagens
- `/episode` - Lista de episodios

**Exemplo de resposta (character):**
```json
{
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "gender": "Male",
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
}
```

---

## Tecnologias Utilizadas

- **Ionic 8** - Framework UI para apps hibridas
- **Vue 3** - Framework JavaScript reativo
- **TypeScript** - JavaScript com tipos
- **Vite** - Bundler rapido
- **Capacitor** - Para compilar para mobile (opcional)

---

## Como Executar

```bash
cd RickAndMorty
npm install
npm run dev
```

Aceder a: http://localhost:8100

---

## Funcionalidades BONUS Adicionadas

### 1. Pull-to-Refresh (IonRefresher)
**Onde:** Tab2Page.vue (Personagens)
**O que faz:** Permite arrastar para baixo para recarregar os dados

```vue
<ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
  <ion-refresher-content></ion-refresher-content>
</ion-refresher>
```

### 2. Badge de Status com Cores
**Onde:** Tab2Page.vue (lista de personagens)
**O que faz:** Mostra o status (Alive/Dead/Unknown) com cores diferentes

```typescript
const getStatusColor = (status: string) => {
  switch (status) {
    case 'Alive': return 'success';  // Verde
    case 'Dead': return 'danger';    // Vermelho
    default: return 'medium';        // Cinza
  }
};
```

### 3. Logo na Pagina Home
**Onde:** Tab1Page.vue
**O que faz:** Mostra o logo da serie (asset local) na pagina inicial

### 4. Design Melhorado
- Icones coloridos nos menus
- Badges nos episodios
- Layout mais limpo e organizado

---

## Pontos-Chave para a Apresentacao

1. **Mostrar a app a funcionar** - Navegar pelas 4 tabs
2. **Demonstrar filtragem** - Pesquisar personagem e filtrar episodios por temporada
3. **Mostrar modal** - Clicar num personagem para ver detalhes
4. **Explicar IonSegment** - Porque escolhi este componente (filtrar por temporada)
5. **Mostrar pull-to-refresh** - Arrastar para baixo na pagina de personagens
6. **Mostrar badges de status** - Cores diferentes para Alive/Dead
7. **Mostrar codigo** - computed properties, async/await, e consumo da API

---

## Exemplo de Discurso para Apresentacao

> "Desenvolvi uma aplicacao em Ionic + Vue que consome a API Rick & Morty.
> A aplicacao tem 4 tabs: Home, Personagens, Episodios e Sobre.
>
> Na pagina de Personagens, posso pesquisar por nome e ver detalhes num modal.
> Tambem adicionei pull-to-refresh para atualizar os dados.
>
> Na pagina de Episodios, usei o componente IonSegment - que nao foi usado nos
> tutoriais - para filtrar episodios por temporada. Escolhi este componente
> porque melhora a experiencia do utilizador ao permitir navegacao rapida.
>
> Uma dificuldade que tive foi que o IonSegment com 'scrollable' nao mostrava
> todos os botoes corretamente. Resolvi removendo essa propriedade e ajustando
> os estilos CSS.
>
> As principais decisoes tecnicas foram usar computed properties para filtragem
> reativa e async/await para chamadas a API."
