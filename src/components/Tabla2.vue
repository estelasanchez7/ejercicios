<template>
  <div>
    <div class="row nuevo">
      <Inputvalidator id="concepto" label="Concepto" mask=".*" />
      <Inputvalidator id="cantidad" label="Cantidad" mask="[0-9]" />
      <Inputvalidator id="precio" label="precio" mask="^[0-9]+([.][0-9]+)?$" />
      <button class="btn btn-success" @click="agregar">Agregar</button>
      <table class="table table-stripped">
        <thead>
          <tr>
            <th>concepto</th>
            <th>precio</th>
            <th>cantidad</th>
            <th>subtotal</th>
            <th>eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(dato, i) in datos" :key="i">
            <td><input size="20" type="text"  v-model="dato.concepto"></td>
            <td><input size="5" type="text" step="any"  v-model="dato.precio"></td>
            <td><input size="4" type="text" v-model="dato.cantidad"></td>
            <td>{{dato.precio*dato.cantidad}}</td>
            <td>
              <button class="btn btn-danger" @click="eliminar(i)">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="total">
        <div colspan="3">
          TOTAL: <span>{{ total }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Inputvalidator from "@/components/Inputvalidator";

import { ref, reactive, onMounted } from "vue";
export default {
  name: "Tabla2",
  props: {},
  components: {
    Inputvalidator,
  },
  setup() {
    const datos = reactive([
      { concepto: "Pantalones vaqueros chico", cantidad: 2, precio: 30.99 },
      { concepto: "Camiseta básica chico", cantidad: 4, precio: 6.99 },
      { concepto: "Pijama unisex", cantidad: 1, precio: 12.5 },
      { concepto: "Deportivas Nike", cantidad: 1, precio: 80.0 },
    ]);
    let total = ref(0);

    const subTotal = (cant, precio) => cant * precio;
    const calcTotal = () => {
      datos.forEach((dato) => (total.value += dato.cantidad * dato.precio));
    };

    const agregar = () => {
      console.log(datos);
      let nuevo = {
        concepto: concepto.lastChild.value,
        cantidad: cantidad.lastChild.value,
        precio: precio.lastChild.value,
      };
      datos.push(nuevo);

      total.value = 0;
      calcTotal();
    };

    const eliminar = (id) => {
      if (confirm("¿Seguro que deseas eliminar?")) datos.splice(id, 1);
    };

    onMounted(() => calcTotal());

    return {
      datos,
      subTotal,
      total,
      agregar,
      eliminar,
    };
  },
};
</script>

<style>
th {
  color: red;
}
</style>