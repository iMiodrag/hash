<template>
  <div class="answer">
    <div class="alert error-holder hidden">
      <strong>Holy guacamole!</strong> Type something dude!
    </div>
    <table class="table table-hover">
      <tbody>
        <tr v-for="item in resultItems">
          <td class="span2">
            <strong>{{item.type}}</strong>
          </td>
          <td class="wait md5">{{item.hash}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Results',
  methods: {
    updateResults: function() {
      // Blank
    }
  },
  props: {
    resultItems: {}
  },
  watch: {
    resultItems: function() {
      // Stuff
    }
  }
};
</script>
