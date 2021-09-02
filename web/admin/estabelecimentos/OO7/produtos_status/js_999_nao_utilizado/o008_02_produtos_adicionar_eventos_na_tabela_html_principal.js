function _0008_02_controle_de_estoque_adicionar_eventos_na_tabela_html_principal(){
    
    var tabela = document.getElementById("tabela2");
    var linhas = tabela.getElementsByTagName("tr");
        
    for(var i = 0; i < linhas.length; i++){
    	var linha = linhas[i];
        linha.addEventListener("click", function(){
            
            ////////////////////////////////////////////////////////////////////  
            //////////
            var selecionar_apenas_uma_linha = false;
            if( selecionar_apenas_uma_linha === true ){                
                for(var i = 0; i < linhas.length; i++){
                    var linha_ = linhas[i];
                    //se for para selecionar apenas uma linha 
                    //Quando uma for selecionada todas as outras serão retirada a classe
                    linha_.classList.remove("selecionado");    
                }
            }
            
            if ( $(this).hasClass("selecionado") === false ){
                
                //alert( "linha já selecionada" ); 
                var numero_da_linha = $(this).parent().children().index($(this));
                //adiciona ou remove se tiver a classe selecionado
                this.classList.toggle("selecionado");                
                var selecionado = this.getElementsByTagName("td");          
                //alert( numero_da_linha );           
                var cat = selecionado[0].innerHTML;
                var cod = selecionado[1].innerHTML;                
            
                //alert( cat ); 
                _0008_04_controle_de_estoque_visualizar_produto_selecionado_na_tabela_html_principal( cod, cat, selecionado[0] );
            }
            else{
                
                //ocultar linha
                //$(this).css('display','none'); 
            }
    	});
    }
};