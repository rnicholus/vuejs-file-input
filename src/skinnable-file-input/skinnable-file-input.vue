<template>
  <div :class='containerClass'
       :style='containerStyle'
  >
    <slot></slot>
    <input @change='handleChange'
           :style='inputStyle'
           type='file'
           v-bind='inputProps'
    >
  </div>
</template>

<script>
  export default {
    computed: {
      inputProps: function() {
        const { onChange, ...inputProps } = this.$attrs

        return inputProps
      }
    },
    data: () => ({
      containerStyle: {
        display: 'inline-block',
        position: 'relative'
      },
      inputStyle: {
        bottom: 0,
        height: '100%',
        left: 0,
        margin: 0,
        opacity: 0,
        padding: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        width: '100%'
      }
    }),
    methods: {
      handleChange: function(event) {
        this.$emit('change', event)
      }
    },
    props: {
      containerClass: {
        default: '',
        type: String,
      }
    }
  }
</script>
