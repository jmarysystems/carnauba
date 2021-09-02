/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function _0007_02_controle_de_estoque_adicionar_eventos_na_tabela_html_principal(){
    
    var tabela = document.getElementById("tabela");
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
                var des = selecionado[0].innerHTML;
                var ean_p = selecionado[2].innerHTML;
                var cat = selecionado[4].innerHTML;
                var umb = selecionado[1].innerHTML;
            
                _0007_03_controle_de_estoque_pesquisar_imagem_do_produto_selecionado_na_tabela_html_principal( des, ean_p, cat, umb, selecionado[0] );
            }
            else{
                
                //ocultar linha
                //$(this).css('display','none'); 
            }
            //////////
            
            
            ////////////////////////////////////////////////////////////////////
            //
            //
      	    //Adicionar ao atual        
    	    //selLinha(this, false); //Selecione apenas um
            //selLinha(this, true); //Selecione quantos quiser
    	});
    }
};

/**
Caso passe true, você pode selecionar multiplas linhas.
Caso passe false, você só pode selecionar uma linha por vez.
**/
function selLinha(linha, multiplos){
    if(!multiplos){
  	var linhas = linha.parentElement.getElementsByTagName("tr");
        for(var i = 0; i < linhas.length; i++){
            var linha_ = linhas[i];
            linha_.classList.remove("selecionado");    
        }
    }
    linha.classList.toggle("selecionado");
    
    //alert(linha.classList);
    
    mostrar_imagem_ao_selecionar_linha();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
EVENTO DE MOSTRAR IMAGEM
**/
function mostrar_imagem_ao_selecionar_linha(){   
    var tabela = document.getElementById("tabela");
    var selecionados = tabela.getElementsByClassName("selecionado");
    //Verificar se eestá selecionado
    if(selecionados.length < 1){
        //alert("Selecione pelo menos uma linha");
        return false;
    }
    else{
        
        for(var i = 0; i < selecionados.length; i++){
            
            var selecionado = selecionados[i];
            //alert( selecionado );
            selecionado = selecionado.getElementsByTagName("td");
            
            var numero_da_linha = $(selecionados[i]).parent().children().index($(selecionados[i]));
            //alert('n_linha: ' + numero_da_linha );
            
            var des = selecionado[3].innerHTML;
            var ean_p = selecionado[5].innerHTML;
            var cat = selecionado[1].innerHTML;
            var umb = selecionado[4].innerHTML;
            
            _0007_03_controle_de_estoque_pesquisar_imagem_do_produto_selecionado_na_tabela_html_principal( des, ean_p, cat, umb, selecionado[3] );
        }
    }
}

function _01_04_tabela_html_configuracoes_adicionando_evento_enviando_dados_selecionados_da_tabela(){
    /**
    Exemplo de como capturar os dados
    **/
    
   
    var btnVisualizar = document.getElementById("visualizarDados");
        
    btnVisualizar.addEventListener("click", function(){
                        
	var selecionados = tabela.getElementsByClassName("selecionado");
        //Verificar se eestá selecionado
        if(selecionados.length < 1){
   	    alert("Selecione pelo menos uma linha");
            return false;
        }
        
        var dados_x = "";
        
        for(var i = 0; i < selecionados.length; i++){
            
      	    var selecionado = selecionados[i];
            selecionado = selecionado.getElementsByTagName("td");
            
            dados_x += "ID: " + selecionado[0].innerHTML + " - CMD: " + selecionado[1].innerHTML + " - Login: " + selecionado[2].innerHTML + "\n";
        }
  
        if( dados_x.trim() !== "" ){
            
            alert( dados_x );
            
            dados_x = "";
        }
    });  
};