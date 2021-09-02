/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function _0007_03_controle_de_estoque_pesquisar_imagem_do_produto_selecionado_na_tabela_html_principal( dde, vendadiaria, estoque, venda30dias, status, des, ean_p, cat, umb, selecionado ){

setTimeout(function(){
    
    try{
             var imagens = "../../../../../Imagens/";
             
                        var img = new Image();
	                img.src = imagens + ean_p.trim() + ".gif";
                        img.onload = function() {
                            
                            _0007_04_controle_de_estoque_visualizar_produto_selecionado_na_tabela_html_principal( dde, vendadiaria, estoque, venda30dias, status, des, ean_p.trim(), cat, umb, selecionado, imagens + ean_p.trim() + ".gif" );
	                }
	                img.onerror = function() {
                            
                            img.src = imagens + ean_p.trim() + ".png";
                            img.onload = function() {
                                
                                _0007_04_controle_de_estoque_visualizar_produto_selecionado_na_tabela_html_principal( dde, vendadiaria, estoque, venda30dias, status, des, ean_p.trim(), cat, umb, selecionado, imagens + ean_p.trim() + ".gif" );
                            }
                            img.onerror = function() {
                                
                                img.src = imagens + ean_p.trim() + ".jpg";
                                img.onload = function() {
                                    
                                    _0007_04_controle_de_estoque_visualizar_produto_selecionado_na_tabela_html_principal( dde, vendadiaria, estoque, venda30dias, status, des, ean_p.trim(), cat, umb, selecionado, imagens + ean_p.trim() + ".gif" );
                                }
                                img.onerror = function() {
                                    
                                    _0007_04_controle_de_estoque_visualizar_produto_selecionado_na_tabela_html_principal( dde, vendadiaria, estoque, venda30dias, status, des, ean_p.trim(), cat, umb, selecionado, imagens + "sem_imagem2" + ".gif" );
                                }
                            }
                        }
                    }catch(Exception){}
    
}, 0);    
    
} 