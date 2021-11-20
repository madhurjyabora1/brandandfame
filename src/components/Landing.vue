<template>
  <v-container fluid py-0 px-0>
    <v-parallax
      dark
      height="700"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h4 font-weight-thin mb-4">Brand and Fame</h1>
          <h4 class="subheading">
            One Stop Place to meet all your digital marketing needs!
          </h4>
        </v-col>
      </v-row>
    </v-parallax>
    <v-parallax
      height="600"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    >
      <v-row align="center" justify="center">
        <v-col cols="4">
          <v-card class="mx-auto my-12" max-width="374">
            <h2 class="text-center py-2">Basic</h2>
            <v-divider class="mx-4"></v-divider>
            <v-list flat>
              <v-list-item-group>
                <v-list-item v-for="(item, i) in menuItems" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>

            <v-card-actions>
              <v-btn color="primary" block> Book </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="mx-auto my-12" max-width="374">
            <h2 class="text-center py-2">Basic</h2>
            <v-divider class="mx-4"></v-divider>
            <v-list flat>
              <v-list-item-group>
                <v-list-item v-for="(item, i) in menuItems" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>

            <v-card-actions>
              <v-btn color="primary" block> Book </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card class="mx-auto my-12" max-width="374">
            <h2 class="text-center py-2">Basic</h2>
            <v-divider class="mx-4"></v-divider>
            <v-list flat>
              <v-list-item-group>
                <v-list-item v-for="(item, i) in menuItems" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>

            <v-card-actions>
              <v-btn color="primary" block> Book </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-parallax>
  </v-container>
</template>
<script>
export default {
  //name: "Landing"
  data: () => ({
    links: ['Dashboard', 'Messages', 'Profile', 'Updates'],
    menuItems: [
      { text: 'Facility', icon: 'mdi-check' },
      { text: 'Facility', icon: 'mdi-check' },
      { text: 'Facility', icon: 'mdi-check' },
    ],
  }),
};
</script>
<style scoped>
.card-title {
  text-align: center;
}
</style>
