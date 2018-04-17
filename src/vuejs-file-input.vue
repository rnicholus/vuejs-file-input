<template>
  <SkinnableFileInput :container-class='containerClass'
                      :input-props='inputProps'
                      :onChange='internalOnChange'
  >
    <slot></slot>
  </SkinnableFileInput>
</template>

<script>
  import SkinnableFileInput from 'vuejs-skinnable-file-input'

  export default {
    components: { SkinnableFileInput },
    data: function() {
      return {
        internalOnChange: this.handleOnChange
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

        this.onChange({ invalid, valid })
      }
    },
    props: {
      inputProps: {
        type: Object
      },
      maxFiles: {
        default: 0,
        type: Number
      },
      onChange: {
        type: Function
      },
    }
  }
</script>
