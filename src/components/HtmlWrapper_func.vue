<script>
  export default {
    name: "HtmlWrapper_func",
    functional: true,
    render(createElement, context) {
      const data = (context.props.tag === 'h1')
        ? {domProps: {innerHTML: context.props.text}}
        : {};

      return createElement(context.props.tag, data);
    }
  }
</script>
