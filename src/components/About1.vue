<template>
  <v-container fluid py-0 px-0>
    <v-parallax
      dark
      height="1000"
      src="https://pixabay.com/get/gc828c84dada9a0c51bf4a30533ff20ba8c42af3b8be75f10f129b3db31cd0eeb11cd60ef72df617ba68cc5e2d4007609bfbb5268811185e31a5c4e8e336a3615_1920.jpg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12" sm="12" md="12">
          <h1 class="team">About The Team</h1>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col class="text-center" cols="12" sm="12" md="9">
          <!-- <div class="about-card">helo</div> -->
          <!-- <div class="display-item"> -->
          <div class="flippable-business-card">
            <div class="front">
              <div class="front-top">
                <div class="profile-image"></div>
              </div>
              <div class="front-bottom">
                <div>
                  <div class="text-title">Madhurjya Bora</div>
                  <!-- <h3>Philistine Productions</h3> -->
                  <div class="text-title">Web Developer</div>
                </div>
                <div>
                  <div>
                    <span><i class="fa fa-phone"></i> +91 6900704784</span>
                    <span> mrbora10@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="back">
              <div class="title">
                <!-- <h2>Simone Lickbait</h2>
                <span>Fascism Foiler</span> -->
              </div>
              <div class="bio">
                <h2>Madhurjya Bora</h2>
                <h3>Web Developer</h3>
              </div>
              <div class="social">
                <div class="sms">
                  <div class="sm twitter">
                    <a href="https://twitter.com/madh1261" target="_blank"
                      ><i class="fa fa-twitter"></i
                    ></a>
                  </div>
                  <div class="sm facebook">
                    <a
                      href="https://www.facebook.com/madhurjya.bora.140/"
                      target="_blank"
                      ><i class="fa fa-facebook"></i
                    ></a>
                  </div>
                  <div class="sm pinterest">
                    <a
                      href="https://www.instagram.com/madhurjya_bora/"
                      target="_blank"
                      ><i class="fa fa-instagram"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- second card -->
          <div class="second-card">
            <div class="flippable-business-card mt-10">
              <div class="front">
                <div class="front-top">
                  <div class="profile-image-2"></div>
                </div>
                <div class="front-bottom">
                  <div>
                    <div class="text-title">Hrishikesh Boruah</div>
                    <div class="text-title">Web Developer</div>
                    <!-- <span>Fascism Foiler</span> -->
                  </div>
                  <div>
                    <div>
                      <span><i class="fa fa-phone"></i> +91 7896515775</span>
                      <span> boruahhrishikesh4@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="back">
                <div class="title">
                  <!-- <h2>Hrishikesh Boruah</h2>
                  <span>Fascism Foiler</span> -->
                </div>
                <div class="bio">
                  <h2>Hrishikesh Boruah</h2>
                  <h3>Web Developer</h3>
                </div>
                <div class="social">
                  <div class="sms">
                    <!-- <div class="sm twitter">
                      <i class="fa fa-twitter"></i>
                    </div> -->
                    <div class="sm facebook">
                      <a
                        href="https://www.instagram.com/mr.boruah/"
                        target="_blank"
                        ><i class="fa fa-instagram"></i
                      ></a>
                    </div>
                    <!-- <div class="sm pinterest">
                      <i class="fa fa-instagram"></i>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- </div> -->
        </v-col>
      </v-row>
    </v-parallax>
  </v-container>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.about-card {
  box-shadow: 1px 0px 19px 0px rgba(0, 0, 0, 0.32);
  color: black;
}

