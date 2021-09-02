/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function _0008_06_produtos_adicionar( categoria, subcategoria, codigo, produto, embalagem, ean, cat ) {
    
setTimeout(function(){
try{
            
}catch(Exception){}     
}, 0);  

    
setTimeout(function(){
try{  
    
    var usuario_digitado_str = subcategoria.replace(" ", "").trim().toUpperCase();
    var usuario_da_linha = cat.replace(" ", "").trim().toUpperCase();
                       
    var user_ok = usuario_da_linha.localeCompare(usuario_digitado_str);
                       
    if( user_ok === 0 ){ 
        
        o001_01_tabela_ean_adicionar_produtos(
                    produto, embalagem, ean, codigo, categoria, subcategoria
        );

    }
    else{
        
        //console.log( "NÃO - " + subcategoria + " - " + cat );
    }
}catch(Exception){}     
}, 0);    
    
}