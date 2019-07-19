<template>
    <div id="app">
        <button style="width: 100px" @click="setTag('HtmlWrapper_func')">works</button>
        <button style="width: 100px" @click="setTag('HtmlWrapper')">doesn't work</button>
        <br/>
        <BuildScreen :value="value" :tag="tag" :createdAt="createdAt"></BuildScreen>
    </div>
</template>

<script>
  import BuildScreen from './components/BuildScreen'

  export default {
    name: 'app',
    components: {
      BuildScreen,
    },
    data() {
      return {
        createdAt: Date.now(),
        tag: 'HtmlWrapper_func',
        value: 'on'
      }
    },
    methods: {
      setTag(tag) {
        this.tag = tag;
        this.createdAt = Date.now();
        this.value = (this.value === 'on') ? 'off' : 'on'
      }
    }
  }
</script>
