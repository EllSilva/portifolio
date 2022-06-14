import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            jms: "todos",
            todos: true,
            webX: false,
            appX: false,
            psdX: false,
            portifolio: true,
            n_site: null
        }
    },

    methods: {

        todas() {
            this.jms = "todos",
            this.todos = true,
            this.webX = false,
            this.appX = false,
            this.psdX = false
        },

        web() {
            this.jms = "web",
              this.todos = false,
                this.webX = true,
                this.appX = false,
                this.psdX = false
        },

        app() {
            this.jms = "app",
            this.todos = false,
                this.webX = false,
                this.appX = true,
                this.psdX = false
        },

        psd() {
            this.jms = "psd",
            this.todos = false,
                this.webX = false,
                this.appX = false,
                this.psdX = true
        },

        verPagina() {
        
        },
      
        
        
    },
  
    template: await get_template('./assets/js/view/portfolio/home')
}