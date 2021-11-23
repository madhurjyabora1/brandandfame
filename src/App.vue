<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="sidebar" app>
      <v-subheader>Brand N Fame</v-subheader>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="white" elevate-on-scroll fixed>
      <v-container class="py-0 fill-height" fluid>
        <router-link to="/">
          <v-img
            alt="Vuetify Logo"
            class="shrink"
            contain
            :src="logo"
            transition="scale-transition"
            width="230"
          />
        </router-link>

        <v-spacer></v-spacer>

        <span class="d-sm-none">
          <v-app-bar-nav-icon
            @click.stop="sidebar = !sidebar"
          ></v-app-bar-nav-icon>
        </span>
        <v-btn
          text
          plain
          class="d-none d-sm-flex"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          {{ item.title }}
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main app class="">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
const logo = require("@/assets/bnf.png");
export default {
  name: "App",

  data: () => ({
    //
    sidebar: false,
    logo,
    menuItems: [
      { title: "Home", path: "/" },
      { title: "About", path: "/about" },
      { title: "Form", path: "/form" },
    ],
  }),
};
</script>
