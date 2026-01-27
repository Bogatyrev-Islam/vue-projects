<script setup>
 

    const {item} = defineProps(['item'])
    

    console.log(item);
    

    const emit = defineEmits(['updateItem' ])
    
    const updateItem = () => {
      console.log(item);
      
        emit('updateItem' , item )
        item.value = ""
    };
    </script>
    
    <template>
      <div class="todo-form">
        <h3>Редактирование</h3>
      </div>
    
   
      <form @submit.prevent="updateItem">

        <input v-model="item.text" type="text" />
        <button type="submit">Изменить</button>
      </form>
    </template>
    
    <style scoped></style>
    