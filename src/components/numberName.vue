<template>
  <div class="flex flex-col justify-center items-center">
    <div class="flex">
      <div v-for="(item, index) in datacub1" :key="index" @click="btnNumber(item)"
        class="bg-gray-500 hover:bg-gray-200 cursor-pointer w-24 h-24 m-2  rounded-lg flex justify-center items-center">
        <span class="text-gray-900 text-4xl">{{ item }}</span>
      </div>
    </div>

    <div class="flex">
      <div v-for="(item, index) in datacub2" :key="index" @click="btnNumber(item)"
        class="bg-gray-500 cursor-pointer hover:bg-gray-200 w-24 h-24 m-2  rounded-lg flex justify-center items-center">
        <span class="text-gray-900 text-4xl">{{item}}</span>
      </div>

      
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            datacub1:[5,10,20],
            datacub2:[50,75,100],
            focusdelete:true
        }
    },
    methods: {
        btnNumber(item){
            this.$emit('random-total',item);
        }
    },
}
</script>
