function init() {
    
    new Vue ({

        el: '#app',

        data: {

            logo: 'https://www.boolean.careers/images/misc/logo.png',

            todos: [
                'Elem 1',
                'Elem 32',
                'Elem 58'
            ]

        },

        methods: {

            
        }

    });
}

document.addEventListener("DOMContentLoaded", init);