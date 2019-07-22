<script>
  export default {
    name: "BuildScreen",
    functional: true,
    render(createElement, context) {

      /* Errors:

        comment out L2 key and not L1 or both keys active I get:
                [Vue warn]: Error in nextTick: "TypeError: Cannot read property '_isDestroyed' of undefined"

        comment out just L1 key and not L2 key I get:
                [Vue warn]: Error in nextTick: "TypeError: Cannot read property '_enterCb' of undefined"

        Comment out both keys I get:
                [Vue warn]: Error in nextTick: "TypeError: Cannot read property '$scopedSlots' of undefined"

      */

      const child_L1 = createElement(
        context.props.tag,
        {
          key: context.props.createdAt,  // L1 key
          props: {
            tag: 'div',
          }
        });

      const child_L2 = createElement(
        context.props.tag,
        {
          // key: context.props.createdAt,     // L2 key
          props: {
            tag: 'h1',
            text: context.props.value,
          }
        });


      child_L1.children = [child_L2];


      return createElement('div', {}, [child_L1]);
    }
  }
</script>


