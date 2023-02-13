<template>
  <q-page class="flex column q-pa-md">
    <span class="text-h1">Headline 1</span>
    <span class="text-h2">Headline 2</span>
    <span class="text-h3">Headline 3</span>
    <span class="text-h4">Headline 4</span>
    <span class="text-h5">Headline 5</span>
    <span class="text-h6">Headline 6</span>

    <q-separator />
    <span class="text-subtitle1"> subtitle 1 </span>
    <span class="text-subtitle2"> subtitle 2 </span>
    <q-separator />

    <p class="text-body1">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam fugiat
      autem maiores ut odio nisi, suscipit excepturi ratione! Voluptas est vitae
      ipsam reiciendis et reprehenderit provident voluptatem dolorem consectetur
      pariatur.
    </p>
    <p class="text-body2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam fugiat
      autem maiores ut odio nisi, suscipit excepturi ratione! Voluptas est vitae
      ipsam reiciendis et reprehenderit provident voluptatem dolorem consectetur
      pariatur.
    </p>
    <q-separator />
    <span class="text-weight-thin"
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus a fugit
      cum minus vel fuga eligendi, ea, non molestias nesciunt inventore
      praesentium doloremque quis ratione debitis voluptate ex. Cupiditate,
      amet.
    </span>
    <span class="text-weight-light"
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus a fugit
      cum minus vel fuga eligendi, ea, non molestias nesciunt inventore
      praesentium doloremque quis ratione debitis voluptate ex. Cupiditate,
      amet.
    </span>
    <span class="text-weight-regular"
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus a fugit
      cum minus vel fuga eligendi, ea, non molestias nesciunt inventore
      praesentium doloremque quis ratione debitis voluptate ex. Cupiditate,
      amet.
    </span>
    <span class="text-weight-medium"
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus a fugit
      cum minus vel fuga eligendi, ea, non molestias nesciunt inventore
      praesentium doloremque quis ratione debitis voluptate ex. Cupiditate,
      amet.
    </span>
    <span class="text-weight-bold"
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus a fugit
      cum minus vel fuga eligendi, ea, non molestias nesciunt inventore
      praesentium doloremque quis ratione debitis voluptate ex. Cupiditate,
      amet.
    </span>
    <span class="text-weight-bolder"
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus a fugit
      cum minus vel fuga eligendi, ea, non molestias nesciunt inventore
      praesentium doloremque quis ratione debitis voluptate ex. Cupiditate,
      amet.
    </span>

    <q-btn
      color="primary"
      :label="sideMenuOpen ? 'Cerrar menu lateral' : 'Abrir menu lateral'"
      class="q-mt-md"
      @click="toggleSideMenu"
    />
  </q-page>
</template>

<script>
import useUI from "src/composables/useUI";
import { defineComponent } from "vue";

export default defineComponent({
  name: "typography",

  setup() {
    const { sideMenuOpen, toggleSideMenu } = useUI();

    return {
      sideMenuOpen,
      toggleSideMenu,
    };
  },
});
</script>
