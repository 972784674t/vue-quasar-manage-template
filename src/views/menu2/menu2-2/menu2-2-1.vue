<template>
    <base-content>
        <h1>{{ msg }}</h1>
    </base-content>
</template>

<script>
import BaseContent from '../../../components/BaseContent/BaseContent'
export default {
  name: 'hello',
  components: { BaseContent },
  data () {
    return {
      msg: 'menu2-2-1'
    }
  }
}
</script>
