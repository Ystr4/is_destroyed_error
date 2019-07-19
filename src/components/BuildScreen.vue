<script>
  export default {
    name: "BuildScreen",
    functional: true,
    render(createElement, context) {

      const VNodes = createElement(
        context.props.tag,
        {
          key: context.props.createdAt,
          props: {
            tag: 'div',
            createdAt: context.props.createdAt
          }
        });

      VNodes.children = [createElement(
        context.props.tag,
        {
          key: context.props.createdAt,
          props: {
            tag: 'h1',
            text: context.props.value,
            createdAt: context.props.createdAt
          }
        })];

      return createElement('div', {}, [VNodes]);
    }
  }
</script>
