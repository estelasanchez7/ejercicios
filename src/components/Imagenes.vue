<template>
<div class="imagenes">
 <select @change="verSeleccionado">
    <option value="pepe">PEPE</option>
    <option value="luis">LUIS</option>
    <option value="antonio">ANTONIO</option>
 </select>
</div>
 
</template>

<script>
import {ref} from 'vue'
export default {
 name: "Imagenes",
  props: {},
  setup() {
    let elemSeleccionado=ref("")
    let elementos=[
      {id:0,nombre:'PEPE',imagen:'avatar1.jpg'}
    ]

    function verSeleccionado(){
        let select = document.querySelector("select")
        alert("has cambiado el select" + select.value)
    }
    
    return {
    verSeleccionado
      
    }
  }

}

</script>

<style>

</style>