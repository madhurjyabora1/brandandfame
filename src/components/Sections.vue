<template>
  <v-container>
    <div v-for="(item, $index) in items" :key="$index">
      <v-row v-if="$index % 2 === 0">
        <v-col cols="12" class="d-sm-flex d-md-none" sm="12" md="6" lg="6">
          <v-img
            alt="Vuetify Logo"
            class="py-6 mr-10"
            contain
            :src="item.pic"
            height="350"
            transition="scale-transition"
          />
        </v-col>
        <v-col cols="12" class="text-center" sm="12" md="6" lg="6">
          <h1 class="text-h4 font-weight mb-4">{{ item.header }}</h1>
          <div class="subheading">
            {{ item.text }}
          </div>
        </v-col>
        <v-col cols="12" class="d-none d-md-flex" sm="12" md="6" lg="6">
          <v-img
            alt="Vuetify Logo"
            class="py-6 mr-10"
            contain
            :src="item.pic"
            height="350"
            transition="scale-transition"
          />
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="12" sm="12" md="6" lg="6">
          <v-img
            alt="Vuetify Logo"
            class="py-6 mr-10"
            contain
            :src="item.pic"
            height="350"
            transition="scale-transition"
          />
        </v-col>
        <v-col cols="12" class="text-center" sm="12" md="6" lg="6">
          <h1 class="text-h4 font-weight mb-4">{{ item.header }}</h1>
          <div class="subheading">
            {{ item.text }}
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          pic: require("@/assets/images/content.png"),
          header: "Digital Content Creation",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          pic: require("@/assets/images/web-des.png"),
          header: "Web Designing",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          pic: require("@/assets/images/pos.png"),
          header: "POS System",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
          pic: require("@/assets/images/seo.png"),
          header: "SEO",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>