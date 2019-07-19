<script>
  export default {
    name: "HtmlWrapper",
    props: ['text', 'tag', 'createdAt'],
    render(createElement) {
      const data = (this.tag === 'h1')
        ? {domProps: {innerHTML: this.text}, key: this.createdAt}
        : {};

      return createElement(this.tag, data)
    }
  }
</script>
