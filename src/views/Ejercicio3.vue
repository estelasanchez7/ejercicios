<template>
     <!--Crear un componente con dos cajas de texto y un botón. Al pulsar el botón comprueba si el usuario es "pepe" y la contraseña es "1234". Si es así, debe mostrar el avatar y el nombre del usuario con un link "Desconectar". 
      Al pulsar el link desconectar, debería volver a mostrar el formulario de login.
      NOTA: Intenta usar los componentes xInput que creamos en ejercicio 2-->
  <div class="formulario">Ejercicio 3
        <Inputvalidator label='Username:' mask="pepe"/>
        <Inputvalidator label='Password:' mask='1234'/>
  </div>
</template>

<script>
import Inputvalidator from '@/components/Inputvalidator.vue'
export default {
  components:{
    Inputvalidator
  }
}
</script>

<style>

</style>