<template>
  <section>
    <div class="h-10 mr-3 -mt-2 flex justify-end items-center">
      <div>
        <button
          @click="openModal()"
          class="btn-rounded mx-1 bg-purple-600 hover:bg-purple-700 text-white  font-bold py-2 px-2">
          <svg
            aria-hidden="true"
            focusable="false"
            width="2.5em"
            height="2.5em"
            style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg);  transform: rotate(360deg);"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1024 1024"
          >
            <defs />
            <path
              d="M482 152h60q8 0 8 8v704q0 8-8  8h-60q-8 0-8-8V160q0-8 8-8z"
              fill="#fff"
            />
            <path
              d="M176 474h672q8 0 8  8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      v-if="modal"
      tabindex="0"
      @keyup.esc="closeModal()"
      class="modal  fixed w-full h-full top-0 left-0 flex items-center justify-center"
    >
      <div
        class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
      ></div>

      <div
        class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto"
      >
        <div
          @click="closeModal()"
          class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
        >
          <svg
            class="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            ></path>
          </svg>
          <span class="text-sm">(Esc)</span>
        </div>

        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="modal-content py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-3">
            <p class="text-2xl font-bold text-font">Add New Name</p>
          </div>

          <!--Body-->
          <p>Type name</p>
          <div class="md:w-full">
            <input
              v-model="name"
              class=" placeholder-input bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              id="inline-full-name"
              type="text"
              autofocus
              placeholder="Type new name"
            />
          </div>

          <p class="mt-5">Selected canton</p>
          <div class="inline-block relative w-full">
            <select
              v-model="selectName"
              class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option disabled value="">Select canton</option>
              <option value="1">Canton Calvario</option>
              <option value="2">Canton Elena</option>
              <option value="3">Canton Barrios</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>

          <!--Footer-->
          <div class="flex justify-end pt-2 mt-4">
            <button
              @click="addName()"
              class="px-4 bg-blue-300 text-gray-800 font-bold p-3 rounded-lg  hover:bg-gray-100 hover:bg-blue-500 mr-2"
            >
              Guardar
            </button>
            <button
              @click="closeModal()"
              class="modal-close px-4 bg-red-300 p-3 font-bold rounded-lg text-gray-800 hover:bg-red-400"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
      name: "",
      selectName: "",
    };
  },
  methods: {
    closeModal() {
      this.name = "";
      this.selectName = "";
      this.modal = false;
    },
    openModal() {
      this.modal = true;
    },
    validated(){
      if (this.name != '' && this.selectName != '') {
        return true;
      }
      return
    },
    async addName(){
      if (this.validated()) {
        const db = this.$firebase.firestore();
      try {
        await db.collection("listName").add({
            name: this.name,
            canton:this.selectName,
        });

        this.$emit('nameadd');
        this.closeModal();
      } catch (error) {
        console.log(error);
      }

      }
    }
  },
};
</script>
