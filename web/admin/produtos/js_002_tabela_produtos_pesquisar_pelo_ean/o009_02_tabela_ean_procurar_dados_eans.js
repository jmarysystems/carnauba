/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////         
function o009_02_tabela_ean_procurar_dados_eans( ean_p ){            
    try{           
                
        var linha_recebida = document.getElementById("_dados_baixados_001").value.split("@");            

        for( var i = 0; i < linha_recebida.length; i++ ) {
        
            if( linha_recebida[i].includes("兽") ){
     //*           
                //alert(linha_recebida[i]);
                var categoria = "";
                var subcategoria = "";                        
                var codigo = "";
                var produto = "";
                var embalagem = "";
                var ean = "";
                
                var argumentos = linha_recebida[i].split("兽");
                
                ean = argumentos[5];
                if( ean_p.trim() === ean.trim() ){
                
                    try{
                    
                        categoria = argumentos[0];
                        subcategoria = argumentos[1];
                        codigo = argumentos[2];
                        produto = argumentos[3];
                        embalagem = argumentos[4];
                        ean = argumentos[5];

                    }catch(Exception){}
                                
                    o001_01_tabela_ean_adicionar_produtos(
                        produto, embalagem, ean, codigo, categoria, subcategoria
                    );
                }
        //*/

            }   
        }
        
        //o001_03_tabela_ean_ultima_linha();
                     

        //Após adicionar todas as linhas na tabela, adicionar eventos nas linhas ao selecioná-las
        //setTimeout(function(){    
            
            //try{ _0007_02_controle_de_estoque_adicionar_eventos_na_tabela_html_principal(); }catch(Exception){} 
                        
        //}, 1000);

        
    }catch(Exception){
        
        document.getElementById("divConteudo").innerHTML = "_0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_listando_dados -- \n\n" + Exception;
    }   
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////