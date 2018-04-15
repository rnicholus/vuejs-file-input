<template>
  <div :class='containerClass'
       :style='containerStyle'
  >
    <slot></slot>
    <input @change='onChange'
           :style='inputStyle'
           type='file'
           v-bind='inputProps'
    >
  </div>
</template>

<script>
  export default {
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
    props: {
      containerClass: {
        default: '',
        type: String,
      },
      inputProps: {
        default: () => ({}),
        type: Object
      },
      onChange: {
        default: () => {},
        type: Function
      }
    }
  }
</script>
