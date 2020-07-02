<template>
  <div class="card-list-h">
    <div class=" w-ful h-card-list">
      <div v-for="(item, index) in data" :key="index" class="flex justify-evenly items-center mb-5 ">
        <div>
           <label class="inline-flex items-center mt-3">
                <input v-model="checkedName" type="checkbox" :value="item.id" class="form-checkbox h-5 w-5 text-red-600" checked>
            </label>
        </div>
        <div>
          {{ item.name }}
        </div>

        <div
          v-if="item.canton == 1"
          class="bg-indigo-200 rounded-full h-10 flex justify-center items-center p-2">
          <span class="block text-indigo-700 font-bold text-sm"
            >Canton Calvario</span>
        </div>

        <div
          v-if="item.canton == 2"
          class="bg-red-200 rounded-full h-10 flex justify-center items-center p-2">
          <span class="block text-red-700 font-bold text-sm">Canton Elena</span>
        </div>

        <div
          v-if="item.canton == 3"
          class="bg-purple-200 rounded-full h-10 flex justify-center items-center p-2">
          <span class="block text-purple-700 font-bold text-sm"
            >Canton Barrios</span>
        </div>
      </div>
      
    </div>
  </div>
</template>


<script>
export default {
    data() {
        return {
            focusdelete: true,
            canton:1,
            checkedName:[],
            data:[]
        }
    },
   methods: {
     dataSize(item){
       console.log(`date across is ${item}`);
       this.data = [];
       this.getdata(item);
     },
     getdata(item){
       const db = this.$firebase.firestore();
       for (let index = 0; index < item; index++) {
         
           let tempSize = Math.floor(Math.random() * item);


          //  this.data.push(tempSize);
          let that =this;
         
        db.collection("listName").where("id", "==", tempSize)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                that.data.push(doc.data());
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });

       }

      }
   },
}
</script>