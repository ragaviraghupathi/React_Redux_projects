import {PROMO_CODE} from './types';

export  const handleChange =value=> dispatch =>{
   dispatch({
       type: PROMO_CODE,
       payload : value
   });

};