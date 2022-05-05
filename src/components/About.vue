<template>
  <div>
    <v-container>
      <v-row justify="center" align="center"
        ><v-col cols="12" class="text-center mt-10"
          ><h1>About the team</h1></v-col
        ></v-row
      >
      <v-row justify="center" align="center"
        ><v-col cols="12" sm="12" md="4">
          <v-card elevation="14" outlined class="class-body">
            <div class="d-flex flex-row justify-space-between">
              <div>
                <img src="https://picsum.photos/300/400" class="img-slot" />
              </div>
              <div class="logo-font">
                Brand <span class="logo-mid">n</span> Fame
              </div>
            </div>
            <div class="d-flex flex-column justify-space-between">
              <div class="d-flex justify-start flex-column mb-5">
                <h3>Madhurjya Bora</h3>
                <h4>Web Developer</h4>
                <div class="d-flex flex-row">
                  <a href="https://twitter.com/madh1261" target="_blank"
                    ><i class="fa fa-twitter"></i
                  ></a>

                  <a
                    href="https://www.facebook.com/madhurjya.bora.140/"
                    target="_blank"
                    ><i class="fa fa-facebook mx-3"></i
                  ></a>

                  <a
                    href="https://www.instagram.com/madhurjya_bora/"
                    target="_blank"
                    ><i class="fa fa-instagram"></i
                  ></a>
                </div>
                <div class="d-flex flex-row font-small my-2">
                  <i class="fa fa-phone"> +91 6900704784</i>
                </div>
                <div class="d-flex flex-row font-small">
                  <i class="fa fa-envelope"> mrbora10@gmail.com</i>
                </div>
              </div>
              <div class="d-flex align-end flex-column">
                <h3>Hrishikesh Boruah</h3>
                <h4>Web Developer</h4>
                <div class="d-flex flex-row">
                  <a href="https://www.instagram.com/mr.boruah/" target="_blank"
                    ><i class="fa fa-instagram"></i
                  ></a>
                  <!-- <i class="fa fa-twitter mx-3"></i>
                  <i class="fa fa-facebook"></i> -->
                </div>
                <div class="d-flex flex-row font-small my-2">
                  <i class="fa fa-phone"> +91 7896515775</i>
                </div>
                <div class="d-flex flex-row font-small">
                  <i class="fa fa-envelope"> boruahhrishikesh4@gmail.com</i>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo-font {
  font-family: "Kaushan Script", cursive;
  color: white;
  font-size: 25px;
  text-decoration: none;
  margin-top: 25px;
}
.logo-mid {
  font-family: "Kaushan Script", cursive;
  color: primary;
  font-size: 25px;
  text-decoration: none;
}
a {
  color: white;
}
.class-body {
  padding: 30px;
  background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
  color: white;
}
.img-slot {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.font-small {
  font-size: 12px;
  text-transform: lowercase !important;
}
@media only screen and (min-width: 600px) {
  .logo-font {
    font-family: "Kaushan Script", cursive;
    color: white;
    font-size: 35px;
    text-decoration: none;
  }
  .logo-mid {
    font-family: "Kaushan Script", cursive;

    font-size: 35px;
    text-decoration: none;
  }
}
</style>