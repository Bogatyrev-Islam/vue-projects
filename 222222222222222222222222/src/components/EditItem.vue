<script setup>
    import { ref } from "vue";

    const {item} = defineProps('item')
    

    console.log(item);
    

    const emit = defineEmits(['updateItem' ])
    
    const updateItem = () => {
        emit('updateItem' , item )
        text.value = ""
    };
    </script>
    
    <template>
      <div class="todo-form">
        <h3>Редактирование</h3>
      </div>
    
   
      <form @submit.prevent="updateItem">
        <input v-model="item" type="text" />
        <button type="submit">Изменить</button>
      </form>
    </template>
    
    <style scoped></style>
    