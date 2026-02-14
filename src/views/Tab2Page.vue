<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>Personagens</ion-title>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-refresher slot="fixed" @ionRefresh="handleRefresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <ion-searchbar
        v-model="searchText"
        placeholder="Pesquisar personagens"
        animated>
      </ion-searchbar>

      <ion-spinner v-if="loading" class="loading-spinner"></ion-spinner>

      <ion-list v-if="!loading">
        <ion-item v-for="character in filteredCharacters"
                  :key="character.id"
                  button
                  @click="openModal(character)">

          <ion-avatar slot="start">
            <img :src="character.image" />
          </ion-avatar>

          <ion-label>
            <h2>{{ character.name }}</h2>
            <p>{{ character.species }}</p>
          </ion-label>

          <ion-badge slot="end" :color="getStatusColor(character.status)">
            {{ character.status }}
          </ion-badge>

        </ion-item>
      </ion-list>

      <div v-if="!loading && filteredCharacters.length === 0" class="no-results">
        <p>Nenhuma personagem encontrada</p>
      </div>

    </ion-content>

    <ion-modal :is-open="showModal" @didDismiss="closeModal">

      <ion-header>
        <ion-toolbar>
          <ion-title>{{ selectedCharacter?.name }}</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="closeModal">
              Fechar
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <ion-content>

        <ion-img :src="selectedCharacter?.image"></ion-img>

        <ion-list>
          <ion-item>
            <ion-label>Status</ion-label>
            <ion-note slot="end">{{ selectedCharacter?.status }}</ion-note>
          </ion-item>

          <ion-item>
            <ion-label>Espécie</ion-label>
            <ion-note slot="end">{{ selectedCharacter?.species }}</ion-note>
          </ion-item>

          <ion-item>
            <ion-label>Género</ion-label>
            <ion-note slot="end">{{ selectedCharacter?.gender }}</ion-note>
          </ion-item>
        </ion-list>

      </ion-content>

    </ion-modal>

    <ion-toast
      :is-open="showToast"
      :message="toastMessage"
      :duration="2000"
      @didDismiss="showToast = false"
    ></ion-toast>

  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonSpinner,
  IonAvatar,
  IonModal,
  IonImg,
  IonNote,
  IonSearchbar,
  IonButtons,
  IonButton,
  IonMenuButton,
  IonToast,
  IonRefresher,
  IonRefresherContent,
  IonBadge
} from '@ionic/vue';

import { ref, onMounted, computed } from 'vue';
import RickAndMortyService from '../services/RickAndMortyService';

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  gender: string;
}

const characters = ref<Character[]>([]);
const loading = ref(true);
const searchText = ref('');
const showModal = ref(false);
const selectedCharacter = ref<Character | null>(null);
const showToast = ref(false);
const toastMessage = ref('');

// Computed para filtrar personagens
const filteredCharacters = computed(() => {
  return characters.value.filter(character =>
    character.name.toLowerCase().includes(
      searchText.value.toLowerCase()
    )
  );
});

const openModal = (character: Character) => {
  selectedCharacter.value = character;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

// Cor do badge baseada no status
const getStatusColor = (status: string) => {
  switch (status) {
    case 'Alive': return 'success';
    case 'Dead': return 'danger';
    default: return 'medium';
  }
};

// Pull to refresh
const handleRefresh = async (event: CustomEvent) => {
  try {
    characters.value = await RickAndMortyService.getCharacters();
    toastMessage.value = 'Dados atualizados!';
    showToast.value = true;
  } catch (error) {
    toastMessage.value = 'Erro ao atualizar.';
    showToast.value = true;
  }
  (event.target as HTMLIonRefresherElement).complete();
};

onMounted(async () => {
  try {
    characters.value = await RickAndMortyService.getCharacters();
    loading.value = false;
    toastMessage.value = 'Personagens carregados com sucesso!';
    showToast.value = true;
  } catch (error) {
    loading.value = false;
    toastMessage.value = 'Erro ao carregar personagens.';
    showToast.value = true;
  }
});
</script>

<style scoped>
.loading-spinner {
  display: block;
  margin: 50px auto;
}

.no-results {
  padding: 20px;
  text-align: center;
}
</style>