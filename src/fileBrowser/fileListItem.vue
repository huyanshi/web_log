<template>
  <div class="FileListItem">
      <h5>{{index}} - {{data.name}}</h5>
  </div>
</template>
 
<script>

export default {
  name: 'FileListItem',
  props: {
    index:{
        type:Number,
        default:0
    },
    data:{
        type:Object,
        default() {
            return { name:"test" }
        }
    },
    height:{
      type: [Number, String],
      default: 20
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

