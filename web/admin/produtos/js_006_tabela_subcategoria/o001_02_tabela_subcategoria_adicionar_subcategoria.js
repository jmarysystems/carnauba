/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.  "this.style.backgroundColor='#aff7ff';" +
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////         
function o001_02_tabela_subcategoria_adicionar_subcategoria(
        codigo, categoria
     ){ 
 
    var id_y = categoria.trim().replace(/\s/g, '');
    var id_y2 = id_y.trim().replace( '.', '');
    var id_x = id_y2.trim().replace( '.', '');
    //alert(id_x);
    
    try{
                                
        $('#tabela2 > tbody:last').append(
                
            '<tr' +
            
                ' id = ' + '"' + 'tr_' + id_x + '"' + ';' +    
                
                
                ' onclick="o001_03_tabela_subcategoria_adicionar_subcategoria(' + 'tr_' + id_x + ')' + '"' + ';' + 
                                        
            '>' +   
            
                '<td NOWRAP=' + '"' + 'NOWRAP' + '"' + '>' + categoria + '</td>' +
                '<td' + '>' + codigo + '</td>' + 
                
            '</tr>'
        );
            
    }catch(Exception){
        
        document.getElementById("divConteudo").innerHTML = "_0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal -- \n\n" + Exception;
    }

}


function o001_03_tabela_subcategoria_adicionar_subcategoria( id ){   
    
    try{
        
        if( $(id).hasClass("selecionado") === false ){
            
            //alert(id);
            $(id).toggleClass("selecionado");   
            //alert(id.innerHTML);                         
        
            if( $(id).hasClass("clicado") === false ){
                
                $(id).toggleClass("clicado");
                
                var cat = $(id).closest("tr").children("td").eq(0);
                var cod = $(id).closest("tr").children("td").eq(1); 
                //alert( "codigo: " +  cod[0].innerHTML + " - categoria: " + cat[0].innerHTML );
            
                //alert( cat ); 
                _0008_04_controle_de_estoque_visualizar_produto_selecionado_na_tabela_html_principal( cod[0].innerHTML, cat[0].innerHTML, cat[0] );
            }
        }
        else{
            
            //alert(id);
            $(id).toggleClass("selecionado");   
            //alert(id.innerHTML);
        }
    }catch(Exception){}
}

