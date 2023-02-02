<template>
  <div style="height: 99vh">
    <div class="d-flex justify-content-center align-items-center">
      <div
        class="container mt-3 d-flex justify-content-center align-items-center"
      >
        <div
          class="header-todo d-flex justify-content-center align-items-center"
        >
          <h4 v-if="todos.length == 0" class="title mt-3">
            Add Schedule <i class="fa-solid fa-arrow-right right"></i>
          </h4>
          <h4 v-if="todos.length > 0" class="title mt-3">Your Schedule</h4>
          <button
            type="button"
            class="btn add-todo ms-4"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i class="fa-solid fa-circle-plus"></i>
          </button>
        </div>
        <section
          class="modal fade"
          id="exampleModal"
          data-bs-backdrop="false"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered d-flex justify-content-center align-items-center"
          >
            <div class="modal-content">
              <button
                style="
                  position: relative;
                  width: 60px;
                  border: none;
                  background: transparent;
                  font-size: 25px;
                  padding: 10px;
                  color: #cb5050;
                "
                type="button"
                data-bs-dismiss="modal"
              >
                <i class="fa-regular fa-circle-xmark"></i>
              </button>
              <h4 class="d-flex justify-content-center align-items-center">
                Add Your Schedule
              </h4>
              <div class="modal-body">
                <input
                  type="text"
                  class="form-control"
                  name="todo"
                  id="todo"
                  placeholder="todo"
                  v-model="newTodo"
                  @keyup.enter="addTodo()"
                  autocomplete="off"
                  maxlength="100"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  @click="addTodo"
                  @submit.prevent="addTodo()"
                  style="
                    background: transparent;
                    color: skyblue;
                    border: none;
                    font-size: 20px;
                  "
                  data-bs-dismiss="modal"
                >
                  <i class="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <section>
      <div
        class="d-flex flex-column justify-content-center align-items-center mt-3"
      >
        <h3 v-if="todos.length == 0" class="mt-3">no schedule</h3>
        <div
          v-for="(todo, index) in filter"
          :key="index"
          class="schedule p-3 mt-3"
        >
          <tr>
            <td>
              <span v-if="todo.done === true" class="check mt-2"
                ><i class="fa-solid fa-circle"></i
              ></span>
              <span v-else class="check mt-2" style="color: #cb5050"
                ><i class="fa-solid fa-circle"></i
              ></span>
            </td>
            <td>
              <span
                class="d-flex p-2 mt-1 content"
                :class="{ done: todo.done }"
                @click="doneTodo(todo)"
                :style="
                  todo.done === true
                    ? ' text-decoration: line-through'
                    : ' text-decoration: none'
                "
                >{{ todo.content }}</span
              >
            </td>
            <td>
              <span class="mt-1 remove" @click="removeTodo(index)">
                <i class="fa-solid fa-xmark"></i>
              </span>
            </td>
          </tr>
        </div>
      </div>
    </section>
  </div>
  <BottomBar />
</template>

<script>
import BottomBar from "@/components/BottomBar.vue";
import { ref } from "vue";

export default {
  name: "todoVue",
  components: {
    BottomBar,
  },
  data: () => ({
    searchSchedule: "",
    defaultData: [
      {
        Done: false,
        content: "nice day for you",
      },
    ],
    // todos: "",
  }),
  setup() {
    const newTodo = ref("");
    const defaultData = [
      {
        done: false,
        content: "write a blog post",
      },
    ];
    const todosData = JSON.parse(localStorage.getItem("todos")) || defaultData;
    const todos = ref(todosData);
    function addTodo() {
      if (newTodo.value) {
        todos.value.push({
          done: false,
          content: newTodo.value,
        });
        newTodo.value = "";
      }
      saveData();
    }
    function doneTodo(todo) {
      todo.done = !todo.done;
      saveData();
    }
    function removeTodo(index) {
      todos.value.splice(index, 1);
      saveData();
    }
    function saveData() {
      const storageData = JSON.stringify(todos.value);
      localStorage.setItem("todos", storageData);
    }
    return {
      todos,
      newTodo,
      addTodo,
      doneTodo,
      removeTodo,
      saveData,
    };
  },
  // methods: {
  //   addTodo() {
  //     const todosData =
  //       JSON.parse(localStorage.getItem("todos")) || this.defaultData;
  //     const todo = ({
  //       this
  //     })
  //     if(todos.value){

  //     }
  //   },
  // },
  computed: {
    filter() {
      if (!this.searchSchedule) {
        return this.todos;
      } else {
        return this.todos.filter(({ content }) =>
          content
            .toLowerCase()
            .includes(this.searchSchedule.toLocaleLowerCase())
        );
      }
    },
  },
};
</script>

<style scoped>
.search-todo {
  width: 22em;
  height: 40px;
  border-radius: 20px;
  padding: 20px;
  border: 1px solid #b9a2d8;
}

.add-todo {
  background: linear-gradient(to left, #b9a2d8, #9345f2);
  color: #fff;
  padding: 10px 15px;
  border-radius: 50px;
}

.schedule {
  width: 350px;
  height: max-content;
  border-radius: 10px;
  box-shadow: 0 5px 14px 0 rgb(65 69 88 / 10%),
    0 20px 24px -20px rgb(0 0 0 / 10%);
}

.content {
  width: 280px;
  border-left: 1px solid black;
}

.check {
  padding: 5px;
  color: #20db6b;
}

.remove {
  color: #cb5050;
  cursor: pointer;
}

.modal-content {
  width: 90% !important;
}

@media only screen and (min-width: 480px) {
  .schedule {
    width: 450px;
  }
  .content {
    width: 380px;
  }
}
</style>
