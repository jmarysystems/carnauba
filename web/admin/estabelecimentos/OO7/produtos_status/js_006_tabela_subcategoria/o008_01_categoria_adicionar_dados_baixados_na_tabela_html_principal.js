/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////         
function _0008_01_categoria_adicionar_dados_baixados_na_tabela_html_principal(){ 
    
    try{
                                                
        if( document.getElementById("_dados_baixados_002").value === "null" ){
                                                        
            //alert("1");
        }
        else{
                    
            //alert("2");        
            _0008_02_categoria_adicionar_dados_baixados_na_tabela_html_principal();
        }
            
    }catch(Exception){
        
        document.getElementById("divConteudo").innerHTML = "_0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal -- \n\n" + Exception;
    }
}

function _0008_02_categoria_adicionar_dados_baixados_na_tabela_html_principal(){
            
    try{
                
        var tem_dados = false;
        var linha_recebida = document.getElementById("_dados_baixados_002").value.split("@");
        
        for( var i = 0; i < linha_recebida.length; i++ ) {
            
            if( linha_recebida[i].includes("兽") ){
                tem_dados = true;
                break;
            }
        }
                
        if( tem_dados === true ){
                                                                
            _0008_03_categoria_adicionar_dados_baixados_na_tabela_html_principal();
        }
        else{
                    
            //
        }
    }catch(Exception){
        
        document.getElementById("divConteudo").innerHTML = "_0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_verificando_se_tem_dados -- \n\n" + Exception;
    }
}

function _0008_03_categoria_adicionar_dados_baixados_na_tabela_html_principal(){            
    try{           
        
        ////////////////////////////////////////////////////////////////////////////
        //var modificador = document.getElementById("divConteudo").innerHTML;
        setTimeout(function(){ 
        /* 
            document.getElementById("divConteudo").innerHTML = 
                "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Aguarde!: " + "carregando..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
        */
        }, 0);
        ///////////////////////////////////////////////////////////////////////////
                
        var linha_recebida = document.getElementById("_dados_baixados_002").value.split("@");            

        var cor_boolean = true;
        var ultimo_valor = linha_recebida.length;
        //var ultimo_valor = 4;
        for( var i = 0; i < ultimo_valor; i++ ) {
        
            if( linha_recebida[i].includes("兽") ){
                
                /*
                var original = document.getElementById("_dados_baixados_002").value;
                if (original === "" || original === null || original === "null"){
                    
                    var argumentos_i = linha_recebida[i].split("兽");
                    document.getElementById("_dados_baixados_002").value = 
                        "[" 
                            + "\"" + argumentos_i[0] + "\"" + "," +
                            + "\"" + argumentos_i[1] + "\"" + "," + "\"" + argumentos_i[2] + "\"" + "," 
                            + "\"" + argumentos_i[3] + "\"" + "," + "\"" + argumentos_i[4] + "\"" + ","
                            + "\"" + argumentos_i[5] + "\"" + 
                        "]" 
                    ;                                      
                }
                else{
                    
                    var argumentos_i = linha_recebida[i].split("兽");
                    document.getElementById("_dados_baixados_002").value += 
                        ",[" 
                            + "\"" + argumentos_i[0] + "\"" + "," +
                            + "\"" + argumentos_i[1] + "\"" + "," + "\"" + argumentos_i[2] + "\"" + "," 
                            + "\"" + argumentos_i[3] + "\"" + "," + "\"" + argumentos_i[4] + "\"" + ","
                            + "\"" + argumentos_i[5] + "\"" + 
                        "]" 
                    ; 
                }
                */
     //*           
                var argumentos = linha_recebida[i].split("兽");
                
                var codigo = "";
                var categoria = "";     
                //alert( "codigo: " + argumentos[0] + " - categoria: " + argumentos[1] );
                                                
                try{
                    
                    categoria = argumentos[1];
                    codigo = argumentos[0];                    

                }catch(Exception){}
                
                o001_02_tabela_subcategoria_adicionar_subcategoria(
                    codigo, categoria
                );
        //*/

            }   
        }
                     

        //Após adicionar todas as linhas na tabela, adicionar eventos nas linhas ao selecioná-las
        //setTimeout(function(){    
            
            //try{ _01_03_percorrer_tabela_html_fazer_alteracoes_e_exclusoes(); }catch(Exception){} 
            
           //try{ _0008_02_controle_de_estoque_adicionar_eventos_na_tabela_html_principal(); }catch(Exception){} 
                        
        //}, 1000);
        
        
        
        ////////////////////////////////////////////////////////////////////////////
        //setTimeout(function(){ 
        //* 
            //document.getElementById("divConteudo").innerHTML = modificador;
        //*/
        //}, 1000);
        ///////////////////////////////////////////////////////////////////////////
        
    }catch(Exception){
        
        document.getElementById("divConteudo").innerHTML = "_0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_listando_dados -- \n\n" + Exception;
    }   
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////