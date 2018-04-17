<template>
  <div id='test'>
    <h1>vuejs-file-input manual testing</h1>
    <VuejsFileInput :inputProps='{ multiple: true }'
                    :onChange='onChange'
                    :maxFiles='2'
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
