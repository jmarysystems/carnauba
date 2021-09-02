/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function adicionar_produto( usuario_logado_nome, ean, quantidade, dataR, valor_und, valor_total ){
         
    try{
        var data_1 = dataR.trim();
        var data_2 = data_1.replace("*", '');
        var data = data_2.replace("+", '');
        
        //alert( data );
                
        if( ean.trim() === "" || ean === null || quantidade.trim() === "" || quantidade.trim() === null ){
                             
            alert("Para adicionar um produto\n01 informe o EAN do produto solicitado\n02 informe a quantidade.\n03 informe a data de vencimento.");
        }
        else if( $.isNumeric( quantidade.trim() ) === false ){
            
            alert("Para adicionar um produto\n01 informe na quantidade\n02 Apenas números.");
        }
        else if( $.isNumeric( valor_und.trim() ) === false ){
            
            alert("Para adicionar um produto\n01 informe no Valor Unidade\n02 Apenas números.");
        }
        else if( $.isNumeric( valor_total.trim() ) === false ){
            
            alert("Para adicionar um produto\n01 informe no Valor Total\n02 Apenas números.");
        }
        else if( data.trim().length !== 10 ){
            
            alert("Data Inválida!\n01 informe uma data válida.\n02 DD/MM/AAAA.");
        }
        else if( data.trim().length === 10 ){
            
            var count = 0;
            for( var i = 0; i < data.trim().length; i++ ) {
            
                var letra_unicode = data[i];  
                
                //alert( "Letra_unicode - " + letra_unicode );     
                if ( letra_unicode === "/" ){
                    count++;
                }  
            }
        
            if ( count === 2 ){
                
                var str_01 = data.split( "/" );
                
                var dia = parseInt( str_01[0] );
                var mes = parseInt( str_01[1] );
                var ano = parseInt( str_01[2] );
            
                if ( ano > 2021 || ano === 2021 ){  
                    
                    //alert( "Ano - " + ano );
                    
                    if ( mes > 0 && mes < 13 ){
                        
                        if ( dia > 0 && dia < 32 ){
                
                            finalizar( usuario_logado_nome, ean, quantidade, data, valor_und, valor_total );
                        }
                        else{
                            
                            alert("Dia Inválido - " + dia + "\nData Inválida!\n01 informe uma data válida.\n02 DD/MM/AAAA.");
                        }
                    }
                    else{
                        
                        alert("Mês Inválido - " + mes + "\nData Inválida!\n01 informe uma data válida.\n02 DD/MM/AAAA.");
                    }
                }
                else{
                    
                    alert("Ano Inválido - " + ano + "\nData Inválida!\n01 informe uma data válida.\n02 DD/MM/AAAA.");
                }
            }            
            else{
                
                alert( "** Mais de 2 / **" + "\n" + "Data Inválida! " + data.trim() + "\n01 Informe uma data válida.\n02 DD/MM/AAAA."); 
            }
            
        }       
        else {
            
            alert("00B - Data Inválida!\n01 informe uma data válida.\n02 DD/MM/AAAA.");
        }
            
    }catch(Exception){
                
        document.getElementById("div_consultar_produto").innerHTML = "abrir_div_mostrar_produto -- " + Exception;
    }   
    
}



function finalizar( usuario_logado_nome, ean, quantidade, data, _valor_und33, _valor_total33 ){
    
    try{
        
        var _valor_und = _valor_und33;
        var _valor_total = _valor_total33;
        
        //setTimeout(function(){ 
                
                    window.location.href = 
                        'controle_de_validade_0002_01_visualizar_produto.html?' + 
                        "usuario_logado" + "=" + usuario_logado_nome.trim() + "&" + 
                        "ean" + "=" + ean.trim() + "&" + 
                        "quantidade" + "=" + quantidade.trim() + "&" + 
                        "data" + "=" + data.trim() + "&" + 
                        "valor_und" + "=" + _valor_und + "&" + 
                        "valor_total" + "=" + _valor_total;
                
                window.open(
                        'controle_de_validade_0002_01_visualizar_produto.html?' + 
                        "usuario_logado" + "=" + usuario_logado_nome.trim() + "&" + 
                        "ean" + "=" + ean.trim() + "&" + 
                        "quantidade" + "=" + quantidade.trim() + "&" + 
                        "data" + "=" + data.trim() + "&" + 
                        "valor_und" + "=" + _valor_und + "&" + 
                        "valor_total" + "=" + _valor_total
                    , '_parent'  
                );
        //}, 0); 
        
    }catch(Exception){}
}