
namespace MLY.Model
{
    public class Data
    {
        public int id { get; set; }
        public string username { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
        public string website { get; set; }
        public Address address { get; set; }
        public Company company { get; set; }
    }

    public class Company
    {
        public string name { get; set; }
    }

    public class Address
    {
        public string suite { get; set; }
        public string street { get; set; }
        public string city { get; set; }
        public string zipcode { get; set; }
    }

}
