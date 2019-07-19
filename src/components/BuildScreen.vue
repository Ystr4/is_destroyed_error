<script>
  import ScreenElement from './ScreenElement'

  function _build(locs, callback, l = 0, r = 0xffff, state = {Index: 0}) {
    let structure = [];
    for (; state.Index < locs.length; ++state.Index) {
      let current = locs[state.Index];
      if (l < current.L && current.R < r) {
        const tmp = current;
        structure.push(callback ? current = callback(current, state.Index) : current);
        ++state.Index;
        current.children = _build(locs, callback, tmp.L, tmp.R, state);
      }
      else {
        --state.Index;
        break;
      }
    }
    return structure;
  }

  export default {
    name: "BuildScreen",
    functional: true,
    components: {
      ScreenElement,
    },
    props: {
      screen: {
        type: Object,
        required: true
      },
    },
    render(createElement, context) {

      const VNodes = _build(context.props.screen.Locations, loc => {
        return createElement(ScreenElement, {loc, screen: context.props.screen})
      });

      const data = {
        key: context.props.screen.Id,
        style: {width: '150px'},
      };

      return createElement('div', data, VNodes)
    }
  }
</script>
