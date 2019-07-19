<script>
  let _build = (loc, state) => {
    let tag, domProps, show = true;

    switch (loc.Type) {
      case 0:// html
        if (loc.Action === 'show' && loc.Extra !== null) {
          show = state.Values[loc.Extra].Expression;
        }

        // todo: example 1 (with error)
        // tag = 'HtmlWrapper';

        // todo: example 2 (without error)
        tag = 'HtmlWrapper_func';

        // todo: situation 3 (alternative without the extra component)
        // tag = loc.Value;
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

      // todo: situation 3
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
    }
  }
</script>

<style scoped>
    .hidden {
        display: none
    }
</style>
