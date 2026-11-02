<template>
  <div class="games" v-if="gameType == null" :key="0" :data-index="0">
    <ion-text class="text-dark-plain note animate__animated" ref="note"
      >בחרו את הפרקים עליהם תרצו להיבחן</ion-text
    >

    <chose-chaptes-circels
      :explanation="[]"
      :noCircles="noChapters"
      :circlesInfo="circlesInfo"
      :chooseOne="false"
      @circlesChosen="circlesChosen"
    ></chose-chaptes-circels>

    <slot>
      <card-with-line
        class="card-index"
        ref="slide"
        @click="choseGame(3)"
      >
        <div class="circle">
          <ion-img
            class="game-icon"
            :src="require(`@/assets/media1/HomePage/games/icons/4.png`)"
          ></ion-img>
        </div>
        <div class="title">מבחן</div>
        <div class="text">בחני את עצמך בטריוויה</div>
      </card-with-line>
    </slot>
  </div>

  <trivia-game v-if="gameType == 3" :key="3" :data-index="3" :type="gameType" :exam="0"></trivia-game>
</template>

<script>
import TriviaGame from "@/components/home/SubMenu/SubMenu3/Games/Trivia/TriviaGame.vue";
import ChoseChaptesCircels from "@/components/reuse/ChoseChaptesCircels.vue";
import CardWithLine from "@/components/reuse/CardWithLine.vue";

import gamesInfo from "@/json/games/gamesInfo.json";
import ChapterInfo from "@/json/chapters/ChapterInfo";
import { IonText, IonImg } from "@ionic/vue";

import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "SubMenu1",
  components: {
    CardWithLine,
    IonImg,
    IonText,
    TriviaGame,
    ChoseChaptesCircels,
  },

  data() {
    return {
      slidesNum: null,
      gamesInfo: gamesInfo,
      ChapterInfo: ChapterInfo,
      circlesInfo: [],
      noChapters: 10,
    };
  },

  computed: {
    ...mapState("returning", ["backToSubMenu1"]),
    ...mapState("games", ["gameType", "chosenChapters"]),
  },

  created() {
    for (let i = 0; i < this.noChapters; i++)
      this.circlesInfo[i] = this.ChapterInfo[i].title;
  },

  // הוספת מעקב שמאפס את המבחן והשאלות ברגע שיוצאים החוצה (ה-gameType הופך ל-null)
  watch: {
    gameType(newVal) {
      if (newVal === null) {
        this.updatequestNum(0);
        this.resetPicked();
      }
    },
  },

  methods: {
    ...mapMutations("navigation", ["hideNavi", "toggleMiniIcon"]),
    // הוספנו כאן את updatequestNum ו-resetPicked כדי לנקות את הזיכרון ביציאה
    ...mapActions("games", ["setGameType", "addOrRemoveChap", "updatequestNum", "resetPicked"]),
    ...mapActions("returning", ["setReturningFunc"]),

    choseGame(noGame) {
      if (this.chosenChapters.length == 0) {
        this.$refs.note.$el.classList.add("animate__flash");

        setTimeout(() => {
          this.$refs.note.$el.classList.remove("animate__flash");
        }, 500);
        return;
      }

      setTimeout(() => {
        this.toggleMiniIcon();
      }, 500);

      this.setReturningFunc(2);
      this.setGameType(noGame);
      this.hideNavi();
    },

    circlesChosen(listOfCircles, noChap) {
      this.addOrRemoveChap(noChap);
    },
  },
};
</script>

<style scoped>
.games > * {
  transition: opacity 0.2s linear;
}

.circle {
  position: relative;
  top: -5dvh;
  background-color: var(--ion-color-secondary-tint);
  height: 10dvh;
  width: 10dvh;
  border-radius: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 1dvh;
  font-size: 3.5dvh;
  font-weight: 700;
  color: var(--ion-color-medium);
  text-shadow: none;
}
.game-icon {
  width: 7dvh;
  height: 7dvh;
}

.title {
  position: relative;
  top: -7dvh;
  width: 100%;
  height: 9dvh;
  padding: 3dvh;
  color: var(--ion-color-medium);
  text-shadow: none;
  font-weight: 700;
  font-size: 3dvh;
  border-bottom: solid 1dvh var(--ion-color-secondary-tint);
}

.text {
  position: relative;
  transform: translateY(-70%);
  font-size: 2.5dvh;
  padding: 0%;
  color: var(--ion-color-medium);
  text-shadow: none;
  width: 90%;
  height: 6dvh;
  font-weight: 500;
}

.games {
  position: relative;
  top: -7%;
  animation: fade-scale 0.5s 1 forwards;
}

.circle-chosen {
  background-color: var(--ion-color-primary);
  color: var(--ion-color-secondary-tint);
}
</style>

<style>
.swiper-pagination {
  position: relative;
  top: 0;
}

.swiper-pagination-bullet-active {
  margin-top: 10dvh;
  background-color: var(--ion-color-primary);
}
</style>