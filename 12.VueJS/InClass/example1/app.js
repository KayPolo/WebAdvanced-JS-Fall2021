const app = Vue.createApp({

    // template: '<h1>Hello {{firstName}}</h1>',

    data(){

        return{
            // firstName: "John",
            // lastName: "Doe"

            title:"Items for Sale",

            products:[]

        }
    },
    mounted(){
       fetch("/data.json")
        .then(res => res.json()) 
        .then(data => this.products = data)

    },

    computed:{
        totalProducts(){
            return this.products.reduce((sum, number)=>{
                return sum + number.quantity
            },0)
        }
    }


})

app.mount('#app')