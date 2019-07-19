<template>
    <div id="app">
        <button style="width: 100px" @click="toggle">toggle</button>
        <br/>
        <BuildScreen :screen="screen" :key="createdAt"></BuildScreen>
    </div>
</template>

<script>
  import BuildScreen from './components/BuildScreen'

  export default {
    name: 'app',
    components: {
      BuildScreen,
    },
    computed: {
      screen() {
        return this.screens[this.idx];
      }
    },
    data() {
      return {
        screens: [{
          Locations: [
            {L: 1, R: 20, Value: 'fieldset', Type: 0, Action: null, Extra: null},
            {L: 2, R: 5, Value: 'legend', Type: 0, Action: null, Extra: null},
            {L: 3, R: 4, Value: 'screen1', Type: 1, Action: null, Extra: null},
            {L: 6, R: 19, Value: 'table', Type: 0, Action: null, Extra: null},
            {L: 7, R: 12, Value: 'tr', Type: 0, Action: null, Extra: null},
            {L: 8, R: 11, Value: 'td', Type: 0, Action: null, Extra: null},
            {L: 9, R: 10, Value: 'row1', Type: 1, Action: null, Extra: null},
            {L: 13, R: 18, Value: 'tr', Type: 0, Action: null, Extra: null},
            {L: 14, R: 17, Value: 'td', Type: 0, Action: 'show', Extra: 'var1'},
            {L: 15, R: 16, Value: 'row2', Type: 1, Action: null, Extra: null},
          ],
          Values: {['var1']: {Expression: false}},
          Id: 1234,
          Name: 'screen1',
        },
          {
            Locations: [
              {L: 1, R: 20, Value: 'fieldset', Type: 0, Action: null, Extra: null},
              {L: 2, R: 5, Value: 'legend', Type: 0, Action: null, Extra: null},
              {L: 3, R: 4, Value: 'screen2', Type: 1, Action: null, Extra: null},
              {L: 6, R: 19, Value: 'table', Type: 0, Action: null, Extra: null},
              {L: 7, R: 12, Value: 'tr', Type: 0, Action: null, Extra: null},
              {L: 8, R: 11, Value: 'td', Type: 0, Action: null, Extra: null},
              {L: 9, R: 10, Value: 'row1', Type: 1, Action: null, Extra: null},
              {L: 13, R: 18, Value: 'tr', Type: 0, Action: null, Extra: null},
              {L: 14, R: 17, Value: 'td', Type: 0, Action: 'show', Extra: 'var1'},
              {L: 15, R: 16, Value: 'row2', Type: 1, Action: null, Extra: null},
            ],
            Values: {['var1']: {Expression: true}},
            Id: 5678,
            Name: 'screen2',
          }],
        createdAt: Date.now(),
        idx: 0,
      }
    },
    methods: {
      toggle() {
        this.idx = (this.idx === 0) ? 1 : 0;
        this.createdAt = Date.now();
      }
    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }
</style>
