<template>
  <div id='test'>
    <h1>vuejs-file-input manual testing</h1>
    <VuejsFileInput :input-props='{ multiple: true }'
                    :maxFiles='2'
                    :on-change='onChange'
    >
      <button type='button'>
        Select some files
      </button>
    </VuejsFileInput>
  </div>
</template>

<script>
  import VuejsFileInput from '../src/vuejs-file-input'

  export default {
    components: { VuejsFileInput },
    data: () => ({
      onChange: event => {
        console.log(event.valid, event.invalid)
      }
    })
  }
</script>

<style>
</style>
