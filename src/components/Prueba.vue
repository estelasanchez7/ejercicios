<template>
  <div class="prueba">
    <h1>Pruebas</h1>
    Nombre: <input v-model="nombre" placeholder="nombre" /> Apellido:<input
      v-model="apellido"
      placeholder="apellido"
    />
    <button @click="enviar">Enviar</button>
    <hr />
    <h6>Respuesta del servidor:</h6>
    <p>{{ consulta.saludo }}</p>
    <div>
      <table class="table table-stripped">
        <thead>
          <tr>
            <th>nombre</th>
            <th>apellidos</th>
            <th>eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(dato, i) in usuarios" :key="i">
            <td>{{ dato.nombre }}</td>
            <td>{{ dato.apellido }}</td>
            <td>
              <button class="btn btn-danger" @click="eliminar(dato._id)">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {{ usuarios }}
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
export default {
  name: "Prueba",
  props: {},
  setup() {
    let nombre = ref("");
    let apellido = ref("");
    let consulta = reactive({})
    let usuarios = reactive([])

    onMounted(() => {
      listar();
    });
    
    function enviar() {
      fetch("http://localhost:8081/api/guardar", {
        method: "POST",
        body: JSON.stringify({
          nombre: nombre.value,
          apellido: apellido.value,
        }),
        headers: { "Content-type": "application/json" },
      })
        .then((resp) => resp.json())
        .then((datos) => (consulta.saludo = datos))
       .then(datos=>listar())
    }

    function eliminar(idSeleccionado) {
      fetch("http://localhost:8081/api/eliminar", {
        method: "POST",
        body: JSON.stringify({
          id: idSeleccionado,
        }),
        headers: { "Content-type": "application/json" },
      })
        .then((resp) => resp.json())
        .then((datos) => console.log(datos))
        .then(datos=>listar())
    }

    function listar() {
      fetch("http://localhost:8081/api/listar")
        .then((res) => res.json())
        .then((datos) => {
          usuarios.splice(0);
          datos.forEach((usuario) => {
            usuarios.push(usuario);
          });
        });
    }

    return {
      consulta,
      nombre,
      apellido,
      enviar,
      usuarios,
      eliminar,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>