namespace Products.Common.Configuration
{
    using System;
    using System.Configuration;

    public class Configuration
    {
        private static object unityConfiguration = GetConfigurationSection(Constants.Products.UnitySection);

        public static object UnitySection
        {
            get
            {
                if (unityConfiguration == null)
                {
                    throw new Exception("Unity not found");
                }
                return unityConfiguration;
            }
        }

        private static object GetConfigurationSection(string sectionName)
        {
            return ConfigurationManager.GetSection(sectionName);
        }
    }
}
