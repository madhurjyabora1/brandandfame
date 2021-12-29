<template>
  <v-row justify="center">
    <v-dialog v-model="show" max-width="600px" @click:outside="close">
      <v-card>
        <v-card-title>
          <span class="text-h5">Book Now</span>
        </v-card-title>
        <v-card-text>
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
                <v-text-field
                  label="Email*"
                  required
                  v-model="email"
                ></v-text-field>
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
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close"> Close </v-btn>
          <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" top>
      {{ snackMsg }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-row>
</template>

<script>
export default {
  props: {
    value: Boolean,
    mPackage: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      snackbar: false,
      snackMsg: null,
      email: null,
      firstname: null,
      lastname: null,
      phNumber: null,
      marketingPackage: "",
      items: ["Basic", "Standard", "Premium"],
    };
  },
  watch: {
    mPackage(val) {
      // Be sure to validate default values
      if (val !== "") {
        this.marketingPackage = val;
      }
    },
  },
  computed: {
    // Configuring a computed property like this,
    // you can close the dialog from the child component
    // and avoid the mutation prop warning
    show: {
      get() {
        return this.value;
      },
      set(value) {
        var me = this;
        me.$emit("input", value);
      },
    },
  },
  methods: {
    close() {
      this.show = false;
    },
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
        this.$emit("close");
      } catch (err) {
        console.error("Error");
        this.snackMsg = "Error posting data";
        this.snackbar = true;
      }
      //   this.firstname = "";
      //   this.marketingPackage = "";
    },
  },
};
</script>