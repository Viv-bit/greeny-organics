<template>
  <div class="header main">
      <img src="../assets/logo.png" alt="Logo Icon" class="header-image"/>

      <nav class="header-nav">
          <a href="#" class="header-nav-about">About</a>
          <a href="#" class="header-nav-contact">Contact Us</a>
          <button>Buy Ambunu!</button>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .header {
        height: 100px;
        display: flex;
        background-color: #FBF7EE;
        justify-content: space-between;
        align-items: center;
    }
    .header-image {
        height: 70px;
        width: 163px;
    }
    .header-nav-about {
        padding-right: 25px;
    }
    .header-nav-contact {
        padding-right: 25px;
    }
</style>