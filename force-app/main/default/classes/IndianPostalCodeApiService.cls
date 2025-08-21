public with sharing class IndianPostalCodeApiService {
  public static String getPostalDetailsByPin(String pincode) {
    String endPoint = 'https://api.postalpincode.in/pincode/' + pinCode;
    try {
      HttpRequest req = new HttpRequest();
      req.setEndpoint(endPoint);
      req.setTimeout(12000);
      req.setMethod('GET');
      Http http = new Http();
      HttpResponse res = http.send(req);
      if (res.getStatusCode() == 200) {
        String jsonString = res.getBody();
        Map<String, Object> responseMap = (Map<String, Object>) JSON.deserializeUntyped(
          jsonString
        );
        List<Object> postOffices = (List<Object>) responseMap.get('PostOffice');
        system.debug('PostOffice' + postOffices);
        // List<IndianPostalCodeApiResponse> responseData = (List<IndianPostalCodeApiResponse>) Json.deserialize(
        //   postOfficeResponse,
        //   List<IndianPostalCodeApiResponse>.class
        // );

        // return String.join(responseData, ',');
        return null;
      } else {
        throw new AuraHandledException(
          'Failed to reterive postal code' + res.getStatusCode()
        );
      }
    } catch (Exception e) {
      throw new AuraHandledException(e.getMessage());
    }
  }
}
