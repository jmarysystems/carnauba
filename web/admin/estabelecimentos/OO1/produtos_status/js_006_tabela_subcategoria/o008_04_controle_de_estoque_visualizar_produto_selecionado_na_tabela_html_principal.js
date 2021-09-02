/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function _0008_04_controle_de_estoque_visualizar_produto_selecionado_na_tabela_html_principal( cod, cat, selecionado ) {
    
setTimeout(function(){
try{
            
}catch(Exception){}     
}, 0);  

    
setTimeout(function(){
try{  
    
    //$('#lista_de_produtos_jmary_systems').append( data );               
            
            var html = "<!-- INÍCIO DOS DADOS DO PRODUTO - id=\"ean\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->                        " +
"                        <li " + "id=produto_" + cod + " style=\"\">" +
"                            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%; padding: 0; margin: 0;\">" +
"                                <tr>" +
"                                    <td align=\"center\">" +
"                                        <ul style=\"list-style:none; padding: 0px; margin: 0px; width:100%;\" >" +
"                                            " +
"<!-- id=\"nome_do_produto_consultado\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->                                             " +
"                                            <li " + "id=nome_" + cod + " style=\"width:100%; background-color: #3A3A3A; color:#fff; font-family:  Arial, Helvetica, sans-serif; font-size: 120%;\">" +
"                                                " + cat + 
"                                            </li>" +
"                                            " +
"                                            <li style=\"  \">" +
"                                                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding: 0; margin: 0;\">" +
"                                                    <tr>" +
"                                                        <td>                                                                                                                    " +
"                                                            <ul style=\"list-style:none; padding: 0px; margin: 0px; width:100%;\" >" +
"                                                                " +
"                                                                <li style=\"float: left;\">" +
"                                                                    " +
"<!-- id=\"imagem_do_ean\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ .gif-->                                                                      " +
"                                                                    <img " + "id=001_" + cod + " class=\"prod_ean\"  src=\""+ "../../../../arquivos/imagens/003_body/selecionar.png" + "\" alt=" + cat + " onclick=\"_selecionar_categoria('" + cat + "');\" width=\"150\" height=\"80\" style=\" cursor: pointer;  \" > " +
"                                                                </li>    " +
"                                                                " +
"                                                                <li style=\"float: left;\"> " +
"                                                                    " +
"                                                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding: 0; margin: 0;\">" +
"                                                                        " +
                    
                    
                    
                    
                    
                                                                         "<tr>" +
"                                                                                        " +
"                                                                            <td style=\"padding-top: 15px; color:#000; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left; \" >" +
"                                                                                Subcategoria" +
"                                                                            </td>  " +
"                                                                        </tr>" +






                    
"                                                                        " +
"                                                                    </table> " +
"                                                                    " +
                    
"                                                                </li>" +
"                                                            </ul>" +
"                                                        </td>" +
"                                                    </tr>" +
"                                                </table>     " +
"                                            </li>                                            " +
"                                        </ul>                                                                         " +
"                                    </td>" +
"                                </tr>" +
"                            </table> " +
"                        </li> " +
"<!-- FIM DOS DADOS DO PRODUTO - id=\"ean\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ --> ";
    
    selecionado.innerHTML = 
        "<ul style = ' list-style:none; padding: 0px; margin: 0px; width:100%;  ' >" + 
            html +
        "</ul>" 
    ;

}catch(Exception){}     
}, 0);    
    
}