namespace Products.Common.Helpers
{
    using Newtonsoft.Json;

    public static class JsonHelper
    {
        public static T Deserialize<T>(string stringObject)
        {
            return JsonConvert.DeserializeObject<T>(stringObject);
        }

        public static string Serialize(object objectToSerialize)
        {
            return JsonConvert.SerializeObject(objectToSerialize);
        }
    }
}
