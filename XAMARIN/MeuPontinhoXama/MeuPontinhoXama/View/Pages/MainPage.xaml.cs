using MeuPontinhoXama.Pages;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;

namespace MeuPontinhoXama {

    public partial class MainPage : ContentPage {
        public MainPage() {
            InitializeComponent();
            NavigationPage.SetHasNavigationBar(this, false);
            NavigationPage.SetHasBackButton(this, false);
        }

        private void BtCheckin_Clicked(object sender, EventArgs e) {

        }

        private void BtSelectIn_Clicked(object sender, EventArgs e) {
            BtSelectIn.Scale = 0.9;
            BtSelectIn.BackgroundColor = Color.FromHex("#6A47CC");
            BtSelectIn.TextColor = Color.FromHex("#fff");

            BtSelectOut.Scale = 1;
            BtSelectOut.BackgroundColor = Color.FromHex("#fff");
            BtSelectOut.TextColor = Color.FromHex("#6A47CC");
        }

        private void BtSelectOut_Clicked(object sender, EventArgs e) {
            BtSelectOut.Scale = 0.9;
            BtSelectOut.BackgroundColor = Color.FromHex("#6A47CC");
            BtSelectOut.TextColor = Color.FromHex("#fff");

            BtSelectIn.Scale = 1;
            BtSelectIn.BackgroundColor = Color.FromHex("#fff");
            BtSelectIn.TextColor = Color.FromHex("#6A47CC");
        }


        private void BtCalendar_Clicked(object sender, EventArgs e) {
            var calendarPage = new Calendar();

            Navigation.PushModalAsync(calendarPage);
        }

        private void IbTopMenu_Clicked(object sender, EventArgs e) {
            var sideMenuPage = new SideMenu();

            Navigation.PushModalAsync(sideMenuPage);
        }
    }
}
