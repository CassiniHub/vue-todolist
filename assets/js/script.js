function init() {
    
    new Vue ({

        el: '#app',

        data: {

            logo: 'https://www.boolean.careers/images/misc/logo.png',

            todos: [
                'Elem 1',
                'Elem 32',
                'Elem 58'
            ],

            todoNewInput: ''
        },

        methods: {

            todoRemoveClick: function (index) {
                
                this.todos.splice(index, 1);
            },

            todoAddButton: function () {
                
                if (this.todoNewInput.length > 0) {
                    this.todos.push(this.todoNewInput);
                    this.todoNewInput = '';
                }
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", init);