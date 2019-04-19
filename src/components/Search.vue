<template>
  <form class="navbar-form">
    <div class="navbar">
      <div class="input-append">
        <input
          v-model="userHash"
          class="span3 string-convert"
          id="appendedInputButton"
          type="text"
          placeholder="Type string to convert"
        >
        <button class="btn btn-primary btn-submit" v-on:click="hello()" type="submit">Go!</button>
      </div>
    </div>
    <!-- end navbar -->
  </form>
</template>

<script>
const crypto = require("crypto");
export default {
  name: "Search",
  data: function() {
    return {
      userHash: null
    };
  },
  methods: {
    computeMD5: function() {
      return crypto
        .createHash("MD5")
        .update(this.userHash)
        .digest("hex");
    },
    computeSHA1: function() {
      return crypto
        .createHash("SHA1")
        .update(this.userHash)
        .digest("hex");
    },
    computeSHA256: function() {
      return crypto
        .createHash("SHA256")
        .update(this.userHash)
        .digest("hex");
    },
    computeSHA384: function() {
      return crypto
        .createHash("SHA384")
        .update(this.userHash)
        .digest("hex");
    },
    computeSHA512: function() {
      return crypto
        .createHash("SHA512")
        .update(this.userHash)
        .digest("hex");
    }
  },
  watch: {
    userHash: function() {
      // build object
      const results = [
        { type: "md5", hash: this.computeMD5() },
        { type: "sha1", hash: this.computeSHA1() },
        { type: "sha256", hash: this.computeSHA256() },
        { type: "sha384", hash: this.computeSHA384() },
        { type: "sha512", hash: this.computeSHA512() }
      ];

      if (this.userHash.length === 0) {
        return this.$emit("inputData", []);
      }
      return this.$emit("inputData", results);
    }
  }
};
</script>
