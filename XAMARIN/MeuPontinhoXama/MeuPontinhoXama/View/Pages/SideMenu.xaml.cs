using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace MeuPontinhoXama.Pages {
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class SideMenu : ContentPage {
        public SideMenu() {
            InitializeComponent();
        }

        private void BtSideBack_Clicked(object sender, EventArgs e) {
            Navigation.PopModalAsync();
        }
    }
}