/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function _0008_06_produtos_adicionar( 
    item_00, item_01, item_02, item_03, item_04,
    item_05, item_06, item_07, item_08, item_09,
    item_10, item_11, item_12, item_13, item_14,
    subcategoria_procurada
    ){ 
    /*
setTimeout(function(){
try{
            
}catch(Exception){}     
}, 0);  */

    
setTimeout(function(){
try{  
    
    var usuario_digitado_str = item_09.replace(" ", "").trim().toUpperCase();
    var usuario_da_linha = subcategoria_procurada.replace(" ", "").trim().toUpperCase();
                       
    var user_ok = usuario_da_linha.localeCompare(usuario_digitado_str);
                       
    if( user_ok === 0 ){ 
        
        o001_01_tabela_ean_adicionar_produtos(
            item_00, item_01, item_02, item_03, item_04,
            item_05, item_06, item_07, item_08, item_09,
            item_10, item_11, item_12, item_13, item_14
        );

    }
    else{
        
        //console.log( "NÃO - " + subcategoria + " - " + cat );
    }
}catch(Exception){}     
}, 0);    
    
}