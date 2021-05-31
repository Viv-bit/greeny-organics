<template>
  <div>
    <Header />
    <Hero />
    <About />
    <Product />
    <Action />
    <Testimony />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Product from "../components/Product"
import Action from "../components/Action"
import Testimony from "../components/Testimony"
import Footer from "../components/Footer"


export default {
  components: {
    Header,
    Hero,
    About,
    Product,
    Action,
    Testimony,
    Footer
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
.storeWrapper{
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        background-color : rgba(0, 0, 0, 0.2);
        height: 100vh;
        width: 100vw;
    }
    .store {
        background-color: hsla(42, 62%, 96%, 1);
        padding: 50px 60px;
        width: 900px;
        margin: 150px auto;
        z-index: 100;
    }
    .storeWrapper.appear {
        display: block;
    } 
@media only screen and (max-width: 1270px) {
  .main {
    padding: 0 80px;
  }
}
@media only screen and (max-width: 868px) {
  .main {
    padding: 0 50px;
  }
}
</style>
