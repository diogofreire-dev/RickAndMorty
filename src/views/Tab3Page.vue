<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Episódios</ion-title>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
      <ion-toolbar class="segment-toolbar">
        <ion-segment v-model="selectedSeason">
          <ion-segment-button value="all">
            <ion-label>Todas</ion-label>
          </ion-segment-button>
          <ion-segment-button value="S01">
            <ion-label>T1</ion-label>
          </ion-segment-button>
          <ion-segment-button value="S02">
            <ion-label>T2</ion-label>
          </ion-segment-button>
          <ion-segment-button value="S03">
            <ion-label>T3</ion-label>
          </ion-segment-button>
          <ion-segment-button value="S04">
            <ion-label>T4</ion-label>
          </ion-segment-button>
          <ion-segment-button value="S05">
            <ion-label>T5</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-spinner v-if="loading" class="loading-spinner"></ion-spinner>

      <ion-list v-if="!loading">
        <ion-item v-for="episode in filteredEpisodes" :key="episode.id">
          <ion-icon :icon="tvOutline" slot="start" color="primary"></ion-icon>
          <ion-label>
            <h2>{{ episode.name }}</h2>
            <p>
              <ion-badge color="primary">{{ episode.episode }}</ion-badge>
              <span class="air-date">{{ episode.air_date }}</span>
            </p>
          </ion-label>
        </ion-item>
      </ion-list>

      <div v-if="!loading && filteredEpisodes.length === 0" class="no-results">
        <p>Nenhum episódio encontrado</p>
      </div>
    </ion-content>
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
  IonButtons,
  IonMenuButton,
  IonSegment,
  IonSegmentButton,
  IonIcon,
  IonBadge
} from '@ionic/vue';
import { tvOutline } from 'ionicons/icons';
import { ref, onMounted, computed } from 'vue';
import RickAndMortyService from '../services/RickAndMortyService';

interface Episode {
  id: number;
  name: string;
  episode: string;
  air_date: string;
}

const episodes = ref<Episode[]>([]);
const loading = ref(true);
const selectedSeason = ref('all');

const filteredEpisodes = computed(() => {
  if (selectedSeason.value === 'all') {
    return episodes.value;
  }
  return episodes.value.filter(episode =>
    episode.episode.startsWith(selectedSeason.value)
  );
});

onMounted(async () => {
  episodes.value = await RickAndMortyService.getEpisodes();
  loading.value = false;
});
</script>

<style scoped>
.segment-toolbar {
  --background: var(--ion-color-light);
}

ion-segment {
  --background: transparent;
}

ion-segment-button {
  --color: #333;
  --color-checked: #fff;
  --background-checked: var(--ion-color-primary);
  --indicator-color: transparent;
  min-width: 50px;
  font-weight: 500;
}

.loading-spinner {
  display: block;
  margin: 50px auto;
}

.no-results {
  padding: 20px;
  text-align: center;
}

.air-date {
  margin-left: 10px;
  color: var(--ion-color-medium);
}

ion-badge {
  margin-right: 8px;
}
</style>
