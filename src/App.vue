<template>
  <div id="app">
    <div v-if="alertSuccess"
      class="p-2 m-10 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full absolute bottom-0 left-0" role="alert">
      <span class="font-semibold mr-2 text-left flex-auto"
        >New name added successful</span>
    </div>

    <div v-if="alertDelete"
      class="p-2 m-10 bg-red-800 items-center text-indigo-100 leading-none lg:rounded-full absolute bottom-0 left-0" role="alert">
      <span class="font-semibold mr-2 text-left flex-auto"
        >Name deleted successful</span>
    </div>

    <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-2 w-full md:h-full min-h-screen">
      <div class="flex flex-col justify-center">
        <div class="text-gray-300 text-5xl w-full text-center">Random Name</div>
        <NUMBERNAME v-on:random-total="randomSize"></NUMBERNAME>
      </div>

      <div class="flex justify-center items-center">
        <!-- change div -->
      <div
        class="scroll-list card-border bg-gray-100 m-6 border relative">
        <h3 class="text-gray-900 text-5xl text-center my-5">Name List</h3>

        <LISTNAME ref="sizeChild"></LISTNAME>

        <MODALNAME v-on:nameadd="Nameadded()"></MODALNAME>
      </div>

      </div>
    </div>
  </div>
</template>

<script>
import NUMBERNAME from "./components/numberName";
import MODALNAME from "./components/modalName";
import LISTNAME from "./components/listName";
export default {
  name: "App",
  components: {
    NUMBERNAME,
    MODALNAME,
    LISTNAME,
  },
  data() {
    return {
      alertSuccess : false,
      alertDelete: false,
    };
  },
  methods: {
    closeTimeAlert(){
      setTimeout(() => {
        this.alertSuccess = false;
      },3000);
    },
    Nameadded(){
      this.alertSuccess = true;
      this.closeTimeAlert();
    },
    randomSize(item){
      this.$refs.sizeChild.dataSize(item);
    }
  },
};
</script>

<style>
#app {
  background: #0d2438;
}
.card-border {
  border-radius: 30px;
}
.card-list-h {
  height: 440px;
  overflow-y: scroll;
}
.btn-rounded {
  border-radius: 15px;
}
</style>
