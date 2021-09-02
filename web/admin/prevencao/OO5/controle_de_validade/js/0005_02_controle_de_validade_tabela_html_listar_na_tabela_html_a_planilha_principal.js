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
        var linha_recebida = document.getElementById("tabela_de_produtos_proximos_do_vencimento_xls").value.split("日");
        
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
                
        var linha_recebida = document.getElementById("tabela_de_produtos_proximos_do_vencimento_xls").value.split("日");            
 
        for( var i = 0; i < linha_recebida.length; i++ ) {
        
            if( linha_recebida[i].includes("兽") ){
                
                //alert(linha_recebida[i]);
                var argumentos1 = "";
                var argumentos2 = "";
                var argumentos3 = "";                        
                var argumentos4 = "";
                var argumentos5 = "";
                var argumentos6 = "";
                var argumentos7 = "";
                var argumentos8 = "";
                var argumentos9 = "";
                var argumentos10 = "";
                var argumentos11 = "";
                
                var argumentos = linha_recebida[i].split("兽");
                
                try{
                    
                    argumentos1        = argumentos[0] .trim();
                    argumentos2   = argumentos[1] .trim();
                    argumentos3 = argumentos[2] .trim();
                    argumentos4 = argumentos[3] .trim();
                    argumentos5 =    argumentos[4] .trim();
                    argumentos6      =    argumentos[5] .trim();
                    argumentos7       =  argumentos[6] .trim();
                    argumentos8       =  argumentos[7] .trim();
                    argumentos9  =  argumentos[8] .trim();
                    argumentos10       =  argumentos[9] .trim();
                    argumentos11       =  argumentos[10] .trim();
                }catch(Exception){}
                
////////////////////////////////////////////////////////////////////////////////
////**************************************************************************** 
//////////////////////////////////////////////////////////////////////////////// 


//////////////////////////////////////////////////////////////////////////////// 
////****************************************************************************        
////////////////////////////////////////////////////////////////////////////////  

                $('#tabela > tbody:last').append(
                    '<tr>' + 
                        '<td>'                   + argumentos1           + '</td>' + 
                        //'<td>'                 + argumentos2      + '</td>' + 
                        //'<td>'                 + argumentos3 + '</td>' + 
                        '<td>'                   + argumentos2 + '</td>' + 
                        '<td>'                   + argumentos3    + '</td>' + 
                        '<td align=\'center\'>'  + argumentos4         + '</td>' + 
                        '<td align=\'center\'>'  + argumentos5          + '</td>' + 
                        '<td NOWRAP=\'NOWRAP\'>' + argumentos6          + '</td>' + 
                        '<td NOWRAP=\'NOWRAP\'>' + argumentos7     + '</td>' + 
                        '<td>'                   + argumentos8          + '</td>' + 
                        '<td>'                   + argumentos9          + '</td>' + 
                    '</tr>'
                );

            }   
        }
        
    }catch(Exception){
        
        document.getElementById("divConteudo").innerHTML = "_0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal_listando_dados -- \n\n" + Exception;
    }   
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////