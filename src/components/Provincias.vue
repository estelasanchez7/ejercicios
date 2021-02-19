<template>
<div>
<h3>Códigos de provincias y municipios españoles</h3>
<hr>
<strong>Elige provincia y municipio y se mostrará el código utilizado por el INE para identificar el municipio.</strong> <br> <br>


<p>Seleccione una Provincia:</p>
<select v-model="provincia" @change="verMunicipios" class="form-select" aria-label="Default select example">
    <option v-for="(prov,i) in provincias" :key="i" :value="prov.CODPROV"> {{prov.NOMBRE_PROVINCIA}} - {{prov.CODPROV}}
    </option>
</select> <br>

<!--inout autocomplete los municipios -->
<input v-model="inputFiltro" placeholder="Filtro">
<div class="filtrado">
  <div v-for="(item,indice) in municipiosFiltrados" :key="indice">
    {{item.NOMBRE}}
    <div class="elemento" @click="autocompletar(item.NOMBRE)">{{item.NOMBRE}}</div>
  </div>
</div>


<p>Seleccione un Municipio:</p>
<select v-model="municipio" @change="verInformacion" class="form-select" aria-label="Default select example">
    <option v-for="(muni,i) in municipios" :key="i" :value="muni.COD_GEO">
      {{muni.NOMBRE}}
    </option>
</select> <br>

<strong>Selecciona un municipio para ver el código.</strong> <br>
<p>También esta disponible el listado completo en formato json en los siguientes enlaces:</p> <br>
<a href="">Listado de municipios</a> <br>
<a href="">Listado de provincias</a>
</div>
  
</template>

<script>
import {ref, reactive, computed} from 'vue'
export default {

 name: "Provincias",
  props: {},
  setup() {
    let provincias=reactive([])
    let provincia=ref("")
    let municipios=reactive([])
    let municipio=ref("")
    let informacion=reactive({})
    let inputFiltro=ref("")

    let municipiosFiltrados=computed(()=>{
      return municipios.filter(m=>m.NOMBRE.indexOf(inputFiltro.value)!=-1)
    })

    const autocompletar=(nombre)=>{
      console.log(nombre)
      inputFiltro.value=nombre
    }


    return {
      provincia,
      provincias,
      municipio,
      municipios,
      informacion,
      inputFiltro,
      municipiosFiltrados,
      autocompletar
      
    }
  }

}
</script>

<style>

</style>