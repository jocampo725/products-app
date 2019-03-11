namespace Products.Common.Unity
{
    using Microsoft.Practices.Unity;
    using Microsoft.Practices.Unity.Configuration;
    using System;
    using Configuration;

    public class ContainerFactory : IDisposable
    {
        private IUnityContainer container;

        public ContainerFactory()
        {
            container = new UnityContainer();
            UnityConfigurationSection section = (UnityConfigurationSection)Configuration.UnitySection;
            section.Configure(container);
        }

        public IUnityContainer GetContainer()
        {
            return container;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (container != null)
                {
                    container.Dispose();
                    container = null;
                }
            }
        }

    }
}
