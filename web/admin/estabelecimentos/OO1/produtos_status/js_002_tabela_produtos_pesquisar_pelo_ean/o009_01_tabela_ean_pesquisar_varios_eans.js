/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function o009_01_tabela_ean_pesquisar_varios_eans( parametro_1 ){
    
setTimeout(function(){
try{
                
}catch(Exception){}     
}, 0); 

setTimeout(function(){
    
    try{           
        
        var eans = parametro_1.trim().split( '\n' );
        for( var j = 0; j < eans.length; j++ ) {
            
            //alert( eans[j].trim() );
            o009_02_tabela_ean_procurar_dados_eans( eans[j].trim() );
        } 
    }catch(Exception){ 
        document.getElementById("divConteudo_003").innerHTML = "pesquisar_dados_do_produto -- " + Exception;
    } 
    
}, 0);    
    
} 