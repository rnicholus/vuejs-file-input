<template>
  <div id='test'>
    <h1>vuejs-file-input manual testing</h1>
    <SFI :input-props='{ multiple: true }'>
      <button type='button'>
        Select some files
      </button>
    </SFI>
  </div>
</template>

<script>
  import SFI from '../src/skinnable-file-input'

  export default {
    components: { SFI },
    data () {
      return {}
    }
  }
</script>

<style>
</style>
