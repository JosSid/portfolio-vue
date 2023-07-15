<template>
  <div class="switches" :class="themeClass">
    <div id="toggle-theme" class="toggle-theme" @click="toggleTheme">
      <img :src="toggleIconSrc" alt="icon theme" class="toggle-theme__icon" />
      <p id="toggle-text" class="toggle-theme__text">
        {{ toggleText }}
      </p>
    </div>
  </div>
</template>

<script>
import storage from "@/utils/storage";
import moonIcon from "@/assets/icons/moon.svg";
import sunIcon from "@/assets/icons/sun.svg";

export default {
  name: "ThemeProvider",
  data() {
    return {
      theme: null,
      toggleIconSrc: moonIcon,
      toggleText: "Dark Mode",
    };
  },
  mounted() {
    this.theme = storage.get("theme");
    if (this.theme === "dark") {
      this.toggleIconSrc = sunIcon;
      this.toggleText = "Light Mode";
    }
  },
  computed: {
    themeClass() {
      return this.theme === "dark" ? "dark" : "light";
    },
  },
  methods: {
    toggleTheme() {
      if (this.theme === "dark") {
        this.theme = "light";
        storage.set("theme", "light");
        this.toggleIconSrc = moonIcon;
        this.toggleText = "Dark Mode";
      } else {
        this.theme = "dark";
        storage.set("theme", "dark");
        this.toggleIconSrc = sunIcon;
        this.toggleText = "Light Mode";
      }
      this.$emit("theme-changed", this.theme);
    },
  },
};
</script>

<style>
.switches {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.toggle-theme {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.toggle-theme__icon {
  margin-right: 0.5em;
  width: 20px;
}

.toggle-theme__text {
  font-size: 0.8rem;
  margin-top: 15px;
}
</style>
