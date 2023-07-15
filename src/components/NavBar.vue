<template>
  <nav class="burger__menu__wrapper py-3">
    <label htmlFor="menu" class="burger__menu__label">
      <img
        @click="handleCheck"
        src="../assets/menu.svg"
        class="burger__menu__img"
        alt="Menu"
      />
    </label>
    <input
      @change="handleCheck"
      v-model="isChecked"
      type="checkbox"
      id="menu"
      class="burger__menu__input"
    />
    <div class="burger__menu__list" @click="offCheck">
      <router-link to="/" tag="button" type="button" class="btn btn-dark">
        Home
      </router-link>
      <router-link
        to="/ads/new"
        tag="button"
        type="button"
        class="btn btn-dark"
      >
        Create Ad
      </router-link>
      <div class="burger__menu__item" @click="onLogout">Log out</div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isChecked: false,
    };
  },
  methods: {
    handleCheck() {
      this.isChecked = !this.isChecked;
    },
    offCheck() {
      this.isChecked = false;
    },
    onLogout() {
      console.log("logout");
    },
  },
};
</script>

<style>
.burger__menu__wrapper {
  display: block;
  margin-bottom: 30px;
}

.burger__menu__img {
  width: 90px;
}

.burger__menu__list {
  margin-inline-end: 20px;
  display: grid;
  grid-auto-flow: column;
  gap: 5em;
}

.burger__menu__item {
  font-size: 30px;
  color: rgb(17, 14, 14);
  text-decoration: none;
  --clippy: polygon(0 0, 0 0, 0 100%, 0% 100%);
  cursor: pointer;
}

.burger__menu__item::after {
  content: "";
  display: block;
  background: rgb(17, 14, 14);
  width: 100%;
  margin-top: 3px;
  height: 3px;
  clip-path: var(--clippy);
  transition: clip-path 0.8s;
}

.burger__menu__item:hover {
  --clippy: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}

.burger__menu__input:checked + .burger__menu__list {
  background-color: whitesmoke;
  z-index: 99;
}

.burger__menu__label,
.burger__menu__input {
  display: none;
}

@media screen and (max-width: 768px) {
  .burger__menu__wrapper {
    display: block;
    margin: 0 20px 10px auto;
    border: solid 2px rgb(251, 249, 249);
    border-radius: 10px;
    background: var(--background-primary-color, rgb(245, 245, 245));
    height: 60px;
    width: 60px;
    color: #fff;
  }

  .burger__menu__label {
    display: block;
    cursor: pointer;
  }

  .burger__menu__list {
    position: fixed;
    top: 80px;
    bottom: 0;
    background-color: rgb(17, 14, 14);
    width: 100%;
    left: 0;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    clip-path: circle(0 at center);
    transition: clip-path 1s ease-in-out;
  }

  .burger__menu__input:checked + .burger__menu__list {
    clip-path: circle(100% at center);
  }
}
</style>
