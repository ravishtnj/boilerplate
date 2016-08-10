angular.module('factory',[])
.factory('datafactory',['$http','$window',function ($http, $window) {
    var timeOut = 60;
    var isAsync = false;
    var getMethod = 'GET';
    var postMethod = 'POST';
    var baseURL = 'Local URL Goes Here';
    var baseQAUrl = 'QA URL GOES Here';
    /* Service URL Names Goes Here */
    var serviceURLs  = {
        mobileLogin : 'cnbMobilelogin.mocapp',
        mobileEntitlements: 'cnbEntitlements.mocapp',
        mobileSMAttestation : 'cnbSMAttestation.mocapp'
     }                   
    var dataFactory = {};
                        
    dataFactory.getSeniorAttesation = function (creds) {      
        console.log("Called for Get Senior Attestation");
        /* Credentials and Parameters will be received from controllers will be passed along with URL */
        var sendUrl = baseURL+serviceURLs.mobileLogin+"?uid="+creds.uid+"&jsonparam="+creds.jsondatas;
        console.log(sendUrl);
        
        /** Uncomment the below access the URL from controller **/
        //return sendUrl;


        };

    return dataFactory;
                        
}]);
