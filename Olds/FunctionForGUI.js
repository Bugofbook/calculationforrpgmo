// JavaScript Document
    
function ReHeightsize()
{
    //將子頁面高度傳到父頁面框架
	if ( document.body.scrollHeight > 400 )
		parent.document.getElementById("mainframe").height = document.body.scrollHeight ;  
	else
		parent.document.getElementById("mainframe").height = 400 ;
}
function addCommas(val)
{
    val = Number(val) ;
	//根據`.`作為分隔，將val值轉換成一個數組
    var aIntNum = val.toString().split('.');
    // 整數部分
    var iIntPart = aIntNum[0];
    var rgx = /(\d+)(\d{3})/;
    // 如果整數部分位數大於或等於5
    if (iIntPart.length >= 5)
    {
        // 根據正則要求，將整數部分用逗號每三位分隔
        while (rgx.test(iIntPart))
        {
            iIntPart = iIntPart.replace(rgx, '$1' + ',' + '$2');
        }
    }
    return iIntPart;
}
//RPGMO使用
