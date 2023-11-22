using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace MeuPontinhoXama.Pages {
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class ForgetPassword : ContentPage {
        public ForgetPassword() {
            InitializeComponent();
            NavigationPage.SetHasNavigationBar(this, false);
        }

        public ForgetPassword(string user) {
            InitializeComponent();
            ForgetUser.Text = user;
        }

        private void BtForgetSend_Clicked(object sender, EventArgs e) {
            DisplayAlert("Recuperação de Senha", "Solicitação enviada! \nEm breve seu supervisor vai retornar com uma nova senha!", "Ok");
        }

        private void BtForgetBack_Clicked(object sender, EventArgs e) {
            Navigation.PopModalAsync();
        }
    }
}