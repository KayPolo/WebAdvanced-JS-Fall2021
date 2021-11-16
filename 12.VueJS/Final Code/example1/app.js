const app = Vue.createApp({
    // template: '<h1>Hello World</h1>'

    // template: '<h1>Hello {{firstName}}</h1>',

    // We could also call this from the html file
    
    data(){

        return{

            // firstName: "Jim",
            // lastName:"Doe"

            // products:[
            //     {
            //         id:"1",
            //         quantity:1,
            //         name:"Computer"
            //     },
            //     {
            //         id:"2",
            //         quantity:3,
            //         name:"Headphones"
            //     },
            //     {
            //         id:"3",
            //         quantity:0,
            //         name:"Keyboards"
            //     },{
            //         id:"4",
            //         quantity:7,
            //         name:"Mouse"
            //     }
            // ]

            products:[]

            
        }
    },

    mounted(){
        fetch("/data.json")
            .then(res => res.json())
            .then( data => this.products = data)
    },

    computed:{
        totalProducts(){
            return this.products.reduce((sum,product) => {
                
                return sum + product.quantity
            },0)
        }
    }   

 
})

app.mount('#app')

