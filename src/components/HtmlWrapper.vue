<script>
  export default {
    name: "HtmlWrapper",
    props: ['loc', 'state'],
    computed: {
      show() {
        // simplified
        return this.state.Values[name].Expression;
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
