<template>

  <div class="row h-100 align-items-center">
    <div class="col-lg-12">

      <div class="row my-2">
        <div class="col-lg-12 text-center">
          <p class="welcome-text">DockerBlocks</p>
        </div>
      </div>

      <div class="row my-4">
        <div class="col-lg-12 text-center">
          <!-- <img src="@/assets/logo.png"> -->
          <p class="lead">
            Visual docker-compose editor.
          </p>
        </div>
      </div>

      <div class="row my-4">
        <div class="col-lg-12 text-center">
          <a class="btn btn-lg btn-outline-dark" href="https://github.com/aeksco/dockerblocks" target="_blank">
            <i class="fa fa-github mr-1"></i>
            GitHub
          </a>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: 'main_home',
    computed: {
    }
  }
</script>

<style lang="sass">
  img.welcome-logo
    height: 4rem
    width: 4rem

  .welcome-text
    letter-spacing: .6rem
    font-weight: 300
    font-size: 2rem
</style>
