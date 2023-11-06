Public class ConnectDropBox{
    
    @AuraEnabled(cacheable=true)
    public static void getUser(){
        http http = new http();
        httprequest request = new httprequest();
        request.setEndpoint('https://www.dropbox.com/oauth2/authorize?client_id=y9foty33yuvawmt&response_type=code');
        request.setMethod('GET');
        httpresponse response = http.Send(request);
        system.Debug('>>>>>>>>>>>>>>>>>>' +response.Getbody());
        
    }
    
    @AuraEnabled(cacheable=true)
    public static string getFiles(){
        string accesstoken='sl.BeikFQiLHN0GxMBgNC0zrtew8O3MzA1ETMSQ63JQJnk9NDMREM_Pbxc141UZo5unDdvma-uKoDHpJ4kv7JGn3Il6UVFD9SbHoxjf8feEFi7WsR6HeWn0JcxVz2SQS9pc6Vfujck1enAF';
        http http = new http();
        httprequest request = new httprequest();
        request.setEndpoint('https://api.dropboxapi.com/2/files/list_folder');
        request.setMethod('POST');
        request.setHeader('authorization', 'bearer'+' '+accesstoken);
        request.setHeader('content-type', 'application/json');
        request.setBody('{\"include_deleted\": false, \"include_has_explicit_shared_members\": false, \"include_media_info\": false, \"include_mounted_folders\": true, \"include_non_downloadable_files\": true, \"path\": "", \"recursive\": false}');
        httpresponse response = http.Send(request);
        system.Debug(response);
        system.Debug('>>>>>>>>>>>>>>>>>>>>>>>>  '+response.Getbody());
        system.Debug('<<<<<<<<<<<<<>>>>>>>>>>>>>>>   '+response.Getbodyasblob());
        return response.Getbody();
    }
    
    @AuraEnabled(cacheable=true)
    public static void uploadFiles(String fileName, String Path, String fileContent){
        string accesstoken='sl.BeikFQiLHN0GxMBgNC0zrtew8O3MzA1ETMSQ63JQJnk9NDMREM_Pbxc141UZo5unDdvma-uKoDHpJ4kv7JGn3Il6UVFD9SbHoxjf8feEFi7WsR6HeWn0JcxVz2SQS9pc6Vfujck1enAF';
        http http = new http();
        httprequest request = new httprequest();
        request.Setendpoint('https://content.dropboxapi.com/2/files/upload');
        request.Setmethod('POST');
        request.setHeader('Authorization', 'Bearer ' + accessToken);
        request.Setheader('content-type', 'application/octet-stream');
        request.Setheader('dropbox-api-arg', '{"path": "'+Path + '/' + fileName + '", "mode": "add", "autorename": true, "mute": false}');
        request.setBodyAsBlob(EncodingUtil.base64Decode(fileContent));
        request.Setheader('authorization', 'bearer'+' '+accesstoken);
        //request.Setbody('-binary @ "'+file_name+'"');
        //httpresponse response = http.Send(request);
        HttpResponse response = new Http().send(request);
        System.debug('File upload response: ' + response.getBody());
        system.Debug(response.Getbody());
    }
    
    @AuraEnabled(cacheable=true)
    public static string createFolderap(string path){
        
        string accesstoken='sl.BeikFQiLHN0GxMBgNC0zrtew8O3MzA1ETMSQ63JQJnk9NDMREM_Pbxc141UZo5unDdvma-uKoDHpJ4kv7JGn3Il6UVFD9SbHoxjf8feEFi7WsR6HeWn0JcxVz2SQS9pc6Vfujck1enAF';
        string folderName = '';
        http http = new http();
        httprequest request = new httprequest();
        request.Setendpoint('https://api.Dropboxapi.Com/2/files/create_folder_v2');
        request.Setmethod('POST');
        request.Setheader('content-type', 'application/json');
        request.Setheader('authorization', 'bearer'+' '+accesstoken);
        request.Setbody('{"autorename": false, "path": "'+path+'"}');
        httpresponse response = http.Send(request);
        system.Debug(response);
        system.Debug('>>>>>>>>>>>>' +response.Getbody());
        return response.Getbody();
        //return folderName;
    }
    
    @AuraEnabled(cacheable=true)
    public static string download_File(string file_id){
        string accesstoken='sl.BeikFQiLHN0GxMBgNC0zrtew8O3MzA1ETMSQ63JQJnk9NDMREM_Pbxc141UZo5unDdvma-uKoDHpJ4kv7JGn3Il6UVFD9SbHoxjf8feEFi7WsR6HeWn0JcxVz2SQS9pc6Vfujck1enAF';
        http http = new http();
        httprequest request = new httprequest();
        request.setEndpoint('https://content.dropboxapi.com/2/files/download');
        request.setMethod('POST');
        request.Setheader('authorization', 'bearer'+' '+accesstoken);
        request.Setheader('dropbox-api-arg', '{"path": "/"+ "'+file_id+'"}');
        httpresponse response = http.Send(request);
        system.Debug(response);
        system.Debug(response.Getbody());
        return response.Getbody();
    }
    /////////////////////
    
 
    // Method to upload a file to Dropbox
   
    public static void uploadFileDrop(String fileName, Blob fileContent) {
        String accessToken='sl.BeikFQiLHN0GxMBgNC0zrtew8O3MzA1ETMSQ63JQJnk9NDMREM_Pbxc141UZo5unDdvma-uKoDHpJ4kv7JGn3Il6UVFD9SbHoxjf8feEFi7WsR6HeWn0JcxVz2SQS9pc6Vfujck1enAF';
        String endpointUrl = 'https://content.dropboxapi.com/2/files/upload';
        String dropboxApiArg = '{"autorename": false, "mode": "add", "mute": false, "path": "' + fileName + '", "strict_conflict": false}';
        
        HttpRequest request = new HttpRequest();
        request.setEndpoint(endpointUrl);
        request.setMethod('POST');
        request.setHeader('Authorization', 'Bearer ' + accessToken);
        request.setHeader('Dropbox-API-Arg', dropboxApiArg);
        request.setHeader('Content-Type', 'application/octet-stream');
        request.setBodyAsBlob(fileContent);
        
        Http http = new Http();
        HttpResponse response = http.send(request);
        
        // Handle the response as per your requirements
    }
}