<template>
  <ion-app>

    <ion-menu content-id="main" type="overlay">
      <ion-header>
        <ion-toolbar>
          <ion-title>Rick &amp; Morty</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list>

          <ion-menu-toggle>
            <ion-item button routerLink="/tabs/tab1" router-direction="root">
              Home
            </ion-item>
          </ion-menu-toggle>

          <ion-menu-toggle>
            <ion-item button routerLink="/tabs/tab2" router-direction="root">
              Personagens
            </ion-item>
          </ion-menu-toggle>

          <ion-menu-toggle>
            <ion-item button routerLink="/tabs/tab3" router-direction="root">
              Episódios
            </ion-item>
          </ion-menu-toggle>

          <ion-menu-toggle>
            <ion-item button routerLink="/tabs/tab4" router-direction="root">
              Sobre
            </ion-item>
          </ion-menu-toggle>

        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-router-outlet id="main"></ion-router-outlet>

  </ion-app>
</template>

<script setup lang="ts">
import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonMenuToggle
} from '@ionic/vue';
</script>