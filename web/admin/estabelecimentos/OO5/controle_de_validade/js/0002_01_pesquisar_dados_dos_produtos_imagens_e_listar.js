/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function pesquisar_dados_dos_produtos_imagens_e_listar( ean_p, qtd, datadigitada ){
    
setTimeout(function(){
    
    try{
        
        //alert( datadigitada + " - pesquisar_dados_dos_produtos_imagens_e_listar" );      
        
        var achou = false;
        
        var linha = document.getElementById("_dados_baixados_001").value.split("@");
        for( var j = 0; j < linha.length; j++ ) {

            if( linha[j].includes("兽") ){
                
                //alert( linha[j] );      
                var argumentos = linha[j].split("兽");
                var ean = argumentos[5].trim();
                //alert( ean_p.trim() + " - " + ean.trim() );  
                
                if( ean_p.trim() === ean.trim() ){
                    var des = argumentos[3].trim();
                    var cat = argumentos[1].trim();
                    var umb = argumentos[4].trim();
                    
                    //alert( ean_p.trim() + " - " + ean.trim() + " - " + des + " - " + cat + " - " + umb );
                    
                    var end_img = "../../../../../Imagens/";
                    
                    try{
                        var img = new Image();
	                img.src = end_img + ean_p.trim() + ".gif";
                        img.onload = function() {
                            
                            adicionando_produto_ao_html( ean_p.trim(), des, cat, umb, qtd, datadigitada, end_img + ean_p.trim() + ".gif" );
	                }
	                img.onerror = function() {
                            
                            img.src = end_img + ean_p.trim() + ".png";
                            img.onload = function() {
                                
                                adicionando_produto_ao_html( ean_p.trim(), des, cat, umb, qtd, datadigitada, end_img + ean_p.trim() + ".png" );
                            }
                            img.onerror = function() {
                                
                                img.src = end_img + ean_p.trim() + ".jpg";
                                img.onload = function() {
                                    
                                    adicionando_produto_ao_html( ean_p.trim(), des, cat, umb, qtd, datadigitada, end_img + ean_p.trim() + ".jpg" );
                                }
                                img.onerror = function() {
                                    
                                    adicionando_produto_ao_html( ean_p.trim(), des, cat, umb, qtd, datadigitada, end_img + "sem_imagem2" + ".gif" );
                                }
                            }
                        }
                    }catch(Exception){}
                    
                    //adicionar_linha_local( ean_p, des, cat, umb, end_img );
                    achou = true;  
                    break;
                }
            }            
        }
        
        if( achou === false ){
            
            try{
                        var img = new Image();
	                img.src = end_img + ean_p.trim() + ".gif";
                        img.onload = function() {
                            
                            adicionando_produto_ao_html( ean_p.trim(), "Produto não Registrado!", "--------------", "----", qtd, datadigitada, end_img + ean_p.trim() + ".gif" );
	                }
	                img.onerror = function() {
                            
                            img.src = end_img + ean_p.trim() + ".png";
                            img.onload = function() {
                                
                                adicionando_produto_ao_html( ean_p.trim(), "Produto não Registrado!", "--------------", "----", qtd, datadigitada, end_img + ean_p.trim() + ".png" );
                            }
                            img.onerror = function() {
                                
                                img.src = end_img + ean_p.trim() + ".jpg";
                                img.onload = function() {
                                    
                                    adicionando_produto_ao_html( ean_p.trim(), "Produto não Registrado!", "--------------", "----", qtd, datadigitada, end_img + ean_p.trim() + ".jpg" );
                                }
                                img.onerror = function() {
                                    
                                    adicionando_produto_ao_html( ean_p.trim(), "Produto não Registrado!", "--------------", "----", qtd, datadigitada, end_img + "sem_imagem" + ".gif" );
                                }
                            }
                        }
                    }catch(Exception){}
        }
                                                
    }catch(Exception){}  
    
}, 0);    
    
} 