
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function _0007_04_controle_de_estoque_visualizar_produto_selecionado_na_tabela_html_principal( dde, vendadiaria, estoque, venda30dias, status, des, ean, cat, umb, selecionado, end_img ) {
    
setTimeout(function(){
try{
            
}catch(Exception){}     
}, 0);  

    
setTimeout(function(){
try{  
    
    //$('#lista_de_produtos_jmary_systems').append( data );               
            
            var html = "<!-- INÍCIO DOS DADOS DO PRODUTO - id=\"ean\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->                        " +
"                        <li " + "id=produto_" + ean + " style=\"\">" +
"                            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%; padding: 0; margin: 0;\">" +
"                                <tr>" +
"                                    <td align=\"left\">" +
"                                        <ul style=\"list-style:none; padding: 0px; margin: 0px; width:100%;\" >" +
"                                            " +
"<!-- id=\"nome_do_produto_consultado\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->                                             " +
"                                            <li " + "id=nome_" + ean + " style=\"width:100%; background-color: #3A3A3A; color:#fff; font-family:  Arial, Helvetica, sans-serif; font-size: 120%;\">" +
"                                                " + des + 
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
"                                                                    <img " + "id=" + ean + " class=\"prod_ean\"  src=\""+ end_img + "\" alt=" + ean + " onclick=\"aumentar_imagem(" + ean + ");\" width=\"150\" height=\"150\" style=\"cursor: zoom-in\" > " +
"                                                                </li>    " +
"                                                                " +
"                                                                <li style=\"float: left;\"> " +
"                                                                    " +
"                                                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding: 0; margin: 0;\">" +
"                                                                        " +
"                                                                        <tr>" +
"                                                                                        " +
"                                                                            <td style=\"padding-top: 5px; color:#000; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left; \" >" +
"                                                                                DDE:" +
"                                                                            </td> " +
"                                                                            " +
"<!-- id=\"ean_do_produto_consultado\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->                                                                                         " +
"                                                                            <td " + " style=\"margin-top: 5px; background-color: #3A3A3A; color:#fff; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left;\" >" +
"                                                                                            " + dde +
"                                                                            </td>" +
"                                                                        </tr>" +
"                                                                        <tr>" +
"                                                                                        " +
"                                                                            <td style=\"padding-top: 5px; color:#000; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left; \" >" +
"                                                                                Venda Diária:" +
"                                                                            </td> " +
"                                                                            " +
"<!-- id=\"ean_do_produto_consultado\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->                                                                                         " +
"                                                                            <td " + " style=\"margin-top: 5px; background-color: #3A3A3A; color:#fff; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left;\" >" +
"                                                                                            " + vendadiaria +
"                                                                            </td>" +
"                                                                        </tr>" +
"                                                                        <tr>" +
"                                                                                        " +
"                                                                            <td style=\"padding-top: 5px; color:#000; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left; \" >" +
"                                                                                Ean:" +
"                                                                            </td> " +
"                                                                            " +
"<!-- id=\"ean_do_produto_consultado\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->                                                                                         " +
"                                                                            <td " + "id=ean_" + ean + " style=\"margin-top: 5px; background-color: #3A3A3A; color:#fff; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left;\" >" +
"                                                                                            " + ean +
"                                                                            </td>" +
"                                                                        </tr>" +
                    
                                                                         "<tr>" +
"                                                                                        " +
"                                                                            <td style=\"padding-top: 5px; color:#000; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left; \" >" +
"                                                                                Categoria:" +
"                                                                            </td>  " +
"                                                                        </tr>" +
 
"<!-- id=\"categoria_do_produto_consultado\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->  " +
                                                                         "<tr>" +
"                                                                            <td " + "id=categoria_" + ean + " style=\"margin-top: 5px; background-color: #3A3A3A; color:#fff; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left;\" >" +
"                                                                                            " + cat + 
"                                                                            </td>" +
"                                                                        </tr>" +

                                                                         "<tr>" +
"                                                                                        " +
"                                                                            <td style=\"padding-top: 5px; color:#000; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left; \" >" +
"                                                                                UMB:" +
"                                                                            </td>  " +
"                                                                            " +
"<!-- id=\"unidade_do_produto_consultado\" +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->                                                                                         " +
"                                                                            <td " + "id=umb_" + ean + " style=\"margin-top: 5px; background-color: #3A3A3A; color:#fff; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 5px; float: left;\" >" +
"                                                                                            " + "UND/KG"+
"                                                                            </td>" +
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














"                                           <li style=\"  padding: 0; margin: 0;  \">" + 
"                                               <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding: 0; padding-left: 20px; padding-top: 2px; margin: 0;\">" +
                                                    "<tr>" +

"                                                                <td style=\"   \"> " +
"                                                                    " +
"                                                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding: 0; margin: 0;\">" +
                    
                                                                         "<tr>" +
"                                                                                        " +
"                                                                            <td align='center' style=\"padding: 0; margin: 0; background-color: #fff; color:#000; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 0px; float: left; \" >" +
                                                                                 "Estoque <br> (Quantidade):" +
"                                                                            </td>  " +
"                                                                        </tr>" +
 
"<!-- Data de vencimento +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->  " +
                                                                         "<tr>" +
"                                                                            <td align='center' " + " style=\"padding: 0; margin: 0; width:100%; background-color: #3A3A3A; color:#fff; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; \" >" +
"                                                                                            " + estoque + 
"                                                                            </td>" +
"                                                                        </tr>" +
                    
"                                                                        " +
"                                                                    </table> " +
"                                                                    " +
                    
"                                                                </td>" +

"                                                                <td style=\" padding-left: 5px; \"> " +
"                                                                    " +
"                                                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding: 0; margin: 0;\">" +
                    
                                                                         "<tr>" +
"                                                                                        " +
"                                                                            <td align='center' style=\"padding: 0; margin: 0; background-color: #fff; color:#000; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; padding-left: 0px; float: left; \" >" +
                                                                                 "Venda últimos <br> 30 dias:" +
"                                                                            </td>  " +
"                                                                        </tr>" +
 
"<!-- Quantidade +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->  " +
                                                                         "<tr>" +
"                                                                            <td align='center' " + " style=\"padding: 0; margin: 0; width:100%; background-color: #3A3A3A; color:#fff; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; \" >" +
"                                                                                            " + venda30dias + 
"                                                                            </td>" +
"                                                                        </tr>" +
                    
"                                                                        " +
"                                                                    </table> " +
"                                                                    " +
                    
"                                                                </td>" +

                                                        "</tr>" +
                                                        
                                                        
                                                        
                                                        
                                                        
"                                                    <tr>" +
"                                                        <td align='center' colspan=\"2\"  style=\"  \"  >                                                                                                                    " +
"                                                            <ul style=\"list-style:none; padding: 0px; margin: 0px; width:100%;\" >" +
"                                                                " +

"                                                                <li align='center' > " +
"                                                                    " +
"                                                                    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"padding: 0; margin: 0; width:100%; \">" +
                    
                                                                         "<tr>" +
"                                                                                        " +
"                                                                            <td align='center' style=\"padding: 0; margin: 0; background-color: #fff; color:#000; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; \" >" +
                                                                                 "Disponibilidade:" +
"                                                                            </td>  " +
"                                                                        </tr>" +
 
"<!-- Data de vencimento +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->  " +
                                                                         "<tr>" +
"                                                                            <td align='center' " + " style=\"padding: 0; margin: 0; width:100%; background-color: #3A3A3A; color:#fff; font-family:  Arial, Helvetica, sans-serif; font-size: 120%; \" >" +
"                                                                                            " + status + 
"                                                                            </td>" +
"                                                                        </tr>" +
                    
"                                                                        " +
"                                                                    </table> " +
"                                                                    " +
                    
"                                                                </li>" +

"                                                            </ul>" +
"                                                        </td>" +
"                                                    </tr>" +                                                        
                                                        
                                                        
                                                        
"                                                   </table>                 " +
"                                               </li>" +






























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

