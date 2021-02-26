<template>
  <div>
    <!-- select de las provincias -->
    <h1>El tiempo en los municipios de España</h1>
    <select v-model="provincia" @change="verMunicipios">
      <option
        v-for="(prov, indice) in provincias"
        :key="indice"
        :value="prov.CODPROV"
      >
        {{ prov.NOMBRE_PROVINCIA }} {{ prov.CODPROV }}
      </option>
    </select>

    <!-- select de los municipios -->
    <select v-model="municipio" @change="verInformacion">
      <option v-for="(muni, indice) in municipios" :key="indice" :value="muni.COD_GEO">
        {{ muni.NOMBRE }}
      </option>
    </select>

  <div v-if="informacion.datos">
      <p> HUMEDAD: {{ informacion.datos.humedad }} % </p> <br>
       <p> LATITUD: {{ informacion.datos.municipio.LATITUD_ETRS89_REGCAN95 }}</p> <br>
       <p> LONGITUD: {{ informacion.datos.municipio.LONGITUD_ETRS89_REGCAN95 }}</p>  <br>
  </div>

  </div>

</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "Eltiempo",
  props: {},
  setup() {
    let provincia = ref("");
    let provincias = reactive([]);
    let municipios = reactive([]);
    let municipio = ref("");
    let informacion= reactive({})
    //CARGAR LAS PROVINCIAS
    fetch("http://www.el-tiempo.net/api/json/v2/provincias")
      .then((res) => res.json())
      .then((datos) => {
        datos.provincias.forEach((provincia) => {
          provincias.push(provincia);
        });
        console.log(provincias);
      });

    //CARGAR LOS MUNICIPIOS
    const verMunicipios = () => {
      //alert(`El código de la provincia es ${provincia.value}`)
      fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${provincia.value}/municipios`)
        .then((res) => res.json())
        .then((datos) => {
          console.log(datos.municipios);
          municipios.splice(0);
          datos.municipios.forEach((municipio) => {
            municipios.push(municipio);
          });
        });
    };

//CARGAR LA INFORMACION DEL MUNCIIPIO
    const verInformacion = () => {
      fetch(`https://www.el-tiempo.net/api/json/v2/provincias/${provincias.value}/municipios/${municipio.value}`)
        .then(res=>res.json())
        .then((datos)=>{
          //console.log(datos)
          informacion.datos=datos
          console.log(informacion.datos)
        })
        
    };



    return {
      provincias,
      provincia,
      verMunicipios,
      municipios,
      municipio,
      verInformacion,
      informacion
    };
  },
};
</script>

<style>
</style>