//MO物品用建構函數
function MOItem(Name,Lv,MinPb,MaxPb,Exp,Value)
{
    this.Name = Name;
    this.MinLv = Lv ;
    this.MaxLv = ( MaxPb - MinPb ) * 100 + Lv ;
    this.MinPb = MinPb;
    this.MaxPb = MaxPb;
    this.Exp = Exp;
    this.BuyValue = Value;
    this.SellValue = Math.round((Value / 2 )) ;
}
//計算用函數
	// 傳回二個等級間所需經驗
function Exp(Lv) 
{
    var TotalExp = 1;
    for ( var i = 1; i < Lv ; i++)
    {
        TotalExp *= 1.11;
    }
    if ( Lv <= 1 )
        return 0 ;
    else
        return Math.round( ( TotalExp -1 ) * 5000 / 11 ) ;
}
function RanExp(start, final) 
{
    return ( Exp(final) - Exp(start) ) ;
}
	// 傳回某一個成品在特定等級的成功率
function GetPb( OBJECT , Lv ) 
{
    if ( OBJECT.MinPb == OBJECT.MaxPb )
        return OBJECT.MaxPb;
    if ( OBJECT.MaxLv <= Lv )
        return OBJECT.MaxPb;
    if ( OBJECT.MinLv > Lv )
        return 0;
	if ( OBJECT.MinLv <= Lv )
        return ( OBJECT.MinPb + ( Lv - OBJECT.MinLv ) * 0.01 );
}
	//傳回特定等級時的產品成功率
function ArrayPb(PRODUCTARRAY,Lv) 
{
    var EXP = new Array(PRODUCTARRAY.length);
    var LOSSPRO8 = 1 ;
    for (var i = 0 ; i < PRODUCTARRAY.length ; i++ )
    {
        var k = GetPb( PRODUCTARRAY[i], Lv) ;                    
        EXP[i] = k * LOSSPRO8 ; //物品經驗值=本身成功率*成功經驗值*前面物品失敗率
        LOSSPRO8 *= ( 1 - k ) ; //本次物品失敗率=前面物品失敗率 * (1 - 本身成功率)
    }
    return EXP ;
}

	//傳回特定等級時的產品總經驗
function GetProductTotalExp(PRODUCTARRAY,Lv) 
{
    var EXP = 0 ;
    var EXPARRAY = ArrayPb(PRODUCTARRAY,Lv) ;
    for (var i = 0 ; i < EXPARRAY.length ; i++ )
        EXP += EXPARRAY[i] * PRODUCTARRAY[i].Exp ; 
    return EXP ;
}
	//傳回在特定等級區間所需要工作的次數
function WorkingCount(PRODUCTARRAY,STARTEXP,STARTLv,TARGETLv) 
{
    var AMOUNT = 0;
    var EXP = STARTEXP;
    for (var i = STARTLv; i < TARGETLv; i++)
    {
        //計算這個等級需要的製作次數
        var ONEEXP = GetProductTotalExp(PRODUCTARRAY,i) ;
        if ( ONEEXP > 0)
        {
            var k = Math.ceil(EXP / ONEEXP) ;
            AMOUNT += k ;
            EXP -= ( k * ONEEXP ) ;
        }
        else
        {
            AMOUNT += 0 ;
            EXP = 0 ;        
        }
        //重新計算升到下一個等級所需的經驗值
        EXP += RanExp( (i + 1), (i + 2)) ;    
    }
    return AMOUNT ;
}
	//傳回在特定等級區間所製造的成品量
function GetProductAmount(PRODUCTARRAY,STARTEXP,STARTLv,TARGETLv) 
{
    var AMOUNTARRAY = new Array(PRODUCTARRAY.length);
    for (var i1 = 0 ; i1 < PRODUCTARRAY.length ; i1++ )
        AMOUNTARRAY[i1] = 0 ;
    var EXP = STARTEXP ;
    for (var i = STARTLv ; i < TARGETLv; i++)
    {
        //計算這個等級需要的製作次數
        var PRO8ARRAY = ArrayPb(PRODUCTARRAY,i) ;
        var ONEEXP = GetProductTotalExp(PRODUCTARRAY,i) ;
        if  ( ONEEXP > 0 )
        {
            //計算這個等級產品的製造量
            var k = Math.ceil(EXP / ONEEXP) ;
            for (var i2 = 0 ; i2 < PRODUCTARRAY.length ; i2++ )
            {
                AMOUNTARRAY[i2] += ( k * PRO8ARRAY[i2] ) ;
            }
            EXP -= ( k * ONEEXP ) ;
        }
        else
        {
            for (var i2 = 0 ; i2 < PRODUCTARRAY.length ; i2++ )
            {
                AMOUNTARRAY[i2] += 0 ;
            }
            EXP = 0 ;        
        }
        //重新計算升到下一個等級所需的經驗值
        EXP += RanExp( (i + 1), (i + 2)) ;    
    }
    return AMOUNTARRAY ;
}
	//根據用量陣列和工作次數，傳回總用量陣列
