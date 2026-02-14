<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="welcome-container">
        <div class="logo-container">
          <img src="@/assets/img/Rick_and_Morty.svg" alt="Rick and Morty Logo" class="logo" />
        </div>

        <ion-card class="welcome-card">
          <ion-card-header>
            <ion-card-title>Bem-vindo!</ion-card-title>
            <ion-card-subtitle>Explore o universo de Rick e Morty</ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <p>Descobre personagens e episodios da serie atraves da API oficial.</p>
          </ion-card-content>
        </ion-card>

        <h3 class="section-title">Explorar</h3>

        <ion-list class="nav-list">
          <ion-item button router-link="/tabs/tab2" detail>
            <ion-icon :icon="people" slot="start" color="primary"></ion-icon>
            <ion-label>
              <h2>Personagens</h2>
              <p>Ver lista de personagens</p>
            </ion-label>
          </ion-item>
          <ion-item button router-link="/tabs/tab3" detail>
            <ion-icon :icon="tv" slot="start" color="primary"></ion-icon>
            <ion-label>
              <h2>Episodios</h2>
              <p>Ver lista de episodios</p>
            </ion-label>
          </ion-item>
          <ion-item button router-link="/tabs/tab4" detail>
            <ion-icon :icon="informationCircle" slot="start" color="primary"></ion-icon>
            <ion-label>
              <h2>Sobre</h2>
              <p>Sobre a aplicacao</p>
            </ion-label>
          </ion-item>
        </ion-list>
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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonButtons,
  IonMenuButton
} from '@ionic/vue';
import { people, tv, informationCircle } from 'ionicons/icons';
</script>

<style scoped>
.welcome-container {
  padding: 16px;
}

.logo-container {
  text-align: center;
  padding: 20px 0;
}

.logo {
  max-width: 280px;
  width: 100%;
  height: auto;
}

.welcome-card {
  margin-bottom: 20px;
}

.section-title {
  margin: 16px 0 8px 4px;
  font-size: 14px;
  font-weight: 600;
  color: var(--ion-color-medium);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.nav-list {
  border-radius: 12px;
  overflow: hidden;
}

.nav-list ion-item h2 {
  font-weight: 600;
}

.nav-list ion-item p {
  color: var(--ion-color-medium);
}
</style>
