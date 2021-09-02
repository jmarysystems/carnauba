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

function _0008_05_04_produtos_visualizar_produto_selecionado_na_tabela_html_principal( subcategoria_procurada ){            
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

        console.log( " - " + subcategoria_procurada.replace(" ", "")   );

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
                var item_00 = "";
                var item_01 = "";                        
                var item_02 = "";
                var item_03 = "";
                var item_04 = "";
                var item_05 = "";
                var item_06 = "";
                var item_07 = "";
                var item_08 = "";
                var item_09 = "";
                var item_10 = "";
                var item_11 = "";
                var item_12 = "";
                var item_13 = "";
                var item_14 = "";
                
                var argumentos = linha_recebida[i].split("兽");
                
                try{
                    
                    try{ item_00 = argumentos[0]; }catch(Exception){}
                    try{ item_01 = argumentos[1]; }catch(Exception){}
                    try{                         
                        var item_02_n = parseFloat( argumentos[2] ).toFixed(2);
                        item_02 = item_02_n; 
                    }catch(Exception){}
                    try{                         
                        var item_03_n = parseFloat( argumentos[3] ).toFixed(2);
                        item_03 = item_03_n; 
                    }catch(Exception){}
                    try{                         
                        var item_04_n = parseFloat( argumentos[4] ).toFixed(2);
                        item_04 = item_04_n; 
                    }catch(Exception){ item_04 = "0.00"; }
                    try{ item_05 = argumentos[5]; }catch(Exception){}
                    try{ item_06 = argumentos[6]; }catch(Exception){}
                    try{ item_07 = argumentos[7]; }catch(Exception){}
                    try{ item_08 = argumentos[8]; }catch(Exception){}
                    try{ item_09 = argumentos[9]; }catch(Exception){}
                    try{ item_10 = argumentos[10]; }catch(Exception){}
                    try{ item_11 = argumentos[11]; }catch(Exception){}
                    try{ item_12 = argumentos[12]; }catch(Exception){}
                    
                    try{                         
                        var item_13_n = parseFloat( argumentos[14] ).toFixed(2);
                        item_13 = item_13_n; 
                    }catch(Exception){}
                    try{                         
                        var item_14_n = parseFloat( argumentos[15] ).toFixed(2);
                        item_14 = item_14_n; 
                    }catch(Exception){}
                }catch(Exception){}
                                
                _0008_06_produtos_adicionar(
                    item_00, item_01, item_02, item_03, item_04,
                    item_05, item_06, item_07, item_08, item_09,
                    item_10, item_11, item_12, item_13, item_14,
                    subcategoria_procurada
                );
            }              
            
        }
        
        //o001_03_tabela_ean_ultima_linha();

        //Após adicionar todas as linhas na tabela, adicionar eventos nas linhas ao selecioná-las
        setTimeout(function(){    
            
            document.getElementById("produtos_nome").innerHTML = modificador;
                        
        }, 0);

        
    }catch(Exception){
        
        document.getElementById("divConteudo").innerHTML = "_0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_listando_dados -- \n\n" + Exception;
    }   
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////




