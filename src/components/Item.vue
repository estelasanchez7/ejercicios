<template>
<div class="item row">
    <div class="col-4">
      <img :src="image" />
    </div>
    <div class="col-8">
      <p class="title" v-html="title"></p>
      <p v-text="description"></p>
      <p>        
        <span v-text="price"></span>€ X 
        <input v-model="cantidad" type="number" size="5" />
        = <span v-text="total"></span> €
      </p>
    </div>
    <hr />
  </div>
</template>

<script>
import { ref, reactive, computed, watch } from "vue";
export default {
  name: "Item",
  props: {
    image: String,
    title: String,
    description: String,
    price: Number,
  },
  setup(props, context) {
    let cantidad = ref(1);
    let total = computed(() => {
      return (props.price * cantidad.value).toFixed(2)
    });
    watch(total,()=>{
      //si total cambiar de valor, ejecutar esto:
      context.emit('cambioTotal',total,'se ha producido un cambio')
    })
    return {
      cantidad,
      total,
    };
  },
};
</script>
<style lang="scss" scoped>
img {
  max-width: 90px;
}
input {
  border:0px;
  text-align: center;
}
p{
  text-align: left;
  font-size: .8em;
  &.title{
    font-size: 1em;
    font-weight: 900;
  }
}
</style>