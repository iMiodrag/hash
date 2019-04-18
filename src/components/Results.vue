<template>
    <div class="answer">
      <div class="alert error-holder hidden">
            <strong>Holy guacamole!</strong> Type something dude!
      </div>
        <table class="table table-hover">
          <tbody><tr>
            <td class="span2"><strong>MD5</strong></td>
            <td class="wait md5"> no input </td>
          </tr>
          <tr>
            <td class="span2"><strong>SHA1</strong></td>
            <td class="wait sha1"> no input </td>
          </tr>
          <tr>
            <td class="span2"><strong>SHA256</strong></td>
            <td class="wait sha256"> no input </td>
          </tr>
          <tr>
            <td class="span2"><strong>SHA384</strong></td>
            <td class="wait sha384"> no input </td>
          </tr>
          <tr>
            <td class="span2"><strong>SHA512</strong></td>
            <td class="wait sha512"> no input </td>
          </tr>
        </tbody></table>
      </div>
</template>

<script>

export default {
  name: 'Results',
  methods: {
      updateResults: function () {
          console.log('results received');
      }
  },
    props: {
        userString: {
        type: String
        }
    },
    watch: {
        userString: function() {
            console.log('triggered', this.userString);
        }
    }
}
</script>
