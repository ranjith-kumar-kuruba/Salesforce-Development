public with sharing class IndianPostalCodeApiResponse {
  public class PostalCodeDetailList {
    public List<PostalCodeDetail> postalCodeDetails;
  }

  public class PostalCodeDetail {
    String name;
    String description;
    String branchType;
    String deliveryStatus;
    String circle;
    String district;
    String division;
    String region;
    String block;
    String state;
    String country;
    String pincode;
  }
}
