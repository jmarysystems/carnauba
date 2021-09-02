/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////         
function _0007_01_controle_de_estoque_adicionar_dados_baixados_na_tabela_html_principal(){ 
    
    try{
                                                
        if( document.getElementById("_dados_baixados_001").value === "null" ){
                                                        
            //alert("1");
        }
        else{
                    
            //alert("2");        
            _0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_verificando_se_tem_dados();
        }
            
    }catch(Exception){
        
        document.getElementById("divConteudo").innerHTML = "_0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal -- \n\n" + Exception;
    }
}

function _0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_verificando_se_tem_dados(){
            
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
                                                                
            _0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_listando_dados();
        }
        else{
                    
            //
        }
    }catch(Exception){
        
        document.getElementById("divConteudo").innerHTML = "_0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_verificando_se_tem_dados -- \n\n" + Exception;
    }
}

function _0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_listando_dados(){            
    try{           
        
        ////////////////////////////////////////////////////////////////////////////
        var modificador = document.getElementById("divConteudo").innerHTML;
        setTimeout(function(){ 
        /* 
            document.getElementById("divConteudo").innerHTML = 
                "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> " + "Aguarde!: " + "carregando..." + " </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>" + 
                "<table border='0' cellpadding='0' cellspacing='0' style='width:100%;'> <tr><td style='width:30%;'> </td></tr>  <tr> <td align='center' style='width:40%;'> <img src='../arquivos/imagens/003_login/javafx-loading-100x100.gif' style='cursor: pointer; 'width='80' height='80'> </td> </tr> <tr><td style='width:30%;'> </td></tr> </table>";
        */
        }, 0);
        ///////////////////////////////////////////////////////////////////////////
                
        var linha_recebida = document.getElementById("_dados_baixados_001").value.split("@");            

        var ultimo_valor = 500;
        //var ultimo_valor = 4;
        for( var i = 0; i < ultimo_valor; i++ ) {
        
            if( linha_recebida[i].includes("兽") ){
           
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
                                
                o001_01_tabela_ean_adicionar_produtos(
                    item_00, item_01, item_02, item_03, item_04,
                    item_05, item_06, item_07, item_08, item_09,
                    item_10, item_11, item_12, item_13, item_14
                );
        //*/

            }   
        }
        
    }catch(Exception){
        
        document.getElementById("divConteudo").innerHTML = "_0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_listando_dados -- \n\n" + Exception;
    }   
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////