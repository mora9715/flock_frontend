<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <router-link to="home" v-slot="{ navigate, href, isActive }">
          <b-nav-item :disabled="isActive" :href="href" @click="navigate">All <b-icon-collection></b-icon-collection></b-nav-item>
        </router-link>
        <router-link to="featured" v-slot="{ navigate, href, isActive }">
          <b-nav-item :disabled="isActive" :href="href" @click="navigate">Featured <b-icon-bookmarks></b-icon-bookmarks></b-nav-item>
        </router-link>
      </b-navbar-nav>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>
