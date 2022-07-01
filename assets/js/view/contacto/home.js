import get_template from '../../components/get_template.js'

export default {
    data: function () {
        return {
            nome: null,
            email: null,
            assunto: null,
            mensagem: "", 
            todos_mensagem: [], 

            erro_nome: [],
            erro_email: [], 
            erro_assunto: [],
            erro_mensagem: [], 
            erro: [],
        }
    },
    methods:{
       
        async enviar(e) {  
            this.erro_nome = [];
            this.erro_email = [];
            this.erro_assunto = [];
            this.erro_mensagem = []; 
            this.erro = [];

           
            if (!this.email) {
                this.erro_email.push('O email é obrigatório.');
                this.erro.push('erro');
            }

            if (!this.assunto) {
                this.erro_assunto.push('O assunto é obrigatório.');
                this.erro.push('erro');
            }
            if (!this.mensagem) {
                this.erro_mensagem.push('A mensagem é obrigatório.');
                this.erro.push('erro');
            }
 
 
            if (!this.nome) {
                this.erro_nome.push('O nome é obrigatório.');
                this.erro.push('erro');
            }
            
            else if (this.nome.length < 4) {
                this.erro_nome.push('Por favor insira um nome mais longo');
                this.erro.push('erro');
            } 
            else if (this.nome.length > 48) {
                this.erro_nome.push('O maximo de caracteres é 48');
                this.erro.push('erro');
            } else {
               
            }

            if (!this.erro.length) {
                globalThis.nome = this.nome,
                    globalThis.email = this.email,
                    globalThis.assunto = this.assunto,
                    globalThis.mensagem = this.mensagem,
                alert("Menssagem Enviada")
                return true;

            }

            e.preventDefault();

        },
    },

    mounted() { 

 
    },
    
    template: await get_template('./assets/js/view/contacto/home')
}