// randomvalues.js


class RandomValues {

    makeEmail() {
        var strValues='abcdefghijklmnopqrstuvwxyz0123456789'
        var strEmail = ''
        var strTmp
        // Generate random id
        for (var i=0;i<10;i++) {
            strTmp = strValues.charAt(Math.round(strValues.length*Math.random()))
            strEmail = strEmail + strTmp
        }
        strTmp = ''
        strEmail = strEmail + '@'
        //Generate random domain
        for (var j=0;j<5;j++) {
            strTmp = strValues.charAt(Math.round(strValues.length*Math.random()))
            strEmail = strEmail + strTmp
        }
        strEmail = strEmail + '.com'
        return strEmail
    }

}

export default new RandomValues();