<template>
  <div class="action">
      <h2 class="action-title">Get your 5 in 1 wonder product!</h2>
      <Button />
  </div>
</template>

<script>
import Button from './Button'
export default {
  components: {
    Button
  }
}
</script>

<style>
  .action {
    text-align: center;
    background-color:  #FBF7EE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
  }
  .action-title {
    font-family: 'Playfair Display', serif;;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: -0.5px;
    color: #158146;
    max-width: 540px;
    padding-bottom: 20px;
  }
</style>