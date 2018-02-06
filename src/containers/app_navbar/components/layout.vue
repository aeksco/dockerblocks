<template>
	<nav class="navbar navbar-expand-lg fixed-top">

    <a class="navbar-brand" href="#/">
      <i class="fa fa-fw fa-cubes"></i>
      docker<strong>blocks</strong>
    </a>

	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav mr-auto">

        <li class="nav-item">
          <a class="nav-link" href="#/compositions">Composition</a>
        </li>

	    </ul>

	  </div>
	</nav>
</template>

<script>
// TODO - this should be split into a series of smaller components
export default {
  name: 'Navbar'
}
</script>

<style lang="sass">

  .navbar-brand
    letter-spacing: .25rem !important
    font-family: sans-serif
    font-weight: 100

    strong
      font-weight: 700

    img.logo
      float: left
      margin-right: 0.4rem
      height: 2rem
      display: flex

</style>
