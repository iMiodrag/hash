<template>
  <div id="app" class="container-fluid text-center">
    <Header></Header>
    <Search @inputData="updateResults"></Search>
    <Results :resultItems="resultItems"></Results>
    <Footer></Footer>
  </div>
</template>

<script>
import Search from '@/components/Search'
import Header from '@/components/Header'
import Results from '@/components/Results'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Search,
    Header,
    Results,
    Footer
  },
  data: function() {
    return {
      resultItems: []
    };
  },
  methods: {
    updateResults: function (resultItems) {
      this.resultItems = resultItems
    }
  }
}
</script>
<style>
  @import './assets/css/bootstrap.min.css';
</style>
