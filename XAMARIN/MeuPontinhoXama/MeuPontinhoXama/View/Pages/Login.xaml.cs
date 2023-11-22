using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace MeuPontinhoXama.Pages {
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Login : ContentPage {
        public Login() {
            InitializeComponent();
            NavigationPage.SetHasNavigationBar(this, false);
        }

        private void BtLogin_Clicked(object sender, EventArgs e) {
            Navigation.PushAsync(new MainPage());
        }

        private void BtForgetPassword_Clicked(object sender, EventArgs e) {

            if (LoginUser.Text == string.Empty) {
                var ForgetPasswordModal = new ForgetPassword();
                Navigation.PushModalAsync(ForgetPasswordModal);

            } else {
                var ForgetPasswordModal = new ForgetPassword(LoginUser.Text);
                Navigation.PushModalAsync(ForgetPasswordModal);
 
            }

        }
    }
}