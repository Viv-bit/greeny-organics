<template>
  <div>
    <Header />
    <Hero />
    <About />
    <Product />
  </div>
</template>

<script>
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Product from "../components/Product"

export default {
  components: {
    Header,
    Hero,
    About,
    Product
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.main {
  padding: 0 165px;
  background-color: #FBF7EE;
}
button {
  height: 40px;
  width: 150px;
  color: #fff;
  background-color:#158146;
  font-weight: 700;
}
@media only screen and (max-width: 868px) {
  .main {
    padding: 0 50px;
  }
}
</style>