function GetMaterialAmount(NEEDARRAY,AMOUNT) 
{
    var AMOUNTARRAY = [] ;
    for (var i = 0 ; i < NEEDARRAY.length ; i++)
    {
        AMOUNTARRAY[i] = NEEDARRAY[i] * AMOUNT ;
    }
    return AMOUNTARRAY;
}
	//根據用量陣列和物品陣列，傳回總價值陣列
function GetBuyValue(MATERIALARRAY,AMOUNTARRAY) 
{
    var TOTALVALUE = 0 ;
    for (var i = 0; i < MATERIALARRAY.length; i++)
    {
		TOTALVALUE += AMOUNTARRAY[i] * MATERIALARRAY[i].BuyValue ;
    }
    return TOTALVALUE ;
}
function GetSellValue(PRODUCTARRAY,AMOUNTARRAY) 
{
    var TOTALVALUE = 0 ;
    for (var i = 0; i < PRODUCTARRAY.length; i++)
    {
		TOTALVALUE += AMOUNTARRAY[i] * PRODUCTARRAY[i].SellValue ;
    }
    return TOTALVALUE ;
}


    //清除內容
	function Clear()
	{
		//定義輸入函數的參數數量
		var k = Clear.arguments.length ;
		for ( var i = 0 ; i < k ; i++ )
		{
			Clear.arguments[i].innerHTML = "" ;
		}
		ReHeightsize() ;
	}
	//製作產品陣列
	function MakeProArray(ProForm)
	{
		var RESULT = new Array((ProForm.childElementCount - 1 )) ;
		for ( var i = 0 ; i < RESULT.length ; i++ )
		{
			var TGN = ProForm.childNodes[(i + 1) ] ;
			var TGName = TGN.childNodes[2].value ;
			var TGLv = Number(TGN.childNodes[5].value) ;
			var TGMin = Number(TGN.childNodes[8].value) ;
			var TGMax = Number(TGN.childNodes[11].value) ;
			var TGExp = Number(TGN.childNodes[14].value) ;
			var TGSell = Number(TGN.childNodes[14].value) ;			
			RESULT[i] = new MOItem(TGName,TGLv,TGMin,TGMax,TGExp,0) ;
			RESULT[i].SellValue = TGSell ;
		}
		return RESULT ;
	}
	//製作原料陣列
	function MakeMatArray(MatForm)
	{
		var RESULT = new Array((MatForm.childElementCount - 1 )) ;
		for ( var i = 0 ; i < RESULT.length ; i++ )
		{
			var TGN = MatForm.childNodes[( i + 1 )] ;
			var TGName = TGN.childNodes[2].value ;
			var TGBuy = Number(TGN.childNodes[8].value) ;
			RESULT[i] = new MOItem(TGName,1,0,0,0,TGBuy) ;
		}
		return RESULT ;
	}		
	//製作需求陣列
	function MakeNeedArray(MatForm)
	{
		var RESULT = new Array((MatForm.childElementCount - 1 )) ;
		for ( var i3 = 0 ; i3 < RESULT.length ; i3++ )
		{
			var TGN = MatForm.childNodes[( i3 + 1 )] ;
			RESULT[i3] = Number(TGN.childNodes[5].value) ;
		}		
		return RESULT ;
	}
