<template>
  <SkinnableFileInput :containerClass='containerClass'
                      @change='handleOnChange'
                      v-bind='inputProps'
  >
    <slot></slot>
  </SkinnableFileInput>
</template>

<script>
  import SkinnableFileInput from 'vuejs-skinnable-file-input'

  export default {
    components: { SkinnableFileInput },
    computed: {
      inputProps: function() {
        const { onChange, ...inputProps } = this.$attrs

        return inputProps
      }
    },
    methods: {
      handleOnChange: function(event) {
        const files = event.target.files

        let invalid = []
        let valid = []

        if (files.length > this.maxFiles) {
          invalid = {
            length: files.length,
            tooMany: files
          }
        }
        else {
          valid = files
        }

        this.$emit('change', { invalid, valid })
      }
    },
    props: {
      maxFiles: {
        default: Infinity,
        type: Number
      },
    }
  }
</script>
