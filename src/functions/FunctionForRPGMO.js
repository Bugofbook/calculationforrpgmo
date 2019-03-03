//計算用函數
// 傳回二個等級間所需經驗
const Exp = (Lv) =>  
{
    let TotalExp = 1;
    for ( let i = 1; i < Lv ; i++)
    {
        TotalExp *= 1.11;
    }
    return ( Lv <= 1 ) ? 0 : Math.round( ( TotalExp -1 ) * 5000 / 11 )
}
export const RanExp = (start, final) => Exp(final) - Exp(start)
// 傳回某一個成品在特定等級的成功率
export const GetPb = ( OBJECT , Lv ) =>
{
    if ( OBJECT.minPr === OBJECT.maxPr )
        return OBJECT.maxPr
    if ( OBJECT.maxLv <= Lv )
        return OBJECT.maxPr
    if ( OBJECT.minLv > Lv )
        return 0
	if ( OBJECT.minLv <= Lv )
        return ( OBJECT.minPr + ( Lv - OBJECT.minLv ) * 0.01 )
}
//傳回特定等級時的產品成功率
export const ArrayPb = (PRODUCTARRAY,Lv) => 
{
    let EXP = new Array(PRODUCTARRAY.length)
    let LOSSPRO8 = 1 
    for (let i = 0 , ith = PRODUCTARRAY.length; i < ith ; i++ )
    {
        var k = GetPb( PRODUCTARRAY[i], Lv)                    
        EXP[i] = k * LOSSPRO8 //物品經驗值=本身成功率*成功經驗值*前面物品失敗率
        LOSSPRO8 *= ( 1 - k ) //本次物品失敗率=前面物品失敗率 * (1 - 本身成功率)
    }
    return EXP ;
}
//傳回特定等級時的產品總經驗
export const GetProductTotalExp = (PRODUCTARRAY,Lv) => 
{
    let EXP = 0 
    let EXPARRAY = ArrayPb(PRODUCTARRAY,Lv) 
    for (var i = 0 , ith = EXPARRAY.length; i < ith ; i++ )
        EXP += EXPARRAY[i] * PRODUCTARRAY[i].exp  
    return EXP
}
//傳回在特定等級區間所需要工作的次數
export const WorkingCount = (PRODUCTARRAY,STARTEXP,STARTLv,TARGETLv) => 
{
    let AMOUNT = 0
    let EXP = STARTEXP
    for (let i = STARTLv; i < TARGETLv; i++)
    {
        //計算這個等級需要的製作次數
        let ONEEXP = GetProductTotalExp(PRODUCTARRAY,i) 
        if ( ONEEXP > 0)
        {
            let k = Math.ceil(EXP / ONEEXP) 
            AMOUNT += k 
            EXP -= ( k * ONEEXP ) 
        }
        else
        {
            AMOUNT += 0 
            EXP = 0 ;        
        }
        //重新計算升到下一個等級所需的經驗值
        EXP += RanExp( (i + 1), (i + 2))
    }
    return AMOUNT
}
//傳回在特定等級區間所製造的成品量
export const GetProductAmount = (PRODUCTARRAY,STARTEXP,STARTLv,TARGETLv) => 
{
    let AMOUNTARRAY = Array(PRODUCTARRAY.length).fill(0)
    let EXP = parseInt(STARTEXP,10) ;
    for (let i = STARTLv ; i < TARGETLv; i++)
    {
        //計算這個等級需要的製作次數
        let PRO8ARRAY = ArrayPb(PRODUCTARRAY,i) ;
        let ONEEXP = GetProductTotalExp(PRODUCTARRAY,i) ;
        if  ( ONEEXP > 0 )
        {
			//計算這個等級產品的製造量
            let k = Math.ceil(EXP / ONEEXP)
            for (let i = 0 , ith = PRODUCTARRAY.length; i < ith ; i++ )
                AMOUNTARRAY[i] += ( k * PRO8ARRAY[i] )
			EXP -= ( k * ONEEXP )
        }
        else
        {
            for (let i = 0 , ith = PRODUCTARRAY.length; i < ith ; i++ )
            {
                AMOUNTARRAY[i] += 0 ;
            }
            EXP = 0 ;        
        }
        //重新計算升到下一個等級所需的經驗值
        EXP += RanExp( (i + 1), (i + 2)) ;    
    }
    return AMOUNTARRAY ;
}
//根據用量陣列和工作次數，傳回總用量陣列
export const GetMaterialAmount = (NEEDARRAY,AMOUNT) => NEEDARRAY.map(item => item * AMOUNT)



