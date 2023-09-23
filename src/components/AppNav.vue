<script setup>

</script>

<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <aside class="col-12 col-md-2 p-0 bg-dark fixed-top">
        <nav class="navbar navbar-expand navbar-dark bg-dark flex-md-column flex-row align-items-start py-2">
          <div class="collapse navbar-collapse align-items-start">
            <ul class="flex-md-column flex-row navbar-nav w-100 justify-content-between">
              <li class="nav-item">

              </li>
              <li class="nav-item">
                <router-link to="/" class="nav-link pl-0" href="#"><i class="fa fa-home fa-fw"></i> <span class="d-none d-md-inline">Home</span></router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about" class="nav-link pl-0" href="#"><i class="fa fa-user fa-fw"></i> <span class="d-none d-md-inline">About</span></router-link>
              </li>
<!--              <li class="nav-item">
                <a class="nav-link pl-0" href="#"><i class="fa fa-blog fa-fw"></i> <span class="d-none d-md-inline">Blogs</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link pl-0" href="#"><i class="fa fa-pencil-alt fa-fw"></i> <span class="d-none d-md-inline">Submit Us</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link pl-0" href="#"><i class="fa fa-users fa-fw"></i> <span class="d-none d-md-inline">About Us</span></a>
              </li>-->
            </ul>
          </div>
        </nav>
      </aside>
    </div>
  </div>
</template>

<style scoped>
body, html {
  height: 100%;
}

@media (min-width: 768px) {
  aside {
    height: 100%;
  }
}
</style>