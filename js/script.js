
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

      
    }

  },

  methods:{

    createTask(){

      if (this.newTask.length>4) {

        task = {

          text: this.newTask ,
          done: 'false'
  
  
        }
  
        this.todolist.push(task);
  
        this.newTask='';
        this.errorMsg='';
        
      }else{

        this.errorMsg='aggiungi almeno 5 caratteri'


      }

     

    
    },

    deltask(task,index){

      this.errorMsg='';
      

      if (!task.done) {

        this.todolist.splice(index,1)
        
      } else {

        this.errorMsg='devi prima aver barrato l\' azione'

        
      }
      
      

    },

    toggletask(task){

      task.done=!task.done;
      this.errorMsg=''

    }

    


  }


}).mount('#app');