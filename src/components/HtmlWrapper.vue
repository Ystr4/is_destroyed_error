<script>
  export default {
    name: "HtmlWrapper",
    props: ['loc', 'state'],
    methods: {
      getTestResult(name) {
        return (this.state.Values.hasOwnProperty(name))
            ? this.state.Values[name]
            : false;
      }
    },
    computed: {
      show() {
        return (this.loc.Action === 'show' && this.loc.Extra !== null) ? this.getTestResult(this.loc.Extra) : false;
      },
      classList() {
        return {
          'hidden': !this.show
        }
      }
    },
    render(createElement) {
      const data = {
        class: this.classList
      };
      return createElement(this.loc.Value, data);
    }
  }
</script>

<style scoped>
    .hidden {
        display: none;
    }
</style>
