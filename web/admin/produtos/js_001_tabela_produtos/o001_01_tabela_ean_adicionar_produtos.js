/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.  "this.style.backgroundColor='#aff7ff';" +
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////         
function o001_01_tabela_ean_adicionar_produtos(
        produto, embalagem, ean, codigo, categoria, subcategoria
     ){ 
                  
    try{
                                
        $('#tabela > tbody:last').append(
                
            '<tr' +
            
                ' id = ' + '"' + 'tr_' + ean + '"' + ';' +    
                
                
                ' onclick="o001_02_tabela_ean_adicionar_produtos(' + 'tr_' + ean + ')' + '"' + ';' + 
                                        
            '>' +   
            
                '<td NOWRAP=\'NOWRAP\' > &nbsp;' + produto + '</td>' +
                '<td width="20px" align="center" >' + embalagem + '</td>' +
                '<td width="20px">' + ean + '</td>' +
                '<td width="20px" align="center" width="10px" >' + codigo + '</td>' +                                               
                '<td width="15px" >' + categoria + '</td>' +
                '<td width="30px" >' + subcategoria + '</td>' + 
                
            '</tr>'
        );
            
    }catch(Exception){
        
        document.getElementById("divConteudo").innerHTML = "_0005_02_controle_de_validade_tabela_html_listar_na_tabela_html_a_planilha_principal -- \n\n" + Exception;
    }

}


function o001_02_tabela_ean_adicionar_produtos( id ){   
    
    try{
        
        if( $(id).hasClass("selecionado") === false ){
            
            //alert(id);
            $(id).toggleClass("selecionado");   
            //alert(id.innerHTML);                         
        
            if( $(id).hasClass("clicado") === false ){
                
                $(id).toggleClass("clicado");
                
                var des = $(id).closest("tr").children("td").eq(0);
                var ean_p = $(id).closest("tr").children("td").eq(2);
                var cat = $(id).closest("tr").children("td").eq(4);
                var umb = $(id).closest("tr").children("td").eq(1);
                //alert( des[0].innerHTML );
                    
                _0007_03_controle_de_estoque_pesquisar_imagem_do_produto_selecionado_na_tabela_html_principal( des[0].innerHTML, ean_p[0].innerHTML, cat[0].innerHTML, umb[0].innerHTML, des[0] );
            }
        }
        else{
            
            //alert(id);
            $(id).toggleClass("selecionado");   
            //alert(id.innerHTML);
        }
    }catch(Exception){}
}

