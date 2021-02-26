<template>
  <div class="home">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-8 col-md-6">
            <h1>Carrito</h1>
            <ul>
              <li v-for="(item,i) in articulos" :key="i">
                <Item 
                  :title="item.nombre" 
                  :description="item.description"
                  :imagen="item.imagen"
                  :price="item.price"
                  @cambioTotal="verCambio"
                  />
              </li>
            </ul>
            <p>
              <b>TOTAL: </b> {{totalGlobal}} €
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Item from '@/components/Item.vue'
import {ref} from 'vue'
export default {
  name: 'Carrito',
  components: {
    Item
  },
  setup(){
    let totalGlobal = ref(0)

    const articulos=[
      {name:'cerillas',description:'cerillas bonitas',image:'avatar1.jpg',price:'2.20'},
      {name:'zapatos',description:'zapatos feos',image:'avatar2.jpg',price:'2.20'},
      {name:'martillo',description:'herramienta',image:'avatar3.jpg',price:'2.20'}
    ]
    function verCambio(total,mensaje){
      totalGlobal.value=totalGlobal.value+total.value
      console.log(mensaje,total.value)
    }
    return{
      articulos,
      verCambio,
      totalGlobal
    }
  }
}
</script>

<style lang="scss" scoped>
  li{
    list-style:none;
  }
</style>