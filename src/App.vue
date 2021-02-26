<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/ejercicio1">Ejercicio 1</router-link> |
    <router-link to="/ejercicio3">Ejercicio 3</router-link> |
    <router-link to="/ejercicio4">Ejercicio 4</router-link> |
    <router-link to="/ejercicio5">Ejercicio 5</router-link> |
    <router-link to="/ejercicio6">Ejercicio 6</router-link> |
    <router-link to="/ejercicio7">Ejercicio 7</router-link> |
    <router-link to="/ejercicio8">Ejercicio 8</router-link> |
    <router-link to="/ejercicio9">Ejercicio 9</router-link> |
    <router-link to="/pruebas">Pruebas Back</router-link> |
     <router-link to="/multidioma">Multidioma</router-link>
    <router-view/>
  </div>
 
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
