<template>
  <div>
    <h2>Full list of images will appear here</h2>
      <!-- <stack :column-min-width="320" :gutter-width="8" :gutter-height="8" :monitor-images-loaded="true">
      <stack-item style="transition: transform 300ms;">
        <img src="1.jpeg" alt="" style="width:350px;">
      </stack-item>
      <stack-item style="transition: transform 300ms"> 
        <img src="2.jpg" alt="" style="width:350px;">
      </stack-item>
      <stack-item style="transition: transform 300ms">
        <img src="3.jpg" alt="" style="width:350px;">
      </stack-item>
      <stack-item style="transition: transform 300ms">
        <img src="4.jpg" alt="" style="width:350px;">
      </stack-item>
    </stack> -->
    <div v-masonry="containerId" transition-duration="0.3s" item-selector=".item" gutter="10">
    <div v-masonry-tile class="item">
       <img src="4.jpg" alt="" style="margin-bottom: 10px; width: 300px;">
    </div>
    <div v-masonry-tile class="item">
       <img src="4.jpg" alt="" style="margin-bottom: 10px; width: 300px;">
    </div>
    <div v-masonry-tile class="item">
       <img src="3.jpg" alt="" style="margin-bottom: 10px; width: 300px;">
    </div>
    <div v-masonry-tile class="item">
       <img src="2.jpg" alt="" style="margin-bottom: 10px; width: 300px;">
    </div>
    </div>
  </div>
</template>

<script>
// import { Stack, StackItem } from 'vue-stack-grid';
export default {
  name: 'All',
  components: {
    // Stack, StackItem
  }
}
</script>
