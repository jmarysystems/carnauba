/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////         
function _0008_05_produtos_visualizar_produto_selecionado_na_tabela_html_principal(cat){ 
    
    try{
                                                
        if( document.getElementById("_dados_baixados_001").value === "null" ){
                                                        
            //alert("1");
        }
        else{ //var cat ="";
                                            
           //alert("1 - " + cat);        
            _0008_05_02_produtos_visualizar_produto_selecionado_na_tabela_html_principal(cat);
        }
            
    }catch(Exception){
        
        document.getElementById("divConteudo").innerHTML = "_0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal -- \n\n" + Exception;
    }
}

function _0008_05_02_produtos_visualizar_produto_selecionado_na_tabela_html_principal(cat){
            
    try{
                
        var tem_dados = false;
        var linha_recebida = document.getElementById("_dados_baixados_001").value.split("@");
        
        for( var i = 0; i < linha_recebida.length; i++ ) {
            
            if( linha_recebida[i].includes("兽") ){
                tem_dados = true;
                break;
            }
        }
                
        if( tem_dados === true ){
                     
            //alert("2 - " + cat);   
            _0008_05_04_produtos_visualizar_produto_selecionado_na_tabela_html_principal(cat);
        }
        else{
                    
            //
        }
    }catch(Exception){
        
        document.getElementById("divConteudo").innerHTML = "_0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_verificando_se_tem_dados -- \n\n" + Exception;
    }
}

function _0008_05_04_produtos_visualizar_produto_selecionado_na_tabela_html_principal(cat){            
    try{           
        
        ////////////////////////////////////////////////////////////////////////////
        var modificador = document.getElementById("produtos_nome").innerHTML;
        setTimeout(function(){ 
         
            document.getElementById("produtos_nome").innerHTML = 
                "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Aguarde!: " + "carregando..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='carregando.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
        
        }, 0);
        ///////////////////////////////////////////////////////////////////////////
                
        var linha_recebida = document.getElementById("_dados_baixados_001").value.split("@");            

        console.log( " - " + cat.replace(" ", "")   );

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
                //alert(linha_recebida[i]);
                var categoria = "";
                var subcategoria = "";                        
                var codigo = "";
                var produto = "";
                var embalagem = "";
                var ean = "";
                
                var argumentos = linha_recebida[i].split("兽");
                
                try{
                    
                    //layout da tabela do google
                    categoria = argumentos[0];
                    subcategoria = argumentos[1];
                    codigo = argumentos[2];
                    produto = argumentos[3];
                    embalagem = argumentos[4];
                    ean = argumentos[5];
                                        
                }catch(Exception){}
                     
                _0008_06_produtos_adicionar( categoria, subcategoria, codigo, produto, embalagem, ean, cat);
            }              
            
        }
        
        //o001_03_tabela_ean_ultima_linha();

        //Após adicionar todas as linhas na tabela, adicionar eventos nas linhas ao selecioná-las
        setTimeout(function(){    
            
            //try{ _0007_02_controle_de_estoque_adicionar_eventos_na_tabela_html_principal(); }catch(Exception){} 
            
            document.getElementById("produtos_nome").innerHTML = modificador;
                        
        }, 0);

        
    }catch(Exception){
        
        document.getElementById("divConteudo").innerHTML = "_0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_listando_dados -- \n\n" + Exception;
    }   
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////




