/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function listar_produtos_da_tabela_de_produtos_proximos_do_vencimento(){
    
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
                        
                var ean_p = argumentos6;
                var qtd = argumentos5;
                var data = argumentos4;
                var remet = argumentos3;
                var destin = argumentos2;  
                
                //alert( ean_p + " - " + qtd + " - " + data + " - " + remet + " - " + destin );
                penultimo( ean_p, qtd, data, remet, destin );
        }
    }
    
    document.getElementById("esperando").innerHTML = "";
    document.getElementById("esperando").style.display === 'none';
    
}

function penultimo( ean_p, qtd, data, remet, destin ){
    
setTimeout(function(){
    
    try{
        
        //var obj = JSON.parse( document.getElementById("tabela_produtos_por_ean_baixada").value ); 
        //var res = []; 
        
     //alert( ean_p + " - " + qtd + " - " + data + " - " + remet + " - "  + destin );
        
        var achou = false;
        
        var linha = document.getElementById("_dados_baixados_0033").value.split("@");
        //alert( linha );
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
                            
                            adicionando_produto_a_lista_html( ean_p.trim(), des, cat, umb, qtd, data, remet, destin, end_img + ean_p.trim() + ".gif" );
	                }
                        
	                img.onerror = function() {
                            
                            img.src = end_img + ean_p.trim() + ".png";
                            img.onload = function() {
                                
                                adicionando_produto_a_lista_html( ean_p.trim(), des, cat, umb, qtd, data, remet, destin, end_img + ean_p.trim() + ".png" );
                            }
                            img.onerror = function() {
                                
                                img.src = end_img + ean_p.trim() + ".jpg";
                                img.onload = function() {
                                    
                                    adicionando_produto_a_lista_html( ean_p.trim(), des, cat, umb, qtd, data, remet, destin, end_img + ean_p.trim() + ".jpg" );
                                }
                                img.onerror = function() {
                                    
                                    adicionando_produto_a_lista_html( ean_p.trim(), des, cat, umb, qtd, data, remet, destin, end_img + "sem_imagem2" + ".gif" );
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
                            
                            adicionando_produto_a_lista_html( ean_p.trim(), "Produto não Registrado!", "--------------", "----", qtd, data, remet, destin, end_img + ean_p.trim() + ".gif" );
	                }
	                img.onerror = function() {
                            
                            img.src = end_img + ean_p.trim() + ".png";
                            img.onload = function() {
                                
                               adicionando_produto_a_lista_html( ean_p.trim(), "Produto não Registrado!", "--------------", "----", qtd, data, remet, destin, end_img + ean_p.trim() + ".png" );
                            }
                            img.onerror = function() {
                                
                                img.src = end_img + ean_p.trim() + ".jpg";
                                img.onload = function() {
                                    
                                    adicionando_produto_a_lista_html( ean_p.trim(), "Produto não Registrado!", "--------------", "----", qtd, data, remet, destin, end_img + ean_p.trim() + ".jpg" );
                                }
                                img.onerror = function() {
                                    
                                    adicionando_produto_a_lista_html( ean_p.trim(), "Produto não Registrado!", "--------------", "----", qtd, data, remet, destin, end_img + "sem_imagem" + ".gif" );
                                }
                            }
                        }
                    }catch(Exception){}
        }
                                                
    }catch(Exception){}  

}, 0);     
}
