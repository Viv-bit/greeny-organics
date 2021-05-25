<template>
  <div class="header main">
      <img src="../assets/logo.png" alt="Logo Icon" class="header-image"/>
    
        <img
            class="hamburger"
            src="../assets/hamburger.png"
            alt="icon-hamburger"
            id="hamburger"
            @click="toggleMenu"  
          />

      <nav class="header-nav"  v-bind:class="showToggle ? 'show' : '' " id="menu">
          <a href="#" class="header-nav-about">About</a>
          <a href="#" class="header-nav-contact">Contact Us</a>
          <button @click="toggleStore"> Buy Ambunu!</button>
      </nav>
      <Store :appearToggle="appearToogle" v-on:toCancel="toggleStore"/>
  </div>
</template>

<script>
    import Store from "./Store"
export default {
    components: {
        Store
    },
    data: ()=> {
        return {
            showToggle: false,
            appearToogle:false
        }
    },
    methods: {
        toggleMenu(){
           this.showToggle = !this.showToggle
        },
        toggleStore(){
           this.appearToogle = !this.appearToogle
        }
        
    }       
    
};
</script>

<style>
    .header {
        height: 100px;
        display: flex;
        background-color: #FBF7EE;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        width: 100vw;
        z-index: 100;
    }
    .hamburger {
        display: none;
        cursor: pointer;
    }
    
    .header-image {
        height: 70px;
        max-width: 163px;
    }
    .header-nav-about {
        padding-right: 25px;
    }
    .header-nav-contact {
        padding-right: 25px;
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
    @media only screen and (max-width: 1000px) {
        .store {
            background-color: hsla(42, 62%, 96%, 1);
            padding: 40px 30px;
            position: absolute;
            width: 700px;
            margin: 0 auto;
            top: 210px;
            z-index: 100;
        }
    }
    @media only screen and (max-width: 700px) {
        .header-nav {
            display: none;
        }
        .hamburger {
            display: inline-block;
            border: none;
        }
        .header-nav.show {
            display: block;
            background-color: #062815;
            opacity: 0.7;
            color: #FBF7EE;
            display: flex;
            flex-direction: column;
            position: fixed;
            left: 0;
            align-items: center;
            padding: 0;
            padding-top: 30px;
            margin: 0;
            top: 100px;
            width: 100vw;
            height: calc(50vh - 70px);
            z-index: 100;

        }
        .header-nav.show .header-nav-about {
            padding: 15px 0;
            font-weight: 700;
            font-size: 18px;
        }
        .header-nav.show .header-nav-contact {
            padding: 15px 0;
            padding-bottom: 25px;
            font-weight: 700;
            font-size: 18px;
        }
        .store {
            background-color: hsla(42, 62%, 96%, 1);
            padding: 40px 30px;
            position: absolute;
            width: 100vw;
            top: 150px;
            z-index: 100;
        }
    }
</style>