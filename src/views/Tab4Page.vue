<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Sobre</ion-title>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="page-content">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Sobre</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="about-container">
        <ion-card>
          <ion-card-header>
            <ion-card-title>Sobre a Aplicação</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>Esta aplicação foi desenvolvida como trabalho individual para a disciplina de SI.</p>
            <p>Utiliza Ionic + Vue.js para criar uma interface responsiva que consome a API Rick & Morty para obter dados sobre personagens e episódios.</p>
          </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header>
            <ion-card-title>Autor</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-list>
              <ion-item>
                <ion-label>Nome</ion-label>
                <ion-note slot="end">Diogo Freire</ion-note>
              </ion-item>
              <ion-item>
                <ion-label>Curso</ion-label>
                <ion-note slot="end">Informática de Gestão</ion-note>
              </ion-item>
              <ion-item>
                <ion-label>Ano</ion-label>
                <ion-note slot="end">2025/2026</ion-note>
              </ion-item>
            </ion-list>
          </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header>
            <ion-card-title>Tecnologias Utilizadas</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-chip color="primary">Ionic</ion-chip>
            <ion-chip color="secondary">Vue.js</ion-chip>
            <ion-chip color="tertiary">TypeScript</ion-chip>
            <ion-chip color="success">Rick & Morty API</ion-chip>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonNote, IonChip, IonButtons, IonMenuButton } from '@ionic/vue';
</script>

<style scoped>
.about-container {
  padding: 20px;
}

ion-chip {
  margin: 5px;
}
</style>
