<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="sidebar" app>
      <v-subheader>Navigate</v-subheader>
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
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />


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
export default {
  name: 'App',

  data: () => ({
    //
    sidebar: false,
    menuItems: [
      { title: 'Home', path: '/' },
      { title: 'About', path: '/about' },
    ],
  }),
};
</script>
