<template>
  <transition appear name="fadeA">
    <div class="ques" v-if="stage == 'game' || stage == 'review'">
      <div class="ques-part" :key="0">
        <div class="ques-card">
          <ion-text class="text-dark-plain" v-model="_questNum">
            {{ questions[_questNum].ques }}</ion-text
          >
        </div>
        <div class="line"></div>
      </div>

      <div class="answers">
        <button
          :disabled="answered || stage != 'game'"
          :class="['ans', answerClass(n)]"
          v-for="n in 4"
          :key="n"
          @click="ansPicked(n)"
          :ref="'ans' + n"
        >
          <ion-text
            class="text-dark-plain"
            :ref="`quest${n}`"
            v-model="_questNum"
          >
            {{ questions[_questNum][n] }}</ion-text
          >
        </button>
      </div>

      <ion-button
        shape="round"
        size="large"
        v-if="type == 3"
        :class="[allAnswered || stage == 'review' ? '' : 'transparent']"
        @click="reset"
        :key="0"
        >סיימתי</ion-button
      >
    </div>
  </transition>
</template>

<script>
import { IonText, IonButton } from "@ionic/vue";
import allQuestions from "@/json/games/trivia.json";
import { mapState, mapActions } from "vuex";

export default {
  name: "TriviaQuestions",
  props: ["type", "noWrong", "stage", "noCorrect", "exam"],
  components: { IonText, IonButton },

  data() {
    return {
      questions: [],
      nofQuestions: 0,
      answered: false,
      allAnswered: false,
      numOfAnswered: 0,
    };
  },

  computed: {
    ...mapState("games", ["chosenChapters", "testAnswers", "_questNum"]),
  },

  async beforeMount() {
    if (this.type != 3) {
      // trivia
      allQuestions.forEach((chap, i) => {
        chap.forEach((ques) => {
          ques.answered = false;
          if (this.chosenChapters.includes(i)) {
            this.questions.push(this.mixAns({ ...ques }));
          }
        });
      });
      this.nofQuestions = this.questions.length;
      this.updatequestNum(this.getNext());
    } else {
      // test (type == 3) - שאיבת שאלות מתוך הפרקים הנבחרים בלבד
      let pool = [];
      allQuestions.forEach((chap, i) => {
        chap.forEach((ques) => {
          if (this.chosenChapters.includes(i)) {
            pool.push(this.mixAns({ ...ques }));
          }
        });
      });

      // ערבוב המאגר ולקיחת עד 10 שאלות למבחן הנוכחי
      pool.sort(() => Math.random() - 0.5);
      this.questions = pool.slice(0, 10);

      let correct = [];
      this.questions.forEach((ques) => {
        correct.push(ques.correct);
      });
      this.updateCorrectAns(correct);

      this.nofQuestions = this.questions.length;
      // תיקון קריטי: במבחן תמיד מביאים את המשתמש לשאלה ראשונה (אינדקס 0)
      this.updatequestNum(0);
    }
  },

  methods: {
    ...mapActions("games", [
      "updateCorrectAns",
      "updatePickedAns",
      "nextQuestNum",
      "updatequestNum",
      "resetPicked",
    ]),

    mixAns(ques) {
      let min = 1,
        max = 4;
      let i = Math.round(Math.random() * (max - min) + min);
      let j, k;

      do j = Math.round(Math.random() * (max - min) + min);
      while (i == j);

      do k = Math.round(Math.random() * (max - min) + min);
      while (k == j || k == i);

      let tmp = ques[i];
      ques[i] = ques[j];
      ques[j] = ques[k];
      ques[k] = tmp;

      if (i == ques.correct) ques.correct = k;
      else if (j == ques.correct) ques.correct = i;
      else if (k == ques.correct) ques.correct = j;

      return ques;
    },

    answerClass(n) {
      if (this.stage == "game")
        return this.testAnswers[this._questNum] &&
          this.testAnswers[this._questNum].picked == n
          ? "picked"
          : "unpicked";

      let picked = this.testAnswers[this._questNum].picked;
      let correct = this.testAnswers[this._questNum].correct;

      if (n == picked) {
        return picked == correct ? "correct" : "wrong";
      }
      if (n == correct) return "correct";
    },

    getNext() {
      if (this.type != 3) {
        let next;
        do {
          next = Math.floor(Math.random() * (this.nofQuestions - 0));
        } while (this.questions[next].answered);
        return next;
      }

      return this._questNum != this.testAnswers.length - 1
        ? this._questNum + 1
        : this._questNum;
    },

    reset() {
      this.answered = false;

      if (this.type != 3) {
        this.questions.forEach((ques) => {
          ques.answered = false;
          ques = this.mixAns({ ...ques });
        });
        this.updatequestNum(this.getNext());
      } else {
        let pool = [];
        allQuestions.forEach((chap, i) => {
          chap.forEach((ques) => {
            if (this.chosenChapters.includes(i)) {
              pool.push(this.mixAns({ ...ques }));
            }
          });
        });
        pool.sort(() => Math.random() - 0.5);
        this.questions = pool.slice(0, 10);

        let correct = [];
        this.questions.forEach((ques) => {
          correct.push(ques.correct);
        });

        this.updateCorrectAns(correct);
        this.updatequestNum(0);
      }

      this.allAnswered = false;
      this.numOfAnswered = 0;
      this.$emit("EndGame");
    },

    ansPicked(hisAnswer) {
      this.type != 3
        ? this.ansPickedGame(hisAnswer)
        : this.ansPickedTest(hisAnswer);
    },

    ansPickedGame(hisAnswer) {
      let correct = this.questions[this._questNum].correct;
      let timeout = 1500;
      this.answered = true;

      this.$refs["ans" + hisAnswer][0].style.backgroundColor =
        "var(--ion-color-danger)";
      this.$refs["ans" + correct][0].style.backgroundColor =
        "var(--ion-color-success)";

      if (hisAnswer == correct) {
        this.questions[this._questNum].answered = true;
        this.$emit("correct", 1);
      } else {
        this.$emit("wrong", 1);
      }

      setTimeout(() => {
        if (
          (this.type == 4 && this.noWrong == 3) ||
          this.noCorrect == this.nofQuestions
        ) {
          this.reset();
          return;
        }

        this.updatequestNum(this.getNext());
        this.answered = false;

        this.$refs["ans" + hisAnswer][0].style.backgroundColor =
          "var(--ion-color-tertiary)";
        this.$refs["ans" + correct][0].style.backgroundColor =
          "var(--ion-color-tertiary)";
      }, timeout);
    },

    ansPickedTest(hisAnswer) {
      let picked = this.testAnswers[this._questNum].picked;
      let correct = this.questions[this._questNum].correct;
      let timeout = 700;
      this.answered = true;

      if (picked == -1) this.numOfAnswered++;

      this.updatePickedAns({
        _questNum: this._questNum,
        hisAnswer: hisAnswer,
      });

      if (hisAnswer == correct) {
        if (picked != -1) this.$emit("wrong", -1);
        this.$emit("correct", 1);
      } else {
        if (picked != -1) this.$emit("correct", -1);
        this.$emit("wrong", 1);
      }

      if (this.numOfAnswered == this.nofQuestions) this.allAnswered = true;

      setTimeout(() => {
        if (picked == -1) this.updatequestNum(this.getNext());
        this.answered = false;
      }, timeout);
    },
  },
};
</script>

<style scoped>
.ques {
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  padding: 4% 0;
  max-height: 90%;
  margin: 0;
  height: 100%;
}

.ques-card {
  background-color: var(--ion-white);
  width: 100%;
  height: 10rem;
  border-radius: 2dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0% 3%;
  transition: all 0.5s ease;
  font-size: 100%;
}

.line {
  background-color: var(--ion-white);
  width: 95%;
  margin-top: 5%;
  height: 0.3rem;
  border-radius: 2dvh;
}

.answers {
  display: flex;
  height: 55%;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin: 5% 0%;
}

.ans {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--ion-color-tertiary-shade);
  width: 100%;
  padding: 2%;
  border-radius: 3dvh;
  transition: all 0.5s ease;
  font-size: 2.5dvh;
  margin: 2% 0;
}

.ques-part {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.transparent {
  opacity: 0;
  transition: all 0.5s ease;
}

.unpicked {
  background-color: var(--ion-color-tertiary-shade);
}
.picked {
  background-color: var(--ion-color-secondary-shade);
}
.correct {
  background-color: var(--ion-color-success);
}
.wrong {
  background-color: var(--ion-color-danger);
}
</style>