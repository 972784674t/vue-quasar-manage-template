<template>
    <base-content>
        <h1>{{ msg }}</h1>
    </base-content>
</template>

<script>
import BaseContent from '../../../components/BaseContent/BaseContent'
export default {
  name: 'Menu2-2-1',
  components: { BaseContent },
  data () {
    return {
      msg: 'menu2-2-1'
    }
  }
}
</script>
