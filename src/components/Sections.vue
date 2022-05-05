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
        <v-col cols="12" class="text-center text" sm="12" md="6" lg="6">
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
        <v-col cols="12" class="text-center text" sm="12" md="6" lg="6">
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
          pic: require("@/assets/images/branding.png"),
          header: "Branding",
          text: "We elevate your brand through world-class digital experiences. We transform brands through strategy, visual identity, and websites. We create strong brands that generate loyal customers for your business. We help you define and successfully execute your brand marketing strategy, to achieve your business objectives. Looking at where you are now, and where you want to be, we help you fill that gap.",
        },
        {
          pic: require("@/assets/images/content.png"),
          header: "Digital Content Creation",
          text: "We will create contents for your instagram and facebook pages that will generate customer engagement and showcase more about your business.",
        },
        {
          pic: require("@/assets/images/strat.png"),
          header: "Marketing Strategy and Analysis",
          text: "We’ll deliver you detailed benchmark reports with existing keyword rankings and historical, organic search traffic and help you boost your rankings.",
        },
        {
          pic: require("@/assets/images/pos.png"),
          header: "POS System",
          text: "Your small business needs more than a cash register to ring up sales and accept payments. You need a point-of-sale (POS) system that records sales data, manages inventory, generates reports and stores customer contact data and we will provide exactly the software through which you can keep track of all the sales.",
        },
        {
          pic: require("@/assets/images/seo.png"),
          header: "SEO",
          text: "Our team will keep you and your business updated on the newest, most effective SEO services and strategies to dominate your market. Our experienced marketing consultants work with you to define your digital marketing goals, developing an initial platform to start strategizing your SEO plan.",
        },
        {
          pic: require("@/assets/images/web-des.png"),
          header: "Web Designing",
          text: "Our service includes the all-around designing and maintenance of your website to help your business grow in leaps and bounds. To achieve our specified goals, we at BrandnFame have drafted a few classic development processes. These processes shall design and exhibit the emotion attached between you and the website.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.text {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
</style>