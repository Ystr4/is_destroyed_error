<script>
  export default {
    name: "HtmlWrapper_func",
    functional: true,
    render(createElement, context) {
      const data = {
        class: {'hidden': !context.props.show}
      };
      return createElement(context.props.loc.Value, data);
    }
  }
</script>

<style scoped>
    .hidden {
        display: none;
    }
</style>
