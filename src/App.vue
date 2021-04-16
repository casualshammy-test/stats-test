<template>
  <div class="hello">
    {{ info }}
  </div>
</template>

<script>

import x from "../dep-artifacts/publish_nuget.txt";

export default {
  data(){
    return {info:x};
  }
}

</script>