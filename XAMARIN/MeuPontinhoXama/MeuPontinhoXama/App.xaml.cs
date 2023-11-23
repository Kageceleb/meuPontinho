using Plugin.Permissions.Abstractions;
using Plugin.Permissions;
using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace MeuPontinhoXama {
    public partial class App : Application {
        public App() {
            InitializeComponent();

            MainPage = new NavigationPage(new Pages.Login());
        }

        protected override void OnStart() {
            CheckAndRequestPermissions();
        }

        protected override void OnSleep() {
        }

        protected override void OnResume() {
        }

        private async void CheckAndRequestPermissions() {
            try {
                await CrossPermissions.Current.RequestPermissionAsync<LocationPermission>();

            } catch (Exception e) {

            }
        }

    }
}
