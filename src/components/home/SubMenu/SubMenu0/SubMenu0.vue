<template>
  <div class="container">
    <card-with-line :title="` שלום!`">
      <div class="text-box">
        <ion-text class="text-dark-plain" color="medium">
          ברוכים וברוכות הבאים
        </ion-text>
        <ion-text class="text-dark-plain" color="medium">
          לצעד לבה"ד
        </ion-text>
        <ion-text class="text-dark-plain" color="medium">
          האתר הרשמי של בה"ד 1
        </ion-text>
        <ion-text class="text-dark-plain" color="medium">
 ללמוד מקראות ישראל
        </ion-text>
      </div>
      <ion-item>
        <ion-toggle
          :checked="themeToggle"
          @ionChange="toggleChange($event)"
          justify="space-between"
        >
          <ion-text class="text-dark-plain" color="medium"> מצב לילה </ion-text>
        </ion-toggle>
      </ion-item>
    </card-with-line>
  </div>
</template>

<script>
import { IonText, IonItem, IonToggle } from "@ionic/vue";
import CardWithLine from "@/components/reuse/CardWithLine.vue";


import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SubMenu0",
  components: {
    IonItem,
    IonText,
    CardWithLine,
    IonToggle,
  },

  data() {
    return {
 
    };
  },

  setup() {
    const themeToggle = ref(false);

    // Add or remove the "dark" class on the document body
    const toggleDarkTheme = (shouldAdd) => {
      document.body.classList.toggle("dark", shouldAdd);
    };

    // Check/uncheck the toggle and update the theme based on isDark
    const initializeDarkTheme = (isDark) => {
      themeToggle.value = isDark;

      let isCurrDark = document.body.classList.contains("dark");
      themeToggle.value = isCurrDark;

      toggleDarkTheme(isCurrDark);
    };

    // Initialize the dark theme based on the initial value
    initializeDarkTheme();

    // Listen for the toggle check/uncheck to toggle the dark theme
    const toggleChange = (ToggleCustomEvent) => {
      toggleDarkTheme(ToggleCustomEvent.detail.checked);
    };

    return {
      initializeDarkTheme,
      toggleChange,
      toggleDarkTheme,
      themeToggle,
    };
  },


  methods: {

  },
});
</script>

<style scoped>
.container {
  width: 100%;
  height: fit-content;
  border-radius: 2dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4% 0 4%;
  transition: all 0.5s ease;
  font-size: 2.5dvh;
  flex-direction: column;
  position: relative;
  top: -6%;
}
.on-me {
  position: relative;
  top: -10%;
  display: flex;
  flex-direction: column;
  padding: 0% 10%;
  justify-content: center;
  align-items: center;
  background-color: var(--ion-white);
  border-radius: 2dvh;
  margin: 0 5%;
  padding: 7% 2%;
  transition: all 0.5s ease;
  flex-direction: column;
}

.text-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0%;
}
.text-dark-plain {
  font-size: 2.5dvh;
  margin: 1% 0%;
}

.num {
  font-weight: 900;
  --background: none;
  color: var(--ion-color-medium);
}

.btn {
  margin-top: 5%;
}

ion-item {
  margin-top: 5%;
  --background: none;
  width: fit-content;
  --padding-end: 0;
  --inner-padding-end: 0;
}

ion-toggle {
  --background-color: none;
}
</style>
