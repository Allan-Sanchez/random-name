<template>
  <div class="card-list-h">
    <div class=" w-ful h-card-list">
      <div class="flex justify-evenly items-center mb-5 ">
        <div
          class="cursor-pointer"
          @mouseover="focusdelete = false"
          @mouseleave="focusdelete = true"
        >
          <div
            v-if="focusdelete"
            class="flex items-center justify-center bg-blue-400 border rounded-full w-10 h-10"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              width="1.07em"
              height="1em"
              style="
                        -ms-transform: rotate(360deg);
                        -webkit-transform: rotate(360deg);
                        transform: rotate(360deg);
                      "
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 17 16"
            >
              <path
                d="M3.432 6.189a1 1 0 0 1 1.415 0L6.968 8.31l6.179-6.179a.99.99 0 0 1 1.401.013l2.122 2.122a.991.991 0 0 1 .014 1.4l-9.022 9.021a.99.99 0 0 1-1.401-.014l-4.95-4.95a.998.998 0 0 1 0-1.413l2.121-2.121z"
                fill="#fff"
                fill-rule="evenodd"
              />
            </svg>
          </div>

          <div
            v-else
            @click="deleteName()"
            class="flex items-center justify-center bg-red-400 border rounded-full w-10 h-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              focusable="false"
              width="1.5em"
              height="1.5em"
              style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12L4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586L6.225 4.81z"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
        </div>
        <div>
          Allan Edrey Sanchez
        </div>

        <div
          v-if="canton == 1"
          class="bg-indigo-200 rounded-full h-10 flex justify-center items-center p-2"
        >
          <span class="block text-indigo-700 font-bold text-sm"
            >Canton Calvario</span
          >
        </div>

        <div
          v-if="canton == 2"
          class="bg-red-200 rounded-full h-10 flex justify-center items-center p-2"
        >
          <span class="block text-red-700 font-bold text-sm">Canton Elena</span>
        </div>

        <div
          v-if="canton == 3"
          class="bg-purple-200 rounded-full h-10 flex justify-center items-center p-2"
        >
          <span class="block text-purple-700 font-bold text-sm"
            >Canton Barrios</span
          >
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
            data:''
        }
    },
   methods: {
     dataSize(item){
       console.log(`date across is ${item}`);
     }
   },
}
</script>