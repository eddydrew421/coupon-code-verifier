const moment = require("moment");

const dataSet = {
    "promocodeDateRanges": [
        {
        "start": "2018/08/22",
         "end": "2018/08/29",
         "promoCode": "A58TY"
         },
        {
        "start": "2017 /08/22",
         "end": "2017 /08/29",
         "promoCode": "A58TY"
         },
        {
        "start": "2021/08/22",
         "end": "2022/08/29",
         "promoCode": "A58TY"
         }
      ]
}

exports.getPromoCode = function getPromoCode () {
    function isInRange(obj) {
        if(obj.start && obj.end && moment(obj.start, 'MM/DD/YYYY') < moment()
        && (moment(obj.end, 'MM/DD/YYYY') > moment()
        || moment(obj.end, 'MM/DD/YYYY').isSame(moment(), 'day') ) ) {
          return true;
      } else {
          return false;
      }
   }
   //filter will test the promo code date ranges and return the promo code value
     return data.promoCodeDateRanges.filter(isInRange)[0];
 }
