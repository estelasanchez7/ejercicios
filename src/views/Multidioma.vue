<template>
  <div class="multidioma">
 <h1>Multilang</h1>
 <p>{{saludo}}</p>
 <select v-model="currentLang">
     <option v-for="(l,i) in langs" :key="i">
         {{l}}
     </option>
 </select>
 <button @click="comprobar" class="btn btn-primary">Cambiar lenguaje</button>

  </div>
</template>

<script>
// @ is an alias to /src
import {ref,reactive,computed} from 'vue'
import i18next from 'i18next'


export default {
  name: 'Multidioma',
    props:{},
      setup(){
          let saludo= i18next.t('hello')
          console.log(i18next)

          const comprobar=()=>{
              
          }
          return{
              saludo
          }
      }
   
  }

</script>