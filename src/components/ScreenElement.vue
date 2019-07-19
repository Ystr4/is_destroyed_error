<script>
  let _build = (loc, state) => {
    let tag, domProps, show = true;

    switch (loc.Type) {
      case 0:// html
        tag = 'HtmlWrapper';
        // tag = 'HtmlWrapper_func';
        // tag = loc.Value;
        if (loc.Action === 'show' && loc.Extra !== null) {
          show = state.Values[loc.Extra].Expression;
        }
        break;
      case 1:// text
        tag = 'span';
        domProps = {
          innerHTML: loc.Value
        };
        break;
    }

    return {
      tag,
      domProps,
      props: {
        loc,
        show
      },
      // class: {'hidden': !show},
      key: `${state.Id}_${loc.L}`
    }
  };
  export default {
    name: "ScreenElement",
    functional: true,

    render(createElement, context) {
      const element = _build(context.data.loc, context.data.screen);
      return createElement(element.tag, element);
      // return element.show
        // ? createElement(element.tag, element, this.$slots.default)
        // : createElement(element.tag, element)
    }
  }
</script>

<style scoped>
    .hidden {
        display: none
    }
</style>
