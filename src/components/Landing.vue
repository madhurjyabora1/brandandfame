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
      :height="imageHeight"
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    >
      <v-row align="center" justify="center">
        <v-col cols="12" sm="12" md="4">
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
              <v-btn color="primary" block @click.stop="bookDialog('Basic')">
                Book
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4">
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
              <v-btn color="primary" block @click.stop="bookDialog('Standard')">
                Book
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4">
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
              <v-btn color="primary" block @click.stop="bookDialog('Premium')">
                Book
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-parallax>
    <form-modal :dialog="openDialog" @close="close" :mPackage="sendPackage" />
  </v-container>
</template>
<script>
import FormModal from "@/components/FormModal.vue";
export default {
  components: {
    FormModal,
  },
  //name: "Landing"
  data() {
    return {
      links: ["Dashboard", "Messages", "Profile", "Updates"],
      menuItems: [
        { text: "Branding", icon: "mdi-check" },
        { text: "Digital Marketing Content Creation", icon: "mdi-check" },
        { text: "Web Designing", icon: "mdi-check" },
        { text: "Marketing Strategy and Analysis", icon: "mdi-check" },
        { text: "POS", icon: "mdi-check" },
      ],
      openDialog: false,
      mPackage: "",
    };
  },
  computed: {
    sendPackage() {
      return this.mPackage;
    },
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "200px";
        case "sm":
          return "400px";
        case "md":
          return "600px";
        case "lg":
          return "800px";
        case "xl":
          return "1000px";
      }
      return "1000px";
    },
  },
  methods: {
    bookDialog(val) {
      this.mPackage = val;
      this.openDialog = true;
    },
    close() {
      this.mPackage = "";
      this.openDialog = false;
    },
  },
};
</script>
<style scoped>
.card-title {
  text-align: center;
}
</style>
