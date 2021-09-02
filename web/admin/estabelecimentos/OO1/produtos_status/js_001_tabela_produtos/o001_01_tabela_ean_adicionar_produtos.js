/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.  "this.style.backgroundColor='#aff7ff';" +
 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////////////////////////////         
function o001_01_tabela_ean_adicionar_produtos(
    item_00, item_01, item_02, item_03, item_04,
    item_05, item_06, item_07, item_08, item_09,
    item_10, item_11, item_12, item_13, item_14
    ){ 
                  
    try{
                                
        $('#tabela > tbody:last').append(
                
            '<tr' +
            
                ' id = ' + '"' + 'tr_' + item_07 + '"' + ';' +    
                
                
                ' onclick="o001_02_tabela_ean_adicionar_produtos(' + 'tr_' + item_07 + ')' + '"' + ';' + 
                                        
            '>' +   
            
                '<td NOWRAP=\'NOWRAP\' > &nbsp;' + item_00 + '</td>' +
                '<td width="20px" align="center" >' + item_01 + '</td>' +
                '<td width="20px" align="center" >' + item_02 + '</td>' +
                '<td width="20px" align="center" width="10px" >' + item_03 + '</td>' +                                               
                '<td width="15px" align="center" >' + item_04 + '</td>' +
                '<td width="30px" >' + item_05 + '</td>' + 
                '<td width="30px" align="center" >' + item_06 + '</td>' +
                '<td width="30px" align="center" >' + item_07 + '</td>' +
                '<td width="30px" align="center" >' + item_08 + '</td>' +
                '<td width="30px" align="center" >' + item_09 + '</td>' +
                
                '<td width="30px" align="center" >' + item_12 + '</td>' +
                '<td width="30px" align="center" >' + item_11 + '</td>' +
                '<td width="30px" align="center" >' + item_10 + '</td>' +
                
                '<td width="30px" align="center" >' + item_13 + '</td>' +
                '<td width="30px" align="center" >' + item_14 + '</td>' +
                                                
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
                
                var dde = $(id).closest("tr").children("td").eq(4);
                var vendadiaria = $(id).closest("tr").children("td").eq(2);
                var estoque = $(id).closest("tr").children("td").eq(1);
                var venda30dias = $(id).closest("tr").children("td").eq(6);
                var status = $(id).closest("tr").children("td").eq(5);
                
                var des = $(id).closest("tr").children("td").eq(0);
                var ean_p = $(id).closest("tr").children("td").eq(7);
                var cat = $(id).closest("tr").children("td").eq(9);
                var umb = $(id).closest("tr").children("td").eq(1);
                //alert( des[0].innerHTML );
                    
                _0007_03_controle_de_estoque_pesquisar_imagem_do_produto_selecionado_na_tabela_html_principal( dde[0].innerHTML, vendadiaria[0].innerHTML, estoque[0].innerHTML, venda30dias[0].innerHTML, status[0].innerHTML, des[0].innerHTML, ean_p[0].innerHTML, cat[0].innerHTML, umb[0].innerHTML, des[0] );
            }
        }
        else{
            
            //alert(id);
            $(id).toggleClass("selecionado");   
            //alert(id.innerHTML);
        }
    }catch(Exception){}
}

