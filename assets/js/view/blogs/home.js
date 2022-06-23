import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            sobreActive: true,
            trabalhoActive: false
        }
    },
    methods:{
        sobreMi(){
            this.sobreActive = true
            this.trabalhoActive = false
        },

        trabalhoFeito(){
            this.sobreActive = false
            this.trabalhoActive = true
           
        },
    },

    mounted() { 

 
    },
    
    template: await get_template('./assets/js/view/blogs/home')
}