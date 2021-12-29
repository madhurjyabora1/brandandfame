<template>
  <div class="my-8">
    <h2 class="text-center mb-5 mt-10">Book Now</h2>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            label="First name*"
            required
            v-model="firstname"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            label="Last name*"
            required
            v-model="lastname"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field label="Email*" required v-model="email"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="Phone Number*"
            type="string"
            required
            v-model="phNumber"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12">
          <v-select
            :items="items"
            label="Package*"
            required
            v-model="marketingPackage"
          ></v-select>
        </v-col>
      </v-row>
      <small>*indicates required field</small>
    </v-container>

    <v-spacer></v-spacer>
    <v-row justify="center">
      <v-btn color="blue darken-1" text @click="save"> Book </v-btn>
    </v-row>
    <v-snackbar v-model="snackbar" top>
      {{ snackMsg }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      snackMsg: null,
      email: null,
      phNumber: null,
      firstname: null,
      lastname: null,
      marketingPackage: null,
      items: ["Basic", "Standard", "Premium"],
    };
  },
  methods: {
    async save() {
      this.snackMsg = "";
      const body = {
        email: this.email,
        firstname: this.firstname,
        lastname: this.lastname,
        phoneNumber: this.phNumber,
        package: this.marketingPackage,
        status: "Not Started",
        date: new Date(),
      };
      try {
        const resp = await this.$axios.post(
          "https://brandandfame-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
          body
        );
        console.log(resp.status);
        this.snackMsg = "Successfully Uploaded";
        this.snackbar = true;
        this.email = null;
        this.firstname = null;
        this.lastname = null;
        this.phNumber = null;
        this.marketingPackage = "";
      } catch (err) {
        console.error("Error");
        this.snackMsg = "Error posting data";
        this.snackbar = true;
      }
    },
  },
};
</script>

<style scoped>
.inputs {
  border: 2px solid black !important;
}
</style>