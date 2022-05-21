import get_template from './get_template.js'

export default {
    data: function () {
        return {

            sobreActive: true,
            portifolioActive: false,
            habilidadeActive: false,
            contactoActive: false,
            blogActive: false,
        }
    },
    methods: {
        sobreMi() {
            this.sobreActive = true,
                this.portifolioActive = false,
                this.habilidadeActive = false,
                this.contactoActive = false,
                this.blogActive = false
        },

        portifolio() {
            this.sobreActive = false,
                this.portifolioActive = true,
                this.habilidadeActive = false,
                this.contactoActive = false,
                this.blogActive = false
        },

        habilidade() {
            this.sobreActive = false,
                this.portifolioActive = false,
                this.habilidadeActive = true,
                this.contactoActive = false,
                this.blogActive = false
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


    template: await get_template('./assets/js/components/menu')
}