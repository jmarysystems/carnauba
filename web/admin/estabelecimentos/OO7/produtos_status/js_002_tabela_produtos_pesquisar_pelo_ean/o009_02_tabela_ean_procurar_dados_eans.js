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
                
                item_07 = argumentos[7];
                if( ean_p.trim() === item_07.trim() ){
                
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