.flippable-business-card {
  width: 550px;
  height: 300px;
  max-width: 100%;
  border-radius: 4px;
  margin: 0 auto;
}
.second-card {
  margin-left: 0px;
}
.flippable-business-card {
  perspective: 1000px;
}
.flippable-business-card .front,
.flippable-business-card .back {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s ease-in-out;
  transform-style: preserve-3d;
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
}
.flippable-business-card .front {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.36), 0 8px 10px rgba(0, 0, 0, 0.43);
}
.flippable-business-card .front .front-top {
  height: 150px;
  background-image: url(https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=b0aa3fbba9c018e93499effa49dd8e83);
  background-size: cover;
  background-position: center;
  position: relative;
}
.flippable-business-card .front .front-top h2,
.flippable-business-card .front .front-top h3 {
  display: block;
  padding: 15px;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4), -1px -1px 1px rgba(0, 0, 0, 0.4);
}
.flippable-business-card .front .front-top .profile-image {
  position: absolute;
  height: 120px;
  width: 120px;
  bottom: 0;
  left: 50%;
  transform: translate(-50%) translateY(50%) rotate(45deg);
  border-radius: 4px;
  overflow: hidden;
  border: 4px solid white;
}
.flippable-business-card .front .front-top .profile-image:before {
  content: "";
  width: 140%;
  height: 140%;
  position: absolute;
  transform: rotate(-45deg);
  top: -20%;
  left: -20%;
  background-image: url(https://picsum.photos/300/400);
  background-size: cover;
  background-position: center;
}
.flippable-business-card .front .front-top .profile-image-2 {
  position: absolute;
  height: 120px;
  width: 120px;
  bottom: 0;
  left: 50%;
  transform: translate(-50%) translateY(50%) rotate(45deg);
  border-radius: 4px;
  overflow: hidden;
  border: 4px solid white;
}
.flippable-business-card .front .front-top .profile-image-2:before {
  content: "";
  width: 140%;
  height: 140%;
  position: absolute;
  transform: rotate(-45deg);
  top: -20%;
  left: -20%;
  background-image: url(https://picsum.photos/200/300);
  background-size: cover;
  background-position: center;
}
.flippable-business-card .front .front-bottom {
  height: 150px;
  display: flex;
  color: rgba(255, 255, 255, 0.8);
  background-color: darkslategray;
  word-break: break-word;
}
.flippable-business-card .front .front-bottom > div {
  flex-grow: 1;
  flex-basis: 50%;
  padding-top: 30px;
  padding-bottom: 15px;
}
.flippable-business-card .front .front-bottom > div:first-child {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-right: 40px;
  padding-left: 15px;
}
.flippable-business-card .front .front-bottom > div:first-child h2 {
  font-size: 1.4em;
}
.flippable-business-card .front .front-bottom > div:last-child {
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  padding-right: 15px;
}
.flippable-business-card .front .front-bottom > div:last-child a {
  color: rgba(0, 0, 0, 0.8);
}
.flippable-business-card .front .front-bottom > div:last-child i {
  font-size: 1.2em;
  width: 25px;
}
.flippable-business-card .front .front-bottom > div:last-child > div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.flippable-business-card .back {
  transform: rotateX(180deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-shadow: none;
  background-color: darkslategray;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  display: flex;
  flex-direction: column;
}
.flippable-business-card .back .title {
  height: 75px;
  padding: 15px;
}
.flippable-business-card .back .bio {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  height: 150px;
  display: flex;
  flex-direction: column;
  font-style: italic;
  justify-content: space-around;
}
.flippable-business-card .back .social {
  height: 75px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.flippable-business-card .back .social .sms {
  display: flex;
  justify-content: space-around;
  font-size: 2em;
}
.flippable-business-card:hover .back {
  transform: rotateX(360deg);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.flippable-business-card:hover .front {
  transform: rotateX(180deg);
  box-shadow: none;
}
a {
  color: rgba(255, 255, 255, 0.8);
}
.text-title {
  font-size: 16px;
}
.team {
  color: black;
}
@media only screen and (min-width: 768px) {
  .second-card {
    margin-left: 100px;
  }
  .text-title {
    font-size: 22px;
    font-weight: 700;
  }
  .flippable-business-card .front .front-bottom {
    word-break: inherit;
  }
}
</style>