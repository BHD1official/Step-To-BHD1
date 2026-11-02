<template>
  <SubMenu0 v-if="slideNum === 0"></SubMenu0>     <!-- הגדרות (נשאר 0) -->
  <SubMenu2 v-if="slideNum === 1"></SubMenu2>     <!-- מקראות (נשאר 1) -->
  <SubMenu1 v-if="slideNum === 2"></SubMenu1>     <!-- עבר מ-5 ל-3 -->
  <SubMenu3 v-if="slideNum === 3"></SubMenu3>     <!-- עבר מ-3 ל-4 -->
  <SubMenu4 v-if="slideNum === 4"></SubMenu4>     <!-- עבר מ-4 ל-5 -->
</template>

<script>
import SubMenu0 from "@/components/home/SubMenu/SubMenu0/SubMenu0.vue";
import SubMenu1 from "@/components/home/SubMenu/SubMenu1/SubMenu1.vue";
import SubMenu2 from "@/components/home/SubMenu/SubMenu2/SubMenu2.vue";
import SubMenu3 from "@/components/home/SubMenu/SubMenu3/SubMenu3.vue";
import SubMenu4 from "@/components/home/SubMenu/SubMenu4/SubMenu4.vue";
import { mapActions } from "vuex";

export default {
  name: "HomeSubMenu",
  props: ["slideNum"],
  components: { 
    SubMenu0, 
    SubMenu1, 
    SubMenu2, 
    SubMenu3, 
    SubMenu4 
  },

  watch: {
    slideNum() {
      this.setGameType(null);
    }
  },

  methods: {
    ...mapActions("games", ["setGameType"]),
  },
};
</script>

<style scoped></style>