<template>
<div>
 <label :class="clases">{{label}}</label>
  <input @keyup="comprobar"/>
</div>
</template>

<script>
import {ref} from "vue"
export default {
  name: "Inputvalidator",
  props: {
    label: String,
    mask: String
  },
  setup(props) {
    let clases=ref("label-bad")
    const comprobar=(e)=>{
        console.log(e.target.value)
        let texto= e.target.value
        //let exp= /^\d{8}[a-zA-Z]{1}$/
        let exp= new RegExp(props.mask)
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