angular.module('factory',[])
.factory('datafactory',['$http','$window',function ($http, $window) {
    var timeOut = 60;
    var isAsync = false;
    var getMethod = 'GET';
    var postMethod = 'POST';
    //var baseURL = 'https://swmapwldev01.nam.nsroot.net:30445/iris_moc_app/';
    var baseURL = 'http://GCOTDVMSW786410.nam.nsroot.net:7001/iris_moc_app/';
    var baseQAUrl = 'https://swmapwldev01.nam.nsroot.net:30445/iris_moc_app/';
    var serviceURLs  = {
        mobileLogin : 'cnbMobilelogin.mocapp',
        mobileEntitlements: 'cnbEntitlements.mocapp',
        mobileSMAttestation : 'cnbSMAttestation.mocapp'
     }                   
    var dataFactory = {};
                        
    dataFactory.getAuthentication = function (creds) {      
        console.log("Called for Authentication");
        var sendUrl = baseURL+serviceURLs.mobileLogin+"?uid="+creds.uid+"&pwd="+creds.pwd;
        console.log(sendUrl);
        var aRequest = $window.plugins.GDHttpRequest.createRequest(getMethod, sendUrl, timeOut, isAsync);
        aRequest.addRequestHeader("Content-Type","text/json");
        console.log (aRequest);
        return aRequest;
    };

    /* Filters */
    dataFactory.getBusinessFilter = function(creds)
    {
        console.log("Get Business filter");
        var sendUrl = baseURL+serviceURLs.mobileBusinessFilter+"?uid="+creds.uid+"&cType="+creds.cType+"&cName="+creds.cName+"&REQ_PARAM="+creds.REQ_PARAM;
        console.log(baseURL+serviceURLs.mobileBusinessFilter);
        var aRequest = $window.plugins.GDHttpRequest.createRequest(postMethod ,sendUrl, timeOut, isAsync);
        aRequest.addRequestHeader("Content-Type","text/json");
        console.log (aRequest);
        return aRequest;
    };
                        
    dataFactory.getRegionFilter = function(creds)
    {
        console.log("Get Region filter");
        var sendUrl = baseURL+serviceURLs.mobileRegionFilter+"?uid="+creds.uid+"&cType="+creds.cType+"&cName="+creds.cName+"&BUSINESS_LINE="+creds.BUSINESS_LINE+"&REQ_PARAM="+creds.REQ_PARAM;
        console.log(baseURL+serviceURLs.mobileRegionFilter);
        var aRequest = $window.plugins.GDHttpRequest.createRequest(postMethod ,sendUrl, timeOut, isAsync);
        aRequest.addRequestHeader("Content-Type","text/json");
        console.log (aRequest);
        return aRequest;
    };
                        
    dataFactory.getDeskFilter = function(creds)
    {
        console.log("Get Desk filter");
        var sendUrl = baseURL+serviceURLs.mobileDeskFilter+"?cType="+creds.cType+"&cName="+creds.cName+"&REGION_ID="+creds.REGION_ID+"&DESK_ID="+creds.DESK_ID+"&USER_ID="+creds.uid;
        console.log(baseURL+serviceURLs.mobileDeskFilter);
        var aRequest = $window.plugins.GDHttpRequest.createRequest(postMethod ,sendUrl, timeOut, isAsync);
        aRequest.addRequestHeader("Content-Type","text/json");
        console.log (aRequest);
        return aRequest;
    };


    dataFactory.getSignoffList = function(creds)
    {
        console.log("Get Signoff List");
        var sendUrl = baseURL+serviceURLs.mobileBulkSignOffList+"?DASH_REQ="+creds.DASH_REQ;
        console.log(baseURL+serviceURLs.mobileBulkSignOffList);
        var aRequest = $window.plugins.GDHttpRequest.createRequest(postMethod ,sendUrl, timeOut, isAsync);
        aRequest.addRequestHeader("Content-Type","text/json");
        console.log (aRequest);
        return aRequest;
    }; 


    dataFactory.getBulkSignoff = function(creds)
    {
        console.log("Get Bulk Signoff");
        var jsonInputParam = escape(creds.DASH_REQ);
        var sendUrl = baseURL+serviceURLs.mobileBulkSignOff+"?DASH_REQ="+creds.DASH_REQ;
        console.log(baseURL+serviceURLs.mobileBulkSignOff);
        var aRequest = $window.plugins.GDHttpRequest.createRequest(postMethod ,sendUrl, timeOut, isAsync);
        aRequest.addRequestHeader("Content-Type","text/json");
        console.log (aRequest);
        return aRequest;
    }; 

    dataFactory.signOffComments = function(creds)
    {
        console.log("Sign off the comments");
        var jsonInputParam = escape('{"intCatDeskId":"'+creds.intCatDeskId+'","signoffComments":"'+creds.signoffComments+'","isAdmin":"'+creds.isAdmin+'","userId":"'+creds.uid+'","regionId":"'+creds.regionId+'"}');
        console.log(unescape(jsonInputParam));
        var sendUrl = baseURL+serviceURLs.mobileSignOffComments+"?SAVE_SIGNOFF_SUMMARY_COMMENTS_REQ="+jsonInputParam;
        console.log(baseURL+serviceURLs.mobileSignOffComments);
        var aRequest = $window.plugins.GDHttpRequest.createRequest(postMethod ,sendUrl, timeOut, isAsync);
        aRequest.addRequestHeader("Content-Type","text/json");
        console.log (aRequest);
        return aRequest;
    }; 

    dataFactory.getTradeDetails = function(creds)
    {
        console.log("Get Trade Details");
        var sendUrl = baseURL+serviceURLs.mobileTradeDetails+"?TRADE_DETAILS_REQ="+creds.TRADE_DETAILS_REQ;
        console.log(baseURL+serviceURLs.mobileTradeDetails);
        var aRequest = $window.plugins.GDHttpRequest.createRequest(postMethod ,sendUrl, timeOut, isAsync);
        aRequest.addRequestHeader("Content-Type","text/json");
        console.log (aRequest);
        return aRequest;
    };

    dataFactory.getManagerAttestationData = function(creds)
    {
        console.log("Get Attestation Details");
        var appendURL = "";
        if(creds.DESK != ""){
            appendURL += "&DESK="+creds.DESK;
            console.log(appendURL);
        }

        if(creds.REGION_ID != ""){
            appendURL += "&REGION_ID="+creds.REGION_ID;
            console.log(appendURL);
        }

        if(creds.PRODUCT != ""){
            appendURL += "&PRODUCT="+creds.PRODUCT;
            console.log(appendURL);   
        }
        var sendUrl = baseURL+serviceURLs.mobileAttestationDetails+"?uid="+creds.uid+"&intAttestation="+creds.intAttestation+appendURL+"&REQ_PARAM="+creds.REQ_PARAM;
        console.log(baseURL+serviceURLs.mobileAttestationDetails);
        var aRequest = $window.plugins.GDHttpRequest.createRequest(postMethod ,sendUrl, timeOut, isAsync);
        aRequest.addRequestHeader("Content-Type","text/json");
        console.log (aRequest);
        return aRequest;
    };

    dataFactory.getManagerAttestationCategoryData = function(creds)
    {
        console.log("Get Attestation Data");
        var sendUrl = baseURL+serviceURLs.mobileAttestationData+"?categoryId="+creds.categoryId;
        console.log(sendUrl);
        var aRequest = $window.plugins.GDHttpRequest.createRequest(postMethod ,sendUrl, timeOut, isAsync);
        aRequest.addRequestHeader("Content-Type","text/json");
        console.log (aRequest);
        return aRequest;
    };

    
    dataFactory.getAttestationQuestionStatus = function(creds)
    {
        console.log("Get Bind Control Questions Data");
        var sendUrl = baseURL+serviceURLs.mobileBindCtrlQuestions+"?BIND_CTRL_QSTNS_REQ="+creds.BIND_CTRL_QSTNS_REQ;
        console.log(baseURL+serviceURLs.mobileBindCtrlQuestions);
        var aRequest = $window.plugins.GDHttpRequest.createRequest(postMethod ,sendUrl, timeOut, isAsync);
        aRequest.addRequestHeader("Content-Type","text/json");
        console.log (aRequest);
        return aRequest;
    };

    dataFactory.submitAttestationQuestions = function(creds)
    {
        console.log("Get Bind Control Questions Data");
        var sendUrl = baseURL+serviceURLs.mobileSubmitAttestationQuestions+"?INSERT_CTRL_QSTNS_REQ="+creds.INSERT_CTRL_QSTNS_REQ;
        console.log(baseURL+serviceURLs.mobileSubmitAttestationQuestions);
        var aRequest = $window.plugins.GDHttpRequest.createRequest(postMethod ,sendUrl, timeOut, isAsync);
        aRequest.addRequestHeader("Content-Type","text/json");
        console.log (aRequest);
        return aRequest;
    };

    
    dataFactory.getAttesationDeskFilter = function(creds)
    {
        console.log("Get Attesation Desk Filter Data");
        var sendUrl = baseURL+serviceURLs.mobileAttesationDeskFilter+"?uid="+creds.uid+"&REQ_PARAM="+creds.REQ_PARAM+"&cType=COMBO&cName=DESK&PRODUCT="+creds.PRODUCT+"&REGION_ID="+creds.REGION_ID;
        console.log(baseURL+serviceURLs.mobileAttesationDeskFilter);
        var aRequest = $window.plugins.GDHttpRequest.createRequest(postMethod ,sendUrl, timeOut, isAsync);
        aRequest.addRequestHeader("Content-Type","text/json");
        console.log (aRequest);
        return aRequest;
    };

    dataFactory.irisAnalytics = function(creds){
        console.log("Analytics Call");

        var sendUrl = baseURL+serviceURLs.mobileIrisAnalyticsCall+"?SOEID="+creds.uid+"&DETAILS="+escape(creds.DETAILS)+"&DESCRIPTION="+escape(creds.PAGE_NAME);
        console.log(sendUrl);
        var aRequest = $window.plugins.GDHttpRequest.createRequest(postMethod ,sendUrl, timeOut, isAsync);
        aRequest.addRequestHeader("Content-Type","text/json");
        console.log (aRequest);

        function analyticsCallSuccess(response){
            console.log("Analytics Success");
        }

        function analyticsCallFail(response){
            console.log(response);
            console.log("Analytics Error");
        }

        aRequest.send(analyticsCallSuccess,analyticsCallFail);
    }
                        
    /* Get Dashboard */
                        
    dataFactory.getDashboard = function(creds)
    { 
        console.log("Dashboard Call");
        var sendUrl = baseURL+serviceURLs.mobileDashBoardCall+"?DASH_REQ="+creds.DASH_REQ;
        console.log(baseURL+serviceURLs.mobileDashBoardCall);
        var aRequest = $window.plugins.GDHttpRequest.createRequest(postMethod ,sendUrl, timeOut, isAsync);
        aRequest.addRequestHeader("Content-Type","text/json");
        console.log (aRequest);
        return aRequest;
    }

    return dataFactory;
                        
}]);
