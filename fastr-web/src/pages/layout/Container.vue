<template>
  <div>
    <TopNav style="z-index: 40;" />
    <router-view v-slot="{ Component, route }">
      <transition name="fade">
        <div class="fstr-container">
          <div class="fstr-content">
            <component :is="Component" :key="route.fullPath" />
          </div>
        </div>
      </transition>
    </router-view>
    <BottomNav />
  </div>
</template>
<script>
import TopNav from './TopNav.vue';
import BottomNav from './BottomNav.vue';
export default {
  name: 'TheContainer',
  components: {
    TopNav,
    BottomNav,
  },
  data() {
    return {
    }
  },
}
</script>