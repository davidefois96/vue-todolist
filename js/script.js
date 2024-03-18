
const {createApp} = Vue;

createApp ({

  data(){

    return {

      todolist:[

        {

          text: 'rifornire l\' auto',
          done: 'false'


        },
        {

          text: 'fare la spesa',
          done: 'false'


        },
        {

          text: 'pagare le bollette',
          done: 'false'


        }


      ],

      newTask:'',

      errorMsg:'',

      errorMsgSecond:'',

      
    }

  },

  methods:{

    createTask(){

      task = {

        text: this.newTask ,
        done: 'false'


      }

      this.todolist.push(task);

      this.newTask='';

    
    },

    isDone(task){

      task.done=!task.done


    }


  }


}).mount('#app');