//手工藝頁面用
    //產生產品表單
	function ProFormShow(j,k)
	{
		var RESULT = "<h3>第" + k + "步:請依產出順序輸入資料</h3>" ;
		var TP = "" ;
		for ( var i = 0 ; i < j ; i++ )
		{
			TP = "" ;
			TP += "<fieldset id=\"Pro" + ( i + 1 ) + "\">" ;
			TP += "<legend>第" + ( i + 1 ) + "順位產出</legend>" ;
			TP += "產品名稱:<input type=\"text\" name= \"PName\" value=\"Product" + (i + 1 ) + "\" size=\"6\"><br/>" ;
			TP += "生產等級:<input type=\"text\" name= \"PLv\" value=\"1\" size=\"2\"><br/>" ;
			TP += "最小機率:<input type=\"text\" name= \"PMin\" value=\"0\" size=\"2\"><br/>" ;
			TP += "最大機率:<input type=\"text\" name= \"PMax\" value=\"0\" size=\"3\"><br/>" ;
			TP += "獲得經驗:<input type=\"text\" name= \"PExp\" value=\"0\" size=\"3\"><br/>" ;
			TP += "售出價格:<input type=\"text\" name= \"PVal\" value=\"0\" size=\"6\"><br/>" ;
			TP += "</fieldset>" ;
			RESULT += TP ;
		}		
		return RESULT ;
	}
    //產生原料表單
	function MatFormShow(j,k)
	{
		var RESULT = "<h3>第" + k + "步:請依原料輸入資料</h3>" ;
		var TP = "" ;
		for ( var i = 0 ; i < j ; i++ )
			{
				TP = "" ;
				TP += "<fieldset id=\"Pro" + ( i + 1 ) + "\">" ;
				TP += "<legend>第" + ( i + 1 ) + "種原料</legend>" ;
				TP += "原料名稱:<input type=\"text\" name= \"MName\" value=\"Material" + (i + 1 ) + "\" size=\"6\"><br/>" ;
				TP += "原料用量:<input type=\"text\" name= \"MNo\" value=\"1\" size=\"3\"><br/>" ;
				TP += "購入價格:<input type=\"text\" name= \"MVal\" value=\"0\" size=\"6\"><br/>" ;
				TP += "</fieldset>" ;
				RESULT += TP ;
			}		
		return RESULT ;
	}
    //產生計算用表單
	function CraftCalFormShow(k)
	{
		var RESULT = "<h3>第" + k + "步:輸入等級和經驗值後計算</h3>" ;
		RESULT += "玩家現在的等級:<input type=\"text\" name= \"SLv\" value=\"1\" size=\"2\"><br/>" ;
		RESULT += "玩家目標的等級:<input type=\"text\" name= \"TLv\" value=\"2\" size=\"2\"><br/>" ;
		RESULT += "升下一級經驗值:<input type=\"text\" name=\"SExp\" value=\"50\" size=\"6\"><br/>" ;
		RESULT += "<input type=\"button\" id=\"TESTBT\" onclick=\"GaCraftShow()\" value=\"開始計算\">" ;
		RESULT += "<input type=\"button\" onclick=\"Clear(TESTSHOW)\" value=\"清除結果\"><br/>" ;
		return RESULT ;
	}
	//計算結果
	function GaCraftShow()
	{
		var TestForm = document.getElementById("TESTFORM") ;
		var ProForm = document.getElementById("PROFORM") ;
		var MatForm = document.getElementById("MATFORM") ;
		//製作產品陣列
		var PRODUCTARRAY = MakeProArray(ProForm) ;
		//製作原料陣列
		var MATERIALARRAY = MakeMatArray(MatForm) ;
		//製作需求陣列
		var NEEDARRAY = MakeNeedArray(MatForm) ;
		//輸出結果
		var SLv = Number(TestForm.childNodes[2].value) ;
		var TLv = Number(TestForm.childNodes[5].value) ;
		var SExp = Number(TestForm.childNodes[8].value) ;
		var Exp = RanExp( ( SLv + 1 ) , TLv ) + SExp ;
		document.getElementById("TESTSHOW").innerHTML = CraftShow( PRODUCTARRAY , MATERIALARRAY , NEEDARRAY, SLv, TLv, Exp) ;
		ReHeightsize() ;        
	}
	function CraftShow( PRODUCTARRAY , MATERIALARRAY , NEEDARRAY, SLV, TLV, SEXP)
{
	var EXP = RanExp( ( SLV + 1 ) , TLV ) + SEXP ;
	var RESULT = "" ;
	//顯示成品清單
	RESULT += "<p>每次製作的成品順序為:" + ShowProductArray(PRODUCTARRAY) + "</p>" ;
	//顯示原料清單
    RESULT += "<p>每次製作的材料清單為:" + ShowMaterialArray(MATERIALARRAY,NEEDARRAY) + "</p>" ;	
	//顯示總製作次數
	var TotalAmount = WorkingCount(PRODUCTARRAY,EXP,SLV,TLV) ;
    RESULT += "<p>總共需要製作" + addCommas( TotalAmount ) + "次</p>" ;
	//顯示最後成品清單
    var PRODUCTAMOUNT = GetProductAmount(PRODUCTARRAY,EXP,SLV,TLV) ;
    RESULT += "<p>成品產量:" + ShowTotalProduct(PRODUCTARRAY,PRODUCTAMOUNT) + "</p>" ;
	//顯示最後原料清單
	var MATERIALAMOUNT = GetMaterialAmount(NEEDARRAY,TotalAmount) ;
    RESULT += "<p>材料需求:" + ShowTotalMaterial(MATERIALARRAY,MATERIALAMOUNT) + "</p>" ;
    return RESULT ;
}
	//傳回成品清單
