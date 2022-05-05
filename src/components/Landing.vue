<template>
  <div>
    <v-container fluid>
      <!-- <v-parallax
      dark
      height="700"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    > -->
      <v-row align="center" justify="center" class="d-none d-md-flex">
        <v-col class="text-center" cols="12" sm="12" md="4">
          <h1 class="text-h4 font-weight mb-4">{{ header }}</h1>
          <h4 class="subheading px-10">
            {{ subheader }}
          </h4>
          <a href="#services" v-smooth-scroll
            ><v-btn depressed color="primary" class="mt-4">Get Stared</v-btn></a
          >
        </v-col>
        <v-col cols="12" sm="12" md="8">
          <v-img
            alt="Vuetify Logo"
            class="shrink logo-top"
            contain
            :src="banner"
            transition="scale-transition"
          />
        </v-col>
      </v-row>

      <v-row
        align="center"
        justify="center"
        class="d-sm-flex d-md-none mobile-banner-row"
      >
        <v-col class="text-center banner-container" cols="12" sm="12" md="4">
          <div class="text-banner">
            <h1 class="text-h4 font-weight mb-4">
              {{ header }}
            </h1>
            <h4 class="subheading">
              {{ subheader }}
            </h4>
          </div>
        </v-col>
        <v-col class="text-center banner-container" cols="12" sm="12" md="4">
          <v-img
            alt="Vuetify Logo"
            class="shrink logo-top banner-img mt-0"
            contain
            :src="banner"
            transition="scale-transition"
          />
        </v-col>
      </v-row>
      <v-row align="center" justify="center" class="d-sm-flex" id="services">
        <v-col class="text-center banner-container" cols="12">
          <div class="service-heading">Our services</div>
        </v-col>
      </v-row>
      <sections />
    </v-container>
    <!-- abous us -->
    <div class="about-us">
      <!-- <v-row align="center" justify="center"> -->
      <div>
        <div class="about-us__rows">
          <div class="mr-10">
            <img src="@/assets/development.svg" />
          </div>
          <div>
            <div class="text-mid">
              BrandnFame is a digital marketing agency based in Guwahati
            </div>
            <div class="text-md-body-1 mt-3">
              We thrive to provide more high quality content for the users and
              our customers
            </div>
            <v-btn color="primary" class="mt-7" :to="{ path: '/about' }"
              >More about us</v-btn
            >
          </div>
        </div>
      </div>
      <!-- </v-row> -->
    </div>
    <!-- packages  -->
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="12" md="12">
          <div class="text-mid text-center mt-10">Pricing Plan</div>
          <div class="service-heading">
            Small Pricing Plan for your creative business
          </div>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="12" md="4">
          <v-card class="mx-auto my-12" max-width="374">
            <h2 class="text-center py-2">Basic</h2>
            <v-divider class="mx-4"></v-divider>
            <v-list flat>
              <v-list-item-group>
                <v-list-item v-for="(item, i) in basicItems" :key="i">
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
            <h2 class="text-center py-2">Standard</h2>
            <v-divider class="mx-4"></v-divider>
            <v-list flat>
              <v-list-item-group>
                <v-list-item v-for="(item, i) in standardItems" :key="i">
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
            <h2 class="text-center py-2">Premium</h2>
            <v-divider class="mx-4"></v-divider>
            <v-list flat>
              <v-list-item-group>
                <v-list-item v-for="(item, i) in premiumItems" :key="i">
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

      <form-modal v-model="openDialog" :mPackage="sendPackage" />
    </v-container>
    <v-footer color="primary" padless>
      <v-row justify="center" no-gutters>
        <div class="footer"></div>
        <v-col class="primary py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>BrandnFame</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>
<script>
import FormModal from "@/components/FormModal.vue";
import Sections from "@/components/Sections.vue";
const banner = require("@/assets/images/digital-marketing.png");
export default {
  components: {
    FormModal,
    Sections,
  },
  //name: "Landing"
  data() {
    return {
      banner,
      header: "Enhance your brand.",
      subheader:
        "One Stop Place to meet all your digital marketing needs. We help businesses of all shapes and sizes to thrive in the online world.",
      links: ["Dashboard", "Messages", "Profile", "Updates"],
      basicItems: [
        { text: "Branding", icon: "mdi-check" },
        { text: "Digital Marketing Content Creation", icon: "mdi-check" },
        { text: "Marketing Strategy and Analysis", icon: "mdi-check" },
        { text: "POS", icon: "mdi-minus" },
        { text: "Web Designing", icon: "mdi-minus" },
      ],
      standardItems: [
        { text: "Branding", icon: "mdi-check" },
        { text: "Digital Marketing Content Creation", icon: "mdi-check" },
        { text: "Marketing Strategy and Analysis", icon: "mdi-check" },
        { text: "POS", icon: "mdi-check" },
        { text: "Web Designing", icon: "mdi-minus" },
      ],
      premiumItems: [
        { text: "Branding", icon: "mdi-check" },
        { text: "Digital Marketing Content Creation", icon: "mdi-check" },
        { text: "Marketing Strategy and Analysis", icon: "mdi-check" },
        { text: "POS", icon: "mdi-check" },
        { text: "Web Designing", icon: "mdi-check" },
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
  },
};
</script>
<style scoped lang="scss">
.about-us {
  background: #f3f4f6;
}
.about-us img {
  width: 250px;
}
.about-us__rows {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.card-title {
  text-align: center;
}
.banner-container {
  position: relative;
  text-align: center;
}
.service-heading {
  font-size: 36px;
  font-weight: 500;
  text-align: center;
}
.text-banner {
  color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding: 0px 40px;
}

.mobile-banner-row {
  background: linear-gradient(
    180deg,
    #fff,
    #d5dcfa 37.81%,
    #d5e4f2 71.67%,
    #fff
  );
  height: 60vh;
}
.subheading {
  color: grey;
  font-weight: 300;
}
.text-mid {
  font-size: 26px;
  font-weight: 500;
}
@media only screen and (min-width: 600px) {
  .about-us__rows {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 120px;
  }
  .about-us img {
    width: 620px;
    height: 450px;
  }
  .about-us {
    width: 80%;
    margin: 0px auto;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16), 0 5px 10px rgba(0, 0, 0, 0.13);
  }
}
@media only screen and (min-width: 768px) {
}
</style>
