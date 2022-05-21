import get_template from './assets/js/components/get_template.js'

export default {
    data: function () {
        return {
            sobreActive: true,
            trabalhoActive: false
        }
    },
    methods:{
        portifolio(){
         alert("ola")
        },

        sobreMi(){
            this.sobreActive = true
            this.trabalhoActive = false
        },

        trabalhoFeito(){
            this.sobreActive = false
            this.trabalhoActive = true
           
        },
    },

    
    template: await get_template('./index.html')
}