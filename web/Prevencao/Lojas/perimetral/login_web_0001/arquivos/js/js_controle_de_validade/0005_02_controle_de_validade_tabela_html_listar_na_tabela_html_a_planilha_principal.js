/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////         
function _0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal(){ 
    
    try{
                                                
        if( document.getElementById("tabela_de_produtos_proximos_do_vencimento_xls").value === "null" ){
                                                        
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
        var linha_recebida = document.getElementById("tabela_de_produtos_proximos_do_vencimento_xls").value.split("@");
        
        for( var i = 0; i < linha_recebida.length; i++ ) {
            
            if( linha_recebida[i].includes("-") ){
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
                
        var linha_recebida = document.getElementById("tabela_de_produtos_proximos_do_vencimento_xls").value.split("@");            
 
        for( var i = 0; i < linha_recebida.length; i++ ) {
        
            if( linha_recebida[i].includes("-") ){
                
                //alert(linha_recebida[i]);
                var jm_id = "";
                var jm_comando = "";
                var jm_auto_quantidade_de_alteracoes = "";                        
                var jm_destinatario = "";
                var jm_remetente = "";
                var jm_data = "";
                var jm_qtd = "";
                var jm_ean = "";
                var jm_material = "";
                var jm_umb = "";
                
                var argumentos = linha_recebida[i].split("j");
                
                try{
                    
                    jm_id        = importar_Para_Alfabeto_JM( argumentos[0] ).trim();
                    jm_comando   = importar_Para_Alfabeto_JM( argumentos[1] ).trim();
                    jm_auto_quantidade_de_alteracoes = importar_Para_Alfabeto_JM( argumentos[2] ).trim();
                    jm_destinatario = importar_Para_Alfabeto_JM( argumentos[3] ).trim();
                    jm_remetente = importar_Para_Alfabeto_JM( argumentos[4] ).trim();
                    jm_data      = importar_Para_Alfabeto_JM( argumentos[5] ).trim();
                    jm_qtd       = importar_Para_Alfabeto_JM( argumentos[6] ).trim();
                    jm_ean       = importar_Para_Alfabeto_JM( argumentos[7] ).trim();
                    jm_material  = importar_Para_Alfabeto_JM( argumentos[8] ).trim();
                    jm_umb       = importar_Para_Alfabeto_JM( argumentos[9] ).trim();
                }catch(Exception){}
                
////////////////////////////////////////////////////////////////////////////////
////**************************************************************************** 
//////////////////////////////////////////////////////////////////////////////// 
/*
var linha = tabela_de_dados_dos_produtos.trim().split( '@' );
        for( var j = 0; j < linha.length; j++ ) {

            if( linha[j].includes("&") ){
                
                //alert( linha[j] );      
                var argumentos_tb = linha[j].split("&");
                var ean_p = argumentos_tb[0].trim(); 
                
                if( ean_p.trim() === jm_ean.trim() ){
                    jm_material = argumentos_tb[1].trim();
                    //cat = argumentos_tb[2].trim();
                    jm_umb = argumentos_tb[3].trim();
                    
                    alert( ean_p.trim() + " - " + jm_ean.trim()+ " - if( ean_p.trim() === jm_ean.trim() ){");
                }
                else{
                    
                    console.log( " * " + ean_p.trim() + " - " + jm_ean.trim() ); 
                }
            }
        }
*/
//////////////////////////////////////////////////////////////////////////////// 
////****************************************************************************        
//////////////////////////////////////////////////////////////////////////////// 

                $('#tabela > tbody:last').append(
                    '<tr>' + 
                        '<td>'                   + jm_id           + '</td>' + 
                        //'<td>'                 + jm_comando      + '</td>' + 
                        //'<td>'                 + jm_auto_quantidade_de_alteracoes + '</td>' + 
                        '<td>'                   + jm_destinatario + '</td>' + 
                        '<td>'                   + jm_remetente    + '</td>' + 
                        '<td align=\'center\'>'  + jm_data         + '</td>' + 
                        '<td align=\'center\'>'  + jm_qtd          + '</td>' + 
                        '<td NOWRAP=\'NOWRAP\'>' + jm_ean          + '</td>' + 
                        '<td NOWRAP=\'NOWRAP\'>' + jm_material     + '</td>' + 
                        '<td>'                   + jm_umb          + '</td>' + 
                    '</tr>'
                );

            }   
        }

        //Após adicionar todas as linhas na tabela, adicionar eventos nas linhas ao selecioná-las
        setTimeout(function(){    
            
            //try{ _01_03_percorrer_tabela_html_fazer_alteracoes_e_exclusoes(); }catch(Exception){} 
            
            //try{ _01_04_tabela_html_configuracoes_adicionar_eventos_a_todas_as_linhas(); }catch(Exception){} 
                        
        }, 1000);
        
        
        
        ////////////////////////////////////////////////////////////////////////////
        setTimeout(function(){ 
        //* 
            //document.getElementById("divConteudo").innerHTML = modificador;
        //*/
        }, 1000);
        ///////////////////////////////////////////////////////////////////////////
        
    }catch(Exception){
        
        document.getElementById("divConteudo").innerHTML = "_0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_listando_dados -- \n\n" + Exception;
    }   
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////