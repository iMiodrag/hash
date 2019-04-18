<template>
      <form class="navbar-form">
        <div class="navbar">
            <div class="input-append">
                <input v-model="userHash" class="span3 string-convert" id="appendedInputButton" type="text" placeholder="Type string to convert">
                <button class="btn btn-primary btn-submit" v-on:click="hello()" type="submit">Go!</button>
            </div>
        </div><!-- end navbar -->
      </form>
</template>

<script>
const crypto = require('crypto');
export default {
  name: 'Search',
  data: function () {
    return {
      userHash: null
    }
  },
  methods: {
    computeMD5: function () {
       return crypto.createHash('MD5').update(this.userHash).digest("hex");
    },
    computeSHA1: function () {
       return crypto.createHash('SHA1').update(this.userHash).digest("hex");
    },
    computeSHA256: function () {
       return crypto.createHash('SHA256').update(this.userHash).digest("hex");
    }
  },
  watch: {
    userHash: function() {
     // build object
      const results = {
        'md5': this.computeMD5(),
        'sha1': this.computeSHA1(),
        'sha256': this.computeSHA256()
      };

      if (this.userHash.length > 3) {
          console.log(results);
          this.$emit('inputData', this.userHash);
      }

    }
  }
}
</script>
