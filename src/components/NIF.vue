<template>
<div>
 <label :class="clases">{{label}}</label>
  <input @keydown="comprobar" />
</div>
</template>

<script>
import {ref} from "vue"
export default {
  name: "NIF",
  props: {
    label: String,
  },
  setup() {
    let clases=ref("label-bad")
    const comprobar=(e)=>{
        console.log(e.target.value)
        let texto= e.target.value
        let exp= /^\d{8}[a-zA-Z]{1}$/
        if(exp.test(texto))
            clases.value="label-ok"
        else
            clases.value="label-bad"
    }

    return {
      comprobar,
      clases
    }
  }
}
</script>

<style>
.label-bad {
  padding: 5px;
  color: aliceblue;
  background: red;
}
.label-ok {
  padding: 5px;
  color: aliceblue;
  background: green;
}
</style>