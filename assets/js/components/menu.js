import get_template from './get_template.js'

export default {
    data: function () {
        return {

            sobreActive: false,
            portifolioActive: false,
            habilidadeActive: false,
            contactoActive: false,
            blogActive: false,
            type: true,

            mobileView: true,
            showTrue: false,
            ativo: true,

            showEsconder: false,
            showMostrar: true,

             showDia: false,
            showNoite:  true,
        }
    },
    
    methods: {

        
        deNoite() { 
            this.showDia = true
            this.showNoite = false

        },

        deDia() { 
            this.showDia = false
            this.showNoite = true
        },

        mostrarMenu() {
            this.showTrue = false
            this.ativo = false

            this.showEsconder = true
            this.showMostrar = false

        },

        esconderMenu() {
            this.showTrue = true
            this.ativo = true 
            this.showEsconder = false
            this.showMostrar = true
        },
        

        home() {
            this.sobreActive = false,
                this.portifolioActive = false,
                this.habilidadeActive = false,
                this.contactoActive = false,
                this.blogActive = false,
                this.type = true
        },

        homeJms() {
            this.sobreActive = false,
                this.portifolioActive = false,
                this.habilidadeActive = false,
                this.contactoActive = false,
                this.blogActive = false,
                this.type = true
        },

        sobreMi() {
            this.sobreActive = true,
                this.portifolioActive = false,
                this.habilidadeActive = false,
                this.contactoActive = false,
                this.blogActive = false,
                this.type = false
        },

        portifolio() {
            this.sobreActive = false,
                this.portifolioActive = true,
                this.habilidadeActive = false,
                this.contactoActive = false,
                this.blogActive = false,
                this.type = false
        },

        habilidade() {
            this.sobreActive = false,
                this.portifolioActive = false,
                this.habilidadeActive = true,
                this.contactoActive = false,
                this.blogActive = false,
                this.type = false
        },

        contacto() {
            this.sobreActive = false,
                this.portifolioActive = false,
                this.habilidadeActive = false,
                this.contactoActive = true,
                this.blogActive = false
        },

        blog() {
            this.sobreActive = false,
                this.portifolioActive = false,
                this.habilidadeActive = false,
                this.contactoActive = false,
                this.blogActive = true
        },
    },

    mounted() {

    },

    template: await get_template('./assets/js/components/menu')
}