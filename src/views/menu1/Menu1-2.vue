<template>
  <base-content>
        <h1>{{ msg }}</h1>
  </base-content>
</template>

<script>
import BaseContent from '../../components/BaseContent/BaseContent'
export default {
  name: 'Menu-1-2',
  components: { BaseContent },
  data () {
    return {
      msg: 'menu-1-2'
    }
  }
}
</script>