function ShowProductArray(PRODUCTARRAY)
{
	var result = "" ;
	for (var i = 0 ; i < PRODUCTARRAY.length ; i++)
    {            
	    result += PRODUCTARRAY[i].Name ;
		if (  i != (PRODUCTARRAY.length - 1) )
		    result += " ," ;
    }
	return result ;
}

	//傳回原料清單
function ShowMaterialArray(MATERIALARRAY,NEEDARRAY)
{
	var result = "" ;
	for (var i = 0 ; i < MATERIALARRAY.length ; i++)
    {
        result += NEEDARRAY[i] + "個" + MATERIALARRAY[i].Name ;
	    if (  i != (MATERIALARRAY.length - 1) )
		    result += " ," ;
    }
	return result ;
}
	//傳回最後成品清單
function ShowTotalProduct(PRODUCTARRAY,AMOUNTARRAY)
{
	var result = "" ;
	var VALUE = 0 ;
	for (var i = 0 ; i < PRODUCTARRAY.length ; i++)
    {
		VALUE = PRODUCTARRAY[i].SellValue * AMOUNTARRAY[i] ;
		result += PRODUCTARRAY[i].Name + "有" + addCommas(AMOUNTARRAY[i]) + "個,價格為" + addCommas(VALUE) + "元; " ;
    }
	result += "總價格為" + addCommas(GetSellValue(PRODUCTARRAY,AMOUNTARRAY)) + "元。" ;
	return result ;
}
	//傳回最後原料清單
function ShowTotalMaterial(MATERIALARRAY,AMOUNTARRAY)
{
	var result = "" ;
    for (var i = 0 ; i < MATERIALARRAY.length ; i++)
    {
		var VALUE = MATERIALARRAY[i].BuyValue * AMOUNTARRAY[i] ;
		result += MATERIALARRAY[i].Name + "需要" + addCommas(AMOUNTARRAY[i]) + "個,價格為" + addCommas(VALUE) + "元; " ;
    }
	result += "總價格為" + addCommas(GetBuyValue(MATERIALARRAY,AMOUNTARRAY)) + "元。" ;
	return result ;
}
//RPGMO常用物品建構

	var STEEL_BAR = new MOItem("Steel bar",40,0.4,1,30,960) ;
	var IRON_ORE = new MOItem("Iron ore",25,0.3,1,20,180) ;
	var COAL = new MOItem("Coal",40,0.3,1,35,500) ;
	var SAND = new MOItem("Sand",1,0.35,1,8,30) ;
	var SMALL_VIAL = new MOItem("Small Vial",1,0.3,0.4,10,50) ;
	var MEDIUM_VIAL = new MOItem("Medium Vial",30,0.3,0.4,15,200) ;
	var LARGE_VIAL = new MOItem("Large Vial",50,0.2,0.3,20,400) ;
	var SUPERIOR_VIAL = new MOItem("Suprior Vial",65,0.2,0.3,30,750) ;
	var FLANNEL_FABRIC = new MOItem("Flannel Fabric",66,1,1,75,3005) ;
	var FIRE_WAVE = new MOItem("Fire Wave",50,0.5,1,60,5850) ;
